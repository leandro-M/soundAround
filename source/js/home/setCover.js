var homeSetCover = {

    getCover: function() {
        var src = $(this).attr('data-src');

        if(src){
            $('.home').css('background-image', 'url('+root+src+')');
        } else {
            src = "dist/img/desert.jpg";
            $('.home').css('background-image', 'url('+root+src+')');
        }
    },

    ready: function() {
        $('[data-class="cover"]').click(homeSetCover.getCover);
    }
}

$(document).ready(homeSetCover.ready);
