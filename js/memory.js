class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {

    this.cards = this.cards.sort((a, b)=>{ return 0.5 - Math.random() })

  //   for (let i = this.cards.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     let temp = this.cards[i];
  //     this.cards[i] = this.cards[j];
  //     this.cards[j] = temp;
  // }
}

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1===card2){
      this.pairsGuessed++
      return true
    }
    return false
  }

  isFinished() {
    return (this.pairsGuessed===this.cards.length/2) ? true : false
  }
}




