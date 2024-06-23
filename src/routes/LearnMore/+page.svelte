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
	import Pointer from '$lib/components/Pointer.svelte';

	let loading: boolean = true;
	let learnMoreFocused: boolean = false;
	

	let mousePosition = {x: 0, y: 0};
	
	function handleMove(e: MouseEvent) {
		mousePosition = {x: e.clientX, y: e.clientY};
	}
	
	function handleFocus() {
		learnMoreFocused = !learnMoreFocused;
	}
</script>

<div class="grid  place-items-center w-screen h-screen fixed overflow-hidden">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:mouseenter={handleFocus} on:mouseleave={handleFocus} class=" w-72 flex h-10 justify-between absolute left-[40vw] bottom-[15%]">
        <a href="/">
            <button class="btn btn-outline btn-secondary z-10 "> Go Back </button>
        </a>
        <a href="/Gallery">
            <button class="btn btn-outline btn-secondary z-10 "> See Gallery </button>
        </a>
    </div>
	<div on:mousemove={handleMove} class="top-0 right-0 h-screen w-screen bg-black cursor-none fixed overflow-hidden z-[-1]"/>
	{#if !learnMoreFocused}
	<div  class="h-screen w-screen absolute pointer-events-none ">
        <svelte:component this={Pointer} {...mousePosition}/>
	</div>
	{/if}
</div>
