
function findWinner(a) {
    var winner =  a.map(function(b){
        if (b.every(function(c) {return c == this;},b[0]) === true){
            return b[0];
        } else {
            return null;
        }
    }).find(function(d) {
        return d !== null;
    });
    if (winner !== 'O' && winner !== 'X'){
        return null;
    } else {
        return winner;
    }
}

board1 = [['O', 'O', 'O'],
         ['X', null, 'X'],
         [null, 'X', null]];

board2 = [['null', 'null', 'null'],
      ['X', null, 'X'],
      [null, 'X', null]];

console.log(findWinner(board1));
console.log(findWinner(board2));
