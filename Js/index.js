/**
 * Created by IisDean on 2018/10/23.
 */

//抽奖
$(".J-lottery-btn").on("click",function () {
    $(".J-lottery-pop").show();
});

//提交号码
$(".J-lotter-submit").on("click",function(){
    var name = $("#userName").val(),
        mobile = $("#userMobile").val();
    if( name == '' )return alert('请输入姓名');
    if( mobile.length != 11 )return alert('请输入正确的手机号码');
    $.post('Bbk11/index',{name: name,mobile: mobile},function(data){
        if( data.status == 1 ){
            alert();
        }else{
            alert(data.info);
        }
    });
});