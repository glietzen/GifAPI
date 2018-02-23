$(document).ready(function () {    

//Holds previous searches
var searches = [];

//Adds prevoius searches as buttons to the history section
function addSearch() {
    $(".prev-searches").empty();
    for (var i = 0; i < searches.length; i++) {
        var history = $('<button>');
        history.addClass("btn btn-primary history-btn");
        history.attr("data-name", searches[i]);
        history.text(searches[i]);
        $(".prev-searches").append(history);
    }
}

function returnSearch() {
    $('.gif-area').empty();
    var gifSearch = $(".search-input").val().trim();
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=ZGm4k7GW4QuBRafZmsbPRaol8zqSLXZh&q=' + gifSearch + '&limit=15';
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(queryURL);
    console.log(response);
    console.log(response.data.length);
    for (var i =0; i < response.data.length; i++) {
        var still = response.data[i].images.fixed_width_still.url;
        var animate = response.data[i].images.fixed_width.url
        arrImg = still;
        var newContent = '';
        newContent += '<div class="gifAppend float-right"><img data-state="still" data-still="'+still+'" data-animate="'+animate+'" class="gifsImg" src="' + arrImg + '">';
        newContent += '<p>Rating: ' + response.data[i].rating + '</p></div>'
        $('.gif-area').append(newContent);
        console.log(newContent);
    }
});
}

function returnHistory() {
    $('.gif-area').empty();
    var gifSearch = $(this).attr("data-name");
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=ZGm4k7GW4QuBRafZmsbPRaol8zqSLXZh&q=' + gifSearch + '&limit=15&offset=0&rating=PG&lang=en';
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(gifSearch);
    // console.log(response);
    // console.log(response.data.length);
    for (var i =0; i < response.data.length; i++) {
        var still = response.data[i].images.fixed_width_still.url;
        var animate = response.data[i].images.fixed_width.url
        arrImg = still;
        var newContent = '';
        newContent += '<div class="gifAppend float-right"><img data-state="still" data-still="'+still+'" data-animate="'+animate+'" class="gifsImg" src="' + arrImg + '">';
        newContent += '<p>Rating: ' + response.data[i].rating + '</p></div>'
        $('.gif-area').append(newContent);
        console.log(newContent);
    }
});
}

//When search is executed
$('.search-btn').on('click', function() {
    event.preventDefault();
    var search = $('.search-input').val().trim();
    searches.push(search);
    addSearch();
    returnSearch();
});

function renderGIFs () {
    for (var i = 0; i < response.data.length; i++) {
    var newGifs = '';
    newGifs += '<img src="' + response.data[i].bitly_gif_url + '"';
    $(".gif-area").html(newGifs);
    }
}

$('.prev-searches').on('click', '.history-btn', returnHistory);

});

$(".gif-area").on("click", '.gifsImg', function() {


    var state = $(this).attr('data-state');
    console.log(state);

    if (state === 'still') {
      $(this).attr('src', $(this).attr('data-animate'));
      $(this).attr('data-state', 'animate');
    } else {
      $(this).attr('src', $(this).attr('data-still'));
      $(this).attr('data-state', 'still');
    }


});