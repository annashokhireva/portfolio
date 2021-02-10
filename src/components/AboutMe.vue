<template>
	<section class="main-section">
		<h1>{{ msg }}</h1>
		<!-- <tic-tac-toe /> -->
	</section>
</template>

<script>
	// import TicTacToe from './TicTacToe.vue';

	export default {
	components: { 
		// TicTacToe 
	},

		props: {
			msg: String
		}
	};
</script>

<style scoped lang="scss">

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
	}

</style>
