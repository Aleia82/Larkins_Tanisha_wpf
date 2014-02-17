// This is a scrip created by Tanisha Larkins to add of grocery items needed and calculate a total
var price = [1.00, 2.50, 3.00, 4.50, 5.00, 6.50];// these are the prices of the items

var water = price[0];// price of water as assigned in variable
var bread = price[1];//price of bread as assigned in variable
var frozenPizza = price[2];//price of frozen pizza as assigned in variable
var deliMeat = price[3];//price of Deli Meat as assigned in variable
var steak = price[4];//price of SSteak as assigned in variable
alert("Please calculate your Grocery bill");// This alert prompts user to start calculating the grocery bill

var waterCount =prompt("Please enter the number of gallons of water needed ");//Prompt to enter number of items; water
var breadCount =prompt("Please enter the number loafs of bread needed ");//Prompt to enter number of items; bread
var frozenPizzaCount =prompt("Please enter the number of froze pizza's needed");//Prompt to enter number of items; frozen pizza
var deliMeatCount =prompt("Please enter the number of pounds of deli meat needed");//Prompt to enter number of items; Deli Meat
var steakCount =prompt("Please enter the number of steaks needed");//Prompt to enter number of items; Steak
var totalGroceryBill  = (water*waterCount)+(bread*breadCount)+(frozenPizza*frozenPizzaCount)+(deliMeat*deliMeatCount)+(steak*steakCount);
alert(" Your total grocery bill is  $"+totalGroceryBill);// this is the total of the entire grocery bill based on user information entered and calculations performed
