<script lang="ts">
	import { onMount } from 'svelte';
	import { scrambleTextAsync } from '../animations';
	import { loadedPages, activeLanguage } from '../state';
	import { get } from 'svelte/store';
	import profileImg from '../assets/yetanotherneuron.jpg';

	let visible = false;
	let imageExpanded = false;
	let currentTime = '';

	$: statusMods = $activeLanguage.about.status;
	let currentStatusIndex = 0;

	$: paragraphs = $activeLanguage?.about?.paragraphs || [];

	let scrambledParagraphs: string[] = [];
	let isAlreadyLoaded = false;

	function updateTehranTime() {
		currentTime = new Intl.DateTimeFormat($activeLanguage.lang === 'jp' ? 'ja-JP' : 'en-US', {
			timeStyle: 'medium',
			timeZone: 'Asia/Tehran'
		}).format(new Date());
	}

	onMount(async () => {
		visible = true;
		updateTehranTime();
		
		const timer = setInterval(updateTehranTime, 1000);

		isAlreadyLoaded = get(loadedPages).has('about');

		setTimeout(() => {
			imageExpanded = true;
		}, 300);

		if (isAlreadyLoaded) {
			scrambledParagraphs = [...paragraphs];
		} else {
			await Promise.all(
				paragraphs.map((p, i) =>
					scrambleTextAsync(
						p,
						(val) => {
							scrambledParagraphs[i] = val;
						},
						300 + i * 150,
						4
					)
				)
			);
		}

		return () => clearInterval(timer);
	});
</script>

<div class="about-container">
	<div class="about-layout">
		<div class="profile-section">
			<div class={`profile-box ${imageExpanded ? 'is-expanded' : ''}`}>
				<div class="profile-image-wrapper">
					<img src={profileImg} alt="Yet Another Neuron" />
				</div>
			</div>
			
			<div class={`profile-info ${imageExpanded ? 'is-visible' : ''}`}>
				<h3 class="profile-name">Yet Another Neuron</h3>
				
				<div class="info-grid">
					<div class="info-item">
						<span class="info-label">{$activeLanguage.about.info.pronouns.label}</span>
						<span class="info-value">{$activeLanguage.about.info.pronouns.value}</span>
					</div>
					<div class="info-item">
						<span class="info-label">{$activeLanguage.about.info.location.label}</span>
						<span class="info-value">{$activeLanguage.about.info.location.value}</span>
					</div>
					<div class="info-item">
						<span class="info-label">{$activeLanguage.about.info.localTime.label}</span>
						<span class="info-value">{currentTime}</span>
					</div>
				</div>

				<div class="status-display">
					{#if statusMods && statusMods[currentStatusIndex]}
						<div class={`status-indicator ${statusMods[currentStatusIndex].class}`}>
							{statusMods[currentStatusIndex].label}
						</div>
					{/if}
				</div>
			</div>
		</div>

		<div class="about-text">
			{#each scrambledParagraphs as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	</div>
</div>

<style>
	.about-container {
		width: 100%;
		height: 100%;
		padding: 2rem 1.5rem;
		overflow-y: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}

	.about-layout {
		display: flex;
		gap: 3rem;
		align-items: stretch;
		width: 100%;
		max-width: 72rem;
	}

	.profile-section {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		flex-shrink: 0;
		width: 240px;
	}

	.profile-box {
		width: 0;
		height: 0;
		border: 2px solid #b14dff;
		overflow: hidden;
		transition:
			width 600ms cubic-bezier(0.4, 0, 0.2, 1),
			height 600ms cubic-bezier(0.4, 0, 0.2, 1);
		background: rgba(0, 0, 0, 0.5);
	}

	.profile-box.is-expanded {
		width: 220px;
		height: 220px;
		border-radius: 50%;
	}

	.profile-image-wrapper {
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 400ms ease 400ms;
	}

	.profile-box.is-expanded .profile-image-wrapper {
		opacity: 1;
	}

	.profile-image-wrapper img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.profile-info {
		opacity: 0;
		transform: translateY(10px);
		transition: all 600ms ease 800ms;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.profile-info.is-visible {
		opacity: 1;
		transform: translateY(0);
	}

	.profile-name {
		font-size: 1.45rem;
		color: #b14dff;
		margin: 0;
		letter-spacing: 0.05em;
	}

	.info-grid {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	.info-item {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.info-label {
		font-size: 0.65rem;
		color: #666;
		text-transform: uppercase;
		letter-spacing: 0.12em;
	}

	.info-value {
		font-size: 0.85rem;
		color: #e0e0e0;
	}

	.status-display {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.1);
		padding: 0.6rem;
		text-align: left;
		border-radius: 4px;
		width: fit-content;
	}

	.status-indicator {
		font-size: 0.8rem;
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.status-indicator::before {
		content: '';
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.status-online { color: #4dff4d; }
	.status-online::before { background: #4dff4d; box-shadow: 0 0 8px #4dff4d; }

	.status-away { color: #ffcc4d; }
	.status-away::before { background: #ffcc4d; box-shadow: 0 0 8px #ffcc4d; }

	.status-busy { color: #ff4d4d; }
	.status-busy::before { background: #ff4d4d; box-shadow: 0 0 8px #ff4d4d; }

	.about-text {
		flex: 1;
		min-height: 0;
		font-size: 0.95rem;
		line-height: 1.65;
		color: #f5f5f5;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0;
		max-width: 60rem;
	}

	.about-text p {
		margin: 0;
		text-align: left;
	}

	@media (max-width: 60rem) {
		.about-layout {
			flex-direction: column;
			align-items: center;
			gap: 2rem;
		}
		
		.profile-section {
			width: 100%;
			align-items: center;
			text-align: center;
		}

		.status-display {
			align-self: center;
		}

		.about-text {
			width: 100%;
			justify-content: flex-start;
			gap: 1.5rem;
			text-align: center;
		}
		
		.about-text p {
			text-align: center;
		}
	}
</style>
