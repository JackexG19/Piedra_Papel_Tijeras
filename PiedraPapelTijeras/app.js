const PIEDRA = "rock";
const PAPEL = "paper";
const TIJERAS = "scissors";

const EMPATE = 0;
const GANO = 1;
const PERDIO = 2;

let isPlaying = false;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", () => {
    play(PIEDRA);
});
paperBtn.addEventListener("click", () => {
    play(PAPEL);
});
scissorsBtn.addEventListener("click", () => {
    play(TIJERAS);
});

function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".svg";

    resultText.innerHTML = "Pensando";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".svg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".svg";

        switch (result) {
            case EMPATE:
                resultText.innerHTML = "FUE UN EMPATE!";
                break;
            case GANO:
                resultText.innerHTML = "GANASTE!";
                break;
            case PERDIO:
                resultText.innerHTML = "PERDISTE!";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERAS;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return EMPATE;

    } else if (userOption === PIEDRA) {

        if (machineOption === PAPEL) return PERDIO;
        if (machineOption === TIJERAS) return GANO;

    } else if (userOption === PAPEL) {

        if (machineOption === TIJERAS) return PERDIO;
        if (machineOption === PIEDRA) return GANO;

    } else if (userOption === TIJERAS) {

        if (machineOption === PIEDRA) return PERDIO;
        if (machineOption === PAPEL) return GANO;

    }
}