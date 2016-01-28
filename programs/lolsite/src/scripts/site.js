/**
 * Created by Hoofei.
 */

$(function() {
    'use strict';

    $('.nano').nanoScroller();

    $('select').fancySelect();

    $('.betting-box').collapse({
        query: '.betting-box-head',
        open: function() {
            this.slideDown(150);
            this.addClass('open');
        },
        close: function() {
            this.slideUp(150);
            this.removeClass('open');
        }
    });

});
