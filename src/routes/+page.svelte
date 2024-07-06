<svelte:head>
	<title>Magi Tattoos</title>
	<meta name="description" content="Welcome to Magi Tattoos, the tricities destination for unique and personalized body art. 
	I Tyler Magid want to bring your ideas to life with precision and care. From cute to the most hardcore tattoos, 
	I offer a wide range of styles to suit every preference. 
	Located in Kennewick Washington, Magi Tattoos prioritizes hygiene, creativity, and client satisfaction.
	Exploremy tattoo gallery and schedule your consultation today to start your tattoo journey.
	Transform your ideas into lasting art." />
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';
	import Pointer from '$lib/components/Pointer.svelte';

	let canvas: HTMLCanvasElement;
	let loading: boolean = true;
	let learnMoreFocused: boolean = false;
	
	onMount(() => {
		let app = new Application(canvas);
		loading = true;
		app.load('https://prod.spline.design/uEu8oJ61rD880Jp2/scene.splinecode').finally(() => {
			loading = false;
		});
	});	

	let mousePosition = {x: 0, y: 0};
	
	function handleMove(e: MouseEvent) {
		mousePosition = {x: e.clientX, y: e.clientY};
	}
	
	function handleFocus() {
		learnMoreFocused = !learnMoreFocused;
	}
</script>

{#if loading}
	<div class=" z-[1000] grid h-screen overflow-hidden w-screen place-items-center duration-200"
	>
		loading
	</div>
{/if}
<div class="grid  place-items-center w-screen h-screen fixed overflow-hidden">
	<canvas on:mousemove={handleMove} class="top-0 right-0 h-screen w-screen cursor-none fixed overflow-hidden" bind:this={canvas} />
	{#if !learnMoreFocused}
	<div  class="h-screen w-screen absolute pointer-events-none ">
        <svelte:component this={Pointer} {...mousePosition}/>
	</div>
	{/if}
</div>
