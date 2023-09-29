<script>
    import NoSleep from 'nosleep.js';
	import Fa from 'svelte-fa';
	import { faMoon } from '@fortawesome/free-solid-svg-icons/index.js';
	import {faMoon as faMoonReg} from '@fortawesome/free-regular-svg-icons/index.js';

	const noSleep = new NoSleep();

	let isNoSleep = false;

	const toggleNoSleep = () => {
		isNoSleep = !isNoSleep;
		if (isNoSleep) {
			noSleep.enable();
		}
		else {
			noSleep.disable();
		}
	};
</script>

<button on:click={toggleNoSleep} title="Toggle No Sleep">
	{#if isNoSleep}
	<Fa icon={faMoon} />
	{:else}
	<Fa icon={faMoonReg} />
	{/if}
</button>