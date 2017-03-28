var pagesInteration = {

    loader: function() {

    },

    initialPage: function() {
        $.ajax({
            type: 'POST',
            url: root + 'pages/home.html',

            error: function () {
                alert('error');
            },
            beforeSend: function () {
            },
            success: function (retorno) {
                $('.section-default').html(retorno);

                setTimeout(function() {
                    $('.pages-default').removeClass('hidden');
                },100);
            }
        });
    },

    getPages: function() {

        var target = $(this).attr('data-target');

        $.ajax({
			type: 'POST',
			url: root + 'pages/' + target,

			error: function () {
				alert('error');
			},
			beforeSend: function () {
			},
			success: function (retorno) {
                $('.section-default').html(retorno);

                setTimeout(function() {
                    $('.pages-default').removeClass('hidden');
                },100);
			}
		});
    },

    ready: function() {

        $('[data-class="itemTopMenu"]').click(pagesInteration.getPages);

        pagesInteration.initialPage();
        pagesInteration.loader();
    }
}

$(document).ready(pagesInteration.ready);
