
Nv.add("./notification/1.0.1/cdn_index",function(nv,$){var defaults={time:4000,title:"",content:"",iconsClassName:"",iconsShowStatus:1}
var tools=nv.tools;function _args(){var _s,_o;$.each(this,function(i,n){if(tools.isString(n)){_s=n;}
if(tools.isObject(n)){_o=n;}})
if(_s||_o){_o=_o?_o:{};_s?_o=$.extend({},defaults,_o,{content:_s}):"";}else{throw("参数不能为空,请检查notification模块的方法！");}
return _o;}
function _rebuildHTML(status,o){var _o={info:"nvicon-info",success:"nvicon-ok-circle",warning:"nvicon-warning",error:"nvicon-close-circle"}
var _class={info:"nv-notification-info nv-notification-with-description ",success:"nv-notification-success nv-notification-with-description ",warning:"nv-notification-warning nv-notification-with-description ",error:"nv-notification-error nv-notification-with-description "}
var $message=$(".nv-notification-wrap"),className=_class[status];var iconsClassName="";if($message.length==0){var html="<div class=\"nv-notification-wrap\" style=\"display: block\">";html+="</div>";$(html).appendTo("body");}
if(o.iconsClassName){iconsClassName=o.iconsClassName;if(!iconsClassName){iconsClassName=_o[status]||"";}}else{iconsClassName=_o[status];}
if(o.iconsShowStatus&&status!="title"){className+="nv-notification-with-icon";}
if(status=="title"){className="nv-notification-with-message";}
var html="<div class=\"nv-notification "+className+"\">";if(o.iconsShowStatus&&status!="title"){html+="<i class=\""+iconsClassName+"\"></i>";}
html+="<a class=\"nv-notification-close\" href=\"javascript:;\">";html+="<i class=\"nvicon-close\"></i>";html+="</a>";html+="<span class=\"nv-notification-message\">"+o.title+"</span>";if(o.content){html+="<span class=\"nv-notification-description\">"+o.content+"</span>";}
html+="</div>";var $dom=$(html).prependTo(".nv-notification-wrap");if(o.time){var mayeer=tools.later(function(){$dom.remove();},o.time);$dom.data("mayeer",mayeer);}
_reEvent.call($dom[0]);}
function _reEvent(){$(this).find(".nv-notification-close").off("click").on("click",function(){var $notification=$(this).closest(".nv-notification");var mayeer=$notification.data("mayeer");if(mayeer){mayeer.cancel();}
$notification.remove();})}
function _config(options){defaults=$.extend(defaults,options);}
function _info(){var args=_args.call(arguments);args=$.extend({},defaults,args);_rebuildHTML("info",args);}
function _success(){var args=_args.call(arguments);args=$.extend({},defaults,args);_rebuildHTML("success",args);}
function _error(){var args=_args.call(arguments);args=$.extend({},defaults,args);_rebuildHTML("error",args);}
function _warning(){var args=_args.call(arguments);args=$.extend({},defaults,args);_rebuildHTML("warning",args);}
function _alert(){var args=_args.call(arguments);args=$.extend({},defaults,args);_rebuildHTML("title",args);}
return{config:_config,info:_info,success:_success,error:_error,warning:_warning,alert:_alert}},{requires:["jquery","./css/cdn_index.css"],alias:'notification'})