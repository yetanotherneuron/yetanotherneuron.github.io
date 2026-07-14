import type { PageKey, LanguageCard } from './types';

export const pageColors: Record<PageKey, string> = {
	home: '#b14dff',
	about: '#b14dff',
	projects: '#4dffff',
	contact: '#ff4d4d',
	skills: '#4dff4d'
};

export const backButtonColor = '#ff8c4d';

export const languageCards: LanguageCard[] = [
	{
		key: 'en',
		accent: '#3c3b6e',
		className: 'language-card--usa'
	},
	{
		key: 'jp',
		accent: '#bc002d',
		className: 'language-card--jp'
	}
];

export const RANDOM_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]{}*+-=_';
