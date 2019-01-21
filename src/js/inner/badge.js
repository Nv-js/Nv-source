var _badge = {
    uid: 40800000,
    version: "1.0.0",
    init: function(domObject){
        this.eventFn.setNum(domObject);
    },
    options: {

    },
    events:{

    },
    eventFn:{
        setNum:function(domObject){
            var normalBadge=domObject.options.normalClassName;
            $(normalBadge).each(function (ind,ele) {
                setCharacter(ele);
            })
            $(document).on('DOMSubtreeModified',normalBadge,function(){
                setCharacter(this);
            })
            //DOM 监听测试
            $('#btn').click(function(){
                $('.nv-badge-normal:eq(0)').html('200000000000')
            });

            function setCharacter(ele){
                //判断徽标的内容里有没有非数字的东西
                //徽标的内容
                var str = $(ele).html();
                var re = /\D/;
                if(!re.test(str)){
                    //徽标内容转数字
                    var curNum=parseInt(str);
                    //最大值
                    var max=parseInt($(ele).attr('data-max'));
                    //如果没有max 属性，或其属性非数字
                    if(!max){
                        //默认99
                        max=99;
                    }
                    if(curNum>max){
                        $(ele).html(max+'+');
                    }
                }
            }
        }
    },
    ajax:{}

}

