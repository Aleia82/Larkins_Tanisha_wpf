/**
 * Created by TANISHA LARKINS on 3/20/14.
 */

//This script is a simple home loan application where user must meet certain requirements to qualify and to determine loan amount.
//this script is broken into 2 parts.   Qualify and Loan amount.  Minimun credit score is 620

//The qualify portion is broken into 2 parts-if the person qualifies for loan they will automatically be sent to loan amount portion.
// If user does not qualify there will be a  mock test to increase score

//alert to inform user of minimum credit score.
alert ("Hello and welcome to MOCK MORTGAGE COMPANY.  This is a simple mortgage application for a new home.  Please press ok to start application.");
//variable to enter in 1st and last name
var inputName = prompt("Please enter your First and last Name");
//variablewith prompt to enter credit score.
var inputCreditScore = prompt("Hello " + inputName + " Please enter your current credit score");
//Variable alert for credit approval.  credit must be above 620 to display this message
var creditScoreAccepted = ("Congratulations, your credit score has been approved");
//variable for credit denial.  will deny any credit score 620 and under will display this message
var creditScoreDenied = ("Sorry your credit score does not meet the minimum requirments. Please return later.");

//If, else variable based on user credit score input
//if credit score is above 620
if(inputCreditScore > 620){
    alert(creditScoreAccepted);//display message is score is above 620
    var inputSalary = prompt("Hello " + inputName + " now that your credit score has been approved, please enter in your yearly salary.  Only use numbers 0-9"); //input user salary
    if(inputSalary < 15000){
        alert ("Sorry you do not meet the minimum Salary requirment.  Please check back later.")
    }else if(inputSalary > 15000 && inputSalary < 25000){
        alert("Congratulations " + inputName + " You qualify for a loan in the amount of $120,000.")// if salary between $15,001 and $25,000 then a loan for $120,000 is approved
    }else if(inputSalary > 25000 && inputSalary < 50000){
        alert("Congratulations " + inputName + " You qualify for a loan in the amount of $200,000.")// if salary between $25,001 and $50,000 then a loan for $200,000 is approved
    }else if(inputSalary > 50000 && inputSalary < 100000){
        alert("Congratulations " + inputName + " You qualify for a loan in the amount of $500,000.")// if salary between $50,000 and $100,000 then a loan for $500,000 is approved
    }else if(inputSalary > 100000){
        alert("Congratulations " + inputName + " Please see agent Tanisha Larkins for special mortgage rate and approval")// if salary is more than $200,000 user is prompted to see agent for special rates and  approval
    }

}else{
    alert (creditScoreDenied);// if credit score is less than 620 user will be promt to return later
}

