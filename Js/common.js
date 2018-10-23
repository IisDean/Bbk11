/**
 * Created by IisDean on 2018/10/23.
 */
var $ruleBtn = $(".J-rule-btn"),
    $rulePop = $(".J-rule-pop"),
    $closeBtn = $(".J-close-btn"),
    $shareBtn = $(".J-share-btn"),
    $sharePop = $(".J-share-pop");
$ruleBtn.on("click",function(){
    $rulePop.show();
});

$closeBtn.on("click",function(){
    $(this).parents(".act-pop").hide();
});

$shareBtn.on("click",function(){
    $sharePop.show();
});