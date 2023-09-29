<script>
	import Fa from 'svelte-fa';
	import { faGear, faXmark, faRotateRight } from '@fortawesome/free-solid-svg-icons/index.js';

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

	const unsubscribeSettings = showSettings.subscribe(value => {
		isVisible = value;
	});

	function closeSettings() {
		showSettings.set(false);
		if (window.navigator.vibrate) window.navigator.vibrate(100);
	}

	function resetClock() {
		p1_ellapsed_time.set(0);
		p2_ellapsed_time.set(0);
		p1_isRunning.set(false);
		p2_isRunning.set(false);
		if (window.navigator.vibrate) window.navigator.vibrate(100);
	}

	$: visibility = isVisible ? 'display: block;' : 'display: none;';
</script>

<div style="{visibility}" class="modal">
	<div class="modalGrid">
		<div class="modalContent" style="grid-area: 1 / 1 / 2 / 3;">
			<h1>Settings</h1>
		</div>
		<div style="position: absolute; right: 0px; top: 0px;">
			<button on:click={closeSettings} title="Close Settings" class="modalButton">
				<Fa icon={faXmark} />
			</button>
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
			Change Total Time
		</div>
		<div class="modalControl">
			f
		</div>

		<div class="modalContent">
			Modify Time
		</div>
		<div class="modalControl">
			f
		</div>
	</div>
</div>
