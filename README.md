#Here you can see my Hangman project, which was created using mostly Vanilla JavaScript.

Firstly, I created 3 arrays: 1 for the alphabet, 1 containing the animal list and 1 for the vegetable list. Following this arrays,
I created 2 buttons, which when pressed will enable the player to choose a category: Animals or Veggies. 

Using event listeners, after pressing the button on the screen will appear the keyboard, the hangman image and the empty word. This was
achieved using a class which was added /removed from divs containing the property display :none !important (in this way i could override
the other classes).

Using DOM manipulation, the keyboard was created using a for loop, building buttons with the inner html being a letter from the alphatbet.
The buttons were appended  to a div, in this way i managed to save a lot of time by not creating each button one by one.

The most challenging part was to replace the correct letter in the correct spot. I achieved this by using a if else statement, which
first was veryfing if the random word included the picked letter. If the word included the letter, using a for loop, each letter
was verified and if the letters did coincide, it was replaced.


