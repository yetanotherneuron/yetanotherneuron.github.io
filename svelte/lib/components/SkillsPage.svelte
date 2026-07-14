<script lang="ts">
	import { onMount } from 'svelte';
	import { scrambleTextAsync } from '../animations';
	import { activeLanguage } from '../state';

	interface Skill {
		name: string;
		level: number;
		color: string;
	}

	const skills: Skill[] = [
		{ name: 'C/C++', level: 87, color: '#00599C' },
		{ name: 'Unity', level: 82, color: '#222222' },
		{ name: 'Lua', level: 77, color: '#000080' },
		{ name: 'Java', level: 72, color: '#ED8B00' },
		{ name: 'Rust', level: 65, color: '#CE412B' },
		{ name: 'SQL', level: 62, color: '#336791' },
		{ name: 'Python', level: 58, color: '#3776AB' },
		{ name: 'Blender', level: 52, color: '#E87D00' }
	];

	let title = '';
	let animatedLevels = skills.map(() => 0);

	onMount(async () => {
		await scrambleTextAsync($activeLanguage.skills.title, (val) => (title = val), 200, 20);

		setTimeout(() => {
			skills.forEach((skill, i) => {
				setTimeout(() => {
					animatedLevels[i] = skill.level;
				}, i * 100);
			});
		}, 600);
	});
</script>

<div class="skills-container">
	<h2 class="skills-title">{title}</h2>

	<div class="skills-grid">
		{#each skills as skill, i}
			<div class="skill-item">
				<div class="skill-info">
					<span class="skill-name">{skill.name}</span>
					<span class="skill-percentage">{animatedLevels[i]}%</span>
				</div>
				<div class="skill-bar-bg">
					<div
						class="skill-bar-fill"
						style={`width: ${animatedLevels[i]}%; background: ${skill.color}; box-shadow: 0 0 10px ${skill.color}88;`}
					></div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.skills-container {
		width: 100%;
		height: auto;
		padding: 2rem 1.5rem;
		overflow-y: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}

	.skills-title {
		font-size: 2rem;
		letter-spacing: 0.2em;
		color: #4dff4d;
		margin-top: 1rem;
		margin-bottom: 2.5rem;
		text-align: center;
		flex-shrink: 0;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 2rem;
		max-width: 60rem;
		margin: 0 auto;
	}

	.skill-item {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.skill-info {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.skill-name {
		font-size: 1.1rem;
		letter-spacing: 0.1em;
		color: #f5f5f5;
	}

	.skill-percentage {
		font-size: 0.9rem;
		color: #888;
		font-family: monospace;
	}

	.skill-bar-bg {
		height: 6px;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 3px;
		overflow: hidden;
	}

	.skill-bar-fill {
		height: 100%;
		width: 0;
		border-radius: 3px;
		transition: width 1200ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	@media (max-width: 30rem) {
		.skills-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
