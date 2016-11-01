function tictactoe(board) {
    ///////// HELPER FUNCTIONS ///////////
        //Transposes 2 dimensional array (game board)
        function transpose(board){
            var newBoard = board[0].map(function(col, i) {
                return board.map(function(row) {
                    return row[i];
                    });
                });
            return newBoard;
        }

        //Checks a one dimensional array of length 3 for a winner of the game.
        function winner(a) {
            return a == b
        }

        function returnWinner(a) {
            return a[0] === true;
        }
    ///////////////////////////////////
    //Check rows first (one at a time)
    console.log(board.every(winner).some(returnWinner));
    //If no winner: transpose board, then check columns (one at a time)
    boardFlip = transpose(board);
    console.log(boardFlip.map(existsWinner).some(returnWinner));
    //If still no winner: extract diagonals then check diagonals (one at a time)
    var forwardDiag = [board[0][0],board[1][1],board[2][2]];
    var backwardDiag = [board[2][0],board[1][1],board[2][0]];
    var diagonals = [forwardDiag, backwardDiag];
    console.log(diagonals.map(existsWinner).some(returnWinner));
    //If still no winner: return null
    return null;
}

function tictactoe(board) {

    ///////// HELPER FUNCTIONS ///////////
    //Transposes 2 dimensional array (game board)
    function transpose(board){
        var newBoard = board[0].map(function(col, i) {
            return board.map(function(row) {
                return row[i];
                });
            });
        return newBoard;
    }

    //Checks a one dimensional array of length 3 for a winner of the game.
    function winner(a) {
        if(a[0] === a[1] && a[1] === a[2] && a[0] === 'X'){
            return [true, 'X'];
        } else if ((a[0] === a[1] && a[1]===a[2] && a[0] === 'O')) {
            return [true, 'O'];
        } else {
            return [false, null];
        }
    }
    ///////////////////////////////////

    //Check rows first (one at a time)
    for (var idxR in board) {
        row = board[idxR];
        if (winner(row)[0]){
            return winner(row)[1];
        }
    }
    //If no winner: transpose board, then check columns (one at a time)
    boardFlip = transpose(board);
    for (var idxC in boardFlip) {
        col = boardFlip[idxC];
        if (winner(col)[0]){
            return winner(col)[1];
        }
    }
    //If still no winner: extract diagonals then check diagonals (one at a time)
    var forwardDiag = [board[0][0],board[1][1],board[2][2]];
    var backwardDiag = [board[2][0],board[1][1],board[2][0]];
    if (winner(forwardDiag)[0]){
        return winner(forwardDiag)[1];
    } else if (winner(backwardDiag)[0]){
        return winner(backwardDiag)[1];
    }
    //If still no winner: return null
    return null;
}

function tictactoe(grid) {
    for(i=0; i<3; i++) {
        if ((grid[i][0] == grid[i][1]) && (grid[i][1]== grid[i][2])) {
            if (grid[i][0] == 'O') {
                return 'O';
            } else if (grid[i][0] == 'X') {
                return 'X';
            }
        }
    }
    for(j=0; j<3; j++) {
        if ((grid[0][j] == grid[1][j]) && (grid[1][j]== grid[2][j])) {
            if (grid[0][j] == 'O') {
                return 'O';
            } else if (grid[0][j] == 'X') {
                return 'X';
            }
        }
    }
    if ((grid[0][0] == grid[1][1]) && (grid[1][1] == grid [2][2])) {
        if (grid[0][0] == 'O') {
            return 'O';
        } else if (grid[0][0] == 'X') {
            return 'X';
        }
    } else if ((grid[2][0] == grid[1][1]) && (grid[1][1]== grid [0][2])) {
        if (grid[2][0] == 'O') {
            return 'O';
        } else if (grid[2][0] == 'X') {
            return 'X';
        }
    } else {
        return null;
    }
    return null;
}

module.exports = tictactoe;
