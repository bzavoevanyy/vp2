var SliderWidget = (function(){
    var _putValues = function($this) {

        var
            container = $this.siblings('.sidebar-price__wrap'),
            from = container.find('.sidebar-price__item-from'),
            to = container.find('.sidebar-price__item-to');
        var values = $this.slider('values');

        from.val(values[0]);
        to.val(values[1]);
    };
    var init = function() {

        $(".sidebar-price__slider").each(function(){
            var
                $this = $(this),
                min = $this.data('min'),
                max = $this.data('max');


            $(".sidebar-price__slider" ).slider({
                range: true,
                min: min,
                max: max,
                values: [ min, max ],
                slide: function() {
                    _putValues($this);
                },
                create: function() {
                    _putValues($this);
                }
            });
        })
    };
    return {
        init : init
    }
}());
var changeView = (function() {

    var init = function() {

        $('.sort-view__icon').first().addClass('active');

        $('.sort-view__link').on('click', function(e){
            e.preventDefault();

            if ($(this).data('view') == 'grids') {
                $('.products__list').removeClass('products__list-lines');
                $('.products__list').addClass('products__list-grids');
                $('.sort-view__icon.active').removeClass('active');
                $(this).find('.sort-view__icon').addClass('active');
                $('.pagination').css('margin-top','45px');
            }
            if ($(this).data('view') == 'rows') {
                $('.products__list').removeClass('products__list-lines');
                $('.products__list').removeClass('products__list-grids');
                $('.sort-view__icon.active').removeClass('active');
                $(this).find('.sort-view__icon').addClass('active');
                $('.pagination').css('margin-top','65px');
            }
            if ($(this).data('view') == 'lines') {
                $('.products__list').addClass('products__list-lines');
                $('.products__list').removeClass('products__list-grids');
                $('.sort-view__icon.active').removeClass('active');
                $(this).find('.sort-view__icon').addClass('active');
                $('.pagination').css('margin-top','65px');
            }
        })

    }
    return {
        init : init
    }
}());
var akkordeon = (function() {

    var init = function() {

        $('.side-bar__link').on('click', function(e) {
            e.preventDefault();
            var current = $(this).siblings('.side-bar__wrap').eq(0);
            if (current.hasClass('expanded')) {
                current.stop();
                current.slideUp();
                $(this).removeClass('side-bar__link-expand');
                current.removeClass('expanded');
            } else {
                current.stop();
                current.slideDown();
                $(this).addClass('side-bar__link-expand');
                current.addClass('expanded');
            }
        })

    }
    return {
        init : init
    }
}());

var resetCheckbox = (function() {

    var init = function() {

        $('.brends-reset').on('click', function(e) {
            e.preventDefault();
            var
                par = $(this).closest('.side-bar__wrap');
                checkboxs = par.find('input:checkbox');
            checkboxs.each(function() {
                $(this).removeProp('checked');
            })
        })
    };

    return {
        init : init
    }
}());

var slideShow = (function() {

    var init = function() {

        $('.product__slideshow-link').on('click', function(e) {
            e.preventDefault();
            $this = $(this);
            path = $this.find('img').data('big');
            bigblock = $this.closest('.product__slideshow-thumbs').siblings('.product__slideshow-block');
            bigimg = bigblock.find('.product__slideshow-img');
            bigimg.attr('src', path);

        })
    };

    return {
        init : init
    }
}());


$(document).ready(function(){

    SliderWidget.init();
    $('.sort-select__elem').select2({
        minimumResultsForSearch: Infinity
    });
    changeView.init();
    akkordeon.init();
    $('.attension-content').columnize({
        columns : 2
    });
    resetCheckbox.init();
    slideShow.init();
});