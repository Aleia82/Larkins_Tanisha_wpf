//Created by Tanisha Larkins on 3/26/2014
//This is a script to form a mailing list based on user's input

function name(){
   var firstName = prompt("Please enter your Firstname");
    var confirmNameFirst = confirm("You entered in " + firstName + " .  Is this correct?");
    confirmNameFirst ? lastName: name();
   var lastName = prompt ("Please enter your Lastname");
    var confirmNameLast = confirm("You entered in " + lastName + " .  Is this correct?");
    confirmNameLast ? : lastName;

}
name();


function address(){
var homeAddress = prompt ("please enter your home address")
    var confirmAddress = confirm("You entered in " + homeAddress + " .  Is this correct?");
    confirmAddress ? null: address();
}
address();
function phoneNumber(){

}