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

<div class=" relative max-h-screen h-screen overflow-hidden">
	<div class="flex md:justify-start justify-center absolute bottom-[-5px] w-full z-10 overflow-hidden">
		<a href="/" class="btn btn-outline btn-secondary md:mx-2 mr-[2px]">
			<button >
				Home
			</button>
		</a>
		<a href="/LearnMore" class="btn btn-outline btn-secondary md:mx-2 mx-[2px]">
			<button >
				Learn More
			</button>
		</a>
		<a href="/Gallery" class="btn btn-outline btn-secondary md:mx-2 mx-[2px]">
			<button > See Gallery </button>
		</a>
		<a class="btn btn-outline btn-secondary md:mx-2 ml-[2px]">
			<button > Book </button>
		</a>
	</div>
	<main>
		<slot />
	</main>
</div>

<style>
</style>
