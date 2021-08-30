var n = 8;
var board =new Array(n).fill(Array(n).fill(0));

console.log(board.length);
for (let i = 0; i < board.length; i++) {
    board[i][i+n] = 13;
    console.log(i,board[i]);
}

console.log(board);