var _radio = {
    uid:30300000 ,
    version:"1.0.0",
    init:function(domObject){
        this.options._obj = domObject;
        this.events.closeEvent(domObject);
    },
    options:{
        _obj:{},//公共变量，永远不会变
    },
    events:{
        closeEvent:function(opt){
            if(opt.array.length>0){
                $.each(opt.array,function(index,elem){
                    //console.log($(elem).prop("class"));
                        var pubClass=$(elem).prop("class"),
                            label;
                        if(pubClass.indexOf("zr-radio-vertical")>-1){
                            pubClass="zr-radio-middle";
                            label=$("<label class='"+pubClass+" zr-radio-module"+"'></label>");
                        }else{
                            label=$("<label class='zr-radio-module'></label>");
                        }
                        var str="";
                        if($(elem).get(0).disabled){
                            label.addClass(_radio.options._obj.options.disabledClassName);
                        }
                        if($(elem).get(0).checked){
                            label.addClass(_radio.options._obj.options.radioedClassName);
                        }
                        $(elem).after(label).addClass("zr-radio-hide");
                        str+='<div class="zr-radio-simulation"><span class="zr-radio-normal"><span></span></span><div class="zr-radio-text">';
                        $(elem).attr("title")==undefined ? str+='</div></div>' : str+=$(elem).attr("title")+'</div></div>';
                        label.append(str);
                        //绑定自定义事件
                        _radio.eventFn.customEventFn(elem);
                        label.off("click",_radio.eventFn.radioFn).on("click",_radio.eventFn.radioFn);
                })
                
            }
        }
    },
    eventFn:{
        radioFn: function () {
            if($(this).hasClass(_radio.options._obj.options.radioedClassName)){
                return;
            }else{
                if($(this).hasClass(_radio.options._obj.options.disabledClassName)){
                    return;
                }else{
                    var name=$("[name='"+$(this).prev().attr("name")+"']");
                    $.each(name, function (index,elem) {
                        $(elem).next().removeClass(_radio.options._obj.options.radioedClassName);
                    })
                    $(this).addClass(_radio.options._obj.options.radioedClassName);
                    $(this).prev().get(0).checked=true;
                    //添加onchnage事件的监听
                    $(this).prev().trigger("change");
                }

            }
        },
        customEventFn:function(elem){
            $(elem)[0]["zrChange"]=function(opts){
                opts= $.extend({
                    disabled:false,
                    checked:false
                },opts||{})
                //判断是否禁用
                if(opts.disabled){
                    $(this).attr("disabled","disabled");
                    $(this).next().addClass("zr-radio-disable")
                }else{
                    $(this).removeAttr("disabled");
                    $(this).next().removeClass("zr-radio-disable")
                }
                //判断是否选中
                if(opts.checked){
                    $(this).attr("checked","checked");
                    $(this).next().addClass("zr-radio-radioed")
                }else{
                    $(this).removeAttr("checked");
                    $(this).next().removeClass("zr-radio-radioed")
                }
            }
        }
    },
    ajax:{}

}


