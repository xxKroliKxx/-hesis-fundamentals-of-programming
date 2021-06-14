let players = ['x', 'o'];
let activePlayer = 0;
let board;

let modalGoesFirstEl = document.getElementById('modal__goes__first');
let okButtons = document.getElementsByClassName('ok__button');

for (let btn of okButtons) {
    btn.addEventListener('click', function () {
        if (!modalGoesFirstEl.classList.contains('hidden')) {
            modalGoesFirstEl.classList.add('hidden');
        }
    });
}

function startGame() {

    refreshBoard();

    activePlayer = getRandomInt(0, 2)

    let header = modalGoesFirstEl.getElementsByTagName('h2')[0];
    header.textContent = `Первым ходим игрок ` + (activePlayer + 1);
    modalGoesFirstEl.classList.remove('hidden');

    renderBoard(board);

}

function click(row, col) {

    board[row][col] = players[activePlayer]
    if (CheckWinner()) {
        showWinner(activePlayer);
        return
    }
    activePlayer = activePlayer === 1 ? 0 : 1;
    renderBoard(board);

}

function CheckWinner() {

    let activeSymbol = players[activePlayer];
    
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        count = board[i][i] === activeSymbol ? ++count : 0 // 
        if (count === 3) {
            return true;
        }
    };

    count = 0;
    for (let i = 0; i < board.length; i++) {
        count = board[i][board.length - i] === activeSymbol ? ++count : 0 // 
        if (count === 3) {
            return true;
        }
    };
    
    count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            count = board[i][j] === activeSymbol ? ++count : 0 // 
            if (count === 3) {
                return true;
            }
        };
    };

    count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            count = board[j][i] === activeSymbol ? ++count : 0 // 
            if (count === 3) {
                return true;
            }
        };
    };

    return false;
}

function refreshBoard() {
    board = [
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
    ];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
