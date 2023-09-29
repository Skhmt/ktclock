<script>
    import { turn } from './stores.js';
	import Fa from 'svelte-fa';
	import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons/index.js';

	const increment = () => {
		turn.update(x => x + 1);
	};
    const decrement = () => {
		turn.update(x => x > 0 ? x - 1 : 0);
    };

	let count;

	const unsubscribe = turn.subscribe(value => {
		count = value;
	});
</script>

<button on:click={decrement} title="Decrement Turn">
	<Fa icon={faMinus} />
</button>
<div class="data">
	<span>Turn {count}</span>
</div>
<button on:click={increment} title="Increment Turn">
	<Fa icon={faPlus} />
</button>
