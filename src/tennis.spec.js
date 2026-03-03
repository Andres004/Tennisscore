import Tennis from "./tennis.js";

describe("Tennis Scorer", () => {

    //Inicio del juego  =>   "Love - Love"
  it("toma en cuenta el caso de inicio del juego", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love - Love");
  });
  //Jugador 1 anota 1 vez jugador 2 en 0=> "15 - Love"
  it("jugador 1 anota jugador dos en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player1Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("15 - Love"); //Vericar    ->ASSERT
  });

  it("jugador 1 anota 2 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("30 - Love");
  });
  it("jugador 1 anota 3 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("40 - Love");
  });

   it("jugador 1 anota 4 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("Game for Player 1");
  });

  it("Jugador 2 anota 1 vez jugador 1 en 0 ", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Love - 15");
  });

  it("Jugador 2 anota 2 vez jugador 1 en 0 ", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Love - 30");
  });

  it("Jugador 2 anota 3 vez jugador 1 en 0 ", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Love - 40");
  });

  it("jugador 2 anota 4 veces jugador uno en cero", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Game for Player 2");
  });

  it("jugador 1 anota 3 veces y jugador 2 anota 3 veces => Deuce", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Deuce");
});


  it("si el juego está en Deuce y el jugador 1 anota => Advantage for Player 1", () => {
    let tennis = new Tennis();
    for (let i = 0; i < 3; i++) { tennis.player1Scores(); tennis.player2Scores(); }
    tennis.player1Scores();
    expect(tennis.score()).toEqual("Advantage for Player 1");
  });

  it("si el juego está en Deuce y el jugador 2 anota => Advantage for Player 1", () => {
    let tennis = new Tennis();
    for (let i = 0; i < 3; i++) { tennis.player2Scores(); tennis.player1Scores(); }
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Advantage for Player 2");
  });

  it("si el jugador 1 tiene ventaja y anota de nuevo => Game for Player 1", () => {
    let tennis = new Tennis();
    for (let i = 0; i < 3; i++) { tennis.player1Scores(); tennis.player2Scores(); }
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("Game for Player 1");
  });

   it("si el jugador 2 tiene ventaja y anota de nuevo => Game for Player 2", () => {
    let tennis = new Tennis();
    for (let i = 0; i < 3; i++) { tennis.player1Scores(); tennis.player2Scores(); }
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Game for Player 2");
  });

  it("vuelve a Deuce si el jugador con desventaja anota y empata en 4 o más", () => {
    let tennis = new Tennis();
    for (let i = 0; i < 3; i++) { tennis.player1Scores(); tennis.player2Scores(); }
    tennis.player1Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Deuce");
  });


});



