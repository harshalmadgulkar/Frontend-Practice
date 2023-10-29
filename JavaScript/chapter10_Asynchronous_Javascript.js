/*
var x = new Promise(() => {})
console.log(x);
*/
/*
function greet(name, callback) {
    console.log(`Hi ${name}`);
    callback();
}
function askQuestion() {
    console.log('How are you?');
}

greet('John', askQuestion);
*/


/*
x((a,b,c) => { return a+b+c }, 2, 3, 6);
  

    function x(callback, a, b, c) {
    let str = ""
    setTimeout(() => {
      str += "x"
    });
  
    str += callback(a, b, c)
    console.log(str)
  }
  */

  /*
  const delay = (time) => {
    return new Promise((resolve,reject) => {
      setTimeout(resolve,time)
    })
  }
   
  const counter = () => {
    let time = 0
    let pause = false
    return {
      start: async function start() {
        for(let i = time;;i++) {
          time++;
          if(pause) break
          console.log(i)
          await delay(1000)
        }
      },
   
      stop: function stop() {
        pause = true
      }
    }
  }
   
  let count = counter()
   
  count.start()
  setTimeout(() => {
    count.stop()
  },10000)
  */
/*
  function randomAsyncFunction() {
    const time = Math.floor(Math.random * 100)
    const x = setTimeout(() => {
      console.log('finished!!')
    },time)
}
   
async function asyncWithCallback(callback) {
    randomAsyncFunction()
    setTimeout(() => {
        callback()
    },1000)
}
   
asyncWithCallback(() => {
    console.log("fsdfsa")
})
*/

function randomAsyncFunction() {
    const time = Math.floor(Math.random * 100)
    const x = setTimeout(() => {
      console.log('finished!!')
    },time)
  }
   
   
  async function asyncWithCallback(callback) {
    randomAsyncFunction()
    setTimeout(() => {
      callback()
    },1000)
  }
   
  asyncWithCallback(() => {
    console.log("fsdfsa")
  })
  