const $ = require('jquery');// если будет нужен


const slider = require('./common/slider');
// const slider = require('./common/flipper');
function flipperInit(){
    var Flip = $('.flipper');

    $('.login-btn').on('click',function(e){
        e.preventDefault;
        
        if (Flip.hasClass('flipper--active')) {
            Flip.removeClass('flipper--active');
        } else {
            Flip.addClass('flipper--active');
        }
    });
    $('.authorization--index').on('click',function(e){
        e.preventDefault;

        if (Flip.hasClass('flipper--active')) {
            Flip.removeClass('flipper--active');
        } else {
            Flip.addClass('flipper--active');
        }
    });
}
flipperInit();

// slider();
