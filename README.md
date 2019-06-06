# unit-4-game
## Getting Started
A deployed version of the site can be found here https://drogalsky.github.io/unit-4-game/

## Usage
To start the game choose a jedi by clicking on them. After that click on an enemy to choose them (HINT: start with the lower attack enemies first). Press the fight button after choosing both an enemy and a jedi and keep keep pressing fight. Notice that your attack power increases after each attack. After defeating one of the enemies choose another and continue until you have none left and win! But if you run out of HP you will lose.

## Challenges
Learning to select an attribute with jQuery with a value of a variable was extremely complicated. I needed to choose things based on player input and to avoid writing repetative code I set a value property on each selectable object in the div. with jQuery I grabbed the div with the value of the selected image which was connected to an object stored when the character was selected. I concatted the variable into a selector so that the selector changed based on what the player had currently chosen.

There was also an issue getting the villians to show back up during the reset. It turned out to be that hiding the divs that had the villians in them and trying to get them back later proved difficult. So instead I changed it so that the villians were moved to a hidden div instead of they themselves being hidden. After that I just had to get them back out into the list.

I should note that I tried my hand to do object oriented programming vs my normal functional based programming approach. Honestly it wasn't too different except that I was able to keep a central object that had some buttons for people to interact with it. This was mostly to get out of my normal habits and think differently but I'm glad I did it.

## Authors
Daniel Rogalsky