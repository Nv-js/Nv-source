Nv.add("./tag/cdn_index", function (nv, $) {
    var _tag = {
        init: function () {
            $(document).on('click','.nv-tag-closable i',function(){
                _tag.events.closableTagClickEvent(this);
            })
            $(document).on('click','.nv-tag-addable',function(){
                _tag.events.addableTagClickEvent(this);
            })
            $(document).on('blur','.nv-tag-input',function(){
                _tag.events.inputBlurEvent(this);
            })
        },
        events: {
            closableTagClickEvent:function(obj){
                $(obj).parents('.nv-tag-closable').remove();
            },
            addableTagClickEvent:function(obj){
                var curInp=$(obj).parents('.nv-tag').find('.nv-tag-input');
                curInp.show();
                curInp.focus();
            },
            inputBlurEvent:function(obj){
                $(obj).hide();
                var val=$(obj).val();
                if(val){
                    var tagClosable='<span class="nv-tag-closable">'+val+' <i class="nvicon-close"></i></span>';
                    $(obj).parents('.nv-tag').before(tagClosable);
                    $(obj).val('');
                }
            },
        },
        eventFn: {


        }
    }
    return {
        init: function () {
            _tag.init();
        }
    }
}, {requires: ["jquery","/tag/css/cdn_index.css"],alias:'tag'})


