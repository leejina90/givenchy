// imageFilter start
imageFilter();

function imageFilter() {
    $(document).ready( function() { 
        $('.portfolio_item_wrap').isotope({ itemSelector: '.portfolio_item', }); // filter items on button click 
    
        $('.btn_set').on( 'click', 'li', function() { 
            var filterValue = $(this).children().attr('data-filter'); 
    
            $('.portfolio_item_wrap').isotope({ filter: filterValue }); 
            $('.btn_set li').removeClass('on'); $(this).addClass('on'); 
        });
    });
}
// imageFilter end
