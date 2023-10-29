var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];
function addBallToDOM(task) {
  $("#container").append('<div class="ball" style="background-color: ' + colors[Math.floor(Math.random()*15)] + '"></div>');
}

function randomColor() {
  var ballColors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];
  var num = Math.floor(Math.random() * 15);
  return ballColors[num];
}

$("#button").on('click', addBallToDOM);
