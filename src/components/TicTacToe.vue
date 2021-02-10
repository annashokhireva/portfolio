<template>
	<div>
		<div class="play-field" >
			<div v-for="(square, index) in board" :key="index" v-bind="board.square" >
				<span @click="setMark(square, index)"> {{square}} </span>
			</div>
		</div>
		<div class="status-display"> {{statusDisplay}} </div>
		<div class="game-over-text" v-if="gameOver">
			{{ gameOverText }}
		</div>
	</div>
</template>

<script>
import Store from '../store/store';

export default {
	data() {
		{
			return {
				statusDisplay: '',
				gameOver: false,
				gameOverText: ''
			}
		}
	},

	computed: {
		board: function() {
			return Store.board;
		}
	},

	methods: {
		setMark(x, y) {
			let player = 'X'
			if (this.board[x, y] !== '') {
			return;
			}

			this.board[x, y] = player;

			player = (player === 'X' ? 'O' : 'X');

			

			// TODO implement some AI super-overlord algorithm that will calculate
			//  the computers move.

			if ( this.getWinner === 'T' ) {
				this.statusDisplay = `That's a tie!`;
			} 
			
			else if (this.getWinner) { 
				this.statusDisplay = `${this.board[x, y]} wins the game!`;
			} 
			
			else {
				this.statusDisplay = `It's your turn!`;
			}

			this.$forceUpdate();
		},

		getWinner() {
			let winner = null;

			Store.winningCombos.forEach(function(combo){

				if (Store.winningCombos[combo[0]] && Store.winningCombos[combo[0]] === Store.winningCombos[combo [1]] && 
					Store.winningCombos[combo[0]] === Store.winningCombos[combo[2]]) {
						winner = Store.winningCombos[combo[0]];
					}   
			});

			if (winner) {
				return winner; 
			} 
			
			else if (Store.winningCombos.includes('')) {
				return null;
			}
			else {
				return 'T';
			}

		},

		isgameOver() {
			return this.getPossibleMoves().length === 0 || this.getWinner('X') || this.getWinner('O');
		},

		getPossibleMoves(x, y) {
			let moves = [];
				if(this.board[x, y] === '') {
					moves.push({x, y});
				}
			return moves;
		},


		getScore() {
			let score = 0;
			if (this.getWinner('X')) {
				score -= 100;
			}
			if (this.getWinner('O')) {
				score += 100;
			}
			return score;
		},

		minimax(board, player, depth = 1) {
			// If the board has 3 in a row return the score of the board.
			if (this.isGameOver()) {
			return {
				score: this.getScore() + depth,
				move: null
			}
			}

			// The 'o' player wants to maximize its score, the 'x' player wants to
			// minimize its score
			let bestScore = player === 'O' ? -10000 : 10000;
			let bestMove = null;

			let moves = this.getPossibleMoves();
			for (let i = 0; i < moves.length; i++) {
				let move = moves[i];
				let newBoard = this.board.clone();
				newBoard.setMark(move.x, move.y, player);

			// Recursively call the minimax function for the new board.
			const score = this.minimax(newBoard, player === 'x' ? 'o' : 'x', depth + 1).score;

			// If the score is better than the best saved score update the best saved
			// score to this move.
			if ((player === 'o' && score > bestScore) || (player === 'x' && score < bestScore)) {
				bestScore = score;
				bestMove = move;
			}
			}

			// Return the best found score & move!
			return {
			score: bestScore,
			move: bestMove
			}
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