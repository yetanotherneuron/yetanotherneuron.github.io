import { RANDOM_CHARS } from './constants';

export function scrambleTextAsync(
	target: string,
	apply: (value: string) => void,
	delayMs: number,
	intervalMs: number
) {
	let revealed = 0;
	let steps = 0;

	return new Promise<void>((resolve) => {
		window.setTimeout(() => {
			const timer = window.setInterval(() => {
				steps += 1;
				if (steps % 2 === 0 && revealed < target.length) {
					revealed += 1;
				}

				const value = target
					.split('')
					.map((character, index) => {
						if (character === ' ') return ' ';
						if (index < revealed) return character;
						return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
					})
					.join('');

				apply(value);

				if (revealed >= target.length) {
					window.clearInterval(timer);
					apply(target);
					resolve();
				}
			}, intervalMs);
		}, delayMs);
	});
}

export function unscrambleText(
	source: string,
	apply: (value: string) => void,
	delayMs: number,
	intervalMs: number
) {
	let visible = source.length;
	let steps = 0;

	return new Promise<void>((resolve) => {
		window.setTimeout(() => {
			const timer = window.setInterval(() => {
				steps += 1;
				if (steps % 2 === 0 && visible > 0) {
					visible -= 1;
				}

				const value = source
					.split('')
					.map((character, index) => {
						if (character === ' ') return ' ';
						if (index < visible) return character;
						return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
					})
					.join('');

				apply(value);

				if (visible <= 0) {
					window.clearInterval(timer);
					apply('');
					resolve();
				}
			}, intervalMs);
		}, delayMs);
	});
}

export function scrambleText(
	target: string,
	apply: (value: string) => void,
	delayMs: number,
	intervalMs: number
) {
	let revealed = 0;
	let steps = 0;

	window.setTimeout(() => {
		const timer = window.setInterval(() => {
			steps += 1;
			if (steps % 2 === 0 && revealed < target.length) {
				revealed += 1;
			}

			const value = target
				.split('')
				.map((character, index) => {
					if (character === ' ') return ' ';
					if (index < revealed) return character;
					return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
				})
				.join('');

			apply(value);

			if (revealed >= target.length) {
				window.clearInterval(timer);
				apply(target);
			}
		}, intervalMs);
	}, delayMs);
}
