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

	let bookToggle:boolean = false;
	const toggleBookingForm = (e: MouseEvent) => {
		e.preventDefault();
		bookToggle = !bookToggle;
	}
	
	let submitState:boolean = false;
	const toggleState = () => {
		submitState = !submitState;
	}
	
	
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
		<button on:click={(e) => toggleBookingForm(e)} class="btn btn-outline btn-secondary md:mx-2 ml-[2px]"> Book </button>
	</div>
	<form on:submit={toggleState} style="opacity: {bookToggle? 0 : 1}; display: {bookToggle? "none" : ""}" 
		class="duration-300 z-30 bg-black border-accent border-2 p-6 rounded-md flex justify-between flex-col h-[70vh]  md:w-[50vw] w-full absolute bottom-[16%] md:left-2 " 
		action="https://public.herotofu.com/v1/85b123e0-4796-11ef-9c40-81ddfd46a51" 
		method="post" >
		{#if !submitState}
			<label for="name">Your Name</label>
			<input class="input" name="Name" id="name" type="text" required />
			<label for="email">Your Email</label>
			<input class="input" name="Email" id="email" type="email"  />
			<label for="email">Your Phone</label>
			<input class="input" name="Phone" id="email" type="phone"  />
			<label for="your idea">Your Idea</label>
			<textarea class="textarea" name="Your Idea" id="idea"></textarea>
			<div class="flex w-full">
				<button class="btn btn-outline btn-accent m-2 ">Book</button>
				<button on:click={(e) => toggleBookingForm(e)} class="btn btn-outline btn-accent m-2 ">Cancel</button>
			</div>
			<div style="text-indent:-99999px; white-space:nowrap; overflow:hidden; position:absolute;" aria-hidden="true">
				<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
			  </div>
		{:else}
			<p>Submitted! <br> I will be in touch soon feel free to reach out for more info at <br>Magitattoos@gmail.com
			</p>
		{/if}
	
	  </form>
	<main>
		<slot />
	</main>
</div>

<style>
</style>
