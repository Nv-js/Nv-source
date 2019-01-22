Nv.add("./affix/1.0.1/cdn_index",function(nv,$){
    var affix = {
        init:function(config){
            var defaults = {
                //参考对象,必须是ID，唯一性
                target:"",
                //类型top、bottom
                type:"top",
                //距离窗口顶部到达指定偏移量触发
                offsetTop:0,
                //距离窗口底部到达指定偏移量触发
                offsetBottom:0,
                //当方生变化的时候出发该方法，status为fix表示已浮动，status为static表示还原之前状态
                onchange:function(status){
                },
                //
                onChange:function(){},
                reference:window
            }
            config = $.extend({},defaults,config);
            //定位地点
            var $target = $(config.target),
                ps = $target.offset(),
                psl = ps.left,
                pst = ps.top,
                h = $target.outerHeight(true);
            //
            $(config.target).data({
                "options":config,
                "position":{
                    left:psl,
                    top:pst,
                    bottom:parseFloat(pst) + parseFloat(h)
                }
            });

            var $reference = $(config.reference);
            var rets = $reference.data("array") || [];
            rets.push(config.target);
            $reference.data("array",rets);
            //
            affix.events.topEvent(config);
            //初始化出发一次
            affix.eventsFn.topFn.call(config.reference);

        },
        options:{},
        events:{
            topEvent:function(options){
                $(options.reference).on("scroll",affix.eventsFn.topFn)
                $(options.reference).on("resize",affix.eventsFn.topFn)
            }
        },
        eventsFn:{
            topFn:function(){
                var $this = $(this);
                var rets = $this.data("array");
                //
                var options,position,$n,scrolltop = $this.scrollTop(),scrollbottom = parseFloat(scrolltop) + parseFloat($(this).height()),status;
                $.each(rets,function(i,n){
                    $n = $(n);
                    options = $n.data("options");
                    position = $n.data("position");
                    status = $n.data("fixnow");
                    if(scrolltop >= position.top && !status && options.type == "top"){
                        options.onchange("fix");
                        $n.data("fixnow",1);
                        $n.css({
                            position:"fixed",
                            zIndex:1000,
                            left:position.left,
                            top:options.offsetTop
                        })
                    }else if(scrolltop < position.top && status && options.type == "top"){
                        options.onchange("static");
                        $n.data("fixnow",0);
                        $n.css({
                            position:"static",
                            zIndex:"",
                            left:"",
                            top:""
                        })
                    }else if(scrollbottom <= position.bottom && !status && options.type == "bottom"){
                        options.onchange("fix");
                        $n.data("fixnow",1);
                        $n.css({
                            position:"fixed",
                            zIndex:1000,
                            left:position.left,
                            bottom:options.offsetBottom
                        })

                    }else if(scrollbottom > position.bottom && status && options.type == "bottom"){
                        options.onchange("static");
                        $n.data("fixnow",0);
                        $n.css({
                            position:"static",
                            zIndex:"",
                            left:"",
                            bottom:""
                        })
                    }
                })
            }
        },
        ajax:{}
    }

    return{
        init:affix.init
    }
},{
    requires:["jquery"]
})