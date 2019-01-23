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
            if(opt.array.length>0){
                $.each(opt.array,function (index, element) {
                    var $original = $(element);
                    var _checked = $original.prop('checked'),
                        _disabled = $original.prop('disabled'),
                        _id = $original.prop('id'),
                        _label = $original.attr('data-label') || '';
            
                    var uuid = function () {
                        var s = [];
                        var hexDigits = "0123456789abcdef";
                        for (var i = 0; i < 6; i++) {
                            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                        }
                        var uuid = s.join("");
                        return uuid;
                    }
                    var checkOnly = function () {
                        var id = uuid();
                        $(id).lenth > 0 ? checkOnly() : _id = id;
                    }
                    if (!_id) {
                        checkOnly();
                        $original.prop('id', _id);
                    }
                    var html = '<label class="nv-checkbox-wrapper" for="' + _id + '">' +
                        '<span class="nv-checkbox-clone">' +
                        '<span class="nv-checkbox-inner"></span>' +
                        '</span>' +
                        '<span class="nv-checkbox-label">' + _label +
                        '</span>' +
                        '</label>';
                    var $label = $(html);
                    $original.after($label);
                    $original.css('display', 'none');
            
                    var $clone = $label.children('.nv-checkbox-clone'),
                        $text = $clone.siblings('.nv-checkbox-label');
            
                    if (_label.length == 0) {
                        $text.css('display', 'none');
                    } else {
                        $text.css('display', 'inline');
                    }
                    //已选中
                    if (_checked) {
                        $clone.addClass('nv-checkbox-checked');
                        $label.addClass('nv-checkbox-wrapper-checked');
                    }
                    //已禁用
                    if (_disabled) {
                        $clone.addClass('nv-checkbox-disabled');
                        $label.addClass('nv-checkbox-wrapper-disabled');
                    }
                    _checkbox.eventFn.addClickEvent($label, element); //label绑定事件
                    _checkbox.eventFn.addEvent(element) //绑定事件
                })
            }
            
        }
    },
    eventFn:{
        addEvent: function(dom){
            dom.onnvchange = function (option) {
                var $input = $(this),
                    input = this,
                    _name = $input.prop('name'),
                    _id = $input.prop('id'),
                    _all = $input.attr('data-all');
    
                var $label = $input.siblings('[for="' + _id + '"]'),
                    $clone = $label.children('.nv-checkbox-clone'),
                    $text = $clone.siblings('.nv-checkbox-label');
    
                //默认配置
                var settings = {}
                var opt = $.extend({}, settings, option);
    
                for (var name in opt) {
                    if (name === 'checked') $input.prop('checked', opt[name]);
                    if (name === 'disabled') $input.prop('disabled', opt[name]);
                    if (name === 'value') $input.prop('value', opt[name]);
                    if (name === 'label') {
                        if (opt[name].length == 0) {
                            $text.css('display', 'none');
                            $input.removeAttr('data-label');
                        } else {
                            $text.css('display', 'inline').html(opt[name]);
                            $input.attr('data-label', opt[name]);
                        }
                    };
                }
                if (opt.beforeFn) opt.beforeFn.call(this, opt);
                
                //选中
                if ($input.prop('checked')) {
                    $clone.addClass('nv-checkbox-checked');
                    $label.addClass('nv-checkbox-wrapper-checked');
                } else {
                    $clone.removeClass('nv-checkbox-checked');
                    $label.removeClass('nv-checkbox-wrapper-checked');
                }
    
                //禁用
                if ($input.prop('disabled')) {
                    $clone.addClass('nv-checkbox-disabled');
                    $label.addClass('nv-checkbox-wrapper-disabled');
                } else {
                    $clone.removeClass('nv-checkbox-disabled');
                    $label.removeClass('nv-checkbox-wrapper-disabled');
                }
                var $checkAll = $('input[name="' + _name + '"][data-all="true"]'),
                    $aCheckItems = $('input[name="' + _name + '"][data-all!="true"]'),
                    checkAll = $checkAll[0];
    
                //根据当前input状态决定选中或非选中
                var select = function (element) {
                    var $element = $(element),
                        _id = $element.prop('id'),
                        _checked = $element.prop('checked'),
                        $label = $('label[for="' + _id + '"]'),
                        $clone = $label.children('.nv-checkbox-clone');
                    if (_checked) {
                        $clone.addClass('nv-checkbox-checked');
                        $label.addClass('nv-checkbox-wrapper-checked');
                    } else {
                        $clone.removeClass('nv-checkbox-checked');
                        $label.removeClass('nv-checkbox-wrapper-checked');
                    }
                }
                //取消半全选
                var cancelMidSelect = function (element) {
                    var $element = $(element),
                        _id = $element.prop('id'),
                        $label = $('label[for="' + _id + '"]'),
                        $clone = $label.children('.nv-checkbox-clone');
    
                    $clone.removeClass('nv-checkbox-mid-checked');
                }
                //半选中
                var midSelect = function (element) {
                    var $element = $(element),
                        _id = $element.prop('id'),
                        $label = $('label[for="' + _id + '"]'),
                        $clone = $label.children('.nv-checkbox-clone');
    
                    $clone.addClass('nv-checkbox-mid-checked');
                }
    
                cancelMidSelect(checkAll); //初始化全选按钮
                //全选条件判断,判断完退出
                for (var name in opt) {
                    if (name === 'checkedAll') {
                        if(opt[name]){
                            //全选
                            $checkAll.prop('checked', true);
                            $aCheckItems.prop('checked', true);
                        }else {
                            //全部选
                            $checkAll.prop('checked', false);
                            $aCheckItems.prop('checked', false);
                        }
                        select($checkAll[0]);
                        $aCheckItems.each(function (index, element) {
                            select(element);
                        })
                        return false;
                    }
                }
              
                //当前操作为全选
                if (_all) {
                    $aCheckItems.prop('checked', $checkAll.prop('checked'));
                    $aCheckItems.each(function (index, element) {
                        select(element);
                    })
                } else {
                    var aCheckbox_len = $aCheckItems.length,
                        checked_len = $aCheckItems.filter(':checked').length;
    
                    if (aCheckbox_len == checked_len) {
                        //全选
                        $checkAll.prop('checked', true);
                        select(checkAll);
                    } else if (checked_len > 0) {
                        //半全选 时机并未选中
                        $checkAll.prop('checked', false);
                        midSelect(checkAll);
                    } else {
                        //全不选
                        $checkAll.prop('checked', false);
                        select(checkAll);
                    }
                }
    
                if (opt.afterFn) opt.afterFn.call(this);
            }
        },
        addClickEvent: function($label, original) {
            $label.on('click', function () {
                setTimeout(function () {
                    original.onnvchange ? original.onnvchange() : '';
                }, 30)
            })
        }
    },
    ajax:{}

}
