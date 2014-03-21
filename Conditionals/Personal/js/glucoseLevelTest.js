/**
 * Created by Tanisha Larkins on 3/20/14.
 */


//This script is to give an alert based on users input glucose (blood sugar level)

//Result variables

var highGlucoseLevel = "Please Take Insulin";
var lowGlucoseLevel = "Please have something to eat";
var normalGlucoseLevel = "Your Glucose level is normal, have a great day!";
var abNormalGlucoseLevel = "Your Glucose level is elevated, Please monitor";

//user input prompt to enter in glucose level

var glucoseLevel =prompt("Please enter your blood sugar level.");

//if else conditions for test results

//Condition if glucose level is normal
if (glucoseLevel >= 70 && glucoseLevel<= 101){
    //this is the alert printout for normal glucose range of 70 to 101
    alert(normalGlucoseLevel);
    //condition if glucose is slightly elevated with a range between 101 and 120
}else if (glucoseLevel > 101 && glucoseLevel <= 120){
    //print out for slightly elevated glucose
    alert(abNormalGlucoseLevel);
    //condition for high glucose level between 120 and 250
}else if (glucoseLevel > 120 && glucoseLevel <= 250){
    //alert print out for actions t take foe high glucose level
    alert(highGlucoseLevel);
    //condition for other options which is to seek medical attention
}else if (glucoseLevel >=251 || glucoseLevel <= 50 ){
    alert("Please seek medical help");
}
