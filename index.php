<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#333">
        <meta name="msapplication-navbutton-color" content="#333">

        <title>SoundAround</title>

        <link rel="stylesheet" href="dist/css/main.css">

        <link rel="manifest" href="dist/js/manifest.json">

        <script type="text/javascript">
            const path = window.location.href;
        </script>
    </head>
    <body>
        <header class="header">

            <div class="top">
                <div class="left">
                    <button type="button" class="btn-cleared">
                        <i class="ion-android-menu"></i>
                    </button>
                </div>

                <div class="middle">
                    <h1 class="title-page">SoundAround</h1>
                </div>

                <div class="right">
                    <button type="button" class="btn-cleared">
                        <i class="ion-search"></i>
                    </button>
                </div>
            </div>

            <div class="bottom">
                <nav class="top-menu">
                    <ul class="wrap">
                        <span class="sublinhed"></span>
                        <li class="item active item-menu" data-class="itemTopMenu" data-target=".home" data-left="0">
                            <button type="button" class="link btn-cleared">
                                Home
                            </button>
                        </li>

                        <li class="item item-menu" data-class="itemTopMenu" data-target=".albuns" data-left="-100vw">
                            <button type="button" class="link btn-cleared">
                                Albuns
                            </button>
                        </li>

                        <li class="item item-menu" data-class="itemTopMenu" data-target=".profile" data-left="-200vw">
                            <button type="button" class="link btn-cleared">
                                Profile
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <section class="section-default">
            <div class="wrap wrap-pages">
                <!-- Aqui será incluido as páginas -->
                <?php include('pages/home.php');?>
                <?php include('pages/albuns.php');?>
                <?php include('pages/profile.php');?>
                <!-- Fim das páginas incluidas -->

                <!--  Player -->
                <?php include('pages/player.php');?>
            </div>
        </section>
    </body>
</html>

<script src="dist/js/libs/jQuery/jquery.min.js"></script>
<script src="dist/js/libs/jQueryMobile/jquery.mobile-1.4.5.min.js"></script>

<script src="dist/js/default/global.js"></script>
