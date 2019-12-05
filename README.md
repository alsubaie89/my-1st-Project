

<!-- write about your project features -->
# Project <Tic Tac Toe >
my project is about making a Tic Tc Toe game
The target is to let the user play the X or O signs
the first who complete 3 lines wins.


## design
 i started designing the prototype on paper and orgnise them 
then used Visual studio code as a platform.

here are lists of programing language i used
- Front End
    * Js 
    * Jquery
- Front End
    * HTML
    * CSS

I made the screen "responsive"  which can be viewd on mobile screen with max 576px. 
    
## About the game
its a Tic Tac Toe game designed with js and jquery, i added some interaction effects and attractive prototype to make the design looks simple and attractive.


## rules
    1. two player start the game and click a single cube one by one player"X" then player"O" and so on 
    2. the first who make tick 3 sign in one direction whether it's Vertical, Horizontal or Cross will receive an alert to say who is the winner.
    3. if both players played and ended-up with no victory, an alert would say the result is 'Tie' .

<!-- links -->
here is my game's link
[Tic Tac Toc](https://alsubaie89.github.io/my-1st-Project/)

i used a "swing" effect in animatoin.CSS
here is a link for animation resource i used with Animation.css
[animation resources](https://daneden.github.io/animate.css/)


<!-- images
![wireframe]() -->

---
## coding
my first phase after prototyping on HTML and CSS to to the desired design, i planned and
started my pseudocode by writing the process
at first
then jumped to programming
 i wrote my varuables  then i started my "if"conditions was 16 lines 
it worked perfectly but unfortunatly was too long and too much codeing as bellow
``` js 
let chWinnerX = function(){
  //rows
    if ($('#b1-1').text() == "X" && $('#b1-2').text() == "X" && $('#b1-3').text() == "X"){setTimeout(function(){ 
        swal('x win')} ,500 , winS.play())
    $('div.row div').off();  
}
```

after that i relised that i should simplify the if conditions so i re-coded againg from start and i made it 8 lines wich orked for both results "X" and "O" .
``` js
let chWinner = function(){

  
    if ($('#b1-1').text() == $('#b1-2').text() && $('#b1-2').text() == $('#b1-3').text() && $('#b1-1').text() != '') {
    setTimeout(function(){
        swal('the winner is '+ $('#b1-3').text() )} ,500 , winS.play())
        $('div.row div').off();
```



 the ninth line was for "Tie" as counter and set to === 9
 ``` js
 else if (counter === 9) {
            setTimeout(function(){
                swal('Tie')} ,500)
                $('div.row div').off();
            }

 ```

at last i had a 'Reset' button to replay again without refreshing the page
and now worked perfectly 


thanks for your time





# Project NAME_OF_GAME
## My Project Deployment
## Technologies used in the project
## wireframes and user stories.
## Planning and Development Process
# Describe any lines or function in the code
```js
```
## Challenges
# Unsolved problems which would be fixed in future iterations.