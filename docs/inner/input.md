# Input 输入框

通过鼠标或键盘输入内容，可组合使用，常用于查询条件、表单、新建或修改等场景。

---

### 使用方法

+ 文本框一般用于接收较短的字符串，如账号、密码、姓名等。文本框高度和宽度固定，显示的文本一般左对齐。

+ 当用户输入的内容超出文本框范围时显示最后输入的文本位置，横向滑动可查看已输入的内容。如要显示较长的字符串，请改用“多行文本框”。

<br/>

### 基础样式

最基础输入框的使用状态有默认状态和禁用状态，只需要添加样式 `nv-input` ；input标签有 `disabled` 属性时会显示成禁用状态。

代码结构如下：

```html
    <!--默认状态-->
    <input type="text" placeholder="Please input text" class="nv-input">
    <!--禁用状态，只需给input标签设置disabled属性-->
    <input type="text" placeholder="Text" disabled="disabled" class="nv-input">
```

<br/>

### 输入框尺寸

定义了输入框三种尺寸：大、中（默认）、小；高度分别为 40px 32px 24px； 大尺寸和小尺寸需额外增加样式 `nv-input-lg` 和 `nv-input-sm`

代码结构如下：

```html
     <!--大尺寸 需额外增加样式“nv-input-lg”-->
     <input type="text" placeholder="Large" class="nv-input nv-input-lg">
     <!--默认尺寸-->
     <input type="text" placeholder="Default" class="nv-input">
     <!--小尺寸 需额外增加样式“nv-input-sm”-->
     <input type="text" placeholder="Small" class="nv-input nv-input-sm">
```
<br/>

### 可清除输入框内容

输入状态下点击右侧icon，可清除输入内容；只需增加样式 `nv-input-clear`

代码结构如下：

```html
   <!--只需增加样式“nv-input-clear”-->
   <input type="text" placeholder="Please input text" class="nv-input nv-input-clear">
```
<br/>

### 带icon的输入框

带有icon的输入框，分为两种：可操作的icon置于输入框的右侧（默认状态）

代码结构如下：

```html
     <!--默认状态-->
     <div class="nv-input-group">
         <input type="text" placeholder="Please input text" class="nv-input">
         <span class="nv-input-addon">
             <i class="nvicon-calendar-empty"></i>
         </span>
     </div>
     <div class="nv-input-group">
         <span class="nv-input-addon">
             <i class="nvicon-user-empty"></i>
         </span>
         <input type="text" placeholder="Please input text" class="nv-input">
     </div>
```

### 文本域

用于输入多行文本信息，需配置 `maxlength` 属性用于显示最大输入字符数

```html
    <!--maxlength属性用于显示最大可输入字符数-->
    <textarea class="nv-textarea" maxlength="100" placeholder="Textarea"></textarea>
```

### 组合输入框

可前置或后置元素，一般为下拉标签或按钮；默认状态为标签，按钮需额外增加样式  `nv-input-btn`，input默认在右侧，如果在左侧需额外增加样式 `nv-input-wapper-left`

```html
     <div class="nv-input-wapper">
        <select name="country" class="nv-select">
            <option value="option1">option1</option>
            <option value="option2">option2</option>
        </select>
        <input type="text" class="nv-input">
    </div>
    <div class="nv-input-wapper nv-input-btn">
        <div class="nv-input-wapper nv-input-btn">
            <select name="country" class="nv-select">
                <option value="option1">option1</option>
                <option value="option2">option2</option>
            </select>
            <input type="text" class="nv-input">
            <span class="nv-input-addon">
        <i class="nvicon-search-empty"></i>
    </span>
        </div>
    </div>
    <div class="nv-input-wapper nv-input-wapper-left nv-input-btn">
        <input type="text" class="nv-input">
        <select name="country" class="nv-select">
            <option value="option1">option1</option>
            <option value="option2">option2</option>
        </select>
    </div>
```

### 自定义DOM监听事件

原生的DOM对象上挂载了`onnvchange`方法，需要改变`textarea`后重新渲染页面的话可以使用此方法

```html
     <!--动态改变输入框的值-->
     <textarea id="textarea" class="nv-textarea" maxlength="100" placeholder="Textarea"></textarea>
     <button type="button" class="nv-btn nv-btn-primary" id="changeInner">动态改变输入框的值</button>
     <!--code代码-->
     Nv.ready(function () {
         Nv.use('jquery', function (nv, $) {
             $("#changeInner").off("click").on("click", function () {
                 //$("#textarea)[0]是同一个原理
                 document.getElementById("textarea").onnvchange({
                     inserted: '我是新添加的内容'
                 });
             });
         });
     })
```


### onnvchange 参数

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----:  |
| inserted  | string(选填)   | 默认为false，动态改变输入框的值。eg：{inserted：'我是新添加的内容'}  |
| beforeFn  | Function(选填)   | 前置回调函数，在onnvchange最开始执行。eg: {beforeFn: function(){}}  |
| afterFn  | string(选填)   | 后置回调函数，在onnvchange最后执行。eg: {afterFn: function(){}}  |





[Demo展示](http://nv.zhangjinglin.cn/api?type=input)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/10)

    