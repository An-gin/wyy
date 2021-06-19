$('document').ready(function() {
    $(window).scroll(function(){
      var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
      if(scrollt>200){
        $('.totop').css('display','block')
      }else{
        $('.totop').css('display','none')
      }
    })

    $('.li').hover(function(){
        // console.log($(this));
        $(this).css('background-color','#000')
    },function(){
        $(this).css('background-color','#242424')
    })
    
    $(".li-").hover(function(){
        // console.log($(this));
        $(this).css({'border': '1px solid #333','border-radius':'9px','backgroundcolor':'#333','opacity':'0.6'})
      },function(){
        $(this).css({'border': 'none','backgroundcolor':'none','opacity':'1'})
      })
})
