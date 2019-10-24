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
}var sas=sas||{};sas.utils=sas.utils||{},sas.events=sas.events||{},sas.rev=sas.rev||20110214,function(){sas.utils.cdns?(sas.utils.cdns["http:"]&&0!=sas.utils.cdns["http:"].length||(sas.utils.cdns["http:"]="http://ak-ns.sascdn.com"),sas.utils.cdns["https:"]&&0!=sas.utils.cdns["https:"].length||(sas.utils.cdns["https:"]="https://ec-ns.sascdn.com")):sas.utils.cdns={"http:":"http://ak-ns.sascdn.com","https:":"https://ec-ns.sascdn.com"};var t=function(){};sas.utils.getIEVersion=function(){var t=navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);return t?parseInt(t[1]):void 0},sas.events.addEvent=function(t,s,a){if(t&&s&&a)return t.attachEvent?t.attachEvent("on"+s,a):t.addEventListener&&t.addEventListener(s,a,!1),{removeEvent:function(){t.detachEvent?t.detachEvent("on"+s,a):t.removeEventListener&&t.removeEventListener(s,a,!1)}}},sas.events.addLoadEvent=function(t,s){if(t&&s){var a="load",n=function(){return!0};(sas.utils.getIEVersion()<11||t==document)&&(a="readystatechange",n=function(){if(!t.readyState||"complete"==t.readyState||"loaded"==t.readyState||4==t.readyState)return!0});var e=sas.events.addEvent(t,a,function(){n()&&(e.removeEvent(),s.apply(this,arguments))})}},sas.utils.Latch=function(t){for(var s=[],a={},n=t=t||[],e=!1,i=0;i<n.length;i++)a[t[i]]={};var l=function(){if(!e){for(var t in a)if(!a[t].status)return;e=!0;for(var n=c(),i=0;i<s.length;i++)s[i].apply(this,n)}},c=function(){for(var t=[],s=0;s<n.length;s++)t.push(a[n[s]].result);return t};this.notify=function(t,s){a[t]&&(a[t].status=!0,a[t].result=s,l())},this.addListener=function(t){null!=t&&(e?t():s.push(t))},l()},sas.utils._libs=sas.utils._libs||{};var s=function(t){"string"==typeof t&&(t=[t]);for(var s,a,n="https:"==document.location.protocol||"about:"==document.location.protocol?sas.utils.cdns["https:"]:sas.utils.cdns[document.location.protocol]||sas.utils.cdns["http:"],e=0;e<t.length;e++)t[e]=(s=n,a=t[e],"/"==s.charAt(s.length-1)&&(s=s.slice(0,-1)),"/"==a.charAt(0)&&(a=a.slice(1)),s+"/"+a);return t};sas.utils.loadLinkCdn=function(t){t=s(t);for(var a=0;a<t.length;a++)e(t[a],!0)},sas.utils.loadScriptCdn=function(t,a){t=s(t),sas.utils.loadScript(t,a)};var a=Math.floor(1e6*Math.random()),n=1;sas.utils._callbacks=sas.utils._callbacks||{};var e=function(t,s,e,i){var l,c=(s?"link":"script")+"-"+a+"-"+n++,r=document.createElement(s?"link":"script");r.id=c,r.setAttribute("type",s?"text/css":"text/javascript"),r.setAttribute(s?"href":"src",t),s&&r.setAttribute("rel","stylesheet"),!s&&e&&r.setAttribute("async","true"),sas.utils._libs[t]={loaded:!1,callbacks:[]},null!=i&&sas.utils._libs[t].callbacks.push(i),sas.utils._callbacks[c]=(l=t,function(){sas.utils._libs[l].loaded=!0;for(var t=0;t<sas.utils._libs[l].callbacks.length;t++)sas.utils._libs[l].callbacks[t]()}),s||e?(document.getElementsByTagName("head")[0].appendChild(r),sas.events.addLoadEvent(document.getElementById(c),sas.utils._callbacks[c])):(document.write(r.outerHTML),document.write("<script type='text/javascript'>(function() { sas.utils._callbacks['"+c+"'](); })();<\/script>"))};sas.utils.loadScript=function(s,a){(a=a||{}).async=null==a.async||a.async;var n=a.onLoad||t;"string"==typeof s&&(s=[s]);var i=new sas.utils.Latch(s);i.addListener(n);for(var l=0;l<s.length;l++){var c=s[l],r=function(t){return function(){i.notify(t)}}(c);sas.utils._libs[c]?sas.utils._libs[c].loaded?i.notify(c):sas.utils._libs[c].callbacks.push(r):e(c,!1,a.async,r)}}}();

