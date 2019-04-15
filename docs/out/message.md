# Message 全局提示

用户主动操作后的反馈提示

---

### 基础样式

基本使用方法，四种类型的信息提示，默认3s消失，可自定义时长，不要超过15个字


```html
   <!--HTML-->
   <button type="button" class="nv-btn nv-btn-default info">Info</button>
   <button type="button" class="nv-btn nv-btn-default success">Success</button>
   <button type="button" class="nv-btn nv-btn-default warning">Warning</button>
   <button type="button" class="nv-btn nv-btn-default error">Error</button>

   <!--jQuery-->
   Nv.use("message","jquery",function(nv,message,$){
       $(".info").off("click").on("click",function(){
           message.info("This is a message of info");
       })
       $(".success").off("click").on("click",function(){
           message.success("This is a message of success");
       })
       $(".warning").off("click").on("click",function(){
           message.warning("This is a message of warning");
       })
       $(".error").off("click").on("click",function(){
           message.error("This is a message of error");
       })
   })
```

<br/>

### 自定义显示时长 

全局Loading的状态，并异步在某个时机移除

代码结构如下：

```html
    <!--HTML-->
    <button type="button" class="nv-btn nv-btn-default">Customized display duration</button>
    <!--jQuery-->
    Nv.use("message","jquery",function(nv,message,$){
        $(".info").off("click").on("click",function(){
            //10s后消失
            message.info("This message will disappear in 10 seconds",{
                time:10000
            });
        })
    })
```
<br/>

### 加载中 

可以选择每页显示列表数量

```html
   <!--HTML-->
   <button type="button" class="nv-btn nv-btn-default">Loading</button>

   <!--jQuery-->
   Nv.use("message","jquery",function(nv,message,$){
       $(".info").off("click").on("click",function(){
           //10s后消失
           message.loadingShow("Loading...");
           //message.loadingHide()
       })
   })
```
<br/>

### 警告提示框

经常用于阻断性消息提醒，可以自定义图标

```html
    <!--HTML-->
    <button type="button" class="nv-btn nv-btn-default">Alert</button>

    <!--jQuery-->
    Nv.use("message",function(nv,message){
        message.alert('@注意此时是对话框')
    })
```
<br/>

### 确认提示框

确认是否要进行下一步操作，常用语警醒确认操作

```html
   <!--HTML-->
   <button type="button" class="nv-btn nv-btn-default">Confirm</button>

   <!--jQuery-->
   Nv.use("message",function(nv,message){
   message.confirm('是否要删除此条数据')
   })
```
<br/>

> 综上，page.init(config)配置项目如下：

### API

> Method
 
  方法  | 入参（是否必要）   |  描述  |
 | --------    | :----- | :----  |
 |  message.config | Object options  | 全局配置信息 |
 | message.info  | String name,Object options(可选)   | 重要信息提示，可单独配置相关信息 |
 | message.success  | String name,Object options(可选)  | 成功信息提示，可单独配置相关信息 |
 | message.warning  | String name,Object options(可选)  | 警告信息提示，可单独配置相关信息 |
 | message.error  | String name,Object options(可选)  | 错误信息提示，可单独配置相关信息 |
 | message.loadingShow  | String name,Object options(可选)   | 加载信息提示，可单独配置相关信息 |
 | message.loadingHide  |  | 加载隐藏 |
 | message.alert  |String content,Object config(可选)  | 信息警告提示框，content为信息内容|
 | message.confirm  | String content,Object config(可选)  | 信息确认提示框，content为信息内容 |




+ 以上入参的Object options选项的配置

+ `options`配置选项

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----  |
| options.time  | Number (选填)  | 自定义消失时间，单位是(ms)，默认是3000，针对loadingShow无效 |
| options.content  | String（可选）  | 提示内容，同方法中的String name 属性 |
| options.iconsClassName  | String（可选）  | 提示图标，传入ICONS中的任何样式即可。e.g:"nvicon-star" |
| options.iconsShowStatus  | Number/Boolean（可选）   | 是否显示图标，可以是数字0、1,也可以是布尔值 |


+ 以上入参的Object config选项的配置

+ `config`配置选项

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----  |
| config.content  | String (选填)  | 定义的显示内容 |
| config.title  | String（可选）  | 显示标题名称 |
| config.onClose  | Function（可选）  | 关闭对话框时，触发此方法，并且内部指针指向当前会话Dom对象 |
| config.onConfirm  | Function（可选）   | 确认的时候触发此方法，并且内部指针指向当前会话Dom对象 |
| config.okText  | String（可选）  | 确认按钮文案，默认是中文 |
| config.closeText  | String（可选）   | 关闭按钮文案，默认是中文 |

[Demo展示](http://www.nv-js.com/api?type=message)

[留言和讨论](https://github.com/Nv-js/nv-source/issues/29)

    