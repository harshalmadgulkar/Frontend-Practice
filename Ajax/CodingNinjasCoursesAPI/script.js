var allData;
var fetchBtn = $('#fetchButton');
var fetchPage = $('#fetchPage');
var coursespage =$('#coursespage');

$.get("https://api.codingninjas.in/api/v3/courses", function (data, status) {
    allData = data.data.courses;
    console.log(allData);
});

fetchBtn.click(renderCards);

function renderCards(e) {
    e.preventDefault();
    fetchPage.hide();
    console.log("allData");

    for(let i=1; i<allData.length; i++){
        var imageURl = allData[i].preview_image_url;
        var courseName = allData[i].name;
        var courseLevel = allData[i].level;
        // console.log(imageURl,courseName,courseLevel);

        coursespage.append(
            `<div class="card" style="width: 18rem;">
            <img src="${imageURl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${courseName}</h5>
                <p class="card-text">${courseLevel}</p>
            </div>
            </div>`
            )
    }
}