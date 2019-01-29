(function(){
    /**
     * @Author: zhangjinglin
     * @Email: zhangjinglin@jd.com
     * @Date: Created in 2018/1/28 下午9:00
     * @Description:默认模块配置
     */

    var config = {
        "jquery":{
            "path":"./jqplugins/jquery/@version/cdn_index",
            "version":'1.12.3'
        },
        "jquery3":{
            "path":"./jqplugins/jquery/@version/cdn_index",
            "version":'3.2.1'
        },
        "zepto":{
            "path":"./jqplugins/zepto/@version/cdn_index",
            "version":"1.0.1"
        },
        "perfectscrollbar":{
            "path":"./perfectscrollbar/@version/cdn_index",
            "version":"1.0.1"
        },
        "swiper":{
            "path":"./swiper/@version/cdn_index",
            "version":"1.0.1"
        },
        "echarts":{
            "path":"./echarts/@version/cdn_index",
            "version":"4.0.1"
        },
        "echartsSimple":{
            "path":"./echarts/@version/cdn_echarts-simple",
            "version":"4.0.1"
        },
        "echartsNormal":{
            "path":"./echarts/@version/cdn_echarts-normal",
            "version":"4.0.1"
        },
        "animate":{
            "path":"./animate/@version/cdn_index",
            "version":"1.0.1"
        },
        "compress":{
            "path":"./compress/@version/cdn_index",
            "version":"1.0.1"
        },
        "dragFloat":{
            "path":"./dragFloat/@version/cdn_index",
            "version":"1.0.1"
        },
        "message":{
            "path":"./message/@version/cdn_index",
            "version":"1.0.1"
        },
        "tab":{
            "path":"./tabs/@version/cdn_index",
            "version":"1.0.1"
        },
        "tmpl":{
            "path":"./tmpl/@version/cdn_index",
            "version":"1.0.1"
        },
        "datatables":{
            "path":"./datatables/@version/cdn_index",
            "version":"1.0.1"
        },
        "page":{
            "path":"./page/@version/cdn_index",
            "version":"1.0.1"
        },
        "modal":{
            "path":"./modal/@version/cdn_index",
            "version":"1.0.1"
        },
        "jstree":{
            "path":"./jstree/@version/cdn_index",
            "version":"3.3.5"
        },
        "ztree":{
            "path":"./ztree/@version/cdn_index",
            "version":"1.0.1"
        },
        "mock":{
            "path":"./mock/@version/cdn_index",
            "version":"1.0.1"
        },
        "datePicker":{
            "path":"./datePicker/@version/cdn_index",
            "version":"1.0.1"
        },
        "notification":{
            "path":"./notification/@version/cdn_index",
            "version":"1.0.1"
        },
        "affix":{
            "path":"./affix/@version/cdn_index",
            "version":"1.0.1"
        },
        "popover":{
            "path":"./popover/@version/cdn_index",
            "version":"1.0.1"
        },
        "tag":{
            "path":"./tag/@version/cdn_index",
            "version":"1.0.1"
        },
        "ajaxForm":{
            "path":"./jqplugins/jqueryForm/@version/cdn_index",
            "version":"3.50.0"
        },
        "progress":{
            "path":"./progress/@version/cdn_index",
            "version":"1.0.1"
        },
        "fixedColumns":{
            "path":"./datatables/@version/cdn_fixedColumns",
            "version":"1.0.1"
        }
    }
    /**
     * @Author: zhangjinglin
     * @Email: zhangjinglin@jd.com
     * @Date: Created in 2018/1/30 下午9:49
     * @Description:所有内置模块的集合，需要压缩后处理
     */
//all inner modules code DEMO


    /**
     * @Author: zhangjinglin
     * @Email: zhangjinglin@jd.com
     * @Date: Created in 2018/1/30 下午9:47
     * @Description:各个模块的配置,包含选择器名称与模块名称
     */
    var prefix = "nv";
    var moduleSelectors = [
        {
            selectorName:"."+prefix+"-dropdown",
            prefix: prefix,
            moduleName:"_dropdown",
            options:{}
        },
        {
            selectorName:"."+prefix+"-alert",
            moduleName:"_alert",
            options:{
                closeSelector:"."+prefix+"-alert-close",//关闭的样式名称
                isRemove:true,//关闭后，是否是移除，默认是移除,否则是隐藏
            }
        },
        {
            selectorName:"."+prefix+"-input",
            moduleName:"_input",
            options:{
                clearSelector:"."+prefix+"-input-clear",
                clearClassName:prefix+"-input-clear",
                groupSelector:"."+prefix+"-input-group",
                groupClassName: prefix + '-input-group', // 多个组件外层盒子
                iconCloseCircle: prefix + 'icon-close-circle', // 关闭图标
                wapperClassName: prefix + '-input-wapper', // 组合时外包盒子
            }
        },
        {
            selectorName:"."+prefix+"-textarea",
            moduleName:"_input",
            options:{
                txtNumSelector:"."+prefix+"-input-num",
                groupSelector:"."+prefix+"-input-group",
                groupClassName: prefix + '-input-group', // 多个组件外层盒子
                textareaClassName: "." + prefix + '-textarea', // 区分input和textarea
                txtNumClassName: prefix + '-input-num', // textarea输入字数显示
            }
        },
        {
            selectorName:"."+prefix+"-radio",
            prefix: prefix,
            moduleName:"_radio",
            options:{}
        },
        {
            selectorName:"."+prefix+"-checkbox",
            prefix: prefix,
            moduleName:"_checkbox",
            options:{}
        },
        {
            selectorName:"."+prefix+"-select",
            moduleName:"_select",
            options:{
                hideClassName: prefix + "-select-hide",//隐藏
                disableClassName: prefix + "-select-disable",//禁用样式
                smClassName: prefix + "-select-sm",//sm
                lgClassName: prefix + "-select-lg",//lg
                menuClassName: prefix + '-select-menu', // 下拉框列表
                receptionClassName: prefix + "-select-reception",//显示选择项内容
                simulationClassName: prefix + "-simulation",  // 模拟出的最外层盒子
                arrowUpClassName: prefix + "icon-arrow-up",    // 箭头向上的图标
                arrowDownClassName: prefix + "icon-arrow-down",    // 箭头向下的图标
                iconClose: prefix + "icon-close",   // 关闭图标
                selectValues: prefix + "-select-values", // 当模拟框有选中值时带的class
                multipleClassName: prefix + '-select-multiple', // 多选样式
                checkboxChecked: prefix + '-select-checkbox-checked', // 是否选中
                checkboxUncheck: prefix + '-select-checkbox-uncheck',    // 部分选中
                checkboxNormal: prefix + '-select-checkbox-normal',     // checkbox盒子样式
            }
        },
        // {
        //     selectorName:"."+prefix+"-timeline",
        //     moduleName:"_timeline",
        //     options:{
        //     }
        // },
        {
            selectorName:"."+prefix+"-nav",
            moduleName:"_nav",
            options:{
                itemClassName:"."+prefix + "-nav-item", //item项
                treeClassName:prefix + "-nav-tree", //侧边导航
                disableClassName:prefix + "-nav-disable", //禁用效果
                showClassName:prefix + "-nav-show", //显示菜单
                selectedClassName:prefix + "-nav-selected", //选中
                shrinkClassName:prefix + "-nav-shrink", //收缩菜单
                buttonClassName:"." + prefix + "-nav-button", //控制收缩的button
                collapsedClassName:prefix + "-nav-collapsed" //展开菜单
            }
        },
        {
            selectorName: "." + prefix + "-upload",
            moduleName: "_upload",
            options: {
                moduleClassName: prefix + "-upload-module",
                explainClassName: prefix + "-upload-explain", //带说明文字
                avatarClassName: prefix + "-upload-avatar",  //上传头像
                pictureClassName: prefix + "-upload-picture",  //多图片上传
                photoClassName: prefix + "-upload-photo",  //图片列表
                verticalClassName: prefix + "-upload-list-vertical",  //图片列表垂直排列
                dragClassName: prefix + "-upload-drag",  //可拖拽上传
                manualClassName: prefix + "-upload-manual",  //手动上传
                listClassName: prefix + "-upload-list",  //默认列表
                pictureListClassName: prefix + "-upload-list-picture",  //多图片上传列表
                photoListClassName: prefix + "-upload-list-photo",  //图片列表
                hideClassName: prefix + "-upload-hide"
            }
        },
        {
            selectorName:"."+prefix+"-layout",
            moduleName:"_layout",
            options:{
                sideTriggerClassName:prefix + "-layout-side-trigger",
                sideClassName:prefix + "-layout-side",
                collapsedClassName:prefix + "-layout-collapsedClassName",
                collapsedNavClassName:prefix + "-nav-collapsed", //展开菜单
                navSelector:prefix+"-nav",
                trigger:prefix + "-layout-trigger",
                photo:prefix+"-layout-info-photo"
            }
        },
        {
            selectorName:"."+prefix+"-tooltip",
            moduleName:"_tip",
            options:{
            }
        },
        {
            selectorName:"."+prefix+"-top",
            moduleName:"_top",
            options:{
            }
        },
        {
            selectorName:"."+prefix+"-badge",
            moduleName:"_badge",
            options:{
                normalClassName:"."+prefix+"-badge-normal"
            }
        }
    ]


// hasOwnProperty   = ObjProto.hasOwnProperty;
    /**
     * @Author: zhangjinglin
     * @Email: zhangjinglin@jd.com
     * @Date: Created in 2018/1/30 下午9:46
     * @Description:nv的继承方法
     */
    Nv.config({
        modules:config,
        moduleSelectors:moduleSelectors,
        language:"zh_CN"
    })
})()

Nv.add("./init/1.0.1/cdn_index",function(nv,$) {
    //
    nv.global.init = nv.init = _init;
    nv.dom = {
        //初始化配置
        init: _init,
        //手动绑定组件到页面节点元素
        dispatch: _init_auto,
        //自动观察页面节点变化，并通知相应的组件进行相应
        autoDispatch: _init_observer,
        //手动查找页面节点元素
        find: _find,
        //所有ajax请求
        ajax: _ajax,
        //模版对象
        tmpl: tmpl,
        //滚动队列
        scrollQueen: [],
        //点击队列
        clickQueen: [],
        //resize队列
        resizeQueen: []
    }

