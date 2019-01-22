Nv.add('./progress/1.0.1/cdn_index',function(Nv,$){
    var progress = {
        uid: 31000000,
        init: function(config) {
            if(!config.target){
                return false;
            }
            if(/^\./.test(config.target)){ // 类选择器，循环创建对象，返回数组
                var list = [];
                var len = $(config.target).length;
                for(var i=0;i<len;i++){
                    var j = new Progress(config,i);
                    j.change(j.percent);
                    list.push(j);
                }
                return list;
            }else{
                var progress = new Progress(config);
                progress.change(progress.percent,progress.content);
                return progress;
            }
        },
        options: {},
        event: {},
        eventFn: {}
    }
    function Progress(opts, i) {
        if (parseInt(i) >= 0) {
            this.target = $(opts.target).eq(i);
        } else {
            this.target = $(opts.target);
        }
        this.percent =  parseFloat(opts.percent) || parseFloat(this.target.attr('data-percent')) || 0;
        this.content = opts.content;
        if (this.target.hasClass("nv-progress-circle")) {
            this.r = this.target.find(".nv-progress-circle-bar").attr("r");
            this.target.find(".nv-progress-circle-bar").attr('stroke-dasharray', Math.PI * 2 * this.r);
        }
    }
    Progress.prototype.change = function (newPercent,content) {
        this.percent = newPercent;
        newPercent = parseFloat(newPercent)*100;
        if (this.target.hasClass("nv-progress-line")) {
            this.target.find(".nv-progress-current").stop().animate({
                width: newPercent + "%"
            },100);
            if(content){
                this.target.find(".nv-progress-line-status").html(content);
            }else{
                this.target.find(".nv-progress-line-status").html(newPercent+"%");
            }
        } else {
            if(content){
                this.target.find(".nv-progress-circle-status").html(content);
            }else{
                this.target.find(".nv-progress-circle-status").html(newPercent + "%");
            }

            this.target.find(".nv-progress-circle-bar").attr('stroke-dasharray', Math.PI * 2 * this.r);
            var circlePer = (100 - newPercent) / 100 * (Math.PI * 2 * this.r);
            this.target.find(".nv-progress-circle-bar").attr('stroke-dashoffset', circlePer);
        }
    }
    return {init:progress.init}
},{requires:['jquery','./css/cdn_index.css'],alias:'progress'})