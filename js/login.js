// login start
loginFunction();

function loginFunction(){
    $.ajax({
        dataType: "json",
        url: "../js/info.json",
        mimeType: "application/json",
        success: function(data){
            $("#login_btn").click(function() {
                var userId = $("#user_id").val();
                var userPw = $("#user_pw").val();

                var filterId = data.filter(function(result){return result.id == userId});
                    
                if(filterId[0].id == userId) {
                    if(filterId[0].password == userPw) {
                        $("#login_wrap").hide();
                        $("#logout_wrap").show();
                        $("#logout_wrap h1").append("WELLCOME " + '"' + filterId[0].id + '"');
                    } else {
                        alert("Wrong Password");
                    }
                } else {
                    alert("Unknown ID");
                }
            });
        },
        error:function(request,status,error) {
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });

    $("#logout_btn").click(function() {
        $("#login_wrap").show();
        $("#logout_wrap h1").empty();
        $("#logout_wrap").hide();
    });
}
// login end

// kakaoLogin start
Kakao.init('88f672d21e8e76dac1aa41c4a83b634e');

Kakao.Auth.createLoginButton({ 
    container: '#kakao-login-btn', 
    success: function(authObj) { 
        Kakao.API.request({
            url: '/v1/user/me',
            success: function(res) { 
                console.log(res.id);
                console.log(res.kaccount_email);
                console.log(res.properties['nickname']);
                console.log(authObj.access_token);
                var kakaonickname = res.properties.nickname;
                var kakaoe_mail = res.properties.kaccount_email;

                //카카오톡 닉네임, mail을 url에 담아 같이 페이지를 이동.
                window.location.replace(
                    "http://" 
                    + window.location.hostname 
                    + ( (location.port==""||location.port==undefined)?"":":" 
                    + location.port) 
                    + "/hansub_project/home?kakaonickname="
                    + kakaonickname
                    + "&kakaoe_mail="
                    + kakaoe_mail
                );
            }
        })
    },
    fail: function(error) { 
        alert(JSON.stringify(error));
    }
});
// kakaoLogin end