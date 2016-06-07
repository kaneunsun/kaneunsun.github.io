function menuBar(){
var gnb = $(".nav"),
    win = $(window),
    winWidth = win.width(),
    gnbDl = gnb.find(".mainMenu"),
    gnbDt = gnbDl.children('.link'),
    gnbDd = gnbDl.children('.menuDd');
    
var nav = $(".navBar"),
    win = $(window),
    winWidth = win.width(),
    mob = $('.mobnav'),
    mobDl = mob.find(".mobMenu"),
    mobDt = mobDl.children('.moblink'),
    mobDd = mobDl.children('.mobDd');
    
    gnbDd.hide();
    
    if(winWidth <= 959){
       mob.hide();
       nav.on("click",function(){
       $(this).toggleClass("open");
       $(".navBar").toggleClass("active"); 
       mob.stop().slideToggle();
       });
       mobDt.on("click",function(){
        $('.mobDd').stop().slideToggle();
        });
       
    }else if(winWidth >= 960){
        gnbDt.on("click",function(){
        $('.menuDd').stop().slideToggle();
        });
           }
      /*gnbDt.on("click",function(){
            $('.meunDd').stop().slideToggle();
        });*/
};

