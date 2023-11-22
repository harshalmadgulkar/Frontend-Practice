/*
function randomDogImage() {
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function () {
        // console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
        // console.log(responseJSON);
        var imageURL = responseJSON.message;
        // console.log(responseJSON.message);

        $('#dog-image').attr('src',imageURL);
    }

    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random');
    xhrRequest.send();
}
*/

function randomDogImage() {
    $.get('https://dog.ceo/api/breeds/image/random',function (data) {
        var imageURL = data.message;
        $('#dog-image').attr('src',imageURL);
    })
}

$('#fetch-dog-image-btn').click(randomDogImage);