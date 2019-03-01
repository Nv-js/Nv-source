# Modal 弹框

模态框对话框组件，内置各种信息弹窗

---

### 使用方法

+ 复制你想要使用的弹窗html到页面,通过js调用即可使用

+ 对关闭和确认按钮均可传递回调函数，高度自定义

<br/>

### 不同尺寸弹窗

弹窗有三个尺寸（lg、sm、normal）：

+ nv-modal节点加上class名为nv-modal-lg即为大弹窗，宽度为800px

+ nv-modal节点加上class名为nv-modal-normal即为适中弹窗，宽度为600px

+ nv-modal节点加上class名为nv-modal-sm即为小弹窗，宽度为400px（默认显示nv-modal-sm）

```html
   <!--大尺寸弹窗-->
   <!--html代码-->
   <div class="nv-modal nv-modal-lg nv-modal-size-lg">
       <div class="nv-modal-dialog">
           <div class="nv-modal-content">
               <div class="nv-modal-header">
                   <p class="nv-modal-title">
                       <span>Title</span>
                       <i class="nvicon-close nv-modal-close"></i>
                   </p>
               </div>
               <div class="nv-modal-body">
                   Here is the content  Here is the content Here is the content  Here is the content
               </div>
               <div class="nv-modal-footer">
                   <button class="nv-btn nv-btn-default nv-modal-btn nv-modal-cancel">Cancle</button>
                   <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-enter">Ok</button>
               </div>
           </div>
       </div>
   </div>
   <!--javascript代码-->
   Nv.ready(function(){
       Nv.use("modal",function(nv,modal){
           /*
           modal.init中第一个参数为需要调用弹窗的class或者id，
           第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
           他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
           弹窗关闭的回调函数
           */
           var modal=modal.init(".nv-modal-size-lg",{
               top:"",
               openCallback:function(){},
               closeCallback:function(){}
           }),
           /*
           用事件触发弹窗消失或者隐藏
           */
           $(".show").click(function(){
               modal.show();
           })
           $(".close").click(function(){
               modal.hide();
           })
       })
   })
  <!--正常尺寸弹窗-->
   <!--html代码-->
   <div class="nv-modal nv-modal-normal nv-modal-size-normal">
       <div class="nv-modal-dialog">
           <div class="nv-modal-content">
               <div class="nv-modal-header">
                   <p class="nv-modal-title">
                       <span>Title</span>
                       <i class="nvicon-close nv-modal-close"></i>
                   </p>
               </div>
               <div class="nv-modal-body">
                   Here is the content  Here is the content Here is the content  Here is the content
               </div>
               <div class="nv-modal-footer">
                   <button class="nv-btn nv-btn-default nv-modal-btn nv-modal-cancel">Cancle</button>
                   <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-enter">Ok</button>
               </div>
           </div>
       </div>
   </div>
   <!--javascript代码-->
   Nv.ready(function(){
       Nv.use("modal",function(nv,modal){
           /*
           modal.init中第一个参数为需要调用弹窗的class或者id，
           第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
           他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
           弹窗关闭的回调函数
           */
           var modal=modal.init(".nv-modal-size-normal",{
               top:"",
               openCallback:function(){},
               closeCallback:function(){}
           }),
           /*
           用事件触发弹窗消失或者隐藏
           */
           $(".show").click(function(){
               modal.show();
           })
           $(".close").click(function(){
               modal.hide();
           })
       })
   })
   <!--小尺寸弹窗-->
   <!--html代码-->
   <div class="nv-modal nv-modal-sm nv-modal-size-sm">
       <div class="nv-modal-dialog">
           <div class="nv-modal-content">
               <div class="nv-modal-header">
                   <p class="nv-modal-title">
                       <span>Title</span>
                       <i class="nvicon-close nv-modal-close"></i>
                   </p>
               </div>
               <div class="nv-modal-body">
                   Here is the content  Here is the content Here is the content  Here is the content
               </div>
               <div class="nv-modal-footer">
                   <button class="nv-btn nv-btn-default nv-modal-btn nv-modal-cancel">Cancle</button>
                   <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-enter">Ok</button>
               </div>
           </div>
       </div>
   </div>
   <!--javascript代码-->
   Nv.ready(function(){
       Nv.use("modal",function(nv,modal){
           /*
           modal.init中第一个参数为需要调用弹窗的class或者id，
           第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
           他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
           弹窗关闭的回调函数
           */
           var modal=modal.init(".nv-modal-size-sm",{
               top:"",
               openCallback:function(){},
               closeCallback:function(){}
           }),
           /*
           用事件触发弹窗消失或者隐藏
           */
           $(".show").click(function(){
               modal.show();
           })
           $(".close").click(function(){
               modal.hide();
           })
       })
   })
```

