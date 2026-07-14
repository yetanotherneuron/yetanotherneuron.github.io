import { locale } from './locale';

export type LanguageKey = keyof typeof locale.languages;

export type OverlayPhase =
	| 'selector'
	| 'selector-hiding'
	| 'loading'
	| 'loading-hiding'
	| 'reveal'
	| 'ready';

export type PageKey = 'home' | 'about' | 'projects' | 'contact' | 'skills';

export type EdgeKey = 'top' | 'right' | 'bottom' | 'left';

export interface LanguageCard {
	key: LanguageKey;
	accent: string;
	className: string;
}

export interface Project {
	title: string;
	description: string;
	url: string;
}
