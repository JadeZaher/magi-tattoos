<script lang="ts">
	import './app.css';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
	
</script>

<div>
	<div class="flex absolute top-5 right-5 z-10">
		<a href="/" class="btn btn-outline btn-secondary mx-2">
			<button >
				Home
			</button>
		</a>
		<a href="/LearnMore" class="btn btn-outline btn-secondary mx-2">
			<button >
				Learn More
			</button>
		</a>
        <a href="/Gallery" class="btn btn-outline btn-secondary mx-2">
            <button > See Gallery </button>
        </a>
	</div>
	<main>
		<slot />
	</main>
</div>

<style>
</style>
