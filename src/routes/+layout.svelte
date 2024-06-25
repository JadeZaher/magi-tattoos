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
	<main>
		<slot />
	</main>
	<script src=“webui.js”></script>
</div>

<style>
</style>
