var theme = Nv.baseConfig.theme,
    _css = './css/cdn_index.css';
if(theme){
    _css = './css/cdn_'+theme+"_index.css";
}
Nv.add("./popover/1.0.1/cdn_index",function(Nv,$){
    var popover = {
        uid: 40600000,
        init: function(config) {
            if (/^\./.test(config.target)) {
                var classObj = $(config.target);
                $.each(classObj, function (i) {
                    $.extend(config, { classObjIndex: i });
                    var pop = new Pop(config);
                    if (pop.popFn()) { // 判断是否传递目标元。
                        pop.popInnerWidthFn(); // 设置卡片宽度
                        pop.popContPosFn(); // 设置卡片位置
                        pop.popBtnFn(); // 给按钮绑定显示卡片的事件
                    } else {
                        // console.log('缺少目标元素');
                    }
                })
            } else {
                var pop = new Pop(config);
                if (pop.popFn()) {
                    pop.popInnerWidthFn();
                    pop.popContPosFn();
                    pop.popBtnFn();
                } else {
                    // console.log('缺少目标元素');
                }
            }

            $(".nv-popover-content").off('click').on('click',function(ev){
                ev.stopPropagation();
            })
        },
        options: {

        },
        events: {

        },
        eventFn: {

        }
    }

    function Pop(config){
        this.width = config.width || 240;
        this.position = config.position || 'top';
        this.event = config.event || 'hover';
        this.target = config.target || "";
        this.onOpen = config.onOpen || function(){return false};
        this.onClose = config.onClose || function(){return false};

        if(parseInt(config.classObjIndex)>=0){ // 类初始化绑定事件
            this.optTarget = $(this.target).eq(parseInt(config.classObjIndex));
        }else{
            this.optTarget = $(this.target);
        }
        this.optCont = this.optTarget.find(".nv-popover-content");
        this.optInner = this.optTarget.find(".nv-popover-inner");
        this.optBtn = this.optTarget.find('.nv-popover-btn');
        var _this = this;

        if(config.event == 'click'){
            $(Nv.document).on('click',function(){
                if(_this.optCont.css('display')=='block'){
                    _this.onClose && _this.onClose();
                }
                $(".nv-popover-content").stop().fadeOut(300);
            })
        }
    }
    Pop.prototype.popFn = function(){
        if(!this.target){
            return false;
        }
        return true;
    }
    Pop.prototype.popInnerWidthFn = function(){
        // 指定nv-popover-inner 宽度
        this.optInner.css('width' ,parseFloat(this.width)+'px');
    }
    Pop.prototype.popContPosFn = function(){
        // 获取内容宽高和触发元素宽高 计算位置
        var _widthCont = this.optCont.outerWidth();
        var _heightCont = this.optCont.outerHeight();
        var _width = this.optTarget.outerWidth()
        var _height = this.optTarget.outerHeight();
        var _left = -_widthCont / 2 + _width / 2;
        var _top = -_heightCont / 2 + _height / 2;

        if (this.position == 'top') {
            this.optCont.css({
                left: _left + 'px',
                bottom: _height + 'px'
            })
        } else if (this.position == 'tl') {
            this.optCont.css({
                left: 0,
                bottom: _height + 'px'
            })
        } else if (this.position == 'tr') {
            this.optCont.css({
                right: 0,
                bottom: _height + 'px'
            })
        } else if (this.position == 'left') {
            this.optCont.css({
                right: _width + 'px',
                top: _top + 'px'
            })
        } else if (this.position == 'lt') {
            this.optCont.css({
                right: _width + 'px',
                top: 0
            })
        } else if (this.position == 'lb') {
            this.optCont.css({
                right: _width + 'px',
                bottom: 0
            })
        } else if (this.position == 'right') {
            this.optCont.css({
                left: _width + 'px',
                top: _top + 'px'
            })
        } else if (this.position == 'rt') {
            this.optCont.css({
                left: _width + 'px',
                top: 0
            })
        } else if (this.position == 'rb') {
            this.optCont.css({
                left: _width + 'px',
                bottom: 0
            })
        } else if (this.position == 'bottom') {
            this.optCont.css({
                top: _height + 'px',
                left: _left + 'px'
            })
        } else if (this.position == 'bl') {
            this.optCont.css({
                top: _height + 'px',
                left: 0
            })
        } else if (this.position == 'br') {
            this.optCont.css({
                top: _height + 'px',
                right: 0
            })
        }
        this.optCont.addClass(this.position);
    }
    Pop.prototype.popBtnFn = function() {
        var eventName = this.event;
        if (eventName == 'hover') {
            eventName = 'mouseenter'
        }
        var _this = this;
        this.optTarget.off(eventName).on(eventName,function(ev){
            ev.stopPropagation();
            //$(".nv-popover-content").stop().fadeOut(100);
            // _this.onClose && _this.onClose(_this.optTarget[0]);

            if(_this.optCont.css('display')=='block'){
                return;
            }
            _this.optCont.stop().fadeIn(300);
            _this.onOpen && _this.onOpen(_this.optTarget[0])
        })
        if(eventName == 'mouseenter'){
            _this.optTarget.off('mouseleave').on('mouseleave',function(){
                _this.optCont.stop().fadeOut(300);
                _this.onClose && _this.onClose(_this.optTarget[0]);
            })
            _this.optBtn.off('click').on('click',function(ev){
                ev.stopPropagation();
            })
        }


    }
    Pop.prototype.onCloseFn = function() {
        this.onClose && this.onClose(this.optTarget[0]);
    }

    return {init: popover.init};
},{requires:["jquery",_css],alias:'popover'})