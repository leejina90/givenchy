/* all_collection page */

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


/* login page */
$(function() {
    var $frm = $(".login_f");
    $frm.on("submit", function(e){
        e.preventDefault();
        var myData = $frm.serialize();

        $.ajax({
            type: "POST",
            url: $frm.attr("action"),
            data: myData,
            success:function(res) {
                if(res) {
                    var jsonData = JSON.parse(res);
                    var message = jsonData.user_name +
                    "(" + jsonData.user_id + ")" +
                    "님 반갑습니다";
                    $(".login_wrap").html(message);
                }
            }
        });
    });
});