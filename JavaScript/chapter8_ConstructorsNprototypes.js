/*
var raj={
    name:'Raj',
    greet:function () {
        console.log('Hello',this.name);
    }
}

raj.greet();
var localAskFunc = raj.greet;
localAskFunc();
*/

/*
const billy = {
    name: "Billy Jol", 
    outer: function() {
         function inner(){
         console.log(this);
       }     
       inner();
    }
  }
  billy.outer();
  */

/*
  var person={
    name:'John',
    ask:function () {
        console.log(this)
    }
  }
  new (person.ask.bind(person))();
  */
/*
const john = {
    name:  "John",
    greet: function(){
      console.log("Hello! My name is " + this.name) ;
    }
}
const CN = {
  name: "Coding Ninjas",
  printName: function(){
    console.log(this) ;
  }
};
CN.printName.bind(john)();
john.greet.bind(CN)();
*/

/*
function User(name) {
  this.isAdmin = false;
}
var user = new User("James");
console.log(user);
*/

/*
function Vehicle(numWheels, price) {
  this.numWheels=numWheels;
  this.price=price;
  this.getPrice=function () {
    return this.price;
  }
}
var vehicle1= new Vehicle(2, 10000);

console.log(vehicle1);
console.log(vehicle1.getPrice());
*/

/*
function Sample(name) {
  this.name=name;
  this.getThis=function () {
    console.log(this);
  }
}
var obj1=new Sample('John');
var obj2=new Sample('John');

console.log(obj1.getThis==obj2.getThis);
console.log(obj1.getThis===obj2.getThis);

console.log(obj1.getThis()==obj2.getThis());
console.log(obj1.getThis()===obj2.getThis());
*/

/*
function Vehicle(numWheels, price) {
  this.numWheels=numWheels;
  this.price=price;
}

Vehicle.prototype.getPrice = function () {
  return this.price;
}
var vehicle1= new Vehicle(2, 10000);
var vehicle2 = new Vehicle(4, 72982);

console.log(vehicle1);
console.log(vehicle1.getPrice());
console.log(vehicle2);
console.log(vehicle2.getPrice());
*/

/*
function Vehicle(numWheels, price) {
  this.numWheels=numWheels;
  this.price=price;
}

Vehicle.prototype.getPrice = function () {
  return this.price;
}
Vehicle.prototype.color = "black";
var vehicle1 = new Vehicle(2,1000);
var vehicle2 = new Vehicle(4, 2000);

console.log(vehicle1);
console.log(vehicle1.__proto__);
console.log(vehicle2);
console.log(vehicle2.__proto__);
console.log(Vehicle.prototype);

console.log(vehicle1.color);
console.log(vehicle2.color);
vehicle1.color = "white";
console.log(vehicle1.color);
console.log(vehicle2.color);

console.log(vehicle1.hasOwnProperty('color'));

console.log(vehicle1);
console.log(vehicle1.__proto__);
console.log(vehicle2);
console.log(vehicle2.__proto__);
*/

/*
Question Assesment Practice
printDetails()
Follow the steps given below to produce the desired result.
1. Fix the code below by deleting the printDetails() function from the Student object and adding it to the Student prototype object. 
2. Then create 4 new instances of the Student object by setting the id, name, club values to (1, “Raj”, “Cricket”), (2, “Rohan”, “Dance”), (3, “Rita”, “Basketball”) and (4, “Reema”, “Music”). 
3. Now create an array of these 4 objects.
4. Run a loop on the array you created and call each object's printDetails() function.
Expected Output:

1 'Raj' 'Cricket'
2 'Rohan' 'Dance'
3 'Rita' 'Baasketball'
4 'Reema' 'Music'

Given code to change

function Student(id, name, club){
  this.id = id ;
  this.name = name ;
  this.club = club ;
  this.printDetails = function(){
      console.log(this.id, this.name, this.club);
  }
}
*/

/*
function Student(id, name, club){
  this.id = id ;
  this.name = name ;
  this.club = club ;
}

Student.prototype.printDetails = function(){
  var str = this.id+" " + this.name+ " " + this.club;
  return str;
}

var s1 = new Student(1,"Raj", "Cricket");
var s2 = new Student(2,"Rohan", "Dance");
var s3 = new Student(3,"Rita", "Basketball");
var s4 = new Student(4,"Reema", "Music");

var arr = [s1,s2,s3,s4];
// console.log(arr);

for(var i=0; i<arr.length; i++){
  console.log(arr[i].printDetails());
}
*/

/*
console.log(Object.prototype);
var obj = new Object();
console.log(Object.prototype.isPrototypeOf(obj));
console.log(Object.getPrototypeOf(obj));
*/

class Person {
  constructor(name) {
      this.name = name;
  }
  get name() {
      return this._name;
  }
  set name(value) {
      this._name = value;
  }
  }
  var person = new Person("James");

  // console.log(person.name);
  // person.name="Jones";
  // person.name();
  // person._name="Cena";
  console.log(person);
  // person.name='Bond';
  // console.log(person);