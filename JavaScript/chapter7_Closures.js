// var i = 10;
// function outer() {
//     var j = 20;
//     // console.log(i,j);
//     var inner = function(){
//         var k = 30;
//         console.log(i,j,k);
//         i++;
//         j++;
//         k++;
//     }
//     return inner;
// }

// var inner = outer();
// inner();
// inner = outer();
// inner();

// var multiply = function (x,y) {
//     return x*y;
// }

// var multiply = (x,y) => {return x+y};
// var print =()=> {console.log("print");};
// console.log(multiply(4,6));
// print();

console.log(
  (function (x, f = () => x) {
    var x;
    var y = x;
    x = 2;
    return [x, y, f()];
  })(1)
);