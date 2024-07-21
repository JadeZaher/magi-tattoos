<svelte:head>
	<title>Magi Tattoos</title>
	<meta name="description" content="Welcome to Magi Tattoos, the tricities destination for unique and personalized body art. 
	I Tyler Magid want to bring your ideas to life with precision and care. From cute to the most hardcore tattoos, 
	I offer a wide range of styles to suit every preference. 
	Located in Kennewick Washington, Magi Tattoos prioritizes hygiene, creativity, and client satisfaction.
	Exploremy tattoo gallery and schedule your consultation today to start your tattoo journey.
	Transform your ideas into lasting art." />
	<meta property="og:image" content="/static/favicon.png"/>
</svelte:head>
<script lang="ts">
	import './app.css';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				bookToggle = false;
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
	<form on:submit={toggleState} style="opacity: {bookToggle? 1 : 0}; transform: {bookToggle? "scale(1)" : "scale(0)"}" 
		class="duration-300 z-30 bg-black border-accent border-2 p-6 rounded-md flex justify-between flex-col h-[70vh]  md:w-[50vw] w-full absolute bottom-[16%] md:left-2 " 
		action="https://public.herotofu.com/v1/85b123e0-4796-11ef-9c40-81ddfd46a512" 
		method="post" 
		accept-charset="UTF-8" 
		>
			<div class="flex flex-col">
				<label for="name">Your Name</label>
				<input class="input" name="Name" id="name" type="text" required />
			</div>
			<div class="flex flex-col">
				<label for="email">Your Email</label>
				<input class="input" name="Email" id="email" type="email"  />
			</div>
			<div class="flex flex-col">
				<label for="email">Your Phone</label>
				<input class="input" name="Phone" id="phone" type="tel"  />
			</div>
			<div class="flex flex-col">
				<label for="your idea">Your Idea</label>
				<textarea class="textarea" rows="3" name="Idea" id="idea"></textarea>
			</div>
			<div class="flex w-full">
				<button type="submit" class="btn btn-outline btn-accent m-2 ">Book</button>
				<button on:click={(e) => toggleBookingForm(e)} class="btn btn-outline btn-accent m-2 ">Cancel</button>
			</div>
			<div style="text-indent:-99999px; white-space:nowrap; overflow:hidden; position:absolute;" aria-hidden="true">
				<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
			</div>			  
	  </form>
	<main>
		<slot />
	</main>
</div>

<style>
</style>
