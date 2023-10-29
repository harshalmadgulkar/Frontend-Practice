// var obj1 = {};
// var obj2 = new Object();
// console.log(obj1);
// console.log(obj2);

/*
var student = { name: 'Harshal',
                rollNo: 5,
                marks: 84
            };
                
console.log(typeof student);
console.log(student);
console.log(student.marks);
student.marks=78;
console.log(student.sem);
student.sem=7;
console.log(student);
console.log(student["name"]);
console.log(student['sem']);

function printProperty(obj, prop) {
    console.log(obj[prop]);
}
printProperty(student, 'marks');

// delete student.rollNo;
delete student['marks'];
console.log(student);
*/
/*
var obj={
    p1:10,
}
// console.log(obj);
*/

/*
assign obj to obj2
var obj2=obj;
console.log(obj);
console.log(obj2);
obj2.p1=100;
console.log(obj);
console.log(obj2);
*/

/*
// assign same value as obj to obj2
obj2={
    p1:10
}
console.log(obj);
console.log(obj2);
console.log(obj==obj2);
*/

/*
//iterating over object
var student={
    name:'abc',
    rollNo:135,
    marks:90,
    '2':'two',
    '#5*jh': 'xu',
}


//method 1
for(var prop in student){
    //print only properties
    console.log(prop);
    //print properties along with it's value
    console.log(prop,student[prop]);
}
*/

/*
//method2
var keys=Object.keys(student);
console.log(keys);
*/

/*
//method3
var keys=Object.getOwnPropertyNames(student);
console.log(keys);
*/

/*
//Nested Objects
var student={
    name:'Harshal',
    prn:2067561612021,
    address:{
        city:'Sangola',
        pinCode:413307
    },
    sem:7
}
// console.log(student);
// console.log(student.address);
student['address']['pinCode']=83;
// student.address['city']='Pune';
student.address.city='Pune';
console.log(student);
console.log(student['address']);
/*

/*
Create and Modify Objects
Write a JavaScript program to:
1. Create a student object with three properties: name, age, and roll no.
2. Create an object address with two properties, City and state and add this object property to the student object.
3. Now delete the roll no property and print the object before and after deleting the property.
*/
// Write your code here:
/*
var student={
    name: "abc",
    age: 20,
 	rollNo: 33
}
// console.log(student.name);
// console.log(student.age);
// console.log(student.rollNo);
var address={
    city: "Sangola",
    state: "Maharashtra"
}

student.address=address;
// console.log(student.address);

console.log(student);
delete student.rollNo;
console.log(student);
*/

/*
//Print Keys
var obj={
    name: "abc",
    age: 20,
 	rollNo: 33
}
//method 1 is used
for(var i in obj){
    console.log(i);
}
*/


/*
//Iterating over array
let arr=[4,5,6];
//for printing keys/properties
for(var i in arr){
    console.log(i);
}
//for printing values
for(var i of arr){
    console.log(i);
}*/

/*-----------------------TIMING EVENTS---------------------- */
/*
function sayHello() {
    console.log('Hello');
}
setTimeout(sayHello, 3000);
//infinitely
// setInterval(sayHello, 2000);
*/

/*
var sec=1;
function afterSec() {
    console.log('After',sec);
    sec++;
    if(sec==6){
        clearInterval(id);
    }
}

var id=setInterval(afterSec, 1000);
*/

/*------------------CountDown Timer---------------------------------*/
/*
var i=10;
function printCount() {
    if(i==0){
        console.log('TimeUp');
        clearInterval(id);
    }
    else{
    console.log(i);
    i--;
    }
}
var id= setInterval(printCount, 1000);
*/

/*---------------------Passed by value & reference----------------------- */
// Only objects and arrays are passed by reference
// Other primitives are passed by value
/*
function f(a,b,c) {
    a=3;
    b.push('jay');
    c.first=false;
}

var x=4;
var y=['raj','shiva'];
var z={first:true};
f(x,y,z);
console.log(x,y,z);
*/

/*----------------Deep copy & Shallow copy-------------- */
/*
let a=4;
let b=a;    //value of a is assigned to b it's assigned by value because it is not array or object
console.log(a,b);
b=7;    //change value of b
console.log(a,b);
*/

/*
var susan={
    name:'susan',
    age:25,
}
console.log(susan);

var raj=susan;  //value assigned it's assigned by reference as it is object
console.log(susan);
console.log(raj);
raj.name='raj';
console.log(susan);
console.log(raj);
*/

/*Create Timer
Send Feedback
Write a program to print 1 after 1 sec, 2 after 2 sec till 5. Complete the given code to get the desired output as shown in the expected output.
*/
/*
function timer() {
    for(let i = 1; i<=5; i++){
        setTimeout(function() {
          console.log(i);
        },i*1000);
    }
}
timer();
*/
/*
let time=1000;
for(let count=1;count<=5;count++){
    setTimeout(() => {
        console.log(count);
    }, time);
    time+=5000;
}
*/

/*
Property Exists
Send Feedback
Implement a function propertyExists(obj, path) that takes two arguments - an object and a path (string). It returns ‘False’ if the property is null or it doesn’t exist for that object, otherwise it will return the value of the property for that object.
Note: Properties can have single character only. So, path can be a string with concatenation of many properties.
Sample Input :
1  {"a":{"b":"dadsa"}} ac
Expected Output :
false
Sample Input :
2
{"a":{"b":"dadsa"}} ac
{"a":{"b":"dadsa"}} ab
Expected Output :
false
dadsa
*/
/*
function propertyExists(obj,path) {
    // Write logic here
  var input = obj;
  for (var i of path) {
    input = input[i];
    if (!input) {
      return false;
    }
  }
  return input;
}

var output=propertyExists({"a":{"b":"dadsa"}} ,'ac')
var output=propertyExists({"a":{"b":"dadsa"}} ,'ab')
console.log(output);
*/

