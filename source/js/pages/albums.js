function Album() {

}

Album.prototype.get = function(success, error) {
    $.ajax({
        type: 'GET',
        url: endpoints.albumsService,
        error: error
    }).done(success);
};

const albumsSection = (function() {

    var success = function(response) {
        $('.albums-service-not-available').hide();
        $('#albums').show();

        var albums = response;
        var html = '';

        albums.forEach(function(album, index) {
            html += '<div class="item">';
            html += '<figure class="photo"><img class="image" src="' + album.photo + '" alt=""></figure>';
            html += '<div class="description">';
            html += '<p class="name">' + album.title + '</p>';
            html += '</div>';
            html += '</div>';
        });

        $('#albums').html(html);
    };

    var error = function() {
        $('#albums').hide();
        $('.albums-service-not-available').show();
    };

    return {
        ready: function() {
            $albums = new Album();

            $albums.get(success, error);
        }
    }
})();

$(document).ready(albumsSection.ready);