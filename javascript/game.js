const newPlayer = (sign) => {
    let _sign = sign;
    const getSign = _sign;
    return {getSign}
};

const displayController = (() => {

    const _player = newPlayer("X");
    const _computer = newPlayer("O");
    let getPlayer = _player;
    let getComputer = _computer;

    const add = (index, sign) => {
        let xAdd = document.querySelector(`[data-index="${index}"]`)
        xAdd.textContent = `${sign}`
        gameBoard.board[index] = sign;
    }

    const reset = () => Gameboard = Array[9];

    return {
        add,
        reset,
        getPlayer,
        getComputer
    }

})();

const gameBoard = (() => {

    let _board = Array(9);
    let board = _board;

    const shuffleIndices = (array) => {

        for (let i = array.length - 1; i > 0; i--) {

            let j = Math.floor(Math.random() * (i+1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;

    };

    const computerSelections = shuffleIndices(Array.from(Array(9).keys()));

    const htmlBoard = document.querySelectorAll('.position');
    htmlBoard.forEach(element => element.addEventListener('click', function(event) {

        let playerChoice = event.target.getAttribute('data-index');
        displayController.add(playerChoice,displayController.getPlayer.getSign);

        if (hasWon(board)){
            console.log("X Wins")
        }

        displayController.add(computerChoice(board),displayController.getComputer.getSign);

        if (hasWon(board)){
            console.log("O Wins")
        }

    }))

    const hasWon = (board) => {

        if (checkColumns(board) || checkRows(board) || checkDiagnal(board)){
            return true
        }
        return false
    }

    const checkColumns = (board) => {
        for (let i = 0; i < 3 ; i++){
            if ((board[i] == board[i+3]) && (board[i] == board[i+6])&& board[i] != null){
                return true
            }
        }
        return false
    }

    const checkRows = (board) => {
        for (let i = 0; i< 7; i=i+3){
            if ((board[i] == board[i+1]) && (board[i] == board[i+2] )&& board[i] != null){
                return true
            }
        }
        return false
    }

    const checkDiagnal = (board) => {
        if (((board[0] === board[4] === board[8]) || (board[2] === board[4] === board[6])) && board[4] != null){
            return true
        }
        return false
    }

    const computerChoice = (board) => {

        let i = 0;
        while ((board[computerSelections[i]] == "X" || board[computerSelections[i]] == "O") && i<9) {
            i++
        }
        return computerSelections[i]
    }


    return {
        board
    }


})();
