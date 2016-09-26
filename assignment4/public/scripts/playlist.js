var templateSource = document.getElementById('results-template').innerHTML,
    template = Handlebars.compile(templateSource),
    resultsPlaceholder = document.getElementById('results'), //get results and put in a space for them to go when you actually get them
    playingCssClass = 'playing', //class to document the state of the music
    audioObject = null;

//connecting to Spotify via their search playlist endpoint
var getThosePlaylists = function (playlistId, callback) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search?type=playlist&/' + playlistId,
        success: function (response) {
            callback(response);
            console.log('response');
        }
    });
};
//connect to spotify search endpoint, use function (query) for searching for albums
var searchThePlaylists = function (query) {

    $.ajax({
        url: 'https://api.spotify.com/v1/search', 
        data: {
            q: query,
            type: 'playlist'
        },
        success: function (response) {
            resultsPlaceholder.innerHTML = template(response);
            console.log(response);
        }
    });

};
//music stuff
results.addEventListener('click', function(e) {
    var target = e.target;
    if (target !== null && target.classList.contains('coverart')) {
        if (target.classList.contains(playingCssClass)) {
            audioObject.pause();
        } else {
            if (audioObject) {
                audioObject.pause();
            }
            getThosePlaylists(target.getAttribute('data-playlist-id'), function(data) {            
                audioObject = new Audio(data.tracks.items[0].preview_url);
                audioObject.play();
                target.classList.add(playingCssClass);
                audioObject.addEventListener('ended', function() {
                    target.classList.remove(playingCssClass);
                });
                audioObject.addEventListener('pause', function() {
                    target.classList.remove(playingCssClass);
               });
            });
        }
    }
});
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchThePlaylists(document.getElementById('query').value);
}, false);