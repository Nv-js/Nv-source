var _radio = {
    uid: 30300000,
    version: "1.0.0",
    init: function (domObject) {
        this.options._obj = domObject;
        this.events.closeEvent(domObject);
    },
    options: {
        _obj: {}, //公共变量，永远不会变
    },
    events: {
        closeEvent: function (opt) {
            var PREFIX = _radio.options._obj.prefix;
            if (opt.array.length > 0) {
                $.each(opt.array, function (index, element) {
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
                    var html = '<label class="' + PREFIX + '-radio-wrapper" for="' + _id + '">' +
                        '<span class="' + PREFIX + '-radio-clone">' +
                        '<span class="' + PREFIX + '-radio-inner"></span>' +
                        '</span>' +
                        '<span class="' + PREFIX + '-radio-label">' + _label +
                        '</span>' +
                        '</label>';
                    var $label = $(html);
                    $original.after($label);
                    $original.css('display', 'none');

                    var $clone = $label.children('.' + PREFIX + '-radio-clone'),
                        $text = $clone.siblings('.' + PREFIX + '-radio-label');

                    if (_label.length == 0) {
                        $text.css('display', 'none');
                    } else {
                        $text.css('display', 'inline');
                    }
                    //已选中
                    if (_checked) {
                        $clone.addClass(PREFIX + '-radio-checked');
                        $label.addClass(PREFIX + '-radio-wrapper-checked');
                    }
                    //已禁用
                    if (_disabled) {
                        $clone.addClass(PREFIX + '-radio-disabled');
                        $label.addClass(PREFIX + '-radio-wrapper-disabled');
                    }

                    _radio.eventFn.addClickEvent($label, element); //label绑定事件
                    _radio.eventFn.addEvent(element); //绑定事件
                })
            }

        }
    },
    eventFn: {
        addEvent: function (dom) {
            dom.onnvchange = function (option) {
                var PREFIX = _radio.options._obj.prefix;
                var $input = $(this),
                    input = this,
                    _name = $input.prop('name'),
                    _id = $input.prop('id');

                var $label = $input.siblings('[for="' + _id + '"]'),
                    $clone = $label.children('.' + PREFIX + '-radio-clone'),
                    $text = $clone.siblings('.' + PREFIX + '-radio-label');

                var opt = option || {};

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
                    $clone.addClass(PREFIX + '-radio-checked');
                    $label.addClass(PREFIX + '-radio-wrapper-checked');
                    //其他项目取消选中
                    var aInput = $('input[name=' + _name + ']');
                    aInput.each(function (i, element) {
                        if (input !== element) {
                            element.onnvchange ? element.onnvchange() : '';
                        }
                    })
                } else {
                    $clone.removeClass(PREFIX + '-radio-checked');
                    $label.removeClass(PREFIX + '-radio-wrapper-checked');
                }
                //禁用
                if ($input.prop('disabled')) {
                    $clone.addClass(PREFIX + '-radio-disabled');
                    $label.addClass(PREFIX + '-radio-wrapper-disabled');
                } else {
                    $clone.removeClass(PREFIX + '-radio-disabled');
                    $label.removeClass(PREFIX + '-radio-wrapper-disabled');
                }

                if (opt.afterFn) opt.afterFn.call(this);
            }
        },
        addClickEvent: function ($label, original) {
            $label.on('click', function () {
                setTimeout(function () {
                    original.onnvchange ? original.onnvchange() : '';
                }, 30)
            })
        }
    },
    ajax: {}

}