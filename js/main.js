//Card Constructor
function Card (s,n) {
  var suit =  s;
  var number = n;
//Method to get number
  this.getNumber = function () {
    return number;
  };
//Method to get suit  
  this.getSuit = function () {
    return suit;
  };
//Method to get value of the card  
  this.getValue = function () {
      if (number > 11) {
        return 10;
      } else if (number === 1) {
        return 11;
      } else {
        return number;
    }
  };

}
//Deal the cards
var deal = function () {
  var ranNum = Math.floor(Math.random () * 13) + 1;
  var ranSuit = Math.floor(Math.random () * 4) + 1;
    return new Card (ranSuit, ranNum);
};

//Hand constructor
function Hand () {
  var card1 = deal();
  var card2 = deal();
  this.score = function () {
    var score1 = card1.getValue();
    var score2 = card2.getValue();
      return score1 + score2;
  };
}

//Hand
var playerOne = new Hand();
var dealer = new Hand();

//New Player
//Removed function and assigned a value to pickPlayer

  var newPlayer = ["Bob", "Joe", "Scarface", "Bugs"];
  
  var pickPlayer = newPlayer[Math.floor(Math.random() * 4)];
  
    $(document).ready(function(){
    $("#play").click(function(){
    $("#results").append(pickPlayer + " has a score of: " + playerOne.score() + "<br>" + "Dealer has a score of " + dealer.score() + " <br> <br>" + score());
    $(this).attr("disabled", true);
    $(this).val("No more clicking!");
    });
    $("#reset").click(function() {
    location.reload();
    $("#play").attr("disabled", false);
    $("#play").val("Click");
   });
  });

console.log("Player " + pickPlayer + " score: " + playerOne.score() + "\nDealer score: " + dealer.score());

function score () {
 
  if (playerOne.score() > dealer.score()) {
    return "Player " + pickPlayer + " wins";
  }
  else if (playerOne.score() < dealer.score()) {
    return "Dealer wins";
  }
  else {
    return "It's a tie!";
  }
};
