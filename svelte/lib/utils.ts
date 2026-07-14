export function delay(ms: number) {
	return new Promise<void>((resolve) => {
		window.setTimeout(resolve, ms);
	});
}

export function nextFrame() {
	return new Promise<void>((resolve) => {
		requestAnimationFrame(() => resolve());
	});
}

export function waitForWindowLoad() {
	if (typeof window === 'undefined') return Promise.resolve();
	if (document.readyState === 'complete') return Promise.resolve();

	return new Promise<void>((resolve) => {
		window.addEventListener(
			'load',
			() => {
				resolve();
			},
			{ once: true }
		);
	});
}

export function waitForFonts() {
	if (typeof document === 'undefined') return Promise.resolve();
	if (!('fonts' in document)) return Promise.resolve();

	return document.fonts.ready.then(
		() => undefined,
		() => undefined
	);
}

export async function waitForPageReady() {
	await Promise.all([waitForWindowLoad(), waitForFonts()]);
	await nextFrame();
	await nextFrame();
}
