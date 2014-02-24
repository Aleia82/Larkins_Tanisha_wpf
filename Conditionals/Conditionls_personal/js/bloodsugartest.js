
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


//  this is the is the coding and result for the coding input

if (sugarLevel<50)
{
    alert (sugarLevelLow);
}
else if (sugarLevel>110)
{
    alert(sugarLevelHigh);
}
else
{
    alert("You blood sugar is fine.  Continue to monitor yourself");
}






