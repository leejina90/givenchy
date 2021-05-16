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




