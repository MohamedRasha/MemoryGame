# Memory Game Project


## Table of Contents

* Project Overview
* Game Instructions
* Build Considerations
* Specifications
* Acknowledgements


## Project Overview

This is a web browser version of the classic card game, Concentration. This project aims to demonstrate the skills I have learned so far in HTML, CSS and JavaScript. 

The project is available on GitHub, titled [Hollys-Memory-Game](https://github.com/hollyjordan13/Hollys-Memory-Game).

## Game Instructions

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:

The player flips one card over to reveal its underlying symbol.
The player then turns over a second card, trying to find the corresponding card with the same symbol.
If the cards match, both cards stay flipped over.
If the cards do not match, both cards are flipped face down.
The game ends once all cards have been correctly matched.

The key is to find all the matches in the shortest amount of time, in the fewest possible moves.

## Build Considerations

In the real-life game, players flip over cards to locate the pairs that match. The goal is to recreate this effect in this project. There are a couple of interactions that need to be considered:

- Flipping cards
- What happens when cards match
- What happens when cards do not match
- When the game finishes
- Resetting the game

## Specifications

### Game Behavior

**Memory Game Logic**

The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

**Congratulations Popup**

When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

**Restart Button**

A restart button allows the player to reset the game board, the timer, and the star rating.

**Star Rating**

The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1).

The number of moves needed to change the rating is up to you, but it should happen at some point.

**Timer**

When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.

**Move Counter**

Game displays the current number of moves a user has made.

### Interface Design

**Styling**

Application uses CSS to style components for the game.


### Documentation

**README**

A README file is included detailing the game and all dependencies.

**Comments**

Comments are present and effectively explain longer code procedure when necessary.

**Code Quality**

Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Acknowledgements

* [Udacity](https://www.udacity.com/), for creating this degree program, and providing me with education and endless support
* [JQuery](https://jquery.com/), for useful, time-saving shortcuts as well as help blogs
* [stackoverflow](https://stackoverflow.com/), for the collaborative forums and discussions which helped answer many of my questions
* [Mozilla Developer Network](https://developer.mozilla.org/en-US/), for so many resources and instructions

