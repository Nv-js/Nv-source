# Notification 通知提醒

在页面的右上角显示通知提醒信息，常用于以下场景：较复杂的通知内容、有交互的通知以及系统的推送

---


### 基础样式

基本使用方法，两种类型的信息提示，默认4秒后自动关闭，调用方法：`notification.alert(options)`，具体配置信息可见下面options配置项


```html
     <!--HTML-->
     <button type="button" class="nv-btn nv-btn-default" id="notification_all">Notification with tittle</button>
     <button type="button" class="nv-btn nv-btn-default" id="notification_title">Only the tittle</button>
     <!--javascript-->
     Nv.use("notification",function(nv,notification){
         document.getElementById("notification_all").addEventListener("click",function(){
             notification.alert({
                 title:"Title",
                 content:"This is the content......"
             })
         },false)
         document.getElementById("notification_title").addEventListener("click",function(){
             notification.alert({
                 title:"Only title"
             })
         },false)
     });
```

<br/>

### 带有图标的通知提醒

图标可以让通知提醒更醒目，分别有信息提醒`notification.info(options)`，成功`notification.success(options)`，警告`notification.warning(options)`，错误提示`notification.error(options)`



```html
    <!--HTML-->
    <button type="button" class="nv-btn nv-btn-default" id="notification_info">Info</button>
    <button type="button" class="nv-btn nv-btn-default" id="notification_success">Success</button>
    <button type="button" class="nv-btn nv-btn-default" id="notification_warning">Warning</button>
    <button type="button" class="nv-btn nv-btn-default" id="notification_error">Error</button>
    <!--javascript-->
    Nv.use("notification",function(nv,notification){
        document.getElementById("notification_info").addEventListener("click",function(){
            notification.info({
                title:"Info title",
                content:"This is the info content......"
            })
        },false)
        document.getElementById("notification_success").addEventListener("click",function(){
            notification.success({
                title:"Success title",
                content:"This is the success content......"
            })
        },false)
        document.getElementById("notification_warning").addEventListener("click",function(){
            notification.warning({
                title:"Info warning",
                content:"This is the warning content......"
            })
        },false)
        document.getElementById("notification_error").addEventListener("click",function(){
            notification.error({
                title:"Error title",
                content:"This is the error content......"
            })
        },false)
    });
```

<br/>

### 自定义显示时长

默认时长为4秒，为 0 则不自动关闭。配置信息详情查看options配置信息


```html
    <!--HTML-->
    <button type="button" class="nv-btn nv-btn-default">Open The Notification </button>
    <!--javascript-->
    Nv.use("notification",function(nv,notification){
        document.getElementById("notification_error_1").addEventListener("click",function(){
            notification.success({
                title:"Self time title",
                content:"Forever show ~~~ by options.time",
                iconsClassName:"nvicon-transaction",
                time:0
            })
        },false)

    });
```

<br/>


### API

notification.init(options)

+ `options`配置选项

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----  |
| options.time  | Number（必填）  | 定义提醒框消失时间，默认是4000毫秒 |
| options.title  | String (选填)   | 显示提示信息的标题，如果没有标题可以替换为内容，内容区content为空即可 |
| options.content  | String（必填）  | 提示内容 |
| options.iconsClassName  | String（必填）   | 提示图标，传入ICONS中的任何样式即可。e.g:"nvicon-star" |
| options.iconsShowStatus  | Number/String (选填)  | 是否显示图标，可以是数字0、1,也可以是布尔值 |



[Demo展示](http://nv.zhangjinglin.cn/api?type=notification)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/34)

    