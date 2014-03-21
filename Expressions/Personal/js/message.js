/**
 * Created by Tanisha Larkins on 3/9/14.
 */

//this program is to take down a message
    //Prompt user to enter their name as the person recording the message
var recorder = prompt("Please enter your name");
//Prompt user to enter in recipient's name

var recipient = prompt ("Please enter recipient's name");

var name = prompt("Callers name");
var phoneNumber =prompt ("Callers Phone number");
var message = prompt("Please enter message to recipient");

alert("The message " + message +" has been recorded for  "+ recipient + ".  The number to return this call is " + phoneNumber);
alert("Thank you " + recorder + "," + recipient + " Will get this message in a moment");