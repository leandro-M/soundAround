function Profile() {

}

Profile.prototype.get = function(success, error) {
    $.ajax({
        type: 'GET',
        url: endpoints.profileService,
        error: error
    }).done(success);
};

const profileSection = (function() {

    var success = function(response) {
        $('.profile-service-not-available').hide();
        $('#profile').show();

        var profile = response[0];

        $('#profile').find('img').attr('src', profile.photo);
        $('#profile').find('.info h2').html(profile.name);
        $('#profile').find('.info p').html(profile.email);
    };

    var error = function() {
        $('#profile').hide();
        $('.profile-service-not-available').show();
    };

    return {
        ready: function() {

            $profile = new Profile();

            $profile.get(success, error);

        }
    }
})();

$(document).ready(profileSection.ready);