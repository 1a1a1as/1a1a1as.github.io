$(function(){
    $(window).scroll(function(){
            if($(window).scrollTop()>500){
                $("#top").fadeIn(1000);
            }else{
                $("#top").fadeOut(1000);
            }
        })
        
        $('#top').click(function(){
            $('html , body').animate({scrollTop: 0},'slow');
        });

})