$(document).ready(function () {
    

var searches = [];

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
        arrImg = response.data[i].images.fixed_width.url;
        var newContent = '';
        newContent = '<img src="' + arrImg + '">';
        $('.gif-area').html(newContent);
        console.log(newContent);
    }
});
}

function returnHistory() {
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
        arrImg = response.data[i].images.fixed_width.url;
        var newContent = '';
        newContent = '<img src="' + arrImg + '">';
        $('.gif-area').html(newContent);
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