
Nv.add("./dp/1.0.1/cdn_index",function(nv){var window=nv.window,document=nv.document;var _col=_col||[];var _uuid=Math.floor(Math.random()*2147483648).toString(36);_col.push(['_accountLog',_uuid]);var params={};if(document){params.domain=document.domain||'';params.url=document.URL||'';params.cookie=document.cookie||'';params.referrer=document.referrer||'';params.title=document.title||'';}
var _scr=window.screen,_w=_scr.width,_h=_scr.height;params.screen=_w+"*"+_h;if(_scr.colorDepth){params.colorDepth=_scr.colorDepth;}
if(navigator){params.lang=navigator.language||'';params.agent=navigator.userAgent||'';}
if(_col){for(var i in _col){switch(_col[i][0]){case'_accountLog':params.account=_col[i][1];break;default:break;}}}
var args='';for(var i in params){if(args!=''){args+='&';}
args+=i+'='+params[i];}
var img=new Image(1,1);var src='http://gtp-nv.jd.com/dataCollection/log.gif?args='+encodeURIComponent(args);img.src=src;return{}})