<br/>

### 消息提示 

消息提示的弹窗

代码结构如下：

```html
     <!--html代码-->
     <div class="nv-modal fade nv-modal-prompt">
         <div class="nv-modal-dialog">
             <div class="nv-modal-content">
                 <div class="nv-modal-header">
                     <p class="nv-modal-title">
                         <span>Title</span>
                         <i class="nvicon-close nv-modal-close"></i>
                     </p>
                 </div>
                 <div class="nv-modal-body">
                     Here is the content  Here is the content Here is the content  Here is the content
                 </div>
                 <div class="nv-modal-footer">
                     <button class="nv-btn nv-btn-default nv-modal-btn nv-modal-cancel">Cancle</button>
                     <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-enter">Ok</button>
                 </div>
             </div>
         </div>
     </div>
     <!--javascript代码-->
     Nv.ready(function(){
         Nv.use("modal",function(nv,modal){
             /*
                 modal.init中第一个参数为需要调用弹窗的class或者id，
                 第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
                 他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
                 弹窗关闭的回调函数
             */
             var modal=modal.init(".nv-modal-prompt",{
                 top:"",
                 openCallback:function(){},
                 closeCallback:function(){}
             }),
             /*
                 用事件触发弹窗消失或者隐藏
             */
             $(".show").click(function(){
                 modal.show();
             })
             $(".close").click(function(){
                 modal.hide();
             })
         })
     })
```
<br/>

### 确认消息 

确认消息框，主要是用于相关操作的确认

```html
   <!--html代码-->
   <div class="nv-modal fade nv-modal-enter">
       <div class="nv-modal-dialog">
           <div class="nv-modal-content">
               <div class="nv-modal-header">
                   <p class="nv-modal-title">
                       <span>Title</span>
                       <i class="nvicon-close nv-modal-close"></i>
                   </p>
               </div>
               <div class="nv-modal-body">
                   <i class="nvicon-info nv-modal-warning"></i>Do you want to delete these items?
               </div>
               <div class="nv-modal-footer">
                   <button class="nv-btn nv-btn-default nv-modal-btn nv-modal-cancel">Cancle</button>
                   <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-enter">Ok</button>
               </div>
           </div>
       </div>
   </div>
   <!--javascript代码-->
   Nv.ready(function(){
       Nv.use("modal",function(nv,modal){
           /*
           modal.init中第一个参数为需要调用弹窗的class或者id，
           第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
           他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
           弹窗关闭的回调函数
           */
           var modal=modal.init(".nv-modal-enter",{
               top:"",
               openCallback:function(){},
               closeCallback:function(){}
           }),
           /*
           用事件触发弹窗消失或者隐藏
           */
           $(".show").click(function(){
               modal.show();
           })
           $(".close").click(function(){
               modal.hide();
           })
       })
   })
```
<br/>

### 提交信息

提交信息的弹窗,用于和表单控件组合使用

