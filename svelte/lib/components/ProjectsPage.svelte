<script lang="ts">
	import { onMount } from 'svelte';
	import { scrambleTextAsync } from '../animations';
	import { activeLanguage, selectedProject } from '../state';
	import type { Project } from '../types';

	$: allProjects = [...($activeLanguage?.projects?.items ?? [])].map((item) => ({
		title: item.title,
		description: item.description,
		url: item.url
	}));

	let currentPage = 0;
	const projectsPerPage = 6;
	$: totalPages = Math.ceil((allProjects?.length || 0) / projectsPerPage);

	$: currentProjects = allProjects.slice(
		currentPage * projectsPerPage,
		(currentPage + 1) * projectsPerPage
	);

	let title = '';

	onMount(async () => {
		await scrambleTextAsync($activeLanguage.projects.title, (val) => (title = val), 200, 20);
	});

	function nextPage() {
		if (currentPage < totalPages - 1) currentPage++;
	}

	function prevPage() {
		if (currentPage > 0) currentPage--;
	}

	function openProject(project: Project) {
		selectedProject.set(project);
	}
</script>

<div class="projects-container">
	<h2 class="projects-title">{title}</h2>

	<div class="projects-grid">
		{#each currentProjects as project}
			<button class="project-card" onclick={() => openProject(project)}>
				<h3 class="project-card__title">{project.title}</h3>
				<p class="project-card__desc">{project.description}</p>
				<div class="project-card__footer">
					<span>{$activeLanguage.projects.viewProject}</span>
				</div>
			</button>
		{/each}
	</div>

	{#if totalPages > 1}
		<div class="pagination">
			<button
				class="page-btn"
				onclick={prevPage}
				disabled={currentPage === 0}
				aria-label={$activeLanguage.projects.prevPageAria}
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M15 18l-6-6 6-6" />
				</svg>
			</button>
			<span class="page-info">{currentPage + 1} / {totalPages}</span>
			<button
				class="page-btn"
				onclick={nextPage}
				disabled={currentPage === totalPages - 1}
				aria-label={$activeLanguage.projects.nextPageAria}
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M9 18l6-6-6-6" />
				</svg>
			</button>
		</div>
	{/if}
</div>

<style>
	.projects-container {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem 1.5rem;
		overflow-y: hidden;
		box-sizing: border-box;
	}

	.projects-title {
		font-size: 2rem;
		letter-spacing: 0.2em;
		color: #4dffff;
		margin-bottom: 1.5rem;
		text-align: center;
		flex-shrink: 0;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
		gap: 1.2rem;
		width: 100%;
		max-width: 65rem;
		margin: 0 auto;
	}

	.project-card {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(77, 255, 255, 0.2);
		padding: 1.25rem;
		text-align: left;
		cursor: pointer;
		transition: all 200ms ease;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.project-card:hover {
		background: rgba(77, 255, 255, 0.05);
		border-color: #4dffff;
		transform: translateY(-2px);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
	}

	.project-card__title {
		font-size: 1.2rem;
		color: #4dffff;
		margin: 0;
		letter-spacing: 0.05em;
	}

	.project-card__desc {
		font-size: 0.9rem;
		color: #ccc;
		line-height: 1.4;
		margin: 0;
		flex-grow: 1;
	}

	.project-card__footer {
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		color: #4dffff;
		opacity: 0.6;
		margin-top: 0.5rem;
	}

	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		margin-top: 2rem;
	}

	.page-btn {
		background: none;
		border: 1px solid rgba(77, 255, 255, 0.3);
		color: #4dffff;
		padding: 0.5rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		transition: all 150ms ease;
	}

	.page-btn:hover:not(:disabled) {
		background: rgba(77, 255, 255, 0.1);
		border-color: #4dffff;
	}

	.page-btn:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.page-info {
		font-size: 1rem;
		color: #4dffff;
		letter-spacing: 0.1em;
	}
</style>
