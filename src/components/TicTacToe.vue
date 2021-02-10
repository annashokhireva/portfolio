<template>
	<div>
		<div class="play-field" >
			<div v-for="(square, index) in board" :key="index" v-bind="board.square" >
				<span @click="setMark(square, index)"> {{square}} </span>
			</div>
		</div>
		<div class="status-display"> {{statusDisplay}} </div>
	</div>
</template>

<script>
export default {
	data() {
		{
			return {
				winningCombos: [
					[0, 1, 2],
					[3, 4, 5],
					[6, 7, 8],
					[0, 3, 6],
					[1, 4, 7],
					[2, 5, 8],
					[0, 4, 8],
					[2, 4, 6]
				],

				board: [
					'', '', 'O',
					'', 'X', '',
					'', '', ''
				],

				statusDisplay: '',

				currentPlayer: {
					playerX: true,
					playerO: false
				}
			}
		}
	},

	methods: {
		setMark(x, y) {
			if (this.board[x, y] !== '') {
			// Invalid move.
			return;
			}
			this.board[x, y] = 'X';
			// TODO implement some AI super-overlord algorithm that will calculate
			//  the computers move.

			this.$forceUpdate();
		}
	}
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

		:nth-child(n) {
			margin: 2px;
			display: flex;
			justify-content: center;
			align-items: center;
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