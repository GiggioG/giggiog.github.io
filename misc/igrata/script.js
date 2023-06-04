/// vars
let ctx = document.querySelector("canvas").getContext("2d");
let width = (ctx.canvas.width = window.innerWidth);
let cellDim = width / COLS;
let height = (ctx.canvas.height = cellDim * ROWS);

/// init board
let board = [];
for (let i = 0; i < ROWS; i++) {
    board.push(".".repeat(COLS).split(""));
}
let lastMove = null;

/// logik
let firstTurn = new URLSearchParams(location.search).get("first");
if(firstTurn == null){ firstTurn = 'X';}
let turn = firstTurn;
let win = null;
let winPaths = [];
function getCursorPosition(event) {
    const rect = ctx.canvas.getBoundingClientRect();
    const x = Math.floor(event.clientX - rect.left);
    const y = Math.floor(event.clientY - rect.top);
    return { x, y };
}
function checkWin() {
    for (let r = ROWS - 1; r >= 0; r--) {
        for (let c = 0; c < COLS - 2; c++) {
            let sym = board[r][c];
            if (sym != 'X' && sym != 'O') { continue; }
            if (board[r][c + 2] == sym) {
                if (r > 0 && board[r - 1][c + 1] == sym) {
                    win = sym;
                    winPaths.push({type: '^', path: [
                        { r: r, c: c },
                        { r: r - 1, c: c + 1 },
                        { r: r, c: c + 2 }
                    ]});
                }
                if (r < ROWS - 1 && board[r + 1][c + 1] == sym) {
                    win = sym;
                    winPaths.push({type: 'v', path: [
                        { r: r, c: c },
                        { r: r + 1, c: c + 1 },
                        { r: r, c: c + 2 }
                    ]});
                }
            }
        }
    }
    if(win == null){
        if(!board.map(e=>e.join('')).join('').includes('.')){
            win = 'T';
        }
    }
}
function handleClick(event) {
    const { x, y } = getCursorPosition(event);
    const r = Math.floor(y / cellDim);
    const c = Math.floor(x / cellDim);
    if(win != null){ return; }
    if (board[r][c] != '.') { return; }
    if (r < ROWS - 1) {
        if (board[r + 1][c] == '.') { return; }
    }
    board[r][c] = turn;
    lastMove = {r, c};
    checkWin();
    if (turn == 'X') { turn = 'O'; }
    else if (turn == 'O') { turn = 'X'; }
    draw();
}
ctx.canvas.addEventListener("click", handleClick);
function playAgain(){
    location.href = location.href.split("?")[0] + `?first=${turn}`;
}

/// drawing functions
function clearCanvas() {
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, width, height);
}
function drawAtCoords(r, c, symbol) {
    let x = c * cellDim;
    let y = r * cellDim;
    if (symbol == 'X') {
        let drawDim = cellDim * X_SCALE;
        let drawDimGap = cellDim * (1 - X_SCALE);

        ctx.strokeStyle = X_COLOR;
        ctx.lineWidth = SYMBOL_WIDTH;
        ctx.beginPath();
        ctx.moveTo(x + drawDimGap, y + drawDimGap);
        ctx.lineTo(x + drawDim, y + drawDim);
        ctx.moveTo(x + drawDim, y + drawDimGap);
        ctx.lineTo(x + drawDimGap, y + drawDim);
        ctx.stroke();
    } else if (symbol == 'O') {
        ctx.strokeStyle = O_COLOR;
        ctx.lineWidth = SYMBOL_WIDTH;
        let r = (cellDim * O_SCALE) / 2;
        ctx.beginPath();
        ctx.arc(x + cellDim / 2, y + cellDim / 2, r, 0, 2 * Math.PI);
        ctx.stroke();
    }else if(symbol == 'H'){ // highlight {
        let sym = board[r][c];
        ctx.fillStyle = (sym=='X'?X_HIGHLIGHT_COLOR:O_HIGHLIGHT_COLOR);
        ctx.fillRect(x, y, cellDim, cellDim);
    }
}
function drawBoard() {
    clearCanvas();
    if(lastMove != null){
        drawAtCoords(lastMove.r, lastMove.c, 'H');
    }
    ctx.strokeStyle = "grey";
    ctx.lineCap = "round";
    ctx.lineWidth = 1;
    for (let r = 1; r < ROWS; r++) {
        ctx.beginPath();
        ctx.moveTo(0, r * cellDim);
        ctx.lineTo(width, r * cellDim);
        ctx.stroke();
    }
    for (let c = 1; c < COLS; c++) {
        ctx.beginPath();
        ctx.moveTo(c * cellDim, 0);
        ctx.lineTo(c * cellDim, height);
        ctx.stroke();
    }
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            drawAtCoords(r, c, board[r][c]);
        }
    }
    if (win != null) {
        ctx.strokeStyle = (win == 'X' ? X_WINSTROKE_COLOR : O_WINSTROKE_COLOR);
        ctx.lineWidth = WINSTROKE_WIDTH;
        winPaths.forEach(w => {
            ctx.beginPath();
            ctx.moveTo(w.path[0].c * cellDim + cellDim/2, w.path[0].r * cellDim + cellDim/2);
            ctx.lineTo(w.path[1].c * cellDim + cellDim/2, w.path[1].r * cellDim + cellDim/2);
            ctx.lineTo(w.path[2].c * cellDim + cellDim/2, w.path[2].r * cellDim + cellDim/2);
            ctx.stroke();
        });
    }
}

function draw() {
    drawBoard();
    if (win == 'O' || win == 'X') {
        document.querySelector("h1#message").innerHTML = `${win} WON!!!`;
        document.querySelector("h1#message").style.color = (win=='X'?X_COLOR:O_COLOR);
        document.querySelector("button#playAgain").style.color = (turn=='X'?X_COLOR:O_COLOR);
        document.querySelector("button#playAgain").style.filter = "";
        document.querySelector("button#playAgain").disabled = false;
    }else if(win == 'T'){
        document.querySelector("h1#message").innerHTML = `The game ended in a tie.`;
        document.querySelector("h1#message").style.color = "";
        turn = firstTurn;
        document.querySelector("button#playAgain").style.color = (turn=='X'?X_COLOR:O_COLOR);
        document.querySelector("button#playAgain").style.filter = "";
        document.querySelector("button#playAgain").disabled = false;
    }else{
        document.querySelector("span#turn").innerHTML = turn;
        document.querySelector("span#turn").style.color = (turn=='X'?X_COLOR:O_COLOR);
    }
}

draw();