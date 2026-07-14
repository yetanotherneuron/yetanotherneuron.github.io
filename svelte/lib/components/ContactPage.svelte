<script lang="ts">
	import { onMount } from 'svelte';
	import { scrambleTextAsync } from '../animations';
	import { activeLanguage } from '../state';

	let title = '';
	let description = '';
	let socialLinks = [
		{ name: 'GitHub', url: 'https://github.com/yetanotherneuron', color: '#f5f5f5' },
		{ name: '@yetanotherneuron', url: 'https://discord.com', color: '#5865F2' },
		{ name: 'Email', url: 'mailto:yetanotherneuron@gmail.com', color: '#ff4d4d' },
		{ name: 'Phone', url: 'tel:+989332773056', color: '#4dff4d' }
	];

	onMount(async () => {
		await Promise.all([
			scrambleTextAsync($activeLanguage.contact.title, (val) => (title = val), 100, 8),
			scrambleTextAsync(
				$activeLanguage.contact.description,
				(val) => (description = val),
				300,
				4
			)
		]);
	});
</script>

<div class="contact-container">
	<div class="contact-content">
		<h2 class="contact-title">{title}</h2>
		<p class="contact-description">{description}</p>

		<div class="social-grid">
			{#each socialLinks as link}
				<a
					href={link.url}
					class="social-link"
					target="_blank"
					rel="noopener noreferrer"
					style={`--link-color: ${link.color}`}
				>
					<span class="link-name">{link.name}</span>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.contact-container {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem 1.5rem;
		box-sizing: border-box;
		overflow-y: hidden;
	}

	.contact-content {
		max-width: 55rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.contact-title {
		font-size: 2.5rem;
		letter-spacing: 0.2em;
		color: #ff4d4d;
		margin: 0;
	}

	.contact-description {
		font-size: 1.1rem;
		line-height: 1.6;
		color: #f5f5f5;
		margin: 0;
	}

	.social-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin-top: 1rem;
	}

	.social-link {
		position: relative;
		padding: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		text-decoration: none;
		color: #f5f5f5;
		transition: all 200ms ease;
		overflow: hidden;
	}

	.social-link::before {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--link-color);
		opacity: 0;
		transition: opacity 200ms ease;
		z-index: -1;
	}

	.social-link:hover {
		border-color: var(--link-color);
		transform: translateY(-2px);
		color: #000;
	}

	.social-link:hover::before {
		opacity: 1;
	}

	.link-name {
		font-size: 1.2rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	@media (max-width: 30rem) {
		.social-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
