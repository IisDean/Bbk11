/**
 * Created by IisDean on 2018/10/23.
 */

var setTimer;

function dropGiftBox(){
    var num = 0;
    var $wrap = $(".page-container");
    setTimer = setInterval(function(){
        if( num >= 101 )clearInterval(setTimer);
        var left = Math.ceil( Math.random() * (90 - 10) + 10  );
        var h = $wrap.height() + 100;
        var $giftBox = $('<div class="ui-abs ui-full-img gift-box" style="left: '+ left +'%;"><img src="Images/gift_box.png"></div>');
        $wrap.append($giftBox);
        $giftBox.animate({
            'top': h+'px'
        },3000,function(){
            $giftBox.remove();
        });
        num++;
    },300);
}
dropGiftBox();

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

