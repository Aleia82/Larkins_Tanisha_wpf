// This is a scrip created by Tanisha Larkins to add of grocery items needed and calculate a total
var price = [1.00, 2.50, 3.00, 4.50, 5.00, 6.50];
var water = price[0];
var bread = price[1];
var frozenPizza = price[2];
var deliMeat = price[3];
var steak = price[4];
alert("Please calculate your Grocery bill")
var waterCount =prompt("Please enter the number of gallons of water needed ");
var breadCount =prompt("Please enter the number loafs of bread needed ");
var frozenPizzaCount =prompt("Please enter the number of froze pizza's needed");
var deliMeatCount =prompt("Please enter the number of pounds of deli meat needed");
var steakCount =prompt("Please enter the number of steaks needed");
var totalGroceryBill  = (water*waterCount)+(bread*breadCount)+(frozenPizza*frozenPizzaCount)+(deliMeat*deliMeatCount)+(steak*steakCount);
alert(" Your total grocery bill is  $"+totalGroceryBill);
