##Memory Game Project

Beat the Clock Memory Game
This game tests your memory and challenges you to match the cards in as few moves as possible before the game clock runs out.
This project is part of the Udacity FEND Nanodegree program.
Was a real challenge for me 

You can play the game in your browser by clicking here : https://melsdesign.github.io/Udacity-Memory-Game-Project/

How to Play
Click here to load the game into your browser:https://melsdesign.github.io/Udacity-Memory-Game-Project/

The key to the game is to remember the card symbols and match the pairs in as few tries (moves) as possible.

Do the following:

The player flips one card over to reveal its underlying symbol.
The player then turns over a second card, trying to find the corresponding card with the same symbol.
If the cards match, both cards stay flipped over.
If the cards do not match, both cards are flipped face down.
Repeat until all cards are matched or the clock runs out.
Game Overview
The game consists of a deck with 8 matching pairs of cards, i.e. for a total of 16 cards. At the start of a new game, the following happens:

The Card Symbols array is shuffled, i.e. to add more variation between games.
8 card symbols are selected and then doubled.
The new deck is shuffled.
Each card's symbol is updated in its respective card object.
Once the player clicks on a card, the game clock starts counting down in seconds. During play, the player selects a pair of cards. The game checks if the pair's symbols match.

If yes, the following happens:

the cards are animated to visually alert the player of the match
points are awarded
the cards remain face up
If no, the following happens:

the cards are animated to visually alert the player of the mismatch
points may be deducted for consecutive misses
cards turned face down again
a star may be removed
The game score is based upon the player's performance. 

The player wins points when:

Matching a pair of cards or matching consecutive pairs of cards

I hope you enjoy playing
