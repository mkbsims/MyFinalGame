/*
 * Defines all the global variables, including the list of card pictures
 */
var cardPics = ["diamond", "diamond", "paper-plane-o", "paper-plane-o","anchor", "anchor", "bolt", "bolt", "cube", "cube", "leaf", "leaf", "bicycle","bicycle", "diamond", "diamond", "bomb", "bomb"];
var deck = $('.deck');  //converts the deck class in the HTML to an object in JavaScript for manipulation//
var matches = 0; //sets matches to 0 //
var moves = 0; // sets moves to 0 //
var moveNum = $('.moves'); // converts the class moves in the HTML to an object in JavaScript for manipulation //
var starRating = $('i'); //converts the i tag in the HTML to a object in JS //


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
* Defines the initialize game function. Steps: Cards are shuffled, the deck is removed of
* current children, the move and matches counters are set to 0, converts the moveNum to text
* that can be used not HTML, resets the stars back to all 3 filled in, and resets the
* deck with the shuffled images face down, is ready to look for mouse actions as
* defined by cardListen function already defined
*/
function gameInit () {
    var cardFace = shuffle (cardPics);
    deck.empty();
    matches = 0;
    moves = 0;
    moveNum.text ('0');
    starRating.removeClass ('fa-star-o'). addClass ('fa-star');
      for (var i = 0 ; i < cardFace.length ; i++ ) {
        deck.append ($('<li class = "card"><i class = "fa fa-' + cardFace [i] + '"></i></li>'))
      }
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
