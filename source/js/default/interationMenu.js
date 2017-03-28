var interationMenu = {
    setPosLeft: function() {

        $('[data-class="itemTopMenu"]').removeClass('active');
        $(this).addClass('active');

        var posLeft = $(this).offset().left;

        $('.sublinhed').css('left', posLeft);
    },  

    ready: function() {
        $('[data-class="itemTopMenu"]').click(interationMenu.setPosLeft);
    }
}

$(document).ready(interationMenu.ready);
