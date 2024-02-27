// var comperision = 10 == 10 || 10 == 11 || 100 == 10;
// console.log(comperision);



var userName = prompt("student name?");
// var  = prompt("class");
var english = +prompt("your english marks");
var math = +prompt("your math marks");
var urdu = +prompt("your urdu marks");
var islamiat = +prompt("your islamiat marks");
var physics = +prompt("your physics marks");
var chemistry = +prompt("your chemistry marks");




var obtainMarks = english + math + urdu + islamiat + physics + chemistry ;

var totalMarks = obtainMarks/600*100;

console.log("Total marks = 600");
console.log("obtain marks = " + obtainMarks);

console.log(userName + " Your persentage is " + totalMarks + "% ");