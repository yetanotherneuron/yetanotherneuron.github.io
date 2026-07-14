import { derived, get, writable } from 'svelte/store';
import { locale } from './locale';
import type { LanguageKey, OverlayPhase, PageKey, EdgeKey } from './types';
import { delay } from './utils';
import { scrambleTextAsync, unscrambleText } from './animations';

export const selectedLanguage = writable<LanguageKey>(locale.defaultLanguage);
export const phase = writable<OverlayPhase>('selector');
export const activeLanguage = derived(selectedLanguage, ($selectedLanguage) => {
	return locale.languages[$selectedLanguage];
});
export const homeVisible = derived(phase, ($phase) => {
	return $phase === 'reveal' || $phase === 'ready';
});
export const homeReady = writable(false);
export const edgeLabels = writable<Record<EdgeKey, string>>({
	top: '',
	right: '',
	bottom: '',
	left: ''
});
export const terminalLines = writable<string[]>(['', '', '', '']);
export const loadingLabel = writable<string>(locale.languages[locale.defaultLanguage].loadingLabel);
export const toggleLabel = writable('');
export const toggleAccent = derived(selectedLanguage, ($selectedLanguage) => {
	return $selectedLanguage === 'en' ? '#bc002d' : '#3c3b6e';
});
export const isToggleBusy = writable(false);
export const showLanguageSelector = derived(phase, ($phase) => {
	return $phase === 'selector' || $phase === 'selector-hiding';
});
export const showToggleButton = derived(
	[phase, isToggleBusy, toggleLabel],
	([phaseValue, toggleBusy, label]) => {
		return phaseValue === 'ready' && !toggleBusy && label.length > 0;
	}
);
export const isSelectorClosing = derived(phase, ($phase) => {
	return $phase === 'selector-hiding';
});
export const showLoading = derived(phase, ($phase) => {
	return $phase === 'loading' || $phase === 'loading-hiding';
});
export const isLoadingClosing = derived(phase, ($phase) => {
	return $phase === 'loading-hiding';
});
export const showReveal = derived(phase, ($phase) => {
	return $phase === 'reveal';
});
export const isRevealClosing = writable(false);
export const currentPage = writable<PageKey>('home');
export const loadedPages = writable<Set<PageKey>>(new Set(['home']));
export const navigationDirection = writable<EdgeKey | null>(null);
export const homeButtonPosition = writable<EdgeKey | null>(null);
export const selectedProject = writable<Project | null>(null);

let locked = false;

export async function navigateTo(page: PageKey, direction: EdgeKey | null = null) {
	if (locked) return;
	locked = true;

	const current = get(currentPage);
	if (current === page) {
		locked = false;
		return;
	}

	navigationDirection.set(direction);
	await delay(800);
	currentPage.set(page);

	if (page === 'home') {
		homeButtonPosition.set(null);
	} else if (direction) {
		const opposites: Record<EdgeKey, EdgeKey> = {
			top: 'bottom',
			bottom: 'top',
			left: 'right',
			right: 'left'
		};
		homeButtonPosition.set(opposites[direction]);
	}

	if (!get(loadedPages).has(page)) {
		loadedPages.update((s) => {
			s.add(page);
			return s;
		});
	}

	// Clear direction after exit so the panel re-enters from the same edge (swap effect).
	await delay(50);
	navigationDirection.set(null);
	await delay(800);

	locked = false;
}

export async function chooseLanguage(
	language: LanguageKey,
	readyPromise: Promise<void>
) {
	if (locked) return;
	locked = true;
	selectedLanguage.set(language);
	loadingLabel.set(locale.languages[language].loadingLabel);
	toggleLabel.set('');
	phase.set('selector-hiding');
	await delay(260);
	phase.set('loading');
	await Promise.all([readyPromise, delay(1800)]);
	phase.set('loading-hiding');
	await delay(260);
	phase.set('reveal');
	await delay(900);
	homeReady.set(true);
	await startHomeSequence(language);
	phase.set('ready');
	await showToggleLabel(
		get(selectedLanguage) === 'en'
			? locale.languages.jp.nativeLabel
			: locale.languages.en.nativeLabel,
		(value) => {
			toggleLabel.set(value);
		}
	);
	locked = false;
}

export async function toggleLanguage(readyPromise: Promise<void>) {
	if (locked) return;
	locked = true;
	isToggleBusy.set(true);
	toggleLabel.set('');
	const currentLanguage = get(selectedLanguage);
	const nextLanguage: LanguageKey = currentLanguage === 'en' ? 'jp' : 'en';
	
	homeReady.set(false);
	isRevealClosing.set(true);
	await delay(900);
	loadingLabel.set(locale.languages[nextLanguage].changingLanguageLabel);
	isRevealClosing.set(false);
	phase.set('loading');
	await delay(400);
	selectedLanguage.set(nextLanguage);
	await Promise.all([readyPromise, delay(800)]);
	phase.set('loading-hiding');
	await delay(260);
	phase.set('reveal');
	await delay(900);
	homeReady.set(true);
	loadingLabel.set(locale.languages[nextLanguage].loadingLabel);
	await startHomeSequence(nextLanguage);
	phase.set('ready');
	await showToggleLabel(
		nextLanguage === 'en' ? locale.languages.jp.nativeLabel : locale.languages.en.nativeLabel,
		(value) => {
			toggleLabel.set(value);
		}
	);
	isToggleBusy.set(false);
	locked = false;
}

async function startHomeSequence(language: LanguageKey) {
	const target = locale.languages[language].home;
	const edgeKeys: EdgeKey[] = ['top', 'right', 'bottom', 'left'];

	edgeLabels.set({
		top: '',
		right: '',
		bottom: '',
		left: ''
	});
	terminalLines.set(target.terminalLines.map(() => ''));

	await Promise.all([
		...edgeKeys.map((key, index) =>
			scrambleTextAsync(
				target.edgeLabels[key],
				(value) => {
					edgeLabels.update((current) => ({
						...current,
						[key]: value
					}));
				},
				160 + index * 120,
				24
			)
		),
		...target.terminalLines.map((line, index) =>
			scrambleTextAsync(
				line,
				(value) => {
					terminalLines.update((current) => {
						const next = [...current];
						next[index] = value;
						return next;
					});
				},
				720 + index * 180,
				16
			)
		)
	]);
}

function showToggleLabel(text: string, setLabel: (value: string) => void) {
	return scrambleTextAsync(text, setLabel, 0, 16);
}

export function clearHomeSequence() {
	const currentEdges = get(edgeLabels);
	const currentLines = get(terminalLines);
	const edgeKeys: EdgeKey[] = ['top', 'right', 'bottom', 'left'];

	return Promise.all([
		...edgeKeys.map((key, index) =>
			unscrambleText(
				currentEdges[key],
				(value) => {
					edgeLabels.update((current) => ({
						...current,
						[key]: value
					}));
				},
				index * 100,
				24
			)
		),
		...currentLines.map((line, index) =>
			unscrambleText(
				line,
				(value) => {
					terminalLines.update((current) => {
						const next = [...current];
						next[index] = value;
						return next;
					});
				},
				index * 120,
				16
			)
		)
	]).then(() => {
		edgeLabels.set({
			top: '',
			right: '',
			bottom: '',
			left: ''
		});
		terminalLines.set(['', '', '', '']);
	});
}
