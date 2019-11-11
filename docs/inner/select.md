# Select 选择器

选项过多时，使用下拉菜单展示并选择内容，常用于查询条件、表单、新建或修改等场景

---

### 使用方法

+ 下拉菜单展示内容，并且可以进行选择操作。

+ 选择下拉框所有选项，多出的内容滚动条滚动，并滚动条的高度进行限制。

<br/>

### 基础样式

最基础的select选择器样式，只需增加样式 `nv-select`；select标签有 `disabled` 属性时会显示成禁用样式。

代码结构如下：

```html
    <!--默认样式-->
    <select name="country" class="nv-select">
        <option value="">请选择一个城市</option>
        <option value="010">北京</option>
        <option value="021">上海</option>
        <option value="0571">杭州</option>
    </select>
    <!--禁用样式-->
    <select name="country" class="nv-select" disabled="disabled">
        <option value="">请选择一个城市</option>
        <option value="010">北京</option>
        <option value="021">上海</option>
        <option value="0571">杭州</option>
    </select>
```

<br/>

### 不同尺寸

定义了select选择器三种尺寸：大、中（默认）、小；高度分别为 40px 32px 24px； 大尺寸和小尺寸需额外增加样式 `nv-select-lg` 和 `nv-select-sm`

代码结构如下：

```html
    <!--小尺寸 需额外增加样式“nv-select-sm”-->
    <select name="country" class="nv-select nv-select-sm">
        <option value="">请选择一个城市</option>
        <option value="010">北京</option>
        <option value="021">上海</option>
        <option value="0571">杭州</option>
    </select>
    <!--默认尺寸-->
    <select name="country" class="nv-select">
        <option value="">请选择一个城市</option>
        <option value="010">北京</option>
        <option value="021">上海</option>
        <option value="0571">杭州</option>
    </select>
    <!--大尺寸 需额外增加样式“nv-select-lg”-->
    <select name="country" class="nv-select nv-select-lg">
        <option value="">请选择一个城市</option>
        <option value="010">北京</option>
        <option value="021">上海</option>
        <option value="0571">杭州</option>
    </select>
```
<br/>

### 多选列表

可多选，tag展示已选项，只需设置 `multiple` 属性

代码结构如下：

```html
    <select name="country" multiple="multiple" class="nv-select">
        <option value="010">北京</option>
        <option value="021">上海</option>
        <option value="0571">杭州</option>
    </select>
```
<br/>

### 默认选中

页面初始化时若需要显示默认选中的选项，只需在需要显示的选项option设置`selected="selected"`

代码结构如下：

```html
      <!--默认选中“上海”-->
        <select name="country" class="nv-select">
            <option value="">请选择一个城市</option>
            <option value="010">北京</option>
            <option value="021" selected="selected">上海</option>
            <option value="0571">杭州</option>
        </select>
        <!--多选列表默认选中-->
        <select name="country" multiple="multiple" class="nv-select">
            <option value="010">北京</option>
            <option value="021" selected="selected">上海</option>
            <option value="0571" selected="selected">杭州</option>
        </select>
```

### 自定义事件

原生的DOM对象上挂载了onnvchange方法，需要改变select后重新渲染页面的话可以使用此方法

代码结构如下：

```html
    <!--改变select的disabled属性-->
    <select name="country" class="nv-select" id="selectDom1">
        <option value="">请选择一个城市</option>
        <option value="010">北京</option>
        <option value="021">上海</option>
        <option value="0571">杭州</option>
    </select>
    <button type="button" class="nv-btn nv-btn-primary" id="changeDis">改变select的disabled属性</button>
        <!--code代码-->
        Nv.ready(function () {
            Nv.use("jquery", function (nv, $) {
                $("#changeDis").off("click").on("click", function () {
                    document.getElementById("selectDom01").onnvchange({
                        disabled: true
                    })
                });
            })
        })
    <!--改变select的value属性-->
    <select name="country" class="nv-select" id="selectDom2">
        <option value="">请选择一个城市</option>
        <option value="010">北京</option>
        <option value="021">上海</option>
        <option value="0571">杭州</option>
    </select>
    <button type="button" class="nv-btn nv-btn-primary" id="changeVal">选中value值为输入值的option</button>
        <!--code代码-->
        Nv.ready(function () {
            Nv.use("jquery", function (nv, $) {
                $("#changeVal").off("click").on("click", function () {
                    document.getElementById("selectDom02").onnvchange({
                        selected: '010' //选中北京
                    })
                });
            })
        })
    <!--删除select的option-->
    <select name="country" class="nv-select" id="selectDom3">
        <option value="">请选择一个城市</option>
        <option value="010">北京</option>
        <option value="021">上海</option>
        <option value="0571">杭州</option>
    </select>
    <button type="button" class="nv-btn nv-btn-primary" id="deleteOpt">删除value值为输入值的option</button>
        <!--code代码-->
        Nv.ready(function () {
            Nv.use("jquery", function (nv, $) {
                $("#deleteOpt").off("click").on("click", function () {
                    document.getElementById("selectDom03").onnvchange({
                        remove: '010' // 删除北京
                    })
                });
            })
        })
```


### onnvchange 参数

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----:  |
| disabled  | Boolean   | 禁用select元素，默认值false，入参为true时，禁用select。eg:{disabled: false} |
| selected  | String/Number   | 选中value值为输入值的option，默认为false，入参为option的value值。eg：{selected: '010'} |
| remove  | String/Number   | 删除value值为输入值的option，默认为false，入参为option的value值。eg：{remove: '010'} |
| beforeFn  | Function   | 回调函数,初始化开始时执行.this指向为当前操作input |
| afterFn  | Function   | 回调函数,初始化结束时执行.this指向为当前操作input  |





[Demo展示](http://www.nv-js.com/api?type=select)

[留言和讨论](https://github.com/Nv-js/nv-source/issues/13)

    