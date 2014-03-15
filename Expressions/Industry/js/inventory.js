/**
 * Created by Tanisha Larkins on 3/9/14.
 */

// This script is to calculate an inventory list

    // define variables in the  inventory list and prices

var price = [1.00, 2.50, 3.00, 4.50, 5.00];// these are the prices of the items
var pencils = price[0];// price of Pencils as assigned in variable
var pens = price[1];// price of Pens as assigned in variable
var paper = price[2];// price of Paper as assigned in variable
var staples = price[3];// price of Staples as assigned in variable
var tape = price[4];// price of tape as assigned in variable

//Prompts for user to enter in the amount of products being ordered

alert("Please enter Quantity to start calculating your inventory order");
// prompt to enter in the amount of pencils user would like to order
var pencilCount = prompt ("Please enter the amount of pencils you would like to order");
// prompt to enter in the amount of pens user would like to order
var penCount = prompt ("Please enter the amount of pens you would like to order");
// prompt to enter in the amount of paper user would like to order
var paperCount = prompt ("Please enter the amount of paper you would like to order");
// prompt to enter in the amount of staples user would like to order
var stapleCount = prompt ("Please enter the amount of staples you would like to order");
// prompt to enter in the amount of tape user would like to order
var tapeCount = prompt ("Please enter the amount of tape you would like to order");

//calculate total inventory bill by set price and user supply list input
var totalInventoryCost = pencils*pencilCount+pens*penCount+paper*paperCount+staples*stapleCount+tape*tapeCount;

//alert showing total inventory bill
alert ("You total inventory cost is $" +totalInventoryCost);









