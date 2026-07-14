import { mount } from 'svelte';
import Page from './page.svelte';

const app = mount(Page, {
	target: document.getElementById('app')!
});

export default app;
