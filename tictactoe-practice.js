function check(a, b){
    return a == this;
}

function checkBoard(a) {
    return a.map(function(c) {
        return c.every(check,c[0]);
        });
}

row = ['O', 'O', '0'];

console.log(row.every(check, row[0]));

board = [['O', 'O', 'O'],
         ['X', null, 'X'],
         [null, 'X', null]];

console.log(checkBoard(board));
