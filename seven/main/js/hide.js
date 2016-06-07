function hideaction(){
  var   win = $(window),
        winWidth = win.width();
    
    if(winWidth <= 959){
         $('#main').find('.main_but').hide();
    }else if(winWidth >= 960){
         $('#main').find('.main_but').show();
    }
    win.on("resize",function(){
        if($(window).width() != winWidth){
            location.reload();
        };
        winResize();
    });
    
};
function familyhide(){
  var   win = $(window),
        winWidth = win.width();
    
    if(winWidth <= 639){
         $('#footer_top').find('.family').hide();
    }else if(winWidth >= 640){
         $('#footer_top').find('.family').show();
    }
    win.on("resize",function(){
        if($(window).width() != winWidth){
            location.reload();
        };
        winResize();
    });
    
};

function headpopup(){
  var   win = $(window),
        winWidth = win.width();
    
    if(winWidth <= 959){
         $('#popupBox2').hide();
    }else if(winWidth >= 960){
         $('#popupBox2').show();
    }
    win.on("resize",function(){
        if($(window).width() != winWidth){
            location.reload();
        };
        winResize();
    });
    
};
