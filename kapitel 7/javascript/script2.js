// alert("Glädjens dag, det är fredag!")

// var namn = prompt("Vad heter du?");
// var ålder = prompt("Hur gammal är du?");
// alert("Hej " + namn + " Du är " + ålder + " år gammal");

// console.log("Det verkar funka det här!");

// Be användaren mata in 2 tal och skriv ut summan

// var number1 = prompt("Skriv ut ett tal:"); // Läser in som en string.
// var number2 = prompt("Skriv ut ett till tal:"); // Läser som en string.
// var summa = parseInt(number1) + parseInt(number2);
// alert("Summan är " +summa);

// Be användaren mata in sin ålder
// Och skriv ut ålder vid studenten 

// var ownage = prompt("Skriv din nuvarande ålder");
// var student = parseInt(ownage) + 1
// alert("DU KOMEMR VARA " +student+ " NÄR DU TAR STUDENTEN");
// document.write("Du är " +student+ " år gammal när du tar studenten");

var slumptal1 = Math.floor(Math.random() * 100);
var slumptal2 = Math.floor(Math.random() * 100);
var summa = parseInt(slumptal1) + parseInt(slumptal2);
console.log(slumptal1, slumptal2);

var gissning = prompt("Vad är summan av " +slumptal1+ " + " +slumptal2);
if (gissning == summa)
{
    document.writeln("Good job!");
}
else 
{
    document.writeln("You suck ass");
}