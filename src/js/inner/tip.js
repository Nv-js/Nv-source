var _tip = {
    uid:40500000,
    version:"1.0.0",
    init:function(domObject){
        this.options._obj = domObject;
        this.events.tipEvent(domObject);
    },
    options:{
        _obj:{},//公共变量，永远不会变
    },
    events:{
       tipEvent:function(opt){
           var array = opt.array;
           $.each(array,function(i,n){
               var eventName = $(this).attr("data-tip-event") || "hover";
               if(eventName == "hover"){
                   eventName = "mouseover";
               }
               $(this).off(eventName).on(eventName,_tip.eventFn.reloadTipHtmlFn);
               if(eventName == "mouseover"){
                   $(this).off("mouseout").on("mouseout",function(){
                       var ids = $(this).data("tooltip");
                       var $ids =  $("#"+ids);
                       $ids.data("status","hidden");
                       // console.log("11="+ids)
                       Zr.tools.later(function(){
                           // console.log("22="+ids)
                           var status = $ids.data("status") || "hidden";
                           if(status == "hidden"){
                               $ids.removeClass("zr-tip-show");
                           }

                       },50)
                       $ids.off("mouseover").on("mouseover",function(){
                           $(this).addClass("zr-tip-show");
                           $(this).data("status","show");
                       })
                       $ids.off("mouseout").on("mouseout",function(){
                           var _this = this;
                           $(_this).data("status","hidden");
                           Zr.tools.later(function(){
                               var status = $ids.data("status") || "hidden";
                               if(status == "hidden"){
                                   $(_this).removeClass("zr-tip-show");
                               }

                           },50)
                       })


                   });
               }

           })
           Zr.dom.clickQueen.push(function(){
               $(".zr-tip").removeClass("zr-tip-show");
           })
       }
    },
    eventFn:{
        reloadTipHtmlFn:function(ev){
            ev.stopPropagation();
            var ids = $(this).data("tooltip"),
                cacheStatus = $(this).attr("data-tip-cache") || "true";
            var $ids = $("#"+ids);
            if(ids && cacheStatus == "true"){
                $ids.data("status","show")
                $ids.addClass("zr-tip-show");
                return false;
            }
            //
            if($ids.length > 0){
                $ids.remove();
            }
            //
            var text = $(this).attr("data-tip-text") || "",
                ps = $(this).attr("data-tip-position") || "top",
                maxWidth = $(this).attr("data-tip-maxwidth") || 250,
                ids = Math.random() * 1000000000000000000;
            //
            $("#"+ids).data("status","show");
            $(this).data("tooltip",ids);
            //
            if(!text){
                return false;
            }
            var html = "<div class=\"zr-tip\" id=\""+ids+"\" style='max-width:"+maxWidth+"px'>";
                html += "<div class=\"zr-tip-inner\">"+text+"</div>";
                html += "<i class=\"zr-tip-arrow\"></i></div>";
            //
            var $tip = $(html).appendTo("body");
            //
            var _ps = $(this).offset(),
                _left = _ps.left,
                _top = _ps.top,
                _width = $(this).outerWidth(false),
                _height = $(this).outerHeight(false);
            var _tipWidth = $tip.width(),
                _tipHeight = $tip.height();
            //
            var className = "";
            //
            if(ps == "top"){
                //
                _top = _top - _tipHeight - 5;
                _left = _left + _width/2 - _tipWidth/2;
                className = "zr-tip-top zr-tip-show";

            }else if(ps == "tl"){
                _top = _top - _tipHeight - 5;
                className = "zr-tip-top-left zr-tip-show";
            }else if(ps == "tr"){
                _top = _top - _tipHeight - 5;
                _left = _left - _tipWidth + _width;
                className = "zr-tip-top-right zr-tip-show";
            }else if(ps == "rt"){
                _left = _left + _width;
                className = "zr-tip-right-top zr-tip-show";

            }else if(ps == "right"){
                _top = _top + _height/2 - _tipHeight/2;
                _left = _left + _width;
                className = "zr-tip-right-top zr-tip-show";

            }else if(ps == "rb"){
                _top = _top + _height - _tipHeight;
                _left = _left + _width;
                className = "zr-tip-right-bottom zr-tip-show";
            }else if(ps == "lt"){
                _top = _top + _height - _tipHeight;
                _left = _left - _tipWidth - 5;
                className = "zr-tip-left-top zr-tip-show";
            }else if(ps == "left"){
                _top = _top + _height - _tipHeight;
                _left = _left - _tipWidth - 5;
                className = "zr-tip-left zr-tip-show";
            }else if(ps == "lb"){
                _top = _top + _height - _tipHeight;
                _left = _left - _tipWidth - 5;
                className = "zr-tip-left-bottom zr-tip-show";
            }else if(ps == "bl"){
                _top = _top + _height;
                className = "zr-tip-bottom-left zr-tip-show";
            }else if(ps == "bottom"){
                _top = _top + _height;
                _left = _left + _width/2 - _tipWidth/2;
                className = "zr-tip-bottom zr-tip-show";
            }else if(ps == "br"){
                _top = _top + _height;
                _left = _left - _tipWidth + _width;
                className = "zr-tip-bottom-right zr-tip-show";
            }
            //
            $tip.css({
                left:_left,
                top:_top
            }).addClass(className);

            $tip.off("click").on("click",function(ev){
                ev.stopPropagation();
            })
        }
    },
    ajax:{}
}

