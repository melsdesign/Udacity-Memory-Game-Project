/*
 * Create a list that holds all of your cards
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
//array that holds my cards
let myCards = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o", "fa-anchor", "fa-anchor", "fa-bolt", "fa-bolt", "fa-cube", "fa-cube", "fa-leaf", "fa-leaf", "fa-bicycle", "fa-bicycle", "fa-bomb", "fa-bomb"];


let openCard = []; //defines cards
let moves = 0; // no of moves
let matchFound = 0; //no of matches found
let startGame = false; //check when first card is open
let starRating = "3"; // star rating

// set timer with easyTimer by albert gonzales
 var timer = new Timer();
    timer.addEventListener("secondsUpdated", function (e) {                   
   $('#timer').html(timer.getTimeValues().toString());
});

// Shuffle cards (function from http://stackoverflow.com/a/2450976)
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

//create each cards HTML and add it to the page

function createHTML() {
  let cardList = shuffle(myCards);
  cardList.forEach(function(card) {
    $(".deck").append('<li><i class="card fa ' + card + '"></i></li>');
  })
}

// toggle card and show them on the board
function toggleCard() {
  // Show cards when clicked
  $(".card").on("click", function() {
    if ($(this).hasClass("open show")) { return; }
    $(this).toggleClass("flipInY open show");
    openCard.push($(this));
    startGame = true; {
     if (startGame = true){   //when clicked timer starts
        timer.start(); }
      else (startGame === false) 
   	 }
    //If cards open check match
    if (openCard.length === 2) {
      if (openCard[0][0].classList[2] === openCard[1][0].classList[2]) {
      openCard[0][0].classList.add("bounceIn", "match");
      openCard[1][0].classList.add("bounceIn", "match");
      $(openCard[0]).off('click');
      $(openCard[1]).off('click');
      matchFound += 1;
      moves++;
      removeOpenCards();
      findWinner();
      } else {
      // If classes are not mathcing adds "noMatch" class
      openCard[0][0].classList.add("shake", "noMatch");
      openCard[1][0].classList.add("shake", "noMatch");
      
      // Removes "show" and "open" class
      setTimeout(removeClasses, 1100);
      // if classes are not mathcing resets openCard.length to 0
      setTimeout(removeOpenCards, 1100);
      moves++;
      }
    }
  updateMoves();
  })
}

// Update the game moves
function updateMoves() {
  if (moves === 1) {
    $("#movesText").text(" Move");
  } else {
    $("#movesText").text(" Moves");
  }
  $("#moves").text(moves.toString());

  if (moves > 0 && moves < 16) {  // gives star rating according the no of moves ,removes the class
    starRating = starRating;
  } else if (moves >= 16 && moves <= 20) {
    $("#starOne").removeClass("fa-star");
    starRating = "2";
  } else if (moves > 20) {
    $("#starTwo").removeClass("fa-star");
    starRating = "1";
  }
}


// Open pop up when game is complete(pop up winner from www.w3schools.com)
function findWinner() {
      
  if (matchFound === 8) {
        timer.pause();

    var modal = document.getElementById("winner-popup");
    var span = document.getElementsByClassName("close")[0];

    $("#total-moves").text(moves);
    $("#total-stars").text(starRating);
    $(".minutes").text(timer.getTimeValues().minutes);
    $(".seconds").text(timer.getTimeValues().seconds);
    
    modal.style.display = "block";
    
  // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

   $("#play-again").on("click", function() {
       location.reload()
   });
    
   clearInterval(timer);
  }
}

// function which resets Card length
function removeOpenCards() {
  openCard = [];
}

// funtion to make cards dissapear which got a different class than "match"
function removeClasses() {
  $(".card").removeClass("show open flipInY bounceIn shake noMatch");
  removeOpenCards();
}

// Disable clicks
function disableClick() {
 openCard.forEach(function (card) {
   card.off("click");
  })
}


// functions used
shuffle(myCards);
createHTML();
toggleCard();

// reset  function 
function restartGame() {
  $("#restart").on("click", function() {
      location.reload()
  });
  }

restartGame();



/** set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
