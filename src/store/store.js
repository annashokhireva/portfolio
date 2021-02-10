import Vue from 'vue';

const Store = Vue.observable({
	board: [
		'', '', '',
		'', '', '',
		'', '', ''
	],

	winningCombos: [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]
});


export default Store


// const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]

// export default class Board {
//     constructor() {
//       this.board = [
//         '', '', '',
//         '', '', '',
//         '', '', ''
//       ];
//     }

//     makeMove(x, y, player) {
//       if (this.board[x][y] !== '') {
//         return false;
//       }
  
//       this.board[x][y] = player;
//       return true;
//     }

//     getWinner() {
//         let winner = null;
    
//         winningCombos.forEach(function(combo){
    
//             if (this.board[combo[0]] && this.board[combo[0]] === this.board[combo [1]] && 
//                 this.board[combo[0]] === this.board[combo[2]]) {
//                     winner = this.board[combo[0]];
//                 }   
//         });
    
//         if (winner) {
//             return winner; 
//           } 
          
//         else if (this.board.includes('')) {
//             return null;
//         }
//         else {
//             return 'T';
//         }
    
//     }
// }