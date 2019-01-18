(function(){
    /**
     * @Author: zhangjinglin
     * @Email: zhangjinglin@jd.com
     * @Date: Created in 2018/1/28 下午9:00
     * @Description:默认模块配置
     */
    var config = {
        "jquery":{
            "path":"./jquery/cdn_index",
            "dependencies":{}
        },
        "jquery3":{
            "path":"./jquery.3/cdn_index",
            "dependencies":{}
        },
        "zepto":{
            "path":"./zepto/cdn_index",
            "dependencies":{}
        },
        "mobiscroll":{
            "path":"./mobiscroll/cdn_index"
        },
        "perfectscrollbar":{
            "path":"./perfectscrollbar/cdn_index"
        },
        "swiper":{
            "path":"./swiper/cdn_index"
        },
        "gmap":{
            "path":"./gmap/cdn_index"
        },
        "echarts":{
            "path":"./echarts/cdn_index"
        },
        "echartsSimple":{
            "path":"./echarts/cdn_echarts-simple"
        },
        "echartsNormal":{
            "path":"./echarts/cdn_echarts-normal"
        },
        "toast":{
            "path":"./toast/cdn_index"
        },
        "animate":{
            "path":"./animate/cdn_index"
        },
        "compress":{
            "path":"./compress/cdn_index"
        },
        "dragFloat":{
            "path":"./dragFloat/cdn_index"
        },
        "message":{
            "path":"./message/cdn_index"
        },
        "tab":{
            "path":"./tabs/cdn_index"
        },
        "tmpl":{
            "path":"./tmpl/cdn_index"
        },
        "lazyload":{
            "path":"./nvModules/cdn_lazyload"
        },
        "datatables":{
            "path":"./datatables/cdn_index"
        },
        "page":{
            "path":"./nvModules/cdn_page"
        },
        "modal":{
            "path":"./modal/cdn_index"
        },
        "jstree":{
            "path":"./jstree/cdn_index"
        },
        "ztree":{
            "path":"./ztree/cdn_index"
        },
        "mock":{
            "path":"./mock/cdn_index"
        },
        "datePicker":{
            "path":"./datePicker/cdn_index"
        },
        "notification":{
            "path":"./notification/cdn_index"
        },
        "affix":{
            "path":"./affix/cdn_index"
        },
        "popover":{
            "path":"./popover/cdn_index"
        },
        "tag":{
            "path":"./tag/cdn_index"
        },
        "ajaxForm":{
            "path":"./jqplugins/jqueryForm/cdn_index"
        },
        "progress":{
            "path":"./progress/cdn_index"
        },
        "fixedColumns":{
            "path":"./datatables/cdn_fixedColumns"
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
            moduleName:"_dropdown",
            options:{
                showMenuClassName:prefix+"-dropdown-show",//显示下拉菜单
                centerClassName:prefix+"-dropdown-center",//居中名称
                menuClassName:prefix+"-dropdown-menu",//菜单名称
                domEventName:prefix+"-event",//获取触发事件的方法
                cacheName:prefix+"-show"//设置节点是否已缓存的名称
            }
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
            }
        },
        {
            selectorName:"."+prefix+"-textarea",
            moduleName:"_input",
            options:{
                txtNumSelector:"."+prefix+"-input-num",
                groupSelector:"."+prefix+"-input-group",
            }
        },
        {
            selectorName:"."+prefix+"-radio",
            moduleName:"_radio",
            options:{
                radioedClassName:prefix+"-radio-radioed",//选中的radio
                disabledClassName:prefix+"-radio-disable",//禁用的radio
                verticalClassName:prefix+"-radio-vertical"//垂直排列的radio
            }
        },
        {
            selectorName:"."+prefix+"-checkbox",
            moduleName:"_checkbox",
            options:{
                checkedAllClassName:prefix+"-checkbox-all",//全选
                checkedClassName:prefix+"-checkbox-checked",//选中
                disabledClassName:prefix+"-checkbox-disable",//禁用的checkbox
                containerClassName:prefix+"-checkbox-container",//全选的容器
                sigleContainerClassName:prefix+"-checkbox-sigle-container",//全选组件中的单选框
                allContainerClassName:prefix+"-checkbox-all-container",//全选组件中的全选框
                uncheckClassName:prefix+"-checkbox-uncheck"//全选按钮没有全部选中的情况下
            }
        },
        {
            selectorName:"."+prefix+"-select",
            moduleName:"_select",
            options:{
                hideClassName:prefix + "-select-hide",//隐藏
                disableClassName:prefix + "-select-disable",//禁用样式
                smClassName:prefix + "-select-sm",//sm
                lgClassName:prefix + "-select-lg",//lg
                titleClassName:"."+prefix + "-select-title",//显示选择项内容
                contentClassName:"."+prefix + "-select-content",//下拉选择项列表
                unselectClassName:"."+prefix + "-unselect"

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
    Nv._config({
        module:config,
        moduleSelectors:moduleSelectors,
        language:"zh-CN"
    })
})()


Nv.add("./nv/cdn_index",function(nv,$){
    //
    nv.global.init = nv.init = _init;
    nv.dom = {
        //初始化配置
        init:_init,
        //手动绑定组件到页面节点元素
        dispatch:_init_auto,
        //自动观察页面节点变化，并通知相应的组件进行相应
        autoDispatch:_init_observer,
        //手动查找页面节点元素
        find:_find,
        //所有ajax请求
        ajax:_ajax,
        //模版对象
        tmpl:tmpl,
        //滚动队列
        scrollQueen:[],
        //点击队列
        clickQueen:[],
        //resize队列
        resizeQueen:[]
    }
    //