```html
    <!--html代码-->
    <div class="nv-modal fade nv-modal-submit">
        <div class="nv-modal-dialog">
            <div class="nv-modal-content">
                <div class="nv-modal-header">
                    <p class="nv-modal-title">
                        <span>Title</span>
                        <i class="nvicon-close nv-modal-close"></i>
                    </p>
                </div>
                <div class="nv-modal-body">
                    <form>
                        <div>
                            <label>Fied A</label>
                            <input type="text" placeholder="Please input" class="nv-input">
                        </div>
                        <div>
                            <label>Fied A</label>
                            <input type="text" placeholder="Please input" class="nv-input">
                        </div>
                    </form>
                </div>
                <div class="nv-modal-footer">
                    <button class="nv-btn nv-btn-default nv-modal-btn nv-modal-cancel">Cancle</button>
                    <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-enter">Ok</button>
                </div>
            </div>
        </div>
    </div>
    <!--javascript代码-->
    Nv.ready(function(){
        Nv.use("modal",function(nv,modal){
            /*
            modal.init中第一个参数为需要调用弹窗的class或者id，
            第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
            他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
            弹窗关闭的回调函数
            */
            var modal=modal.init(".nv-modal-submit",{
                top:"",
                openCallback:function(){},
                closeCallback:function(){}
            }),
            /*
            用事件触发弹窗消失或者隐藏
            */
            $(".show").click(function(){
                modal.show();
            })
            $(".close").click(function(){
                modal.hide();
            })
        })
    })
```
<br/>

### 信息提示

nv弹窗组件提供了4个状态的提示弹窗，分别为，info、success、warning、error

```html
   <!--info状态-->
   <!--html代码-->
   <div class="nv-modal fade nv-modal-info nv-modal-status">
       <div class="nv-modal-dialog">
           <div class="nv-modal-content">
               <div class="nv-modal-header">
               </div>
               <div class="nv-modal-body">
                   <i class="nvicon-info nv-modal-info nv-modal-icon"></i>
                   <div class="prompt-content">
                       <p class="prompt-content-title">This is a normal message</p>
                       <p>balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalab</p>
                   </div>
               </div>
               <div class="nv-modal-footer">
                   <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-cancel">Ok</button>
               </div>
           </div>
       </div>
   </div>
   <!--javascript代码-->
   Nv.ready(function(){
       Nv.use("modal",function(nv,modal){
           /*
           modal.init中第一个参数为需要调用弹窗的class或者id，
           第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
           他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
           弹窗关闭的回调函数
           */
           var modal=modal.init(".nv-modal-info",{
               top:"",
               openCallback:function(){},
               closeCallback:function(){}
           }),
           /*
           用事件触发弹窗消失或者隐藏
           */
           $(".show").click(function(){
               modal.show();
           })
           $(".close").click(function(){
               modal.hide();
           })
       })
   })
<!--success状态-->
   <!--html代码-->
   <div class="nv-modal fade nv-modal-success nv-modal-status">
   <div class="nv-modal-dialog">
       <div class="nv-modal-content">
           <div class="nv-modal-header">
           </div>
           <div class="nv-modal-body">
               <i class="nvicon-info nv-modal-ok nv-modal-icon"></i>
               <div class="prompt-content">
                   <p class="prompt-content-title">This is a success message</p>
                   <p>balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalab</p>
               </div>
           </div>
           <div class="nv-modal-footer">
               <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-cancel">Ok</button>
           </div>
       </div>
   </div>
</div>
   <!--javascript代码-->
   Nv.ready(function(){
       Nv.use("modal",function(nv,modal){
           /*
           modal.init中第一个参数为需要调用弹窗的class或者id，
           第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
           他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
           弹窗关闭的回调函数
           */
           var modal=modal.init(".nv-modal-success",{
               top:"",
               openCallback:function(){},
               closeCallback:function(){}
           }),
           /*
           用事件触发弹窗消失或者隐藏
           */
           $(".show").click(function(){
               modal.show();
           })
           $(".close").click(function(){
               modal.hide();
           })
       })
   })
<!--warning状态-->
   <!--html代码-->
   <div class="nv-modal fade nv-modal-warning nv-modal-status">
       <div class="nv-modal-dialog">
           <div class="nv-modal-content">
               <div class="nv-modal-header">
               </div>
               <div class="nv-modal-body">
                   <i class="nvicon-info nv-modal-warning nv-modal-icon"></i>
                   <div class="prompt-content">
                       <p class="prompt-content-title">This is a warning message</p>
                       <p>balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalab</p>
                   </div>
               </div>
               <div class="nv-modal-footer">
                   <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-cancel">Ok</button>
               </div>
           </div>
       </div>
   </div>
   <!--javascript代码-->
   Nv.ready(function(){
       Nv.use("modal",function(nv,modal){
           /*
           modal.init中第一个参数为需要调用弹窗的class或者id，
           第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
           他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
           弹窗关闭的回调函数
           */
           var modal=modal.init(".nv-modal-warning",{
               top:"",
               openCallback:function(){},
               closeCallback:function(){}
           }),
           /*
           用事件触发弹窗消失或者隐藏
           */
           $(".show").click(function(){
               modal.show();
           })
           $(".close").click(function(){
               modal.hide();
           })
       })
   })
<!--error状态-->
   <!--html代码-->
   <div class="nv-modal fade nv-modal-error nv-modal-status">
       <div class="nv-modal-dialog">
           <div class="nv-modal-content">
               <div class="nv-modal-header">
               </div>
               <div class="nv-modal-body">
                   <i class="nvicon-info nv-modal-error nv-modal-icon"></i>
                   <div class="prompt-content">
                       <p class="prompt-content-title">This is a error message</p>
                       <p>balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalab</p>
                   </div>
               </div>
               <div class="nv-modal-footer">
                   <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-cancel">Ok</button>
               </div>
           </div>
       </div>
   </div>
   <!--javascript代码-->
   Nv.ready(function(){
       Nv.use("modal",function(nv,modal){
           /*
           modal.init中第一个参数为需要调用弹窗的class或者id，
           第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
           他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
           弹窗关闭的回调函数
           */
           var modal=modal.init(".nv-modal-error",{
               top:"",
               openCallback:function(){},
               closeCallback:function(){}
           }),
           /*
           用事件触发弹窗消失或者隐藏
           */
           $(".show").click(function(){
               modal.show();
           })
           $(".close").click(function(){
               modal.hide();
           })
       })
   })
```
<br/>

