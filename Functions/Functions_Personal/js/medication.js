// Created on 3/26/2014 by Tanisha Larkins
//This is a script to  calculate the amount if medication a child is to be giving according to the child weight and dosage amount


var calculate;
calculate = function (medication1, medication2, childsWeight){
    var medication1 = prompt("Please enter in the value for the 1st medication");//medication variable for medication 1 and prompt to enter in information
    var medication2 = prompt("Please enter in the value for the ");//medication variable for medication 2 and prompt to enter in information
    var childsWeight = prompt("Please enter child weight in lbs");//child's weight variable and prompt to enter in information
    var totalMed = (medication1 * medication2);// total medication calculation of medication 1 and medication 2
    var WeightAndTotalMedCalm = (totalMed * childsWeight);
    var ccToOzConvert = (WeightAndTotalMedCalm * 240);
    var final = (.03 * ccToOzConvert);
    alert("Please give the child " + final + " oz of medications");
};

calculate();

