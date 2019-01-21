

var _allModules = {
    _alert:_alert,
    _input:_input,
    _dropdown:_dropdown,
    _radio:_radio,
    _checkbox:_checkbox,
    _select:_select,
    // _timeline:_timeline,
    // _list:_list,
    _nav:_nav,
    _upload:_upload,
    _layout:_layout,
    _tip:_tip,
    _top:_top,
    _badge:_badge
}
var ArrayProto = Array.prototype, ObjProto = Object.prototype;// FuncProto = Function.prototype;
var
    // push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    // concat           = ArrayProto.concat,
    toString         = ObjProto.toString;

var _ms = nv.baseConfig.moduleSelectors,
    _tools = nv.tools;
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/1/23 上午10:37
 * @Description:统一管理内置组件的公共方法
 * @params <String> paramName
 * @paramsDescription  paramName :
 */
function _init(){

}
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/2/2 下午9:48
 * @Description:查找模块名称
 */
function _autoFindMoudle(selectorName){
    var _m = "";
    $.each(_ms,function(i,n){
        if(n.selectorName == selectorName){
            _m = n.moduleName;
            return false;
        }
    })
    return _m;
}
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/2/1 下午5:08
 * @Description:自动初始化各个模块
 * @params <Number> type
 * @paramsDescription  初始化哪种标记类型: 1,默认，表示返回未标示（选择后将被标示）,2表示返回已标示的，3表示返回所有类别:
 * @params return <Array>
 * @paramsDescription  返回已选的数组与对应的模块名称
 */
function _init_auto(type){
    type = type ? type : 1;
    var _q = [],
        _retSelector = [],
        _selector = "",
        _options = "",
        _module = "";
    //
    $.each(_ms,function(i,n){
        _selector = n.selectorName;
        _options = n.options;
        _module = n.moduleName;
        _retSelector = _find(_selector,type);
        _q = [];
        if(_retSelector.length > 0){
            _retSelector = slice.call(_retSelector)
            _q = {
                selector:_selector,
                module:_module,
                options:_options,
                array:_retSelector
            }
            //
            //
            // _allModules[_module].init(_retSelector);
            _allModules[_module].init(_q);
        }
    })
    //
    return _q;
}
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/2/3 下午8:02
 * @Description:自动监听页面变化
 */
function _init_observer(){
    $(function(){
        $(document).on("DOMNodeInserted",function () {
            _tools.later(function(){
                _init_auto()
            },0)
        })
        $(document).on("DOMNodeRemoved",function () {
            _tools.later(function(){
                _init_auto()
            },0)
        })
    })
}



/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/1/23 上午10:41
 * @Description:查找所需的节点
 * @params <String> selectors
 * @paramsDescription  选择器
 * @params <Number> type
 * @paramsDescription  返回的类型:1,默认，表示返回未标示（选择后将被标示）,2表示返回已标示的，3表示返回所有类别
 */
function _find(selector,type){
    var _s = $(selector),
        _cacheName = "data-nv-cache",
        _r1 = [],
        _r2 = [],
        _r3 = [];
    type = type ? type : 1;
    if(_s.length > 0){
        // _s.data(_cacheName,_cacheName);
        $.each(_s,function(i,n){
            //如果是代码code则排除
            if($(this).closest(".c-code-inner").length > 0){
                return;
            }
            if($(this).attr(_cacheName) == ""){
                _r2.push(this);
            }else{
                _r1.push(this);
                $(this).attr(_cacheName,"");
            }

            _r3.push(this);
        })
        if(type == 2){
            return _r2;
        }else if(type == 1){
            return _r1;
        }else{
            return _r3;
        }
    }
    return [];
}
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/1/30 下午9:45
 * @Description:ajax提交方法
 * @params <Object> options
 * @paramsDescription  jquery的配置入参 :
 */
function _ajax(options){
    var defaults = {

    }
    options = $.extend(defaults,options);
    $.ajax(options);
}

/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/4/7 下午7:43
 * @Description:模版替换
 * @params html <Dom Object> html elements
 * @paramsDescription  html片段，这里面是已经装载好的tmpl模版语言
 * @params html <Data Object> 数据对象
 * @paramsDescription  用于替换模版内容的数据对象，可以是任意类型
 */
function tmpl(str, data) {
    var f = !/[^\w\-.:]/.test(str)
        ? (tmpl.cache[str] = tmpl.cache[str] || tmpl(str))
        : new Function( // eslint-disable-line no-new-func
            tmpl.arg + ',tmpl',
            'var _e=tmpl.encode' +
            tmpl.helper +
            ",_s='" +
            str.replace(tmpl.regexp, tmpl.func) +
            "';return _s;"
        )
    return data
        ? f(data, tmpl)
        : function (data) {
            return f(data, tmpl)
        }
}
tmpl.cache = {}
tmpl.load = function (id) {
    return document.getElementById(id).innerHTML
}
tmpl.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g
tmpl.func = function (s, p1, p2, p3, p4, p5) {
    if (p1) {
        // whitespace, quote and backspace in HTML context
        return (
            {
                '\n': '\\n',
                '\r': '\\r',
                '\t': '\\t',
                ' ': ' '
            }[p1] || '\\' + p1
        )
    }
    if (p2) {
        // interpolation: {%=prop%}, or unescaped: {%#prop%}
        if (p2 === '=') {
            return "'+_e(" + p3 + ")+'"
        }
        return "'+(" + p3 + "==null?'':" + p3 + ")+'"
    }
    if (p4) {
        // evaluation start tag: {%
        return "';"
    }
    if (p5) {
        // evaluation end tag: %}
        return "_s+='"
    }
}
tmpl.encReg = /[<>&"'\x00]/g // eslint-disable-line no-control-regex
tmpl.encMap = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;'
}
tmpl.encode = function (s) {
    return (s == null ? '' : '' + s).replace(tmpl.encReg, function (c) {
        return tmpl.encMap[c] || ''
    })
}
tmpl.arg = 'o'
tmpl.helper =
    ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);}" +
    ',include=function(s,d){_s+=tmpl(s,d);}'

// //手动触发一次
$(function(){
    //页面初始化主动触发一次加载内置元素
    _init_auto();
    _init_observer();
})
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/2/21 下午9:37
 * @Description:添加滚动事件
 */
$(window).off("scroll").on("scroll",function(){
    var top = $(this).scrollTop();
    $.each(nv.dom.scrollQueen,function(i,n){
        n(top);
    })
})
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/4/11 下午2:59
 * @Description:尺寸改变事件
 */
$(window).off("resize").on("resize",function(){
    var width = $(this).width();
    $.each(nv.dom.resizeQueen,function(i,n){
        n(width);
    })
})
/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@jd.com
 * @Date: Created in 2018/2/21 下午9:40
 * @Description:添加点击事件
 */
$(window).off("click").on("click",function(){
    $.each(nv.dom.clickQueen,function(i,n){
        n();
    })
})

return nv;
},{requires:["jquery"]})