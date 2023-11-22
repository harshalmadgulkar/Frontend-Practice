function displayImage(data) {
    $('<img>',{
        src:data.url,
    }).appendTo('#imageContainer'); 
}


$.ajax({
    url:'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    method:'GET',
    success: displayImage
});