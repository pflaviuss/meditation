# meditation 
Made this meditation app while getting back at learning, after a quite long break.
Besides of the html and css code, I am going to write down every single thing that I make in javascript to try to understand better what I am doing, while following along the tutorial of @developedbyed on youtube. 
///
Firstly, I am starting the javascript code by writing down a function called app, which is gonna be basically the main function, that is going to hold all the funcions needed for the app to work. 

I started by writting down all the variables that I am going to work with in the function, then started for each song that I click on, to select the video and song provided in the HTML code and play it. 

Then I kinda the same with the timeSelect, where I choose from the HTML options (2min, 5min, 10min) displaying the duration in minutes by dividing it by 60.

After that, the function checkPlAying checks if the song is playing or not and selects from the svgs of playing and pause.

After that I add an eventListener to the volume variable, that allows us to change the volume properly. 

Then it's time to update the underneath time by substracting the fakeDuration to the currentTime, and also animate the text. 

And finally, the last thing made was finishing after the timer is over.


    