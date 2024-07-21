<svelte:head>
	<title>Magi Tattoos</title>
	<meta name="description" content="Welcome to Magi Tattoos, the tricities destination for unique and personalized body art. 
	I Tyler Magid want to bring your ideas to life with precision and care. From cute to the most hardcore tattoos, 
	I offer a wide range of styles to suit every preference. 
	Located in Kennewick Washington, Magi Tattoos prioritizes hygiene, creativity, and client satisfaction.
	Explore my tattoo gallery and schedule your consultation today to start your tattoo journey.
	Transform your ideas into lasting art." />
</svelte:head>

<script lang="ts">
	import Pointer from '$lib/components/Pointer.svelte';
    import { concurrent } from 'svelte-typewriter'


	let learnMoreFocused: boolean = false;	

	let mousePosition = {x: 0, y: 0};

	function handleMove(e: MouseEvent) {
		mousePosition = {x: e.clientX, y: e.clientY};
	}
	
</script>

<div class="grid place-items-center w-screen h-screen fixed overflow-hidden">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
	<div id="text" class=" md:ml-[50%] absolute md:w-1/3 w-full md:p-5 p-7 md:h-1/2 h-full ">
		<p class="font-black text-2xl my-16 md:text-right" >
			I Tyler Magid want to bring your ideas to life with precision and care. 
		</p>
		<div class="text-left" use:concurrent={{ interval: 10, delay:1 }}>
			<p >
				From cute to the most hardcore tattoos, 
				I offer a wide range of styles to suit every preference. 
				Located in Kennewick Washington, Magi Tattoos prioritizes hygiene, creativity, and client satisfaction.
				Explore my tattoo gallery and schedule your consultation today to start your tattoo journey.
				Transform your ideas into lasting art.
			</p>
		</div>
	</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:mousemove={handleMove} class="top-0 right-0 h-screen w-screen bg-black cursor-none fixed overflow-hidden z-[-1]"/>
	{#if !learnMoreFocused}
	<div  class="h-screen w-screen absolute pointer-events-none ">
        <svelte:component this={Pointer} {...mousePosition}/>
	</div>
	{/if}
</div>
