class Tennis {
    constructor() {
        this.player1Points = 0;
        this.player2Points=0;
    }

    score()
    {
        let player1Score = "Love";
        let player2Score = "Love";

        if(this.player1Points == 1){
            player1Score= "15"
        } 
        if(  this.player2Points == 1){
            player2Score= "15"
        }
        if(this.player1Points == 2){
            player1Score= "30"
        }
        if(this.player2Points == 2){
            player2Score= "30"
        }
        if(this.player1Points == 3){
            player1Score= "40"
        }
        if(this.player2Points == 3){
            player2Score= "40"
        }

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
        this.player1Points++;
    }
    player2Scores(){
        this.player2Points++;
    }
}

export default Tennis;