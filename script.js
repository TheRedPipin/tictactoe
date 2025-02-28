let turn = 0; // 0 = X, 1 = O
let boardData = ['', '', '', '', '', '', '', '', ''];
const board = document.getElementById('boardContainer');
for (let i = 0; i < 9; i++) {
    const square = document.createElement('button');
    const div = document.createElement('div');
    div.id = `text${i}`;
    div.style.opacity = 0;
    div.style.transition = "0.5s";
    square.classList.add('section');
    square.id = i;
    square.addEventListener("click", mapClick);
    square.appendChild(div);
    board.appendChild(square);
}

const themeSwitch = document.getElementById('themeSwitchInput');

const savedTheme = localStorage.getItem('darkMode');
if (savedTheme === 'true') {
    themeSwitch.checked = true;
    document.body.classList.add('darkMode');
}

themeSwitch.addEventListener('change', function() {
    document.body.classList.toggle('darkMode', themeSwitch.checked);
    localStorage.setItem('darkMode', themeSwitch.checked);
});

function mapClick(){
    if (boardData[this.id] === '') {
        boardData[this.id] = turn;
        document.getElementById(`text${this.id}`).textContent = turn === 0 ? "✖" : "⭕";
        document.getElementById(`text${this.id}`).style.opacity = 1;
        this.classList.add(turn === 0 ? "circle" : "cross", "filled");
        document.getElementById("turnText").textContent = turn === 0 ? "⭕" : "✖";
        turn = turn === 0 ? 1 : 0;
        checkWin();
    }
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (boardData[a] !== '' && boardData[a] === boardData[b] && boardData[a] === boardData[c]) {
            document.getElementById("turnText").textContent = boardData[a] === 1 ? "⭕" : "✖";
            document.getElementById("turnText").style.color = boardData[a] === 1 ? "var(--blue)" : "var(--red)";
            document.getElementById("turnText").style.fontWeight = "bold";
            document.getElementById("turnText").style.fontSize = "20px";
            document.getElementById("turnText").style.opacity = 1;
            document.getElementById("turnText").style.transition = "0.5s";
            document.getElementById("turnText").textContent += " wins!";
            for (let i = 0; i < 9; i++) {
                document.getElementById(`text${i}`).style.opacity = 0.5;
            }
        }
    }
}