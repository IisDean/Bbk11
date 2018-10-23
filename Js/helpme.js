/**
 * Created by IisDean on 2018/10/23.
 */

//  助力
$(".J-helpme-btn").on("click",function(){
    $.post('Bbk11/helpme',function(data){
        if( data.status == 1 ){
            alert();
        }else{
            alert(data.info);
        }
    });
});