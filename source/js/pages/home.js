function MySong() {

}

MySong.prototype.get = function(success, error) {
    $.ajax({
        type: 'GET',
        url: endpoints.mySongsService,
        error: error
    }).done(success);
};

function Metrics() {

}

const homeSection = (function() {

    var success = function(response) {
        $('.my-songs-service-not-available').hide();
        $('#mySongs').show();

        var songs = response;
        var html = '';

        songs.forEach(function(song, index) {
            html += '<div class="item" data-class="cover" data-src="' + song.photo + '">';
            html += '<figure class="photo"><img class="image" src="' + song.photo + '" alt=""></figure>';
            html += '<div class="description">';
            html += '<p class="title">' + song.title + '</p>';
            html += '<p class="artist">' + song.album + '</p>';
            html += '</div>';
            html += '<button type="button" class="btn-cleared btn-dropdown"><i class="ion-android-more-vertical"></i></button>';
            html += '</div>';
        });

        $('#mySongs').html(html);
    };

    var error = function() {
        $('#mySongs').hide();
        $('.my-songs-service-not-available').show();
    };

    return {
        ready: function() {
            $mySongs = new MySong();

            $mySongs.get(success, error);
        }
    }
})();

$(document).ready(homeSection.ready);