$(document).ready(function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){$('body').addClass('mobile-view');$('#main-navigation ul li .dropdown').each(function(){$(this).hide();});$('#main-navigation > ul li a.menutrigger').click(function(e){e.preventDefault();var toggleTrigger=$(this).next('.dropdown');if($(toggleTrigger).hasClass('show')){$(toggleTrigger).removeClass('show').hide();}else{$('#main-navigation ul li .dropdown').each(function(){$(this).removeClass('show').hide();});$(toggleTrigger).addClass('show').show();}});$('.close-menu').click(function(e){e.preventDefault()
$(this).parent('.dropdown').toggleClass('show').hide();});}else{$.getScript('http://code.pressdemocrat.com/js/hoverintent.min.js',mainMenu);}
$('a.reprint').each(function(){var sArtURL,sPubName,sArtTitle,sDate,sURL;sArtURL=document.location.href;sPubName=document.location.hostname;sArtTitle=$('h1.art_head span').text();sDate=document.location.href.split('/')[4];function formatDate(date){var d=date.split(""),y=d[0]+d[1]+d[2]+d[3],m=d[4]+d[5],nd=d[6]+d[7];return m+'/'+nd+'/'+y;}
sURL='http://www.magreprints.com/reprint-products-quote-request/'+'?cf2_field_17='+encodeURIComponent(sArtURL)+'&cf2_field_18='+encodeURIComponent(sPubName)+'&cf2_field_19='+encodeURIComponent(sArtTitle)+'&cf2_field_20='+encodeURIComponent(formatDate(sDate));$(this).attr({href:sURL});});$('#print').click(function(){printArt();});(function(){var cx='008671050159733027833:g0zoz98gtpi';var gcse=document.createElement('script');gcse.type='text/javascript';gcse.async=true;gcse.src=(document.location.protocol=='https:'?'https:':'http:')+
'//www.google.com/cse/cse.js?cx='+cx;var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(gcse,s);})();$('.mobile-switch').click(function(){if(localStorage.getItem('giveDesktop')){localStorage.removeItem('giveDesktop');}
window.location='http://m.pressdemocrat.com';});});window.onload=function(){SRPD.towns();}
function mainMenu(){$('#main-navigation > ul li').hoverIntent({over:onHover,out:offHover,timeout:300});function onHover(){$(this).find('.dropdown').addClass('show');}
function offHover(){$(this).find('.dropdown').removeClass('show');}}
var SRPD={outbrain:function(){var OB_permalink='http://'+document.location.hostname+document.location.pathname,OB_langJS='http://widgets.outbrain.com/lang_en.js',OB_Template="nytrmg",OB_Script;OB_widgetId='AR_1';if(typeof(OB_Script)!=='undefined'){OutbrainStart();}else{OB_Script=true;OB_Str="<div id='ob_widget'><script src='http://widgets.outbrain.com/outbrainWidget.js' type='text/javascript'></"+"script></div>";document.write(OB_Str);}},omniRefresh:function(pagenum){window.location='#page='+pagenum;$.getScript('http://code.pressdemocrat.com/js/analytics.article.js');},galRefresh:function(slidenum){window.location='#slide='+slidenum;$.getScript('http://code.pressdemocrat.com/js/analytics.gallery.js');},towns:function(){var townSwiper;townSwiper=new Swiper('.townswiper-container',{mode:'vertical',wrapperClass:'townswiper-wrapper',slideClass:'townswiper-slide',pagination:'.townpagination',paginationClass:'townswiper-pagination-switch',paginationActiveClass:'townswiper-active-switch',loop:true,onSlideChangeEnd:function(){dingme()}});$('#nav-up').click(function(e){e.preventDefault();townSwiper.swipeNext();});$('#nav-dn').click(function(e){e.preventDefault();townSwiper.swipePrev();});curTown=parseFloat(getCookie());townSwiper.swipeTo(curTown,300);function dingme()
{var curTown=townSwiper.activeIndex;setCookie(curTown);}
function getCookie()
{var i,name,val;var ARRcookies=document.cookie.split(";");for(i=0;i<ARRcookies.length;i++)
{name=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));val=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);name=name.replace(/^\s+|\s+$/g,"");if(name=='PD_last_town')
return unescape(val);}
return(0);}
function setCookie(value)
{var exdate=new Date();exdate.setDate(exdate.getDate()+90);var c_value=escape(value)+'; expires='+exdate.toUTCString();document.cookie='PD_last_town='+c_value;}}};function printArt(){var strContent='';var w=window.open();strContent='<img src="http://img.pressdemocrat.com/logo/pdlogo-sm.gif" border="0"><h2>'+$('.article-page h1:first').text()+'</h2>';strContent+='<h4>'+$('.article-rail').children().eq(0).text()+' on '+$('.article-rail').children().eq(1).text()+'</h4>';$('.article-main > div[id*="page"] p').each(function(){strContent+='<p>'+$(this).html()+'</p>';});w.document.write(strContent);w.document.close();w.print();w.close();};}