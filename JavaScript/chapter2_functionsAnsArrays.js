//add or require prompt library
// const prompt = require('prompt-sync')();
//create function
// function addEvenNumber(number) {
//     let N = number;
//     let sum = 0;

//     for (let i = 1; i <= N; i++){
//         if (i %2== 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

    // let N = parseInt(prompt("input N \n"));
    // let sumOfEvenNumber = addEvenNumber(N);
    // console.log(sumOfEvenNumber);
    // console.log(N+N);

// const prompt = require('prompt-sync')();

// function addTwo(a,b) {
    // console.log(a,b);
//     return a+b;
// }

// let x= parseInt(prompt());
// let y=84;

// console.log(addTwo(x));
// console.log(addTwo(x,y));
// console.log(addTwo(x,y,8));


// print();
// console.log(j);
// function print() {
//     console.log(i);
//     var i=19;
// }
// var j=83;
// print();

// const a=28;
// function out() {
//     console.log(a);;
// }

// out();

// var addxy = function add (x,y) {
//     return x+y;
// }

// console.log(add(23,80));

// var add = function plus(a,b) {
//     return a+b;
// }
// var sub = function minus(a,b) {
//     return a-b;
// }

// var op=function operation(x,y,func) {
//     return func(x,y);
// }

// console.log(op(2,6,sub));


// var arr=[2,34,553,90];
// var arr= new Array(1,8,38,382,98,33);
// arr.push("ui");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// arr.unshift(42);
// console.log(arr[2]);
// console.log(arr[4]);
// arr.length=23;
// console.log(arr.length);
// arr[34]="full";
// console.log(arr);
// console.log(arr.length);
// console.log(arr.splice(1,1));
// console.log(arr.splice(5));
// console.log(arr.splice(3,1,24,53,64,64,66));

// var arr2=[33,44,55,66,77];
// console.log(arr.splice(2,1,arr2));

// console.log(arr);
// console.log(arr.length);

// var smallPart= arr.splice(2,3);
// console.log(smallPart);

// arr.splice(12,0,84,29);

// arr[2]=[3,5,6,24,2];
// console.log(arr);

// var array=new Array(24,429,482,48,33,53,62);
// function print(element) {
//     console.log(element);
// }
// array.forEach(print);

/*
function findInterest(p, r = 5, t = 1) {
    console.log("Interest over",t, "years is:", (p * r * t) / 100);
}
findInterest(1000); // Prints - Interest over 1 years is: 50
findInterest(1000, 7); // Prints - Interest over 1 years is: 70
findInterest(1000, 8, 2); // Prints - Interest over 2 years is: 160
*/

/*
// function add(a,b,c,...numbers) {
function add(...numbers) {
    // var sum = a + b + c;
    var sum=0;
    for (var i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
    }
    return sum;
    }
    // console.log(add(10, 20, 30, 40, 50));
    console.log(add());
    */

    /*
    var arr=[3,2,5,90];
    function duplicate(arr) {
        // var a= arr.concat(arr);
      return arr.concat(arr);
    }

    console.log(duplicate(arr));
    */

    /*
    var arr=[1,2,3,4];
    function rotateLeft(arr) {
        arr.push(arr.shift());
        // var startingElement=arr.shift();
        // arr.push(startingElement);
        return;
    }
    rotateLeft(arr);
    console.log(arr);
    */