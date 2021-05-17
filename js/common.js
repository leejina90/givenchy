// Language start
LanguageSetting();

function LanguageSetting() {
  $.lang = {};

  $.lang.ko = {
    // main_header
    0: "언어",
    1: "한국어",
    2: "영어",
    3: "문의",
    4: "로그인",
    5: "소개",
    6: "콜렉션",
    7: "무대",
    8: "모든 콜렉션",
  
    // main_footer
    9: "소개",
    10: "콜렉션",
    11: "모든 콜렉션",
    12: "무대",
    13: "언어",
    14: "한국어",
    15: "영어",
    16: "로그인",
    17: "검색",
    18: "문의",
  
    // index page
    19: '"여러 측면에서, 이번 컬렉션은 두 세계관 사이의 끊임없는 긴장감을 의미합니다. 하나는 어려운 상황들 속에서 개인적 의미를 찾는 것이고, 다른 하나는 앞으로의 전략보다 현재의 우리에게 충실하는 것입니다. 그래서 우리는 이번 컬렉션을 통해 정확성, 우아함, 화려함과 함께 현실 속의 감각을 이야기하고자 했습니다. 궁극적으로 우리에게 있어 패션은 단순히 재밌는 게임이 아니라 삶을 살아가고, 느끼고, 연결되는 방식이기 때문입니다. 마치 몸에 착 감기는 음악처럼, 하루하루의 감정을 가득 담아 매일을 기념하는 것이라고 생각합니다."',
    20: "지방시 크리에이티브 디렉터, 매튜 M.윌리엄스.",
    21: "윌리엄스의 Givenchy는 인류의 불완전한 아름다움과 함께 사치스러움과 금욕적이 뒤섞여 있습니다. 이 컬렉션은 한 번에 기념비적이고 친밀하며 착용자에게 존재감과 대담성을 부여하지만, 여전히 중심에 있는 사람의 느낌을 가진 컬렉션입니다. 궁극적으로, 그것은 시련을 초월합니다.",
    22: "더보기",
    23: "매튜 M의 첫번째 스테이지입니다. <br> 윌리엄스의 Givenchy는 윌리엄스의 Givenchy는 쇼 포맷을 활용하기 위해 내놓았으며, 극적 감각과 기념비적인 느낌을 더하면서도, 뚜렷한 친밀감과 착용자와의 궁극적인 관계를 결코 소홀히 하지 않았습니다.",
    24: "미니멀 테크노의 대부이자 디트로이트 사운드와 깊은 연관을 가진 음악가 로버트 후드의 독창적인 악보로 윌리엄스의 커미셔닝은 그의 미국 유산과 함께 목적적이고 감성적인 연결고리와 소리를 통한 대륙과 문화의 연결성을 보여줍니다.",
  
    // all_collection page
    25: "모두",
    26: "여성",
    27: "남성",

    // login page
    28: "로그인",
    29: "환영합니다. ",
    30: "로그아웃",

    // contact page
    31: "문의하기",
    32: "성함",
    33: "연락처",
    34: "이메일",
    35: "내용"
  };
  
  $.lang.en = {
    // main_header
    0: "Language",
    1: "Korean",
    2: "English",
    3: "CONTACT",
    4: "SIGN IN",
    5: "ABOUT",
    6: "COLLECTION",
    7: "STAGE",
    8: "ALL COLLECTION",
  
    // main_footer
    9: "About",
    10: "Collection",
    11: "All Collection",
    12: "Stage",
    13: "Language",
    14: "Korean",
    15: "English",
    16: "Sign In",
    17: "Search",
    18: "Contact",
  
    // index page
    19: '“In many ways, this collection is about a constant tension between two worlds. It’s about finding personal meaning in difficult circumstances; it’s about sincerity in what we do rather than strategy. We wanted to bring a sense of lived reality alongside precision, elegance and extravagance in the clothing and looks. Ultimately, fashion for us is a way of being, feeling and connecting rather than a game to be played. It’s almost like monumentalising the everyday, filling it with emotion – like music you can wear.”',
    20: "Matthew M. Williams",
    21: "In Williams’ Givenchy, there is a mix of lavishness and austerity, together with the imperfect beauty of humanity. It is a collection that is at once monumental and intimate, giving the wearer presence and audaciousness, yet still with a sense of a person at its centre with a tohell- with-it attitude. Ultimately, it is an offering that transcends troubled times.",
    22: "more view",
    23: "This is the first of Matthew M. <br> Williams’ Givenchy offerings to utilise the show format, adding to the sense of drama and monumentalism in the clothing, yet never neglecting its distinct intimacy and its eventual relationship with the wearer.",
    24: "With an original score by Robert Hood, one of the godfathers of minimal techno and a musician profoundly linked with the sound of Detroit, Williams’ commissioning displays his American heritage as well as a purposeful, emotional bridging and connecting of continents and cultures through sound.",
  
    // all_collection page
    25: "All",
    26: "WOMAN",
    27: "MAN",

    // login page
    28: "SIGN IN",
    29: "Wellcome ",
    30: "SIGN OUT",

    // contact page
    31: "CONTACT",
    32: "NAME",
    33: "PHONE",
    34: "E-MAIL",
    35: "MESSAGE"
  };
  
  function setLanguage(currentLanguage) {
    console.log("setLanguage", arguments);
    
    $("[data-langNum]").each(function() {
      var $this = $(this); 
      $this.html($.lang[currentLanguage][$this.data("langnum")]); 
    });	
  }  
  
  // 셀렉트박스 선택시 언어 변경
  $("#select").change(function() {
    $("#select option:selected").each(function() {
      var lang = $(this).data("lang");
      setLanguage(lang);
    });
  });
  
  // footer메뉴 클릭시 언어 변경
  $(".lang_btn").click(function() {
      var lang = $(this).data("lang");
      setLanguage(lang);
  });
}
// Language end

// responsive start
responsiveFunction();

function responsiveFunction(){
  $("#mobile_btn").click(function(){
    $("#main_header").css({
      "height":"100vh"
    });
    $("#top_menu").show();
    $("#gnb").show();
  
    $("#mobile_close_btn").show();
    $("#mobile_btn").hide();
  });
  
  $("#mobile_close_btn").click(function(){
    $("#main_header").css({
      "height":"80px"
    });
    $("#top_menu").hide();
    $("#gnb").hide();
  
    $("#mobile_close_btn").hide();
    $("#mobile_btn").show();
  });
}
// responsive end