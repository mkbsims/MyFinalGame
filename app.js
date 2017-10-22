/*
 * Defines all the global variables.
 */
var cardPics = ["diamond", "diamond", "paper-plane-o", "paper-plane-o","anchor", "anchor", "bolt", "bolt", "cube", "cube", "leaf", "leaf", "bicycle","bicycle", "diamond", "diamond", "bomb", "bomb"],
  $deck = $('.deck'),
  matches = 0,
  moves = 0,
  $moveNum = $('.moves'),
  $starRating = $('i');

/*
* Defines the Shuffle function from http://stackoverflow.com/a/2450976
*/
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
* Defines the event listener for flipping and matching cards
*/
var cardListen = function() {
    //card listener for flipping cards//
    $deck.find('.card:not(".match, .open")').on('click' , function (){
      
    });
};

/*
* Defines the initialize game function.
*/
function gameInit () {
    var cardFace = shuffle (cardPics);
    $deck.empty();
    matches = 0;
    moves = 0;
    $moveNum.text ('0');
    //setting the stars back to all 3//
    $starRating.removeClass('fa-star-o').addClass('fa-star');
      for (var i = 0 ; i < cardFace.length ; i++ ) {
        deck.append ($('<li class = "card"><i class = "fa fa-' + cardFace [i] + '"></i></li>'))
      }
      //calls function for event listener for flipping the cards//
      cardListen();
};






/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
