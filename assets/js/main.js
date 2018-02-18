
var gifSearch = $(this).attr("data-name");
var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=ZGm4k7GW4QuBRafZmsbPRaol8zqSLXZh&q=' + gifSearch + '&limit=25&offset=0&rating=PG&lang=en';

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
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
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

$('.history-btn').on('click', function() {
    console.log('hello');
});