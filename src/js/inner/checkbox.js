var _checkbox = {
    uid:30400000 ,
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
            //console.log(opt);
            if(opt.array.length>0){
                $.each(opt.array,function(index,elem){
                    var str="",
                        label=$("<label class='zr-checkbox-module'></label>");
                    if($(elem).get(0).disabled){
                        label.addClass("zr-checkbox-disable");
                    }
                    if($(elem).get(0).checked){
                        label.addClass(_checkbox.options._obj.options.checkedClassName);
                    }
                    if($(elem).hasClass("zr-checkbox-all")){
                        label.addClass(_checkbox.options._obj.options.checkedAllClassName);
                    }
                    str+='<div class="zr-checkbox-simulation"><span class="zr-checkbox-normal">';
                    str+='<span></span></span><div class="zr-checkbox-text">';
                    $(elem).attr("title")==undefined ? str+='</div></div>' : str+=$(elem).attr("title")+'</div></div>';
                    label.append(str);
                    $(elem).after(label).addClass("zr-checkbox-hide");
                    //判断一开始是否全选
                    if($(elem).next().length>0){
                        if($(elem).next().hasClass(_checkbox.options._obj.options.checkedAllClassName) && $(elem).get(0).checked){
                            var that=$(elem);
                            var check= $(elem).parents(".zr-checkbox-container").eq(0).find(".zr-checkbox-sigle-container input[type='checkbox']");
                            $.each(check, function (index,elem) {
                                $(elem).get(0).checked=that.get(0).checked;
                                //判断是否创建出了模拟框架
                                if($(elem).next().hasClass("zr-checkbox-module")){
                                    $(elem).get(0).checked ? $(elem).next().addClass(_checkbox.options._obj.options.checkedClassName) :$(elem).next().removeClass(_checkbox.options._obj.options.checkedClassName);
                                }
                            })
                        }
                    }
                    //给checkbox添加自定义事件
                    _checkbox.eventFn.customEventFn(elem);
                    //绑定点击事件
                    label.off("click",_checkbox.eventFn.checkedFn).on("click",_checkbox.eventFn.checkedFn);
                })
            }
        }
    },
    eventFn:{
        checkedFn: function () {
                if($(this).hasClass(_checkbox.options._obj.options.disabledClassName)){
                    return;
                }else{
                    if($(this).hasClass(_checkbox.options._obj.options.checkedClassName)){
                        $(this).removeClass(_checkbox.options._obj.options.checkedClassName);
                    }else{
                        $(this).addClass(_checkbox.options._obj.options.checkedClassName)
                    }
                    $(this).prev().get(0).checked=!$(this).prev().get(0).checked;
                    //判断是否全选
                    if($(this).parent().hasClass(_checkbox.options._obj.options.allContainerClassName)){
                        if($(this).hasClass(_checkbox.options._obj.options.checkedAllClassName)){
                            var that_check=$(this).prev().get(0).checked;
                            if(that_check){
                                $(this).addClass(_checkbox.options._obj.options.checkedClassName);
                                $(this).find(".zr-checkbox-normal").children("span").removeClass(_checkbox.options._obj.options.uncheckClassName)
                            }
                            var check= $(this).parents(".zr-checkbox-container").eq(0).find(".zr-checkbox-sigle-container input[type='checkbox']");
                            $.each(check, function (index,elem) {
                                $(elem).get(0).checked=that_check;
                                $(elem).get(0).checked ? $(elem).next().addClass(_checkbox.options._obj.options.checkedClassName) :$(elem).next().removeClass(_checkbox.options._obj.options.checkedClassName)
                            })
                        }
                    }
                    if($(this).parent().hasClass(_checkbox.options._obj.options.sigleContainerClassName)){
                        var check=$(this).siblings("input[type='checkbox']"),
                            is_check_num=0,
                            all_check_status=$(this).parents("."+_checkbox.options._obj.options.containerClassName).eq(0).find(".zr-checkbox-all");
                        if(check.length>0){
                            $.each(check,function(index,elem){
                                if($(elem).get(0).checked){
                                    is_check_num+=1;
                                }
                            })
                            if(is_check_num==check.length){
                                all_check_status.addClass(_checkbox.options._obj.options.checkedClassName);
                                all_check_status.find(".zr-checkbox-normal").find("span").removeClass()
                                all_check_status.prev().get(0).checked=true;
                            }else{
                                all_check_status.find(".zr-checkbox-normal").find("span").addClass(_checkbox.options._obj.options.uncheckClassName)
                                all_check_status.addClass(_checkbox.options._obj.options.checkedClassName);
                                all_check_status.prev().get(0).checked=false;
                            }
                            if(is_check_num==0){
                                all_check_status.removeClass(_checkbox.options._obj.options.checkedClassName);
                                all_check_status.find(".zr-checkbox-normal").find("span").removeClass()
                            }
                        }
                    }
                    //添加onchnage事件的监听
                    $(this).prev().trigger("change");
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
                    $(this).next().addClass("zr-checkbox-disable")
                }else{
                    $(this).removeAttr("disabled");
                    $(this).next().removeClass("zr-checkbox-disable")
                }
                //判断是否选中
                if(opts.checked){
                    $(this).attr("checked","checked");
                    $(this).next().addClass("zr-checkbox-checked")
                }else{
                    $(this).removeAttr("checked");
                    $(this).next().removeClass("zr-checkbox-checked")
                }
            }
        }
    },
    ajax:{}

}
