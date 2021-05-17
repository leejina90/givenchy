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

/* contact page */

// emailJS start
$(document).ready(function() {
    emailjs.init("user_gh13cOJnGEFkJZOYwFUi0");	

    $('input[name=submit]').click(function(){
        var templateParams = {	
            name: $('input[name=name]').val(),
            phone: $('input[name=phone]').val(), 
            email : $('input[name=email]').val(),
            message : $('textarea[name=message]').val()
    };

    emailjs.send('service_e9jiwu5', 'template_8q34wit', templateParams)
     //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("메일을 성공적으로 전송하였습니다.");
            }, function(error) {
                console.log('FAILED...', error);
                alert("메일 전송을 실패하였습니다.");
            });
    });
});
// emailJS end

