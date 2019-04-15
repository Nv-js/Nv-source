# Button 按钮

这是一个基础空间

---

### 使用方法

+ 按钮触发应用的功能，存在于页面的许多地方。按钮可以是“图标按钮”，也可以是“文字按钮”，也可以“图文结合”。

+ 使用“文字按钮”时，注意使用动词或动词短语来描述按钮所执行的操作。

+ 按钮有4种状态：默认、点击、选中、禁用。

+ 按钮最多会有3种状态：默认、点击、禁用，也可以只有2种状态：默认、点击或者默认、选中（只有默认、选中的按钮作用）

+ 按钮支持按下后逃逸行为，即按下按钮后再移出热区区域即为取消操作。

<br/>

因为是内置组件，所以就是采用基本用法。此内置组件不含有任何事件。

### 标准按钮

标准按钮有四种类型：主按钮 `nv-btn-primary` 、次按钮 `nv-btn-default` 、危险按钮 `nv-btn-danger` 、不可点按钮 `nv-btn-disable` 。

```html
    <button type="button" class="nv-btn nv-btn-primary">Primary</button>
```

<br/>

### 多种标签都是支持的

可以很好的支持button标签与A标签

```html
    <a href="#" class="nv-btn nv-btn-default">A target</a>
    <button type="button" class="nv-btn nv-btn-default">Button target</button>
```
<br/>

### 按钮尺寸

按钮有大 `nv-btn-lg` 、中(默认)、小 `nv-btn-sm` 三种尺寸，在这里我们只定义三种高度（24px,32px,40px）,宽度随内容自适应

```html
    <!--大、中、小-->
    <button type="button" class="nv-btn nv-btn-primary nv-btn-sm">Small</button>
    <button type="button" class="nv-btn nv-btn-primary">Default</button>
    <button type="button" class="nv-btn nv-btn-primary nv-btn-lg">Large</button>
```
<br/>

### 图标按钮

```html
    <button type="button" class="nv-btn nv-btn-primary nv-btn-circle">
        <i class="nvicon-search-empty"></i>
    </button>
    <button type="button" class="nv-btn nv-btn-primary">
        <i class="nvicon-search-empty"></i>search
    </button>
```

### 组合按钮

```html
    <div class="nv-btn-group">
        <button type="button" class="nv-btn nv-btn-primary">text1</button>
        <button type="button" class="nv-btn nv-btn-primary">text2</button>
        <button type="button" class="nv-btn nv-btn-primary">text3</button>
    </div>
    <div class="nv-btn-group">
        <button type="button" class="nv-btn nv-btn-primary">
            <i class="nvicon-arrow-left"></i>text1
        </button>
        <button type="button" class="nv-btn nv-btn-primary">
            text2<i class="nvicon-arrow-right"></i>
        </button>
    </div>
    <div class="nv-btn-group">
        <button type="button" class="nv-btn nv-btn-primary">
            <i class="nvicon-arrow-left"></i>
        </button>
        <button type="button" class="nv-btn nv-btn-primary">
            <i class="nvicon-arrow-right"></i>
        </button>
    </div>
```

[Demo展示](http://www.nv-js.com/api?type=buttons)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/2)

    