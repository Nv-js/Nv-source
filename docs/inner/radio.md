# Radio 单选框

对一组选项进行单选，主要用于一组可选项单项选择，或者单独用于切换到选中状态

---

### 使用方法

+ 用于在多个备选项中选中单个状态。

+ 由于选项默认可见，不宜过多，若选项过多，建议使用下拉框组件

<br/>

### 基础样式

最基础简单的单选框样式,只需要在input标签上添加class为 `nv-radio` 即可使用

代码结构如下：

```html
    <input type="radio" data-label="label1" name="max1" class="nv-radio" value="0" checked="true">
    <input type="radio" data-label="label2" name="max1" class="nv-radio" value="1">
```

<br/>

### 禁选样式

单选框不可用状态：不可选、不可更改,标签上加上 `disabled` 即为不可用状态

代码结构如下：

```html
     <input type="radio" data-label="label1" name="sex1" class="nv-radio" value="0" disabled="disabled" checked="true">
     <input type="radio" data-label="label2" name="sex1" class="nv-radio" value="1" disabled="disabled">
```
<br/>

### 单选框组合

有多个互斥的RadioGroup

代码结构如下：

```html
   <input type="radio" name="demo1" class="nv-radio" value="0" data-label="label1">
   <input type="radio" name="demo1" class="nv-radio" value="1" data-label="label2">
   <input type="radio" name="demo1" class="nv-radio" value="2" data-label="label3">
   <input type="radio" name="demo1" class="nv-radio" value="3" data-label="label4">
```
<br/>

### 组合禁用

带有icon的输入框，分为两种：可操作的icon置于输入框的右侧（默认状态）

代码结构如下：

```html
     <input type="radio" data-label="label5" name="test1" class="nv-radio" value="0" disabled="disabled">
     <input type="radio" data-label="label6" name="test1" class="nv-radio" value="1" checked="checked">
     <input type="radio" data-label="label7" name="test1" class="nv-radio" value="2">
     <input type="radio" data-label="label8" name="test1" class="nv-radio" value="3">
```

### 自定义事件

radio组件只需要调用该事件就可以动态配置radio的选中和禁用状态（主要用于渲染完成之后动态改变radio的选中和禁用状态）

```html
    <!--html代码-->
    <input type="radio" data-label="label1" name="demo9" class="nv-radio" value="2" id="js-demo2">
    <input type="radio" data-label="label2" name="demo9" class="nv-radio" value="3" id="js-demo3">
    <button class="nv-btn nv-btn-primary js-select">选中</button>
    <button class="nv-btn nv-btn-default js-disable">禁用</button>
    <!--javascript代码-->
    $('.js-select').on('click', function () {
        //同$("#js-demo2")[0]
        document.getElementById("js-demo2").onnvchange({
            checked: true
        })
    )}
    $('.js-disable').on('click', function () {
        document.getElementById("js-demo3").onnvchange({
            checked: true,
            disabled: true
        })
    })
```

### API

+ 自定义属性

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----:  |
| checked  | string(选填)   | checked 选中 eg: checked  |
| disabled  | Function(选填)   | disabled 禁用 eg: disabled |
| data-label  | string(选填)   | data-label,可为空 eg: data-label="中国"  |


### onnvchange 参数

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----:  |
| checked  | Boolean   | "选中" eg: {checked: true}  |
| disabled  | Boolean   | "禁用" eg: {disabled: true} |
| value  | String/Number   | "值" eg: {value: 0}  |
| label  | String/Number   | "显示文字" eg: {label: 0}  |
| beforeFn  | Function   | 回调函数,初始化开始时执行.this指向为当前操作input |
| afterFn  | Function   | 回调函数,初始化结束时执行.this指向为当前操作input  |





[Demo展示](http://www.nv-js.com/api?type=radio)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/11)

    