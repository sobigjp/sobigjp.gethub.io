   $(function(){
            $(".iconfont").hover(function(){
                $(this).siblings(".qr").stop().fadeIn(1000);
               
            },function(){
                $(this).siblings(".qr").stop().fadeOut(500);
            });
            $(window).scroll(function(){
                var offset = $('html,body').scrollTop();
                // var width = $(window).width();
                
                if($(window).width() > 990&& offset >50){
                      $('.me').css({
                        "position":"fixed",
                        'top':'40px'
                      });
                      
                      
                }
                if(offset <50){
                    $('.me').css({
                        "position":"static",
                        
                      });
                }
            });
            
        })