### 异步关闭

弹窗提供了点击确定按钮之后进行的一个回调函数操作

```html
    <!--html代码-->
    <div class="nv-modal fade nv-modal-submit-async">
        <div class="nv-modal-dialog">
            <div class="nv-modal-content">
                <div class="nv-modal-header">
                    <p class="nv-modal-title">
                        <span>Title</span>
                        <i class="nvicon-close nv-modal-close"></i>
                    </p>
                </div>
                <div class="nv-modal-body">
                    <form>
                        <div>
                            <label>Fied A</label>
                            <input type="text" placeholder="Please input" class="nv-input">
                        </div>
                        <div>
                            <label>Fied A</label>
                            <input type="text" placeholder="Please input" class="nv-input">
                        </div>
                    </form>
                </div>
                <div class="nv-modal-footer">
                    <button class="nv-btn nv-btn-default nv-modal-btn nv-modal-cancel">Cancle</button>
                    <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-enter">
                        <i class="nvicon-spin6 animate-spin nv-modal-loading"></i>
                        Ok</button>
                </div>
            </div>
        </div>
    </div>
    <!--javascript代码-->
    Nv.ready(function(){
        Nv.use("modal",function(nv,modal){
            /*
            modal.init中第一个参数为需要调用弹窗的class或者id，
            第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
            他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
            弹窗关闭的回调函数
            */
            var modal=modal.init(".nv-modal-submit-async",{
                top:"",
                openCallback:function(){},
                closeCallback:function(){}
            }),
            /*
            用事件触发弹窗消失或者隐藏
            */
            $(".show").click(function(){
                modal.show();
            })
            $(".close").click(function(){
                modal.hide();
            })
        })
    })
```
<br/>

