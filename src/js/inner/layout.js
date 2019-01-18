var _layout = {
    uid:10300000,
    version:"1.0.0",
    init:function(domObject){
        this.options._obj = domObject;
        this.events.eventList(domObject);
    },
    options:{
        _obj:{},//公共变量，永远不会变
    },
    events:{
        //事件触发角
        eventList:function(opt){
            var $ret1 = "";
            $.each(opt.array,function(i,n){
                if($(this).hasClass(_layout.options._obj.options.sideTriggerClassName)){
                    $ret1 = $(this).find("."+_layout.options._obj.options.navSelector);
                    $ret1 = $ret1.attr("trigger");
                    if($ret1){
                        _layout.events.eventTriggerother(this,$ret1);
                    }
                }
            })
        },
        //
        eventTriggerother:function(dom,domTrigger){
            $("#"+domTrigger).data("dom",dom).on("click",function(){
                var $dom = $($(this).data("dom"));
                //
                var $nav = $dom.find("."+_layout.options._obj.options.navSelector),
                    $side = $nav.closest("."+_layout.options._obj.options.sideClassName);
                if(!$side.hasClass(_layout.options._obj.options.collapsedClassName)){
                    $side.addClass(_layout.options._obj.options.collapsedClassName);
                }else{
                    $side.removeClass(_layout.options._obj.options.collapsedClassName);
                }
                //
            })
        },
        //事件触发收起与展开
        eventTrigger:function(dom){
            var $trigger = $(dom).find("."+_layout.options._obj.options.trigger);
            if($trigger.length == 0){
                $trigger = $(dom).parent().closest(_layout.options._obj.selector).find("."+_layout.options._obj.options.trigger);
            }
            $trigger.find("."+_layout.options._obj.options.trigger).on("click",function(){
                var $obj = $(this).closest("."+_layout.options._obj.options.sideTriggerClassName);
                alert($obj.length)
                var $side = $obj.find("."+_layout.options._obj.options.sideClassName),
                    $nav = $obj.find("."+_layout.options._obj.options.navSelector);
                if(!$side.hasClass(_layout.options._obj.options.collapsedClassName)){
                    $side.addClass(_layout.options._obj.options.collapsedClassName);
                }else{
                    $side.removeClass(_layout.options._obj.options.collapsedClassName);
                }
            })
        }
    },
    eventFn:{

    },
    ajax:{}
}

