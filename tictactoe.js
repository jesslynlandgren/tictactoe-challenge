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
//
// function tictactoe(board) {
//   // horizontals
//   if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
//     return 'X';
//   }
//   if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
//     return 'X';
//   }
//   if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
//     return 'X';
//   }
//
//   // verticals
//   if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
//     return 'X';
//   }
//   if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') {
//     return 'X';
//   }
//   if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
//     return 'X';
//   }
//
//   // diagnals
//   if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
//     return 'X';
//   }
//   if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
//     return 'X';
//   }
//
//   // horizontals
//   if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') {
//     return 'O';
//   }
//   if (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') {
//     return 'O';
//   }
//   if (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') {
//     return 'O';
//   }
//
//   // verticals
//   if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') {
//     return 'O';
//   }
//   if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') {
//     return 'O';
//   }
//   if (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') {
//     return 'O';
//   }
//
//   // diagnals
//   if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
//     return 'O';
//   }
//   if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
//     return 'O';
//   }
//
//   return null;
// }

module.exports = tictactoe;
