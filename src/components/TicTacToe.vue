<template>
	<div>
		<div class="play-field">
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
			<div class="square"></div>
		</div>
		<div class="status-display"></div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
	div.play-field {
		transform: rotate(-15deg);
		margin: 0;
		padding: 1.2em 2.8em 2em 2em;
		background-image: url('../assets/img/TicTacToe.png');
		background-size: contain;
		background-position-x: center;
		background-repeat: no-repeat;
		opacity: 80%;
		width: 300px;
		height: 300px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		.square {
			margin: 2px;
		}

		:nth-child(1),
		:nth-child(3) {
			width: 4.2em;
			height: 4.5em;
		}

		:nth-child(2) {
			width: 4.6em;
			height: 4.5em;
		}

		:nth-child(4),
		:nth-child(5) {
			width: 4.2em;
			height: 4.6em;
		}

		:nth-child(6) {
			width: 4.8em;
			height: 4.8em;
		}

		:nth-child(7),
		:nth-child(8) {
			width: 3.7em;
			height: 5.5em;
		}

		:nth-child(9) {
			width: 5.3em;
			height: 5.6em;
			margin-top: 5px;
		}
	}

	
</style>