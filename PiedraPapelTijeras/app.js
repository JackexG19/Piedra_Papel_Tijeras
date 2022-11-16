const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";

const EMPATE = 0;
const GANO = 1;
const PERDIO = 2;

let jugando = false;

const btPiedra = document.getElementById("piedra");
const btPapel = document.getElementById("papel");
const btTijeras = document.getElementById("tijeras");
const txtOpc = document.getElementById("txtOpc");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

btPiedra.addEventListener("click", () => {
    play(PIEDRA);
});
btPapel.addEventListener("click", () => {
    play(PAPEL);
});
btTijeras.addEventListener("click", () => {
    play(TIJERAS);
});

function play(opcJugador) {
    if(jugando) return;

    jugando = true;

    userImg.src = "img/" + opcJugador + ".svg";

    txtOpc.innerHTML = "Pensando";

    const interval = setInterval(function(){
        const opcMaquina = calcOpcMaquina();
        machineImg.src = "img/" + opcMaquina + ".svg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const opcMaquina = calcOpcMaquina();
        const result = calcResult(opcJugador, opcMaquina);

        machineImg.src = "img/" + opcMaquina + ".svg";

        switch (result) {
            case EMPATE:
                txtOpc.innerHTML = "FUE UN EMPATE!";
                break;
            case GANO:
                txtOpc.innerHTML = "GANASTE!";
                break;
            case PERDIO:
                txtOpc.innerHTML = "PERDISTE!";
                break;
        }
        jugando = false;
    }, 2000);
}

function calcOpcMaquina() {
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

function calcResult(opcJugador, opcMaquina) {
    if (opcJugador === opcMaquina) {
        return EMPATE;

    } else if (opcJugador === PIEDRA) {

        if (opcMaquina === PAPEL) return PERDIO;
        if (opcMaquina === TIJERAS) return GANO;

    } else if (opcJugador === PAPEL) {

        if (opcMaquina === TIJERAS) return PERDIO;
        if (opcMaquina === PIEDRA) return GANO;

    } else if (opcJugador === TIJERAS) {

        if (opcMaquina === PIEDRA) return PERDIO;
        if (opcMaquina === PAPEL) return GANO;

    }
}