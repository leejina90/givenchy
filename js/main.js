// YTPlayer start
YTPlayerVideo();

function YTPlayerVideo() {
    jQuery( function() {
        jQuery( '#about_video' ).YTPlayer();
    });
    
    $("#about_video").data("property", {
        videoURL:'6PTWXlVQqHo',
        mute: true,
        showControls: true,
        useOnMobile: true,
        quality: 'highres',
        containment: 'self',
        loop: true,
        autoPlay: true,
        stopMovieOnBlur: false,
        startAt: 0,
        opacity: 1
    });
}
// YTPlayer end

// slick start
slickSlide();

function slickSlide() {
    $('.slick').slick({ 
        dots: true, //페이지 네비게이션 
        arrows: true, // next, prev 이동 버튼 
        autoplay: true, // 자동 넘김 여부 
        infinite: true, //반복설정 
        speed: 2000, //슬라이드 속도 
        autoplaySpeed : 3000, // 자동 넘김시 슬라이드 시간 
        pauseOnHover : true, // 마우스 hover시 슬라이드 멈춤 
        vertical : false, // 세로 방향 슬라이드 옵션 
        prevArrow : "<button type='button' class='slick-prev'><</button>", 
        nextArrow : "<button type='button' class='slick-next'>></button>", //화살표 커스텀 
        slidesToShow: 4, //보여질 슬라이드 수 
        slidesToScroll: 4, //넘겨질 슬라이드 수 
        responsive: [ // -> 반응형 옵션 
            { breakpoint: 1024, // 반응형 ~ 1024 
                settings: { 
                    slidesToShow: 3, 
                    slidesToScroll: 3
                } 
            }, { 
                breakpoint: 768,// 반응형 ~ 768
                settings: { 
                    slidesToShow: 2, 
                    slidesToScroll: 2 
                } 
            }, { 
                breakpoint: 480,// 반응형 ~ 480
                settings: { 
                    slidesToShow: 1, 
                    slidesToScroll: 1 
                } 
            }
        ] 
    });
}
// slick end


