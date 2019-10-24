if (navigator && navigator.platform) {
    var sasIsIosUiwebview = false;
    if (navigator.platform.substr(0,2) === 'iP') {
      var lte9 = /constructor/i.test(window.HTMLElement);
      var nav = window.navigator, ua = nav.userAgent, idb = !!window.indexedDB;
      if (ua.indexOf('Safari') !== -1 && ua.indexOf('Version') !== -1 && !nav.standalone) {      
        sasIsIosUiwebview = false;
      } else if ((!idb && lte9) || !window.statusbar.visible) {
        sasIsIosUiwebview = true;
      } else if ((window.webkit && window.webkit.messageHandlers) || !lte9 || idb) {
        sasIsIosUiwebview = true;
      }
    }
    if (!sasIsIosUiwebview) {
        var smartCsync=document.createElement('IFRAME');smartCsync.src='//csync.smartadserver.com/rtb/csync/CookieSync.html?nwid=1097&dcid=3';
        smartCsync.scrolling = 'no';smartCsync.frameBorder = 0;smartCsync.width = 0;smartCsync.height = 0;smartCsync.style.margin = 0;smartCsync.style.padding = 0;smartCsync.style.display = 'none';smartCsync.style.width = '0px';smartCsync.style.height = '0px';smartCsync.style.visibility = 'hidden';
        if(document.body != null)document.body.appendChild(smartCsync);
    }
}sas.noad("sas_45111");