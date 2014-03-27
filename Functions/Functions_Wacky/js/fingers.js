/**
 * Created by Tanisha Larkins on 3/26/2014
 * Wacky script where user gets 10 chances to guess how many fingers computer is holding up
 */

var userName = prompt("Hello and welcome to Wacko the Wacky Computer Finger counting Game.  Please enter you name ");//this is the prompt for user to enter his or her name
alert("Hello " + userName + " it is very nice to meet you.  In order to play this game you must guess how many fingers I am holding up.  You will have 10 chances to guess.");//alert giving directions on how to play game
var fingers = prompt("Please enter the number of finger I am holding up.");


//function to calculate user's answer
function fingerCount(){
    if(fingers == 0){
       alert("Finally you get it--I am a computer!  I don't have fingers."); //alert if variable fingers is equal to 0
    }else if (fingers == 10){
        alert("humans have 10 fingers--I am not a human!"); //alert if variable fingers is equal to 10
    }else if (fingers > 10){
        alert("What are you thinking?  You don't even have " + fingers + " fingers");//alert if  variable fingers is greater than 10
    }else if (fingers >= 1 && fingers <= 5){
       alert(" I am trying to think of what animal has " + fingers + " fingers....regardless I am not that animal!"); //alert if variable fingers is greater than 1 and less that 5
    }else if (fingers >5 && fingers < 10){
       alert( "Okay "+ userName + " that answer is not correct try again!"); //alert if variable fingers is greater than 5 and less than 10
    }

}
fingerCount(); //calling fingerCount function







