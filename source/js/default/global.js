var globalFunctions = {

    //Função para mover a linha vermelha do menu
    setPosLeft: function() {

        $('[data-class="itemTopMenu"]').removeClass('active');
        $(this).addClass('active');

        var posLeft = $(this).offset().left;

        $('.sublinhed').css('left', posLeft);
    },

    //Função para quando houver o swipe ir a pagina home
    swipeToHome: function() {
        $('.wrap-pages').css('left', '0');

        $('[data-class="itemTopMenu"]').removeClass('active');
        $('[data-target=".home"]').addClass('active');

        var posLeft = $('[data-target=".home"]').offset().left;
        $('.sublinhed').css('left', posLeft);

    },

    //Função para quando houver o swipe ir a pagina album
    swipeToAlbum: function() {
        $('.wrap-pages').css('left', '-100vw');

        $('[data-class="itemTopMenu"]').removeClass('active');
        $('[data-target=".albuns"]').addClass('active');

        var posLeft = $('[data-target=".albuns"]').offset().left;
        $('.sublinhed').css('left', posLeft);

    },

    //Função para quando houver o swipe ir a pagina profile
    swipeToProfile: function() {
        $('.wrap-pages').css('left', '-200vw');

        $('[data-class="itemTopMenu"]').removeClass('active');
        $('[data-target=".profile"]').addClass('active');

        var posLeft = $('[data-target=".profile"]').offset().left;
        $('.sublinhed').css('left', posLeft);

    },

    //Função para quando houver o click ir a pagina especifica que o usuário selecionou
    getPages: function() {
        var $target = $(this).attr('data-target');

        var left = $(this).attr('data-left');
        $('.wrap-pages').css('left', left);
    },

    //Função para mudar o background-image
    getCover: function() {
        var src = $(this).attr('data-src');

        if(src){
            $('.home').css('background-image', 'url('+path+src+')');
        } else {
            src = "dist/img/desert.jpg";
            $('.home').css('background-image', 'url('+path+src+')');
        }
    },

    ready: function() {
        //Click do menu do topo e setar a posição da sub-linha
        $('[data-class="itemTopMenu"]').click(globalFunctions.setPosLeft);


        //Click do menu do topo e ir a pagina que selecionou
        $('[data-class="itemTopMenu"]').click(globalFunctions.getPages);

        //swipe left da tab HOME
        $(".home").on("swipeleft", globalFunctions.swipeToAlbum);

        //swipe left da tab ALBUM P/ PROFILE
        $(".albuns").on("swipeleft", globalFunctions.swipeToProfile);

        //swipe left da tab ALBUM P/ HOME
        $(".albuns").on("swiperight", globalFunctions.swipeToHome);

        //swipe left da tab PROFILE
        $(".profile").on("swiperight", globalFunctions.swipeToAlbum);

        //Click dos items e setar backgrounds
        $('[data-class="cover"]').click(globalFunctions.getCover);
    }
}

$(document).ready(globalFunctions.ready);
