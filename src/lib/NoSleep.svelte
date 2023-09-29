<script>
    import NoSleep from 'nosleep.js';
	import Fa from 'svelte-fa';
	import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons/index.js';

	const noSleep = new NoSleep();

	let maximize = true;

	const toggleNoSleep = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
			noSleep.enable();
			maximize = false;
		}
		else if (document.exitFullscreen) {
			document.exitFullscreen();
			noSleep.disable();
			maximize = true;
		}
		if (window.navigator.vibrate) window.navigator.vibrate(100);
	};
</script>

<button on:click={toggleNoSleep} title="Full Screen">
	{#if maximize}
	<Fa icon={faMaximize} />
	{:else}
	<Fa icon={faMinimize} />
	{/if}
</button>