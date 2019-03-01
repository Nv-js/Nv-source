# Tabs 标签页

选项卡切换组件，用于同级别数据的分类及切换

---

### 使用方法

+ 分隔同级别但不同属性的内容，支持用户快速切换对比

<br/>

### 基础样式

使用基础样式一定要保证结构与class按照代码展示要求布局，否则会失效,基础样式的tab是选项卡是根据位置来进行查找，`nv-tab`为最基础简单的标签页，`nv-tab-action`为默认选项，`nv-tab-show`表示内容框展示

```html
    <!--HTML-->
    <div class="nv-tab demo-tabs">
        <ul class="nv-tab-header">
            <li class="nv-tab-item ">Tab1</li>
            <li class="nv-tab-item">Tab2</li>
            <li class="nv-tab-item">Tab3</li>
        </ul>
        <div class="nv-tab-content">
            <div class="nv-tab-tabpane">
                Content of Tab Pane 1
            </div>
            <div class="nv-tab-tabpane">
                Content of Tab Pane 2
            </div>
            <div class="nv-tab-tabpane">
                Content of Tab Pane 3
            </div>
        </div>
    </div>
    <!--Javascript-->
    Nv.use("tab",function(nv,tab){
        tab.init({
              target:".demo-tabs"
        });
    })
```

<br/>

### 基础样式嵌套 

就是在某一个tab选项卡里支持层层嵌套

多样性的代码结构如下：

```html
 <!--HTML-->
    <div class="nv-tab demo-tabs">
        <ul class="nv-tab-header">
            <li class="nv-tab-item nv-tab-action">Tab1</li>
            <li class="nv-tab-item">Tab2</li>
            <li class="nv-tab-item">Tab3</li>
        </ul>
        <div class="nv-tab-content">
            <div class="nv-tab-tabpane nv-tab-show">
                <div class="nv-tab demo-tabs">
                    <ul class="nv-tab-header">
                        <li class="nv-tab-item nv-tab-action"> inner Tab1</li>
                        <li class="nv-tab-item">inner Tab2</li>
                        <li class="nv-tab-item">inner Tab3</li>
                    </ul>
                    <div class="nv-tab-content">
                        <div class="nv-tab-tabpane">
                            Content of inner Tab Pane 1
                        </div>
                        <div class="nv-tab-tabpane">
                            Content of inner Tab Pane 2
                        </div>
                        <div class="nv-tab-tabpane">
                            Content of inner Tab Pane 3
                        </div>
                    </div>
                </div>
            </div>
            <div class="nv-tab-tabpane">
                Content of Tab Pane 2
            </div>
            <div class="nv-tab-tabpane">
                <div class="nv-tab demo-tabs">
                    <ul class="nv-tab-header">
                        <li class="nv-tab-item nv-tab-action"> inner Tab other 1</li>
                        <li class="nv-tab-item">inner Tab other 2</li>
                        <li class="nv-tab-item">inner Tab other 3</li>
                    </ul>
                    <div class="nv-tab-content">
                        <div class="nv-tab-tabpane">
                            Content of inner other Tab Pane 1
                        </div>
                        <div class="nv-tab-tabpane">
                            Content of inner other Tab Pane 2
                        </div>
                        <div class="nv-tab-tabpane">
                            Content of inner other Tab Pane 3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Javascript-->
    Nv.use("tab",function(nv,tab){
        tab.init({
            target:".demo-tabs"
        });
    })
```
<br/>

### 禁用样式

基于基础样式之上，在`nv-tab-item`后面添加`nv-tab-disable`属性即可,当点击到禁用选项卡时则默认选择其前一个

```html
   <!--HTML-->
   <div class="nv-tab demo-tabs">
       <ul class="nv-tab-header">
           <li class="nv-tab-item nv-tab-action">Tab1</li>
           <li class="nv-tab-item nv-tab-disable">Tab2</li>
           <li class="nv-tab-item">Tab3</li>
       </ul>
       <div class="nv-tab-content">
           <div class="nv-tab-tabpane">
               Content of Tab Pane 1
           </div>
           <div class="nv-tab-tabpane">
               Content of Tab Pane 2
           </div>
           <div class="nv-tab-tabpane">
               Content of Tab Pane 3
           </div>
       </div>
   </div>
   <!--Javascript-->
   Nv.use("tab",function(nv,tab){
       tab.init({
           target:".demo-tabs"
       });
   })
```
<br/>

### 带图标

