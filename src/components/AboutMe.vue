<template>
	<section class="main-section">
		<img class="my-picture" src="@/assets/img/MyPicture.jpg" width="300" alt="My Photo">

		<div class="intro">
			<p>Hello, my name is</p>
			<h1>Anna SHokhireva</h1>
		</div>
		
		<!-- <tic-tac-toe /> -->
	</section>
</template>

<script>
	// import TicTacToe from './TicTacToe.vue';

	export default {
	components: { 
		// TicTacToe 
	},

	};
</script>

<style scoped lang="scss">

	section {
		display: flex;
		justify-content: space-between;
		align-items: left;

		.intro {
			text-align: left;
			width: 60%;
			height: fit-content;
		}
	}

	.my-picture {
		transform: rotate(3deg);
		box-shadow: 1px 1px 2px #686767;
	}

</style>
