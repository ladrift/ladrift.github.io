
/**
 * Created by JOYyuan on 16/12/17.
 */

$(document).ready(function(){


    var countYi=0;
    var countYong=0;


    var sWidth=window.screen.availWidth;

    $(".right-img-yong").click(function(){

        countYong++;
        if(countYong==1){
            $(".left-img-yi").attr("src","css/selected.png");
            $(".btn-img").attr("src","css/orange.png")
        }
        if(countYong%2==1){
            if(sWidth<=330) {
                $(".left-img-yi").css("transform", "translateX(-10rem)");
                $(".right-img-yong").css("transform", "translateX(10rem)");
            }else if(sWidth>330&&sWidth<=380){
                $(".left-img-yi").css("transform", "translateX(-12rem)");
                $(".right-img-yong").css("transform", "translateX(12rem)");
            }else if(sWidth>380&&sWidth<=420){
                $(".left-img-yi").css("transform", "translateX(-15rem)");
                $(".right-img-yong").css("transform", "translateX(15rem)");
            }else if(sWidth>420&&sWidth<=480){
                $(".left-img-yi").css("transform", "translateX(-18rem)");
                $(".right-img-yong").css("transform", "translateX(18rem)");
            }else if(sWidth>480&&sWidth<=560){
                $(".left-img-yi").css("transform", "translateX(-21rem)");
                $(".right-img-yong").css("transform", "translateX(21rem)");
            }else if(sWidth>560&&sWidth<=640){
                $(".left-img-yi").css("transform", "translateX(-21rem)");
                $(".right-img-yong").css("transform", "translateX(21rem)");
            }else if(sWidth>640&&sWidth<=770){
                $(".left-img-yi").css("transform", "translateX(-27rem)");
                $(".right-img-yong").css("transform", "translateX(27rem)");
            }
        }else if(countYong%2==0){
            //判断偶数次点击
            if(sWidth<=330) {
                $(".left-img-yi").css("transform", "translateX(0rem)");
                $(".right-img-yong").css("transform", "translateX(0rem)");
            }else if(sWidth>330&&sWidth<=380){
                $(".left-img-yi").css("transform", "translateX(0rem)");
                $(".right-img-yong").css("transform", "translateX(0rem)");
            }else if(sWidth>380&&sWidth<=420){
                $(".left-img-yi").css("transform", "translateX(0rem)");
                $(".right-img-yong").css("transform", "translateX(0rem)");
            }else if(sWidth>420&&sWidth<=480){
                $(".left-img-yi").css("transform", "translateX(0rem)");
                $(".right-img-yong").css("transform", "translateX(0rem)");
            }else if(sWidth>480&&sWidth<=560){
                $(".left-img-yi").css("transform", "translateX(0rem)");
                $(".right-img-yong").css("transform", "translateX(0rem)");
            }else if(sWidth>560&&sWidth<=640){
                $(".left-img-yi").css("transform", "translateX(0rem)");
                $(".right-img-yong").css("transform", "translateX(0rem)");
            }else if(sWidth>640&&sWidth<=770){
                $(".left-img-yi").css("transform", "translateX(0rem)");
                $(".right-img-yong").css("transform", "translateX(0rem)");
            }

        }
    });
    $(".left-img-yi").click(function(){
        countYi++;
        if(countYi==1){
            $(".left-img-yi").attr("src","css/selected.png");
        }
    });
    $(".btn-img").click(function(){
        if(countYi>0||countYong>0){
            window.location.href="success.html";
        }

    });




});