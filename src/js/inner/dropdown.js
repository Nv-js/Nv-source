var _dropdown = {
    uid: 20300000,
    version: "1.0.0",
    init: function (domObject) {
        this.options._obj = domObject;
        this.events.eventList(domObject.array);
    },
    options: {
        _obj: {}, //公共变量，永远不会变
    },
    events: {
        eventList: function (array) {
            var PREFIX = _dropdown.options._obj.prefix;
            //自动计算高度
            var autoHeight = function (element) {
                var $element = $(element),
                    $link = $element.children('.' + PREFIX + '-dropdown-link'),
                    $menu = $element.children('.' + PREFIX + '-dropdown-menu');
                /**
                 * 根据视窗距离屏幕上下距离,决定向上展示还是向下展示.
                 * 上下同时不够,向下展开
                 */
                var element_t = $element.offset().top,
                    element_h = $element.height(),
                    window_h = $(window).height(),
                    scroll_h = $(document).scrollTop(),
                    menu_pt_h = $menu.css('padding-top'),
                    menu_pb_h = $menu.css('padding-bottom'),
                    menu_h = $menu.height() + parseFloat(menu_pt_h) + parseFloat(menu_pb_h);
                //距离
                var bottom_h = window_h - (element_t - scroll_h) - element_h,
                    top_h = window_h - bottom_h - element_h;

                if (menu_h < bottom_h) {
                    $element.removeClass(PREFIX + '-dropdown-up'); //down
                } else if (menu_h < top_h) {
                    $element.addClass(PREFIX + '-dropdown-up'); //up
                } else {
                    $element.removeClass(PREFIX + '-dropdown-up'); //down
                }
            }
            $.each(array, function (index, element) {
                var $element = $(element),
                    $link = $element.children('.' + PREFIX + '-dropdown-link'),
                    $menu = $element.children('.' + PREFIX + '-dropdown-menu');

                var type = $element.attr('data-type'),
                    menuwidth = $element.attr('data-menuwidth'),
                    menuheight = $element.attr('data-menuheight'),
                    closeauto = $element.attr('data-close-auto');

                //整体禁用
                if ($element.hasClass(PREFIX + '-dropdown-disabled')) {
                    return;
                }

                //事件委托 阻止冒泡
                $element.on('click', '.' + PREFIX + '-dropdown-item-disabled', function (ev) {
                    ev.stopPropagation();
                    return false;
                })
                $element.on('click', '.' + PREFIX + '-dropdown-item', function (ev) {
                    ev.stopPropagation();
                })

                //自定义属性
                //展开框宽度限定
                if (menuwidth) {
                    $menu.css('width', menuwidth);
                }
                if (menuheight) {
                    $menu.css('height', menuheight);
                }

                $(window).on("scroll resize", function () {
                    if (!closeauto) autoHeight(element);
                })
                //初始化
                if (!closeauto) autoHeight(element);
                //展开方式
                if (type === 'click') {
                    $element.on('click', function (ev) {
                        ev.stopPropagation();
                        if (!closeauto) autoHeight(this);
                        $element.hasClass('open') ? $element.removeClass('open') : $element.addClass('open');
                    })
                } else {
                    $element.on('mouseenter', function (ev) {
                        ev.stopPropagation();
                        if (!closeauto) autoHeight(this);
                        $element.addClass('open');
                    })
                    $element.on('mouseleave', function (ev) {
                        ev.stopPropagation();
                        $element.removeClass('open');
                    })
                }
            })
            //点击其他地方取消相关样式
            var nv = Nv;
            nv.dom.clickQueen.push(function () {
                $.each(array, function (i, n) {
                    $(this).removeClass('open');
                })
            })
        }
    },
    eventFn: {},
    ajax: {}
}