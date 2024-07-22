
<script lang="ts">
	import Pointer from '$lib/components/Pointer.svelte';
    import { concurrent } from 'svelte-typewriter'


	let learnMoreFocused: boolean = false;	

	let mousePosition = {x: 0, y: 0};

	function handleMove(e: MouseEvent) {
		mousePosition = {x: e.clientX, y: e.clientY};
	}
	
</script>

<div class="grid place-items-center w-screen fixed">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
	<div id="text" class=" md:mt-[50vh] md:ml-[25vw] absolute md:w-1/2 w-full md:p-5 p-8 md:h-1/2 h-full ">
		<h1 use:concurrent={{ interval: 30 }} class="font-black text-2xl my-5 md:min-h-fit min-h-[20vh]">
			I Tyler Magid want to bring your ideas to life with precision and care. 
		</h1>
		<div class="pb-3 md:text-base text-sm" >
			<p>
				I offer a wide range of styles and am willing try any ideas you might have within the extent of my abilities. 
				I’m adaptable and I want to work together to create something we both can love. 
				Located in Kennewick Washington, I prioritize hygiene, creativity, and client satisfaction. 
				Explore my tattoo gallery and schedule your consultation today to start your tattoo journey.
				Transform your ideas into lasting art.
			</p>
			<br>
			<p>
				When you’re actually ready to book an appointment I will have you put down a <span class=" text-accent">40 dollar deposit</span> to lock in the day in the calander <span class=" text-accent">(current hourly rate is 120$/h)</span>. 
				That’s something you can send over cash app and I can send a receipt back to you. Via your email. 
				If you need to cancel your appointment you have until 48 hours before your appointment to do that without losing the deposit. 
				That deposit comes out of the final cost of your tattoo. Continue to the booking section to book today!
			</p>
		</div>
	</div>
</div>
