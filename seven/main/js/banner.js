function banner(){

$('.m_left_but').on('click',function(){
    var banner_li = $('.main_ban').children('li'),
        banner_li_width = banner_li.width();
    
        banner_li.first().stop().animate({marginLeft:banner_li_width},500,
                  function(){banner_li.css({marginLeft:0}).last().prependTo('.main_ban');
            
  }); 
 });
    
    $('.m_re_but').on('click',function(){
    var banner_li = $('.main_ban').children('li'),
        banner_li_width = banner_li.width();
    
        banner_li.first().stop().animate({marginLeft:-banner_li_width},500,
                  function(){banner_li.css({marginLeft:0}).first().appendTo('.main_ban');
            
  }); 
 });
    var timer;//일정한  시간간격을 두고 움직이는 기능 : setInterval
    function startBtn(){timer = setInterval("$('.m_re_but').click()",3000)};
    startBtn();
    function stopBtn(){clearInterval(timer)};
    $('#main').on({'mouseover':stopBtn, 'mouseout':startBtn});//마우스를 배너 위에 올렸을 경우 멈춘다.
    
};//function banner
    