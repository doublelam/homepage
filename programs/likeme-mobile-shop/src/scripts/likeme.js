/**
 * Created by Hoofei.
 */

$(function() {
    'use strict';
    window.FastClick.attach(document.body);

    // ScrollTo
    jQuery.scrollto = function(scrolldom,scrolltime) {
        $(scrolldom).click( function(){
            var scrolltodom = $(this).attr('date-scroll');
            $(this).addClass('thisscroll').siblings().removeClass('thisscroll');
            $('html,body').animate({
                    scrollTop:$(scrolltodom).offset().top},scrolltime
            );
            return false;
        });
    };
    $.scrollto('.like>a',500);
    $.scrollto('.backtop',500);

    // Fixed Top
    $('.fixed-top').sticky({
        ARRY_FIXED_POSITION: [0, 0, 'auto', 0],
        PLACEHOLD: true
    });

    // Home News
    $('.news-list').bxSlider({
        mode: 'vertical',
        controls: false,
        pager: false,
        touchEnabled: false,
        speed: 300,
        pause: 3000
    });

    // Filters Dropdown
    $('.filters-dropdown').dropdown({
        ANIMATE: '.fadeIn quick'
    });

    // Item Pics Slider
    $('.home-slider .lm-slider,.item-pics .lm-slider').bxSlider({
        controls: false
    });

    // Toggle Content
    $('.toggle').click(function(){
        //get collapse content selector
        var collapse_content_selector = '#collapse';

        //make the collapse content to be shown or hide
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(0, 'linear', function(){
            if($(this).css('display')==='none'){
                toggle_switch.html('展开全部内容');
            }else{
                $('.toggle-text').hide();
            }
        });
    });

    // Item Share
    $('#share').modal({
        ANIMATE: '.fadeInUp quick',
        CSS_CLASS: '.modal-share',
        CSS_TOP: 'auto',
        CSS_BOTTOM: '0',
        CSS_MASK_OPACITY: 0.7,
        CLOSE_BTN: true,
        TXT_CLOSE_VAL: '取消',
        LOCK: true,
        beforeShow: function() {
            $(this.$modalContent).html($('.item-share').html());
            return true;
        }
    });

    // Weixin Share
    $('.J_modalShare').modal({
        CSS_CLASS: '.weixin-share',
        CSS_MASK_OPACITY: 0.92,
        HORIZONTAL: 'center',
        VERTICAL: 'top',
        OK_BTN: false,
        CLOSE_BTN: false,
        CANCEL_BTN: true,
        TXT_CANCEL_VAL: '知道了',
        LOCK: true,
        MASK: false,
        beforeShow: function() {
            $(this.$modalContent).html($('.share-weixin').html());
            return true;
        }
    });

    // Item Choose Color & Size
    $('#choose').modal({
        ANIMATE: '.fadeInUp quick',
        CSS_CLASS: '.modal-choose',
        CSS_TOP: 'auto',
        CSS_BOTTOM: '0',
        CSS_MASK_OPACITY: 0.5,
        CLOSE_BTN: true,
        LOCK: true,
        beforeShow: function() {
            $(this.$modalContent).html($('.item-prop').html());
            return true;
        },
        show: function() {
            $('.modal-choose .prop-choose .btn-prop').click(function(){
                $(this).siblings().removeClass('sel');
                $(this).addClass('sel');
            });
            $('[data-trigger="spinner"]').spinner();
        }
    });

    // Remove Cart
    $('.cart-list .remove').click(function(){
        $(this).parents('.list-item').remove();
        return false;
    });

    // Payment Choose
    $('.order-payment .payment-list li .radio').click(function(){
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    });

    // User Fav
    $('.btn-edit').click(function() {
        if ($(this).hasClass('doing')) {
            $(this).html('<i class="lm-icon icon-cog"></i> 编辑').removeClass('doing');
            $('.list-item .del').hide();
            $('.actions').addClass('lm-hide');
        } else {
            $(this).html('<i class="lm-icon icon-check"></i> 完成').addClass('doing');
            $('.list-item .del').show();
            $('.actions').removeClass('lm-hide');
        }
    });
    $('.items-list .list-item .del').click(function() {
        $(this).parents('.list-item').remove();
        return false;
    });

    // Footer always sticks to the bottom
    var footer = $('.sticky-bottom');
    if (footer.length > 0) {
        var docHeight = $(window).height();
        var footerHeight = footer.outerHeight();
        var footerTop = footer.position().top + footerHeight;
        if (footerTop < docHeight) {
            footer.css('margin-top', (docHeight - footerTop) + 'px');
        }
    }


    function agentToggle(){
        function toggleWithArguments(clickdom,listdom){
            $(listdom).hide(); 
            $(clickdom).click(function(){
              $(this).next(listdom).slideToggle(50);   
            });
        } 
        toggleWithArguments(".me-agent",".me-agent-list");

    }
    agentToggle();
});