(function () {
    var config = {
        insertionId: Number(7637840),
        pageId: "791904",
        sessionId: new Date().getTime(),
        baseUrl: String("http://ww1097.smartadserver.com"),
        formatId: Number(26300),
        tagId: String("sas_26300"),
        oba: Number(0),
        isAsync: window.sas_ajax || true,
        customScript: String(''),
        creative: {
            id: Number(21070373),
            url: String(''),
            type: Number(0),
            width: Number(('300' === '100%') ? 0 : '300'),
            height: Number(('250' === '100%') ? 0 : '250'),
            alt: String(''),
            clickUrl: String('http://ww1097.smartadserver.com/click?imgid=21070373&insid=7637840&pgid=791904&ckid=70999393645569537&uii=231474611623108242&acd=1559154769741&pubid=1&tmstp=506574728&tgt=%24dt%3d1t%3b%24hc&systgt=%24qc%3d1308616396%3b%24ql%3dHigh%3b%24qt%3d186_2081_3444t%3b%24dma%3d0%3b%24b%3d12660%3b%24o%3d99999%3b%24sw%3d1280%3b%24sh%3d768%3b%24wpc%3d12%3b%24wpc%3d57&pgDomain=http%3a%2f%2finfo241.com%2fles-bons-chiffres-du-marche-de-l-internet-au-gabon-de-ce-debut-d%2c4224&go='),
            clickUrlArray: ["http://ww1097.smartadserver.com/click?imgid=21070373&insid=7637840&pgid=791904&ckid=70999393645569537&uii=231474611623108242&acd=1559154769741&pubid=1&tmstp=506574728&tgt=%24dt%3d1t%3b%24hc&systgt=%24qc%3d1308616396%3b%24ql%3dHigh%3b%24qt%3d186_2081_3444t%3b%24dma%3d0%3b%24b%3d12660%3b%24o%3d99999%3b%24sw%3d1280%3b%24sh%3d768%3b%24wpc%3d12%3b%24wpc%3d57&pgDomain=http%3a%2f%2finfo241.com%2fles-bons-chiffres-du-marche-de-l-internet-au-gabon-de-ce-debut-d%2c4224&go="],
            oryginalClickUrl: String(''),
            clickTarget: String('_blank'),
            agencyCode: String('<div class="OUTBRAIN" data-src="http://info241.com/les-bons-chiffres-du-marche-de-l-internet-au-gabon-de-ce-debut-d,4224" data-widget-id="SB_10" data-ob-template="TheMonetizer" ></div> <scr'+'ipt type="text/javascript" async="async" src="//widgets.outbrain.com/outbrain.js"></scr'+'ipt>'),
            creativeCountPixelUrl: String('http://ww1097.smartadserver.com/h/aip?tmstp=506574728&ckid=70999393645569537&pubid=1&systgt=%24qc%3d1308616396%3b%24ql%3dHigh%3b%24qt%3d186_2081_3444t%3b%24dma%3d0%3b%24b%3d12660%3b%24o%3d99999%3b%24sw%3d1280%3b%24sh%3d768%3b%24wpc%3d12%3b%24wpc%3d57&uii=231474611623108242&acd=1559154769741&visit=S&statid=19&tgt=%24dt%3d1t%3b%24hc&pgDomain=http%3a%2f%2finfo241.com%2fles-bons-chiffres-du-marche-de-l-internet-au-gabon-de-ce-debut-d%2c4224&capp=0&mcrdbt=1&insid=7637840&siteid=154756&imgid=21070373&pgid=791904&fmtid=26300&sig=hnRKziWnXUdLiyfX3D31saO4064c2iliZUXtz2D0jGc%3d'),
            creativeClickCountPixelUrl: (21070373 ? 'http://ww1097.smartadserver.com/h/cp?imgid=21070373&insid=7637840&pgid=791904&ckid=70999393645569537&uii=231474611623108242&acd=1559154769741&pubid=1&tmstp=506574728&tgt=%24dt%3d1t%3b%24hc&systgt=%24qc%3d1308616396%3b%24ql%3dHigh%3b%24qt%3d186_2081_3444t%3b%24dma%3d0%3b%24b%3d12660%3b%24o%3d99999%3b%24sw%3d1280%3b%24sh%3d768%3b%24wpc%3d12%3b%24wpc%3d57&pgDomain=http%3a%2f%2finfo241.com%2fles-bons-chiffres-du-marche-de-l-internet-au-gabon-de-ce-debut-d%2c4224' : 'http://ww1097.smartadserver.com/h/micp?imgid=0&insid=7637840&pgid=791904&ckid=70999393645569537&uii=231474611623108242&acd=1559154769741&pubid=1&tmstp=506574728&tgt=%24dt%3d1t%3b%24hc&systgt=%24qc%3d1308616396%3b%24ql%3dHigh%3b%24qt%3d186_2081_3444t%3b%24dma%3d0%3b%24b%3d12660%3b%24o%3d99999%3b%24sw%3d1280%3b%24sh%3d768%3b%24wpc%3d12%3b%24wpc%3d57&pgDomain=http%3a%2f%2finfo241.com%2fles-bons-chiffres-du-marche-de-l-internet-au-gabon-de-ce-debut-d%2c4224') + '&rtb=1&rtbbid=&rtbet=&rtblt=&rtbnid=&rtbh=',
        },
        statisticTracking: {
            rtbbid: String(''),
            rtbet: String(''),
            rtblt: String(''),
            rtbnid: String(''),
            rtbh: String('')
        }
    };

    if (!document.getElementById("sas_26300")) {
        document.write('<div id="sas_26300"><div style="display:none"></div></div>');
    } else {
        var el = document.createElement('div');
        el.style.display = 'none';
        document.getElementById('sas_26300').appendChild(el);
    }

    var sas = window.sas;
    sas.utils.cdns["http:"] = "http://ced-ns.sascdn.com";
    sas.utils.cdns["https:"] = "https://ced-ns.sascdn.com";
    //sas.utils.cdns["http:"] = "http://demo.smartadserver.com";

    sas.utils.loadScriptCdn("/diff/templates/ts/dist/banner/sas-banner-1.2.js", {
        async: config.isAsync, onLoad: function () {
            newObj7637840 = new Banner(config);
            newObj7637840.init();
        }
    });
})();