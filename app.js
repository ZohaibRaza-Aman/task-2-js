// ==========  Code.9 prompt  =========

var name = prompt ('what is your name', 'zohaib');
console.log(name);

var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);
console.log(spec);

var numberOfCats = prompt("How many cats?",'5');
var numberWithoutString = Number(numberOfCats);
var tooManyCats = numberWithoutString +1;
console.log(tooManyCats);

var FistPerson = +prompt ('10','10');
var SecondPerson = +prompt ('20','20');
var ThirdPerson = +prompt ('15','15');
var FourthPerson = +prompt ('12','12');
var totalValue = +FistPerson +SecondPerson +ThirdPerson +FourthPerson -47;
console.log(totalValue);
// =======  totalValue is 10  ========

          // =======   Code.10 if statements   =======

var age = 18;

 if(age = 15){
    console.log('Not allow')}


 var x = prompt("Where does the Pope live?");
 if (x === "Vatican") {
 alert("Correct!");
 }

var correctAnswer = "Vatican";
x = correctAnswer
if (x === correctAnswer) {
alert("Correct!");
}

let DeletePost = confirm('Do you want to delete this post');
if(DeletePost){
    console.log('Your post has been delete succesfully');
}
else{
    console.log('Your post has not been deleted');
}

// =======   Code.11 Comparison operators   =======



var fullName = "Mark Myers"
if(fullName === "Mark" +" "+ "Myers"){
console.log(fullName)
}


var firstName = "Mark";
var lastName = "Myers"
var fullName = "Mark Myers"; 
if(fullName === firstName + " " + lastName){
    console.log("inside if ",fullName)
}

var materialCost = 81.50 
var laborCost = 135
if(totalCost = materialCost + laborCost){
    console.log(totalCost)
}
if(totalCost === 81.50 + 135){
    console.log("inside",totalCost)
}

// ======   All the conditions   =======

var a = 1 
          // is greater than
if (1 > 0){
    console.log(true)
}else{
    console.log(false)
}
        // is less than
if (0 < 1){
    console.log(true)
}else{
    console.log(false)
}
      // is greater than or equal to
if (1 >= 0){
    console.log(true)
}else{
    console.log(false)
}
if (1 >= 1){
    console.log(true)
}else{
    console.log(false)
}
      // is less than or equal to
if (0 <= 1){
    console.log(true)
}else{
    console.log(false)
}
if (1 <= 1){
    console.log(true)
}else{
    console.log(false)
}

    //  Not Equal 

var yourTicketNumber = 487208
    if (yourTicketNumber !== 487208) {
         alert("Better luck next time.");
         }else{
            alert("congratulations you win")
         }

    //   =======   Code.12  if...else and else if statements  =========

var x = prompt("Where does the Pope live?");
if (x !== "Vatican") {
alert("Correct!");
} 

var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
alert("Correct!");
}
if (x !== "Vatican") {
alert("Not answer!")
}

if (x === "Vatican") {
alert("Correct!");
}
else {
alert("Wrong answer");
}

// =======     Code.13 Testing sets of conditions    =======
        
var a = true;
var b = false;
var c = true;
// || or with type

if (a === b || a === c){
    console.log('YES');
}
else{
 console.log('NO');
}

var a = true;
var b = false;
var c = true;
// && with type

if (a === b && a === c){
    console.log('YES');
}
else{
 console.log('NO');
}
var aboveage = 50
if (aboveage > 65 || aboveage < 21 && res === "U.S."){
    console.log('yes')
}else{
    console.log("No")
}


// ======     Code.14 if statements nested    =======

var ageIs = 40
var check = false

if((ageIs === 35 || ageIs === 25) && ageIs === 41) {
    console.log("allow")
}else{
    console.log("Not allow")
}

var MaxAge = 30
var MinAge = 15
var AllowAge = 18
if(AllowAge >= MinAge){
    if(AllowAge <= MaxAge){
        console.log("Allow to under age");
    }else{
        console.log("You are too old")
    }
}

// var x = 1
// var y = 2
// var a = 4
// var b = 4
// var c = 0
// var d = 1
// g = x
// e = a

// if(x === y || a === b) && c === d) {
// g = h;
// }
// else {
// e = f;
// }
