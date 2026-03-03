import Tennis from "./tennis.js";

const btnP1 = document.querySelector("#btn-p1");
const btnP2 = document.querySelector("#btn-p2");
const divMarcador = document.querySelector("#marcador-div");

const juego = new Tennis();

// Verificación inicial
console.log("Botón 1 encontrado:", btnP1);
console.log("Botón 2 encontrado:", btnP2);

btnP1.addEventListener("click", (event) => {
    event.preventDefault(); // Por si acaso están dentro de un form
    juego.player1Scores();
    const resultado = juego.score();
    console.log("Resultado P1:", resultado);
    divMarcador.innerHTML = "<p>" + resultado + "</p>";
});

btnP2.addEventListener("click", (event) => {
    event.preventDefault();
    juego.player2Scores();
    const resultado = juego.score();
    console.log("Resultado P2:", resultado);
    divMarcador.innerHTML = "<p>" + resultado + "</p>";
});