$(document).ready(function(){
    // GO FORWARD
    $('.next').on('click', function(){
        console.log('clicked');
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    // GO BACKWARDS
    $('.prev').on('click', function(){
        console.log('clicked');
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});
