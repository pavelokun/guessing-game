class GuessingGame {
    constructor() {}
    
   setRange(min,max){                                     
        this.start = min;
        this.end = max;  
    }
    

    guess() {
        this.result = Math.round((this.start + this.end)/2);
        return this.result;        
    }

    lower() {        
        this.end = this.result;
    }

    greater() { 
        this.start = this.result;
    }
}

module.exports = GuessingGame;
