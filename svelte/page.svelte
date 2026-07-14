<script lang="ts">
	import { locale } from './lib/locale';
	import {
		activeLanguage,
		homeVisible,
		homeReady,
		edgeLabels,
		terminalLines,
		loadingLabel,
		toggleLabel,
		toggleAccent,
		showLanguageSelector,
		isSelectorClosing,
		showLoading,
		isLoadingClosing,
		showReveal,
		isRevealClosing,
		showToggleButton,
		currentPage,
		navigationDirection,
		homeButtonPosition,
		chooseLanguage,
		toggleLanguage,
		navigateTo,
		selectedProject
	} from './lib/state';
	import { languageCards } from './lib/constants';
	import { waitForPageReady } from './lib/utils';
	import AboutPage from './lib/components/AboutPage.svelte';
	import ContactPage from './lib/components/ContactPage.svelte';
	import ProjectsPage from './lib/components/ProjectsPage.svelte';
	import SkillsPage from './lib/components/SkillsPage.svelte';
	import './page.css';

	function handleLanguageChoose(language: keyof typeof locale.languages) {
		return chooseLanguage(language, waitForPageReady());
	}

	function handleLanguageToggle() {
		return toggleLanguage(waitForPageReady());
	}

	function handleNavigate(page: any, direction: any) {
		return navigateTo(page, direction);
	}

	let copySuccess = false;
	async function copyUrl(url: string) {
		try {
			await navigator.clipboard.writeText(url);
			copySuccess = true;
			setTimeout(() => (copySuccess = false), 2000);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	}
</script>

<svelte:head>
	<title>{$activeLanguage.site.title}</title>
	<meta name="author" content={locale.site.author} />
	<meta name="language" content={$activeLanguage.lang} />
	<meta name="theme-color" content="#000000" />
</svelte:head>

<div class="page-shell">
	<div
		class={`home-scene ${$homeVisible ? 'is-visible' : ''} page-${$currentPage} dir-${$navigationDirection}`}
	>
		<button
			class={`home-edge home-edge--top ${$homeReady ? 'is-active' : ''} ${$currentPage !== 'home' && $homeButtonPosition !== 'top' ? 'is-hidden' : ''}`}
			onclick={() =>
				$currentPage === 'home'
					? handleNavigate('skills', 'top')
					: handleNavigate('home', 'top')}
			disabled={!$homeReady}
			class:is-home-btn={$currentPage !== 'home'}
		>
			{$currentPage === 'home' ? $edgeLabels.top : $activeLanguage.common.home}
		</button>
		<button
			class={`home-edge home-edge--right ${$homeReady ? 'is-active' : ''} ${$currentPage !== 'home' && $homeButtonPosition !== 'right' ? 'is-hidden' : ''}`}
			onclick={() =>
				$currentPage === 'home'
					? handleNavigate('about', 'right')
					: handleNavigate('home', 'right')}
			disabled={!$homeReady}
			class:is-home-btn={$currentPage !== 'home'}
		>
			{$currentPage === 'home' ? $edgeLabels.right : $activeLanguage.common.home}
		</button>
		<button
			class={`home-edge home-edge--bottom ${$homeReady ? 'is-active' : ''} ${$currentPage !== 'home' && $homeButtonPosition !== 'bottom' ? 'is-hidden' : ''}`}
			onclick={() =>
				$currentPage === 'home'
					? handleNavigate('projects', 'bottom')
					: handleNavigate('home', 'bottom')}
			disabled={!$homeReady}
			class:is-home-btn={$currentPage !== 'home'}
		>
			{$currentPage === 'home' ? $edgeLabels.bottom : $activeLanguage.common.home}
		</button>
		<button
			class={`home-edge home-edge--left ${$homeReady ? 'is-active' : ''} ${$currentPage !== 'home' && $homeButtonPosition !== 'left' ? 'is-hidden' : ''}`}
			onclick={() =>
				$currentPage === 'home'
					? handleNavigate('contact', 'left')
					: handleNavigate('home', 'left')}
			disabled={!$homeReady}
			class:is-home-btn={$currentPage !== 'home'}
		>
			{$currentPage === 'home' ? $edgeLabels.left : $activeLanguage.common.home}
		</button>

		<div class={`home-panel ${$homeReady ? 'is-active' : ''}`}>
			<div class="home-panel__frame">
				<div class="home-panel__content">
					{#if $currentPage === 'home'}
						{#each $terminalLines as line}
							<div class="home-line">{line}</div>
						{/each}
					{:else if $currentPage === 'about'}
						<AboutPage />
					{:else if $currentPage === 'contact'}
						<ContactPage />
					{:else if $currentPage === 'projects'}
						<ProjectsPage />
					{:else if $currentPage === 'skills'}
						<SkillsPage />
					{/if}
				</div>
			</div>
			{#if $showToggleButton && $currentPage === 'home'}
				<button
					class="language-toggle"
					type="button"
					onclick={handleLanguageToggle}
					style={`--toggle-accent: ${$toggleAccent}`}
				>
					{$toggleLabel}
				</button>
			{/if}
		</div>
	</div>

	{#if $selectedProject}
		<div
			class="modal-backdrop"
			onclick={() => selectedProject.set(null)}
			onkeydown={(e) => e.key === 'Escape' && selectedProject.set(null)}
			role="button"
			tabindex="0"
			aria-label={$activeLanguage.projects.closeModalAria}
		>
			<div
				class="modal-window"
				onclick={(e) => e.stopPropagation()}
				onkeydown={(e) => e.stopPropagation()}
				role="dialog"
				aria-modal="true"
				tabindex="-1"
			>
				<div class="modal-header">
					<div class="modal-browser-bar">
						<div class="browser-dots">
							<span class="dot dot--red"></span>
							<span class="dot dot--yellow"></span>
							<span class="dot dot--green"></span>
						</div>
						<div class="browser-address">
							<span class="browser-url">{$selectedProject.url}</span>
							<button
								class="browser-copy-btn"
								onclick={() => copyUrl($selectedProject.url)}
								title="Copy URL"
							>
								{#if copySuccess}
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
										<polyline points="20 6 9 17 4 12" />
									</svg>
								{:else}
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
										<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
									</svg>
								{/if}
							</button>
						</div>
						<a
							href={$selectedProject.url}
							target="_blank"
							rel="noopener noreferrer"
							class="browser-external-link"
							title="Open in new tab"
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								<polyline points="15 3 21 3 21 9" />
								<line x1="10" y1="14" x2="21" y2="3" />
							</svg>
						</a>
					</div>
					<button
						class="cyber-close-btn"
						onclick={() => selectedProject.set(null)}
						aria-label={$activeLanguage.projects.closeAria}
					>
						<span class="cyber-close-btn__icon"></span>
					</button>
				</div>
				<div class="modal-body">
					{#if $selectedProject.url.includes('github.com')}
						<div class="modal-fallback is-active">
							<div class="fallback-content">
								<div class="fallback-icon">
									<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
										<polyline points="15 3 21 3 21 9" />
										<line x1="10" y1="14" x2="21" y2="3" />
									</svg>
								</div>
								<h3 class="fallback-title">GITHUB REPOSITORY</h3>
								<p class="fallback-text">
									GitHub restricts direct embedding. Launch the repository in a new tab to view the source code and documentation.
								</p>
								<a
									href={$selectedProject.url}
									target="_blank"
									rel="noopener noreferrer"
									class="fallback-btn"
								>
									OPEN ON GITHUB
								</a>
							</div>
						</div>
					{:else}
						<div class="modal-fallback">
							<div class="fallback-content">
								<div class="fallback-icon">
									<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
										<polyline points="15 3 21 3 21 9" />
										<line x1="10" y1="14" x2="21" y2="3" />
									</svg>
								</div>
								<h3 class="fallback-title">EXTERNAL LINK DETECTED</h3>
								<p class="fallback-text">
									This project is hosted on a platform that may restrict direct embedding.
								</p>
								<a
									href={$selectedProject.url}
									target="_blank"
									rel="noopener noreferrer"
									class="fallback-btn"
								>
									LAUNCH PROJECT
								</a>
							</div>
						</div>
						<iframe src={$selectedProject.url} title={$selectedProject.title} class="modal-iframe"></iframe>
					{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if $showLanguageSelector}
		<div
			class={`language-selector-backdrop ${$isSelectorClosing ? 'is-hidden' : ''}`}
		>
			<div
				class="language-selector"
				role="dialog"
				aria-modal="true"
				aria-label={locale.languageSelector.topLabel}
			>
				<div class="language-selector__label language-selector__label--top">
					{locale.languageSelector.topLabel}
				</div>

				<div class="language-selector__cards">
					{#each languageCards as card}
						<button
							type="button"
							class={`language-card ${card.className}`}
							aria-label={locale.languages[card.key].chooseLabel}
							style={`--accent-color: ${card.accent};`}
							onclick={() => handleLanguageChoose(card.key)}
						>
							<span class="language-card__accent" aria-hidden="true"></span>
							<span class="language-card__label"
								>{locale.languages[card.key].nativeLabel}</span
							>
						</button>
					{/each}
				</div>

				<div class="language-selector__label language-selector__label--bottom">
					{locale.languageSelector.bottomLabel}
				</div>
			</div>
		</div>
	{/if}

	{#if $showLoading}
		<div class={`loading-backdrop ${$isLoadingClosing ? 'is-hidden' : ''}`}>
			<div class="loading-indicator" aria-live="polite" aria-busy="true">
				<div class="loading-spinner" aria-hidden="true"></div>
				<div class="loading-label">{$loadingLabel}</div>
			</div>
		</div>
	{/if}

	{#if $showReveal}
		<div class="reveal-backdrop" aria-hidden="true">
			<div class={`reveal-panel reveal-panel--left ${$isRevealClosing ? 'is-closing' : ''}`}></div>
			<div class={`reveal-panel reveal-panel--right ${$isRevealClosing ? 'is-closing' : ''}`}></div>
		</div>
	{/if}
</div>
