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

        $('.sort-view__link').on('click', function(e){
            e.preventDefault();

            if ($(this).data('view') == 'grids') {
                $('.products__list').removeClass('products__list-lines');
                $('.products__list').addClass('products__list-grids');
            }
            if ($(this).data('view') == 'rows') {
                $('.products__list').removeClass('products__list-lines');
                $('.products__list').removeClass('products__list-grids');
            }
            if ($(this).data('view') == 'lines') {
                $('.products__list').addClass('products__list-lines');
                $('.products__list').removeClass('products__list-grids');
            }
        })

    }
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
});