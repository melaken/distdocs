var TSMSwiper='';var preTSMFunc=window.onload;window.onload=function(){preTSMFunc();TSMSwiper=new Swiper('.tsmswiper-container',{mode:'horizontal',slidesPerSlide:4,loop:true,wrapperClass:'tsmswiper-wrapper',slideClass:'tsmswiper-slide',});}
function nextTSMSlide()
{TSMSwiper.swipePrev();}
function prevTSMSlide()
{TSMSwiper.swipeNext();}