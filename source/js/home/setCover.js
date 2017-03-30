var homeSetCover = {

    getCover: function() {
        var src = $(this).attr('data-src');

        console.log(root+src);

        $('.home').css('background-image', 'url('+root+src+')');
    },

    ready: function() {
        $('[data-class="cover"]').click(homeSetCover.getCover);
    }
}

$(document).ready(homeSetCover.ready);
