/**
 * 解决IE8下Font Icon的Bug
 * https://github.com/twbs/bootstrap/issues/13863
 */

$(function() {
    'use strict';
    var $style;
    $style = $('<style type="text/css">:before,:after{content:none !important}</style>');
    $('head').append($style);
    return setTimeout(function() {
        return $style.remove();
    }, 0);
});
