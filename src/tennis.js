class Tennis {
    constructor() {
        this.player1Points = 0;
    }
    
    score(){
        let player1Score = "Love";
        if(this.player1Points == 1){
            player1Score= "15"
        }
        if(this.player1Points == 2){
            player1Score= "30"
        }
        if(this.player1Points == 3){
            player1Score= "40"
        }
        return player1Score+" - Love"
    }

    player1Scores(){
        this.player1Points++;
    }
}

export default Tennis;