var _input = {
    uid: 30100000,
    version: "1.0.0",
    init: function (domObject) {
        this.options._obj = domObject;
        this.events.bindEvent(domObject);
    },
    options: {
        _obj: {},
        cacheName: "input_cache"
    },
    events: {
        bindEvent: function (opt) {
            $.each(opt.array, function (i, n) {
                //缓存_obj'
                var $n = $(n);
                $n.data(_input.options.cacheName, _input.options._obj);

                // textarea
                if (opt.selector === opt.options.textareaClassName) {
                    $n.wrap('<div class="' + opt.options.groupClassName + '"></div>');
                    $n.after(
                        '<div class="' + opt.options.txtNumClassName + '">' +
                        '<span>' + $n.val().length + '</span>' +
                        '<span>/</span>' +
                        '<span>' + n.maxLength || 100 + '</span>' +
                        '</div>'
                    );
                    // todo BUG：dom插入数据不触发
                    $n.off("input propertychange").on("input propertychange", _input.eventFn.inputNumFn);
                } else {
                    // 初始化删除按钮
                    if ($n.hasClass(opt.options.clearClassName)) {
                        $n.wrap('<div class="' + opt.options.groupClassName + '"></div>');    // add group element
                        $n.after('<i class="' + opt.options.iconCloseCircle + '"></i>');  // add clean icon

                        var selscter = $n.closest(opt.options.groupSelector).children("." + opt.options.iconCloseCircle);
                        selscter.data(_input.options.cacheName, _input.options._obj);

                        // 监听input变化
                        // todo BUG：dom插入数据不触发
                        $n.off("input propertychange").on("input propertychange", _input.eventFn.showIconFn);
                        // 初始化默认值
                        if ($n.val().length > 0) {
                            $n.closest(opt.options.groupSelector).children('.' + opt.options.iconCloseCircle).show();
                        }

                        // 监听清理图标点击事件
                        selscter.off("click").on("click", _input.eventFn.clearFn);
                    }
                }

                // 去除inline-block时，空格造成的间距
                if ($n.parent().hasClass(opt.options.wapperClassName)) {
                    $n.parent().addClass('removeTextNodes');
                    _input.eventFn.removeTextNodes();
                }

                // onnvchange触发函数
                _input.eventFn.addEvent(n);
            });
        }
    },
    eventFn: {
        addEvent: function (el) {
            el.onnvchange = function (opt) {
                var opts = {
                        inserted: false,
                        beforeFn: function () {
                        },
                        afterFn: function () {
                        },
                    },
                    option = $.extend(opts, opt || {}),
                    $this = $(this);

                // 执行前回调
                option.beforeFn();

                if (option.inserted) {
                    var defaultStr = $this.val(),
                        maxLength = parseInt($this.attr('maxLength'));

                    if (defaultStr.length < maxLength + 1) {
                        $this.val(defaultStr + option.inserted);
                        // 改变字数，绑定this
                        _input.eventFn.inputNumFn.call(this);
                    }
                }

                // 执行后回调
                option.afterFn();

                opts.beforeFn.call(this, opts);
                opts.afterFn.call(this, opts);
            }
        },
        // 点击清理图标
        clearFn: function () {
            var $this = $(this),
                _obj = $this.data(_input.options.cacheName);
            $this.closest(_obj.options.groupSelector).children(_obj.selector).val('');
            $this.hide();
        },

        // 显示清空图标
        showIconFn: function () {
            var $this = $(this),
                _obj = $this.data(_input.options.cacheName),
                Selector = $this.closest(_obj.options.groupSelector).children('.' + _obj.options.iconCloseCircle);

            if ($this.val().length > 0) {
                Selector.show();
            } else {
                Selector.hide();
            }
        },
        // 改变字数
        inputNumFn: function () {
            var _obj = _input.options._obj,
                txtLength = $.trim($(this).val()).length,
                maxLength = $(this).attr('maxLength'),
                Selector = $(this).next(_obj.options.txtNumSelector).children('span').eq(0);
            Selector.text(txtLength);

            if (txtLength === 0) {
                Selector.css("color", "rgba(0,0,0,0.25)");
            } else if (txtLength < maxLength) {
                Selector.css("color", "rgba(0,0,0,0.45)");
            } else {
                Selector.css("color", "red");
            }
        },
        removeTextNodes: function () {
            $('.removeTextNodes').contents().filter(function() {
                return this.nodeType === 3;
            }).remove();
        }
    },
    ajax: {}
}
