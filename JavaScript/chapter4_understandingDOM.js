//using strict mode to get error if something is missing
"use strict"

var headings=document.getElementsByTagName('h1');
headings[0].style.backgroundColor = 'green';
headings[0].style.color= 'gray';
console.log(headings);
/*-------------For Button--------------*/

var helloBtn = document.getElementById('btn');
helloBtn.addEventListener('click',function () {
    alert('Hello External Js');
})

function say() {
    alert('Hello with Function');
}

var helloBtn = document.getElementById('btn');
helloBtn.addEventListener('click',say);

// Count by click rectangle

var number=0;
function increaseCount() {
    number++;
    count.innerText=number;
}

var box = document.getElementById('box');
var count = document.getElementById('count');

//mouseover and mouseout events
box.addEventListener('click', increaseCount);
box.addEventListener('mouseover',function(){
    console.log('mouseover');
})
box.addEventListener('mouseout',function(){
    console.log('mouseout');
})

//keypress event
// var search = document.getElementById('search');
// search.addEventListener('keypress',function () {
//     console.log('keypress');
// })

//keydown and keyup event
//keypress is combination od keydown and keyup

// document.addEventListener('keydown',function(){
//     console.log('documentKeydown')
// })

// document.addEventListener('keyup',function(){
//     console.log('documentKeyup')
// })

//detecting exact key
document.addEventListener('keypress',function(event){
    console.log('documentkeypress',event.keyCode);
    console.log('documentkeypress',String.fromCharCode(event.keyCode));
})

//Propogation of event
var outerDiv = document.getElementById('outerDiv');
var innerDiv = document.getElementById('innerDiv');

innerDiv.addEventListener('click',function(event){
    console.log('innerDiv');
    // event.stopPropagation();
})
outerDiv.addEventListener('click',function(){
    console.log('outerDiv');
    // event.stopPropagation();
})
document.addEventListener('click',function(){
    console.log('window')
})

