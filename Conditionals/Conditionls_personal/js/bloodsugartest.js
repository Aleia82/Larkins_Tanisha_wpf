
// Created by Tanisha Larkins on 2/22/14.
// This file is to prompt user to perform certain test based on blood sugar level input
// Below is the variables for this scripts

// Blood sugar variables for the script

var sugarLevelHigh="Please take insulin";
var sugarLevelLow = "Please have something to eat";
// Alert giving discription about the program script

alert("Hello and welcome to Tanisha Larkins Blood Sugar Tester.  This Test will help you make a decision about what to do based on your blood sugar input");
//Prompting user to enter blood sugar value
var sugarLevel =prompt("Please enter your Sugar Level ");
//
var input;
if(input < 50){
    sugarLevelLow();
} else

if (input > 110){
    sugarLevelHigh();
}