### 自定义位置

弹窗初始默认屏幕垂直居中，可通过参数配置垂直距离

```html
    <!--html代码-->
    <div class="nv-modal fade nv-modal-custom">
        <div class="nv-modal-dialog">
            <div class="nv-modal-content">
                <div class="nv-modal-header">
                    <p class="nv-modal-title">
                        <span>Title</span>
                        <i class="nvicon-close nv-modal-close"></i>
                    </p>
                </div>
                <div class="nv-modal-body">
                    Here is the content  Here is the content Here is the content  Here is the content
                </div>
                <div class="nv-modal-footer nv-modal-footer-center">
                    <button class="nv-btn nv-btn-default nv-modal-btn nv-modal-cancel">Cancle</button>
                    <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-enter">Ok</button>
                </div>
            </div>
        </div>
    </div>
    <!--javascript代码-->
    Nv.ready(function(){
        Nv.use("modal",function(nv,modal){
            /*
            modal.init中第一个参数为需要调用弹窗的class或者id，
            第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
            他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
            弹窗关闭的回调函数
            */
            var modal=modal.init(".nv-modal-custom",{
                top:100,
                openCallback:function(){},
                closeCallback:function(){}
            }),
            /*
            用事件触发弹窗消失或者隐藏
            */
            $(".show").click(function(){
                modal.show();
            })
            $(".close").click(function(){
                modal.hide();
            })
        })
    })
```
<br/>

### 可拖拽的模态框

鼠标长按模态框即可对模态框进行拖拽

```html
    <!--html代码-->
    <div class="nv-modal fade nv-modal-move">
        <div class="nv-modal-dialog">
            <div class="nv-modal-content">
                <div class="nv-modal-header">
                    <p class="nv-modal-title">
                        <span>Title</span>
                        <i class="nvicon-close nv-modal-close"></i>
                    </p>
                </div>
                <div class="nv-modal-body">
                    Here is the content  Here is the content Here is the content  Here is the content
                </div>
                <div class="nv-modal-footer nv-modal-footer-center">
                    <button class="nv-btn nv-btn-default nv-modal-btn nv-modal-cancel">Cancle</button>
                    <button class="nv-btn nv-btn-primary nv-modal-btn nv-modal-enter">Ok</button>
                </div>
            </div>
        </div>
    </div>
    <!--javascript代码-->
    Nv.ready(function(){
        Nv.use("modal",function(nv,modal){
            /*
            modal.init中第一个参数为需要调用弹窗的class或者id，
            第二个参数为一个对象，其中top为垂直距离，默认不填或者为""垂直居中，
            他的值为number类型，openCallback是弹窗打开的回调函数，closeCallback
            弹窗关闭的回调函数,move属性设置为true时开启模态框的拖拽，默认为false
            */
            var modal=modal.init(".nv-modal-custom",{
                top:100,
                move:true,
                openCallback:function(){},
                closeCallback:function(){}
            }),
            /*
            用事件触发弹窗消失或者隐藏
            */
            $(".show").click(function(){
                modal.show();
            })
            $(".close").click(function(){
                modal.hide();
            })
        })
    })
```
> modal组件可以通过传递不同的参数来配置你所需要的业务场景

### API

modal.init(selector,options)

+ `options`配置选项

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----  |
| top  | number (选填)  | 值为number类型数字，不填或者为""默认垂直居中 |
| openCallback  | function(选填)   | 弹窗打开时触发的回调函数 |
| closeCallback  | function (选填)  | 弹窗关闭时触发的回调函数 |
| move  | Boolean(选填)   | 配置move属性为true时，开启模态框的拖拽，默认为false不不开启 |


[Demo展示](http://nv.zhangjinglin.cn/api?type=modal)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/23)

    