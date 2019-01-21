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
                        if(pubClass.indexOf("nv-radio-vertical")>-1){
                            pubClass="nv-radio-middle";
                            label=$("<label class='"+pubClass+" nv-radio-module"+"'></label>");
                        }else{
                            label=$("<label class='nv-radio-module'></label>");
                        }
                        var str="";
                        if($(elem).get(0).disabled){
                            label.addClass(_radio.options._obj.options.disabledClassName);
                        }
                        if($(elem).get(0).checked){
                            label.addClass(_radio.options._obj.options.radioedClassName);
                        }
                        $(elem).after(label).addClass("nv-radio-hide");
                        str+='<div class="nv-radio-simulation"><span class="nv-radio-normal"><span></span></span><div class="nv-radio-text">';
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
            $(elem)[0]["nvChange"]=function(opts){
                opts= $.extend({
                    disabled:false,
                    checked:false
                },opts||{})
                //判断是否禁用
                if(opts.disabled){
                    $(this).attr("disabled","disabled");
                    $(this).next().addClass("nv-radio-disable")
                }else{
                    $(this).removeAttr("disabled");
                    $(this).next().removeClass("nv-radio-disable")
                }
                //判断是否选中
                if(opts.checked){
                    $(this).attr("checked","checked");
                    $(this).next().addClass("nv-radio-radioed")
                }else{
                    $(this).removeAttr("checked");
                    $(this).next().removeClass("nv-radio-radioed")
                }
            }
        }
    },
    ajax:{}

}


