//initialize the instafeed plugin
var feed = new Instafeed({
    get: 'user',
    accessToken: '4086633085.1677ed0.c75ab6c2f1ff4aae88e1cf7d3c9d7559',
    userId: '4086633085',
    resolution: 'low_resolution',
    template: '<div class="gal-img"><a href="{{link}}" target="_blank"><img src="{{image}}"/></a></div>',
    after: function(){
        //initialize the slider once the images are loaded
        $('#instafeed').slick({
            slidesToShow: 3,
            prevArrow: '<i class="fa fa-caret-square-o-left fa-3x gal-nav gal-nav-left" aria-hidden="true"></i>',
            nextArrow: '<i class="fa fa-caret-square-o-right fa-3x gal-nav gal-nav-right" aria-hidden="true"></i>',
        });
    }
});
feed.run();