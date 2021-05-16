$(document).ready(function(){
    $.ajax({
        dataType: "json",
        url: "../js/info.json",
        mimeType: "application/json",
        success: function(data){
            $(".login_btn").click(function() {
                var userId = $("#user_id").val();
                var userPw = $("#user_pw").val();

                var filterId = data.filter(function(result){return result.id == userId});
                    
                if(filterId[0].id == userId) {
                    if(filterId[0].password == userPw) {
                        $(".login_wrap").hide();
                        $("#example").append(filterId[0].id + "님 방문을 환영합니다.");
                    } else {
                        alert("잘못된 비밀번호입니다.");
                    }
                } else {
                    alert("존재하지 않는 아이디입니다.");
                }
            });
        },
        error:function(request,status,error) {
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });
});

Kakao.init('88f672d21e8e76dac1aa41c4a83b634e'); //아까 카카오개발자홈페이지에서 발급받은 자바스크립트 키를 입력함
 
//카카오 로그인 버튼을 생성합니다. 
 
Kakao.Auth.createLoginButton({ 
    container: '#kakao-login-btn', 
    success: function(authObj) { //authObj가 참일때, 자료를 성공적으로 보냈을때 출력되는 부분
           Kakao.API.request({
 
               url: '/v1/user/me',
 
               success: function(res) { //res가 참일때, 자료를 성공적으로 보냈을때 출력되는 부분
 
                     console.log(res.id);//<---- 콘솔 로그에 id 정보 출력(id는 res안에 있기 때문에  res.id 로 불러온다)
 
                     console.log(res.kaccount_email);//<---- 콘솔 로그에 email 정보 출력 (어딨는지 알겠죠?)
 
                     console.log(res.properties['nickname']);//<---- 콘솔 로그에 닉네임 출력(properties에 있는 nickname 접근 
                             
                     // res.properties.nickname으로도 접근 가능 )
                     console.log(authObj.access_token);//<---- 콘솔 로그에 토큰값 출력
          
         
          var kakaonickname = res.properties.nickname;    //카카오톡 닉네임을 변수에 저장
          var kakaoe_mail = res.properties.kaccount_email;    //카카오톡 이메일을 변수에 저장함
         
          
 
          //카카오톡의 닉네임과,mail을 url에 담아 같이 페이지를 이동한다.
          window.location.replace("http://" + window.location.hostname + ( (location.port==""||location.port==undefined)?"":":" + location.port) + "/hansub_project/home?kakaonickname="+kakaonickname+"&kakaoe_mail="+kakaoe_mail);
      
                   }
                 })
               },
               fail: function(error) { //에러 발생시 에러 메시지를 출력한다.
                 alert(JSON.stringify(error));
               }
             });
