let boardEl = document.getElementById('board');
let statusEl = document.getElementById('status');
let currentPlayerEl = document.getElementById('currentPlayer');
let msgEl = document.getElementById('message');
let resetBtn = document.getElementById('reset');
let resetScoresBtn = document.getElementById('resetScores');
let scoreXEl = document.getElementById('scoreX');
let scoreOEl = document.getElementById('scoreO');

let boardState = [];
let currentPlayer = 'X';
let gameActive = true;
let scores = { X: 0, O: 0 };

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function initGame() {
    boardEl.innerHTML = '';
    
    boardState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    updateStatus();

    for (let i = 0; i < 9; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', function() {
            onCellClick(i, cell);
        });
        boardEl.appendChild(cell);
    }
    msgEl.innerHTML = '';
}

function onCellClick(index, cell) {
    if (!gameActive) {
        msgEl.innerHTML = 'Game over — press Reset to play again.';
        return;
    }

    if (boardState[index] !== '') {
        msgEl.innerHTML = 'Cell already marked — choose another.';
        return;
    }

    boardState[index] = currentPlayer;
    cell.innerHTML = currentPlayer;

    cellEl.classList.add('marked');

    setTimeout(function(){
        cellEl.classList.remove('marked');
    }, 160);

    let result = checkResult();
    if (result.winner) {
        result.combo.forEach(function(idx){
            let c = boardEl.querySelector('[data-index="'+idx+'"]');
            if (c) c.classList.add('win');
        });
        scores[result.winner] += 1;
        updateScores();
        statusEl.innerHTML = 'Winner: <strong>' + result.winner + '</strong> 🎉';
        gameActive = false;
        msgEl.innerHTML = 'Press Reset to play again.';
        return;
    }

    if (result.draw) {
        statusEl.innerHTML = 'It\'s a draw! 🤝';
        gameActive = false;
        msgEl.innerHTML = 'Press Reset to play again.';
        return;
    }

    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    updateStatus();
    msgEl.innerHTML = '';
}

