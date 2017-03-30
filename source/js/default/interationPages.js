var pagesInteration = {

    loader: function() {

    },

    initialPage: function() {

    },

    getPages: function() {
        var $target = $(this).attr('data-target');

        var left = $(this).attr('data-teta');
        $('.wrap-pages').css('left', left);

        // $('.item-menu').each(function(i, value){
        //     console.log(value);
        //
        //     var target = $(value).attr('data-target')
        //     $(value).
        // });
    },

    ready: function() {

        $('[data-class="itemTopMenu"]').click(pagesInteration.getPages);

        pagesInteration.initialPage();
        pagesInteration.loader();
    }
}

$(document).ready(pagesInteration.ready);
