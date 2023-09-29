<script>
	import Fa from 'svelte-fa';
	import { faFloppyDisk, faXmark, faRotateRight } from '@fortawesome/free-solid-svg-icons/index.js';

	import { showSettings } from './stores.js';
	import { 
		total_time,
		p2_ellapsed_time, 
		p2_last_time, 
		p2_isRunning, 
		p1_ellapsed_time,
		p1_last_time,
		p1_isRunning 
	} from './stores.js';

	let isVisible;
	let totalTime;
	let totalTimeMinutes;

	const unsubscribeTotalTime = total_time.subscribe(value => {
		totalTime = value;
		totalTimeMinutes = totalTime / (60*1000);
	})

	const unsubscribeSettings = showSettings.subscribe(value => {
		isVisible = value;
		// if (isVisible) {
		// 	totalTimeMinutes = totalTime / (60*1000);
		// }
	});

	function closeSettings() {
		showSettings.set(false);
		window?.navigator?.vibrate?.(100);
	}

	function resetClock() {
		p1_ellapsed_time.set(0);
		p2_ellapsed_time.set(0);
		p1_isRunning.set(false);
		p2_isRunning.set(false);
		window?.navigator?.vibrate?.(100);
	}

	function saveTime() {
		console.log(totalTimeMinutes);
		
		total_time.set(totalTimeMinutes*60*1000);
		resetClock();
	}

	function saveModTime() {
		
	}

	$: visibility = isVisible ? 'display: block;' : 'display: none;';
</script>

<div style="{visibility}" class="modal">
	<button on:click={closeSettings} title="Close Settings" class="modalButton xButton">
		<Fa icon={faXmark} />
	</button>
	<div class="modalGrid">
		<div class="modalContent" style="grid-area: 1 / 1 / 2 / 3;">
			<h1>Settings</h1>
		</div>

		<div class="modalContent">
			Reset Clock
		</div>
		<div class="modalControl">
			<button on:click={resetClock} title="Reset Clock" class="modalButton">
				<Fa icon={faRotateRight} />
			</button>
		</div>

		<div class="modalContent">
			Minutes Per Player (this resets the clock)
			<input type="text" bind:value={totalTimeMinutes} size="10" />
		</div>
		<div class="modalControl">
			<button on:click={saveTime} title="Set Total Time" class="modalButton">
				<Fa icon={faFloppyDisk} />
			</button>
		</div>

		<div class="modalContent">
			Modify Time
		</div>
		<div class="modalControl">
			<button on:click={saveModTime} title="Set Modified Time" class="modalButton">
				<Fa icon={faFloppyDisk} />
			</button>
		</div>
	</div>
</div>
