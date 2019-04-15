# Checkbox 复选框

对一组选项进行多选

---

### 使用方法

+ 在一组可选项中进行多项选择时。

+ 单独使用可以表示两种状态之间的切换

+ 复选按钮有选中态、未选中态、禁用态，放置在可选信息的左侧

<br/>

### 基础样式

最基础简单的复选框样式,只需在input标签上加上class为 `nv-checkbox` 即可实现,标签添加 `checked` 即为选中

代码结构如下：

```html
     <input type="checkbox" name="demo2" value="checkbox1" data-label="label1" class="nv-checkbox">
     <input type="checkbox" name="demo2" value="checkbox2" data-label="label1" class="nv-checkbox" checked="true">
```

<br/>

### 禁选样式

复选框不可用状态：不可选、不可更改,标签上添加 `disabled` 代表复选框禁用

代码结构如下：

```html
     <input type="checkbox" name="demo3" value="checkbox1" data-label="label1" class="nv-checkbox" disabled>
     <input type="checkbox" name="demo3" value="checkbox2" data-label="label1" class="nv-checkbox" disabled checked>
```
<br/>

### 复合框组合样式

在一个复选框组合内有多个勾选项，标签上添加 data-label="checkbox1" 属性代表复选框显示文字

代码结构如下：

```html
   <input type="checkbox" name="demo5" value="1" data-label="checkbox1" class="nv-checkbox">
   <input type="checkbox" name="demo5" value="2" data-label="checkbox2" class="nv-checkbox" checked="true">
   <input type="checkbox" name="demo5" value="3" data-label="checkbox3" class="nv-checkbox" disabled="">
   <input type="checkbox" name="demo5" value="4" data-label="checkbox4" class="nv-checkbox" checked="true" disabled="">
```
<br/>

### 全选

所有选项全部勾选 全选项与子项必须name相同.全选项有属性`data-all="true"`

代码结构如下：

```html
     <input type="checkbox" name="demo7" value="1" data-label="checkbox1" class="nv-checkbox" data-all="true">
     <input type="checkbox" name="demo7" value="1" data-label="checkbox1.1" class="nv-checkbox">
     <input type="checkbox" name="demo7" value="2" data-label="checkbox1.2" class="nv-checkbox">
     <input type="checkbox" name="demo7" value="3" data-label="checkbox1.3" class="nv-checkbox">
     <input type="checkbox" name="demo7" value="4" data-label="checkbox1.4" class="nv-checkbox">
```

### 自定义事件

checkbox内置了一个名为nvonchange的事件，只需要调用该事件就可以动态配置checkbox的选中和禁用状态（主要用于渲染完成之后动态改变checkbox的选中和禁用状态）

```html
    <input type="checkbox" name="demo8" value="1" data-label="checkbox1" class="nv-checkbox" id="js-demo2">
    <input type="checkbox" name="demo8" value="1" data-label="checkbox2" class="nv-checkbox" id="js-demo3">
    <button class="nv-btn nv-btn-primary js-select">选中</button>
    <button class="nv-btn nv-btn-default js-disable">禁用</button>
    <!--html代码-->
    $('.js-select').on('click', function(){
        document.getElementById("js-demo2").onnvchange({
            checked:true
        })
    })
    $('.js-diabled').on('click', function(){
        document.getElementById("js-demo3").onnvchange({
            checked:true,
            disabled:true
        })
    })
```

### API

+ 自定义属性

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----:  |
| checked  | String(选填)   | checked 选中 eg: checked  |
| disabled  | Function(选填)   | disabled 禁用 eg: disabled |
| data-all  | Boolean  | 全选属性 eg: data-all="true" 编辑全选属性得复选框会操作name相同得复选框 |
| data-label  | String(选填)   | data-label,可为空 eg: data-label="中国"  |


### onnvchange 参数

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----:  |
| checked  | Boolean   | "选中" eg: {checked: true}  |
| disabled  | Boolean   | "禁用" eg: {disabled: true} |
| value  | String/Number   | "值" eg: {value: 0}  |
| label  | String/Number   | "显示文字" eg: {label: 0}  |
| checkedAll  | Boolean  | "全选" eg: {checkedAll: true}该参数会覆盖checked参数相同name的checkbox都会被选中 |
| beforeFn  | Function   | 回调函数,初始化开始时执行.this指向为当前操作input |
| afterFn  | Function   | 回调函数,初始化结束时执行.this指向为当前操作input  |





[Demo展示](http://www.nv-js.com/api?type=checkbox)

[留言和讨论](https://github.com/Nv-js/nv-source/issues/12)

    