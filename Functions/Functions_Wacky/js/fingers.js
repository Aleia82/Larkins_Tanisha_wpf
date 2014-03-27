/**
 * Created by Tanisha Larkins on 3/26/2014
 * Wacky script where user gets 10 chances to guess how many fingers computer is holding up
 */

var userName = prompt("Hello and welcome to Wacko the Wacky Computer Finger counting Game.  Please enter you name ");//this is the prompt for user to enter his or her name
alert("Hello " + userName + " it is very nice to meet you.  In order to play this game you must guess how many fingers I am holding up.  You will have 10 chances to guess.");//alert giving directions on how to play game
var fingers = prompt("Please enter the number of finger I am holding up.");
fingers=0; //Prompt or user to enter in guess on how many fingers computer is holding up

//function to calculate user's answer
function fingerCount(){
    if(fingers=0){
        //run this if fingers=0
        alert("Finally you realized I am a computer and have no fingers!");

    }else if(fingers=10){// else if condition for fingers variable equal to 10
        //run if fingers variable is equal to 10
        alert("Can you Type holding up 10 fingers?  yeah I didn't think so");

    }else if(fingers > 1 && fingers < 5){//else if condition with logical operator for fingers variable greater than 1 and less than 5
        //run if finger is greater than 1 and less than 5
        alert("hmmmmm not correct--Please try again")
    }else if (fingers > 5 && fingers < 10){
        alers ("")

    }
}

fingerCount();//calling fingerCount function

