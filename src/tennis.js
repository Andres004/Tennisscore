class Tennis {
    constructor() {
        this.player1Points = 0;
        this.player2Points=0;
    }

    score()
    {
        const scoresNames = ["Love", "15", "30", "40"];
        let player1Score = scoresNames[this.player1Points] || "40";
        let player2Score = scoresNames[this.player2Points] || "40";

        if (this.player1Points >= 3 && this.player1Points === this.player2Points) 
        {
            return "Deuce";
        }

        if (this.player1Points >= 3 && this.player2Points >= 3) 
        {
            if (this.player1Points === this.player2Points + 1) 
            {
                return "Advantage for Player 1";
            }
            if (this.player2Points === this.player1Points + 1) 
            {
                return "Advantage for Player 2";
            }
        }
        
        if (this.player1Points >= 4 && this.player1Points >= this.player2Points + 2) {
            return "Game for Player 1";
        }

        if (this.player2Points >= 4 && this.player2Points >= this.player1Points + 2) {
            return "Game for Player 2";
        }

         if(this.player1Points == 4){
            return "Game for Player 1"
        }
         if(this.player2Points == 4){
            return "Game for Player 2"
        }
        return player1Score +" - "+ player2Score
    }


    player1Scores(){
       if (!this.score().includes("Game")) {
            this.player1Points++;
        }
    }
    player2Scores(){
        if (!this.score().includes("Game")) {
            this.player2Points++;
        }
    }}

export default Tennis;