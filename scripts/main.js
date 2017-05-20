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
            prevArrow: '<div class="arrow-wrap arrow-wrap-left"><i class="fa fa-chevron-left fa-3x" aria-hidden="true"></i></div>',
            nextArrow: '<div class="arrow-wrap arrow-wrap-right"><i class="fa fa-chevron-right fa-3x" aria-hidden="true"></i></div>',
            responsive:[
                {
                    breakpoint: 1260,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});
feed.run();

//smooth scrolling
$('.nav a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});