基于基础样式之上，在`nv-tab`后面加`nv-tab-icon`属性即可展示图标版本的步骤条，icon使用方法详情见Icon [图标](http://nv.zhangjinglin.cn/api?type=icons)

```html
    <!--HTML-->
    <div class="nv-tab nv-tab-icon">
        <ul class="nv-tab-header">
            <li class="nv-tab-item "><i class="nvicon-seting-empty"></i>Tab1</li>
            <li class="nv-tab-item"><i class="nvicon-comment-empty"></i>Tab2</li>
            <li class="nv-tab-item"><i class="nvicon-user-empty"></i>Tab3</li>
        </ul>
        <div class="nv-tab-content">
            <div class="nv-tab-tabpane">
                Content of Tab Pane 1
            </div>
            <div class="nv-tab-tabpane">
                Content of Tab Pane 2
            </div>
            <div class="nv-tab-tabpane">
                Content of Tab Pane 3
            </div>
        </div>
    </div>
    <!--Javascript-->
    Nv.use("tab",function(nv,tab){
        tab.init({
            target:".nv-tab-icon"
        });
    })
```
<br/>

### 卡片式标签

基于基础样式之上，在`nv-tab`之后添加`nv-tab-card`属性则样式变为卡片的形式展示

```html
   <!--HTML-->
   <div class="nv-tab nv-tab-card">
       <ul class="nv-tab-header">
           <li class="nv-tab-item ">Tab1</li>
           <li class="nv-tab-item">Tab2</li>
           <li class="nv-tab-item">Tab3</li>
       </ul>
       <div class="nv-tab-content">
           <div class="nv-tab-tabpane">
               Content of Tab Pane 1
           </div>
           <div class="nv-tab-tabpane">
               Content of Tab Pane 2
           </div>
           <div class="nv-tab-tabpane">
               Content of Tab Pane 3
           </div>
       </div>
   </div>
   <!--Javascript-->
   Nv.use("tab",function(nv,tab){
     tab.init({
        target:".nv-tab-card"
     });
   })
```
<br/>

### Iframe的选项卡

这个其实很简单，首先设置初始化`type`为iframe，然后再内容区域`nv-tab-tabpane`里面嵌套对应的iframe信息即可，不过为了提高加载性能，请使用`data-src`来赋值，组件检测到后会自动转化成src。如果已转化则不做任何操作。

```html
    <!--HTML-->
    <div class="nv-tab" id="demo-iframe">
                <ul class="nv-tab-header">
                    <li class="nv-tab-item ">Tab1</li>
                    <li class="nv-tab-item">Tab2</li>
                    <li class="nv-tab-item">Tab3</li>
                </ul>
                <div class="nv-tab-content">
                    <div class="nv-tab-tabpane" style="width:100%;height:300px;">
                        <iframe data-src="http://www.jd.com"></iframe>
                    </div>
                    <div class="nv-tab-tabpane">
                        <iframe data-src="http://www.jdwl.com"></iframe>
                    </div>
                    <div class="nv-tab-tabpane">
                        <iframe data-src="http://gongyi.jd.com"></iframe>
                    </div>
                </div>
            </div>
    <!--Javascript-->
    tab.init({
      target: "#demo-iframe",
      type:"iframe"
    });
```
<br/>

### 可编辑标签

编辑类的tab选项卡结构要保持,同时target必须是ID，其他选择器将会默认选取第一条；同时编辑属于高级特性，需要在初始化配置`type`为edit类型，全面支持普通模式与iframe模式，同时提供跨域解决方案，所有选项卡都有唯一ID,重复调用同一个ID只会选中相同的选项卡，使用情况请参考以下demo代码展示与Config配置

```html
    <!--HTML-->
    <div class="nv-tab nv-tab-compile" id="demo-edit">
        <div class="nv-tab-overflow">
            <div class="nv-tab-left"><i class="nvicon-arrow-left"></i></div>
            <div class="nv-tab-right"><i class="nvicon-arrow-right"></i></div>
            <div class="nv-tab-add" id="tab-add"><i class="nvicon-add-square-empty"></i></div>
            <ul class="nv-tab-header">
                <li class="nv-tab-item ">Tab1</li>
                <li class="nv-tab-item">Tab2</li>
            </ul>
        </div>
        <div class="nv-tab-content">
            <div class="nv-tab-tabpane" >
                one
            </div>
            <div class="nv-tab-tabpane" >
                two
            </div>
        </div>
    </div>
    <!--Javascript-->
    //初始化
    var items = tab.init({
        target:"#demo-edit",
        type:"edit",
        isClose:true
    })
    //添加tab选项卡
    items.add([{
        id:"1009",
        title:"新增选项卡一",
        url:"http://www.jd.com",
        content:"",
        //是否默认选中
        isSelect:true
        },{
        id:"1010",
        title:"新增选项卡二",
        content:"这里是内容"
    }])
    //选中选项卡
    items.selected({
        id:1010
    })
    //删除tab选项卡
    items.delete(1010)
    
```
<br/>

### API

+ `tab.init(options)`的配置选项

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----:  |
| language  | String (选填)  | 目前支持zh-CN(默认)和EN两种选择，可以拓展，不设置读取默认组件库配置 |
| target  | String(选填)   | 选择器，支持class、id、element,@注意：type模式为edit时候只能是id |
| type  | string (选填)  | <p>可选参数:</p>'base'(默认)基础类型，需要Dom结构已存在，否则无法初始化<p>'iframe' 需要初始化在iframe节点上添加data-src完成初始化配置，优化加载效率</p>'edit' 支持初始化节点和动态添加节点，同时支持iframe加载，要保证结构统一 |
| eventName  | String(选填)   | 事件名称，默认是click |
| isClose  | boolean (选填)   | 是否开启关闭选项卡模式，此模式只有在type为edit状态才会生效，默认是false |
| isMenu  | String(选填)   | 是否开启菜单选项卡模式，此模式只有在type为edit状态才会生效，默认是false|
| onChange  | Function(选填)   |当发生tab选项卡切换的时候触发<p>回调参数Function(options)<p>默认里面指针指向选中tab选项卡，options为初始化配置|


[Demo展示](http://nv.zhangjinglin.cn/api?type=tabs)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/22)

    