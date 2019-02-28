# Dropdown 下拉菜单

点击或移入操作区，会向下弹出一个菜单列表。

---

### 使用方法

+ 当页面上的操作命令过多时，用此组件可以收纳操作元素

+ 点击或移入触点，会出现一个下拉菜单

+ 适用于导航或者点击后跳出的操作，不适合表单类提交，可以选择[Select](https://github.com/guguaihaha/Nv-source/blob/master/docs/inner/select.md)

<br/>

### 基础样式

最基础简单的面包屑

代码结构如下：

```html
    <!--菜单默认是隐藏，如果默认显示，请添加样式"open"-->
    <div class="nv-dropdown">
        <a class="nv-dropdown-link" href="javascript:;">Hover
            <!---->
            <i class="nv-icon-angle nv-icon-down"></i>
        </a>
        <ul class="nv-dropdown-menu">
            <li class="nv-dropdown-item">
                <a href="#">Item 1</a>
            </li>
            <li class="nv-dropdown-item">
                <a href="#">Item 2（normal）</a>
            </li>
            <li class="nv-dropdown-item">
                <a href="#">Item 3（normal）</a>
            </li>
            <li class="nv-dropdown-item-divider"></li>
            <li class="nv-dropdown-item nv-dropdown-item-disabled">
                <a href="#">Item 4（disabled）</a>
            </li>
        </ul>
    </div>
    <!--整体禁用请添加样式 "nv-dropdown-disabled"-->
    <div class="nv-dropdown">
        <a class="nv-dropdown-link" href="javascript:;">Hover
            <!---->
            <i class="nv-icon-angle nv-icon-down"></i>
        </a>
        <ul class="nv-dropdown-menu">
            <li class="nv-dropdown-item">
                <a href="#">Item 1</a>
            </li>
            <li class="nv-dropdown-item">
                <a href="#">Item 2（normal）</a>
            </li>
            <li class="nv-dropdown-item">
                <a href="#">Item 3（normal）</a>
            </li>
            <li class="nv-dropdown-item-divider"></li>
            <li class="nv-dropdown-item nv-dropdown-item-disabled">
                <a href="#">Item 4（disabled）</a>
            </li>
        </ul>
    </div>
```

<br/>

### 触发方式

最基本的触发方式是 `hover` ，可以更改为 `click` 触发。添加`nv-event`属性有`click`、`hover`(默认)

代码如下：

```html
       <div class="nv-dropdown" data-type="click">
           <a class="nv-dropdown-link" href="javascript:;">Click
               <!---->
               <i class="nv-icon-angle nv-icon-down"></i>
           </a>
           <ul class="nv-dropdown-menu">
               <li class="nv-dropdown-item">
                   <a href="#">Item 1</a>
               </li>
               <li class="nv-dropdown-item">
                   <a href="#">Item 2（normal）</a>
               </li>
               <li class="nv-dropdown-item">
                   <a href="#">Item 3（normal）</a>
               </li>
               <li class="nv-dropdown-item-divider"></li>
               <li class="nv-dropdown-item nv-dropdown-item-disabled">
                   <a href="#">Item 4（disabled）</a>
               </li>
           </ul>
       </div>
       <!--默认Hover方式-->
       <div class="nv-dropdown">
           <a class="nv-dropdown-link" href="javascript:;">Click
               <!---->
               <i class="nv-icon-angle nv-icon-down"></i>
           </a>
           <ul class="nv-dropdown-menu">
               <li class="nv-dropdown-item">
                   <a href="#">Item 1</a>
               </li>
               <li class="nv-dropdown-item">
                   <a href="#">Item 2（normal）</a>
               </li>
               <li class="nv-dropdown-item">
                   <a href="#">Item 3（normal）</a>
               </li>
               <li class="nv-dropdown-item-divider"></li>
               <li class="nv-dropdown-item nv-dropdown-item-disabled">
                   <a href="#">Item 4（disabled）</a>
               </li>
           </ul>
   </div>
```
### 带下拉框的按钮

可以使用按钮形式触发下拉菜单，只需要添加样式`nv-dropdown-btn`

代码如下：

```html
    <div class="nv-dropdown nv-dropdown-btn">
        <a class="nv-dropdown-link" href="javascript:;">Click
            <!---->
            <i class="nv-icon-angle nv-icon-down"></i>
        </a>
        <ul class="nv-dropdown-menu">
            <li class="nv-dropdown-item">
                <a href="#">Item 1</a>
            </li>
            <li class="nv-dropdown-item">
                <a href="#">Item 2（normal）</a>
            </li>
            <li class="nv-dropdown-item">
                <a href="#">Item 3（normal）</a>
            </li>
            <li class="nv-dropdown-item-divider"></li>
            <li class="nv-dropdown-item nv-dropdown-item-disabled">
                <a href="#">Item 4（disabled）</a>
            </li>
        </ul>
    </div>
```

### 对齐方式

左对齐(默认)，右对齐样式`nv-dropdown-right`，等宽样式`nv-dropdown-equal`三种方式

代码如下：

```html
     <!--默认居左-->
     <div class="nv-dropdown nv-dropdown-btn">
         <a class="nv-dropdown-link" href="javascript:;">Hover
             <!---->
             <i class="nv-icon-angle nv-icon-down"></i>
         </a>
         <ul class="nv-dropdown-menu">
             <li class="nv-dropdown-item">
                 <a href="#">Item 1</a>
             </li>
             <li class="nv-dropdown-item">
                 <a href="#">Item 2</a>
             </li>
             <li class="nv-dropdown-item">
                 <a href="#">Item 3</a>
             </li>
             <li class="nv-dropdown-item-divider"></li>
             <li class="nv-dropdown-item nv-dropdown-item-disabled">
                 <a href="#">Item 4</a>
             </li>
         </ul>
     </div>
     <!--等宽-->
     <div class="nv-dropdown nv-dropdown-btn nv-dropdown-equal">
         <a class="nv-dropdown-link" href="javascript:;">Hover
             <!---->
             <i class="nv-icon-angle nv-icon-down"></i>
         </a>
         <ul class="nv-dropdown-menu">
             <li class="nv-dropdown-item">
                 <a href="#">Item 1</a>
             </li>
             <li class="nv-dropdown-item">
                 <a href="#">Item 2</a>
             </li>
             <li class="nv-dropdown-item">
                 <a href="#">Item 3</a>
             </li>
             <li class="nv-dropdown-item-divider"></li>
             <li class="nv-dropdown-item nv-dropdown-item-disabled">
                 <a href="#">Item 4</a>
             </li>
         </ul>
     </div>
     <!--居右对齐-->
     <div class="nv-dropdown nv-dropdown-btn nv-dropdown-right">
         <a class="nv-dropdown-link" href="javascript:;">Hover
             <!---->
             <i class="nv-icon-angle nv-icon-down"></i>
         </a>
         <ul class="nv-dropdown-menu">
             <li class="nv-dropdown-item">
                 <a href="#">Item 1</a>
             </li>
             <li class="nv-dropdown-item">
                 <a href="#">Item 2</a>
             </li>
             <li class="nv-dropdown-item">
                 <a href="#">Item 3</a>
             </li>
             <li class="nv-dropdown-item-divider"></li>
             <li class="nv-dropdown-item nv-dropdown-item-disabled">
                 <a href="#">Item 4</a>
             </li>
         </ul>
     </div> 
```

### 多级菜单

菜单多用于功能较多的时候使用，建议最多二级。添加的子元素菜单只需要添加样式为`nv-dropdown-children`即可

代码如下：

```html
       <div class="nv-dropdown nv-dropdown-btn" data-type="click">
           <a class="nv-dropdown-link" href="javascript:;">多级下拉菜单
               <!---->
               <i class="nv-icon-angle nv-icon-down"></i>
           </a>
           <ul class="nv-dropdown-menu">
               <li class="nv-dropdown-item">
                   <a href="#">Item 1</a>
               </li>
               <li class="nv-dropdown-item">
                   <a href="#">Item 2（normal）</a>
               </li>
               <li class="nv-dropdown-item">
                   <a href="#">Item 3（normal）</a>
               </li>
               <li class="nv-dropdown-item-divider"></li>
               <li class="nv-dropdown-item">
                   <a href="javascript:;">Item 4（multilevel）</a>
                   <ul class="nv-dropdown-child-menu">
                       <li class="nv-dropdown-item">
                           <a href="javascript:;">Item 4.1（multilevel）</a>
                           <ul class="nv-dropdown-child-menu">
                               <li class="nv-dropdown-item">
                                   <a href="javascript:;">Item 4.1.1（normal）</a>
                               </li>
                               <li class="nv-dropdown-item nv-dropdown-item-disabled">
                                   <a href="javascript:;">Item 4.1.2（disabled）</a>
                               </li>
                           </ul>
                       </li>
                   </ul>
               </li>
               <li class="nv-dropdown-item nv-dropdown-item-disabled">
                   <a href="#">Item 5（disabled）</a>
               </li>
           </ul>
       </div>
```


### API


+ 自定义属性

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----:  |
| date-type  | string(选填)   | (默认hover,可选 "click") eg: data-type="click"   |
| data-menuwidth  | string(选填)   | 下拉菜单宽度 eg: data-menuwidth="50px"  |
| data-menuheight  | string(选填)   | 下拉菜单高度 eg: data-menuheight="50px"  |
| data-close-auto | Boolean (选填)   | true 开启时将关闭,自动计算向上或向下翻折叠 eg: data-close-auto="true"  |

+ 自定义属性

| 类型  | 位置   |  描述  |
| --------    | :----- | :----:  |
| nv-dropdown-btn  | 最外层   | 是否展示为按钮样式   |
| nv-dropdown-up  | 最外层   | 向上翻折 |
| nv-dropdown-right  | 最外层  | 下拉窗体右对齐 |
| nv-dropdown-equal | 最外层   | 下拉窗体与父级等宽 |
| nv-dropdown-disabled | 最外层   | 下拉整体禁用 |
| nv-dropdown-item-disabled | 下拉列表项   | 某一条下拉项禁用 |



[DEMO展示](http://nv.zhangjinglin.cn/api?type=dropdown)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/6)