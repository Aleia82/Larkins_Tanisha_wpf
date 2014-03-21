/**
 * Created by Tanisha Larkins on 3/20/14.
 */
// This is a script that will tell your future based on your input

var inputName = prompt("Hello!  My name is Wacko the wacky future telling computer.  Please enter you name");
alert(" Hello " + inputName + " it's nice to finally meet you in person");
var gender = prompt ("Please let me know if you are male or female");
var female;
var male;
alert ("Awww I see " + inputName + " you are a " + gender + ".");
var age = prompt (inputName +" if you would be so kind as to tell me your age...");



alert("It's coming clear...");

if(gender == "female" || gender == "FEMALE" || gender =="Female" ){
   if(age < 18){
       alert("Hit the books or you have no future");
   }else if (age >= 18 && age <30){
       alert("I see you with Many children. With a man named Hilbert living on the Coast of Cyber Island");
   }else if (age > 30 && age < 40 ){
       alert ("I see you with 7 children....Wait that's how many apple devices you will own!");
   }

}else if(gender == "male" || gender == "MALE" || gender =="Male"){
    if(age < 18){
        alert("Women like men who can code and change oil...you have to master at least one of them");
    }else if (age >= 18 && age <30){
        alert("I see you 9 children. With a woman named Suri living on the Coast of apple Island");
    }else if (age > 30 && age < 40 ){
        alert ("This is your future---hope you are happy!");
    }

}else{
    alert("You must be a robot or a Wacky computer too :)");
}
