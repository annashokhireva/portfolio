<template>
	<section class="main-section">
		<h1>{{ msg }}</h1>
		<tic-tac-toe />
	</section>
</template>

<script>
	import TicTacToe from './TicTacToe.vue';

	export default {
	components: { 
		TicTacToe 
	},

		props: {
			msg: String
		}
	};
</script>

<style scoped lang="scss">

	// section {
		// background-image: url('../assets/img/FlowerDesk.jpg');
		// background-size: cover;
		// background-position-x: left;
		// background-repeat: no-repeat;
	// }

</style>
