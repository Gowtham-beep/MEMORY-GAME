Java Script Methods used are:
.querySelector()
.querySelectorAll()
.Math.random()
.length
createElement()
.setAttribute()
.append()
.getAttribute()
.alert()
.push()
setTimeout()
.removeEventListener()
.textContent


The code starts by adding an event listener to the "DOMContentLoaded" event, which ensures that the code runs only when the HTML document has finished loading.
An array called cardArray is defined, which contains objects representing different cards in the game. Each object has a name property representing the name of the card and an img property representing the path to the image of the card.
The cardArray is then shuffled randomly using the sort() method and a random number generator.
The code selects the HTML elements with the IDs "grid" and "result" using document.querySelector() and assigns them to the variables grid and result, respectively.
Variables cardschosen and cardschosenId are initialized as empty arrays, and cardswon is initialized as an empty array.
The createBoard() function is defined, which creates the grid of cards by looping over the cardArray and creating img elements for each card. The img elements have the "blank.png" image as their source and a "data-id" attribute set to the index of the card in the cardArray. An event listener is also added to each card element to call the flipCard() function when clicked.
The checkmatch() function is defined, which checks if the two cards chosen by the player match or not. It compares the cardschosenId array to check if the indices of the chosen cards are the same. If they are the same, it means the player clicked on the same card twice and a message is displayed. If the cardschosen array has matching card names, it means the player found a match and a message is displayed. The corresponding images of the matched cards are changed to the "white.png" image, the event listeners for those cards are removed, and the matched cards are added to the cardswon array. If the chosen cards don't match, a message is displayed and the images of the chosen cards are changed back to the "blank.png" image.
After each guess, the cardschosen and cardschosenId arrays are reset to empty arrays. The length of the cardswon array is logged to the console and displayed in the result element.
If the length of the cardswon array is equal to half the length of the cardArray, it means all the cards have been matched, and a message is displayed in the result element.
The flipCard() function is defined, which is called when a card is clicked. It retrieves the "data-id" attribute of the clicked card, adds the card name to the cardschosen array, adds the card index to the cardschosenId array, and changes the image of the clicked card to the corresponding image from the cardArray. If two cards have been chosen, a timeout of 500 milliseconds is set before calling the checkmatch() function.
Finally, the createBoard() function is called to initialize the game.



