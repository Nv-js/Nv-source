# Tooltip 文字提示

文字提示气泡框，当鼠标悬浮时出现

---

### 使用方法

+ 文字提示添加样式和自定义属性就可以了

<br/>

### 基本样式

最基本的用法，只要将想要提示的节点添加class样式 `zr-tooltip` ,同时添加对应提示文本属性 `data-tip-text='Here is the content...'`，即可展现默认形式

```html
    <p class="zr-tooltip" data-tip-text="Here is the content...">Mouseover Here...</p>
```

<br/>

### 不同的展示位置

位置有12个方向

```html
    <button type="button" class="zr-tooltip" data-tip-text="tip position tl" data-ip-position="tl">
        <span>TL</span>
    </button>
    <button type="button" class="zr-tooltip" data-tip-text="tip position top">
        <span>Top</span>
    </button>
    <button type="button" class="zr-tooltip" data-tip-text="tip position tr" data-tip-position="tr">
        <span>TR</span>
    </button>
    <button type="button" class="zr-tooltip" data-tip-text="tip position lt" data-tip-position="lt">
        <span>LT</span>
    </button>
    <button type="button" class="zr-tooltip" data-tip-text="tip position left" data-tip-position="left">
        <span>Left</span>
    </button>
    <button type="button" class="zr-tooltip" data-tip-text="tip position lb" data-tip-position="lb">
        <span>LB</span>
    </button>
    <button type="button" class="zr-tooltip" data-tip-text="tip position rt" data-tip-position="rt">
        <span>RT</span>
    </button>
    <button type="button" class="zr-tooltip" data-tip-text="tip position right" data-tip-position="right">
        <span>Right</span>
    </button>
    <button type="button" class="zr-tooltip" data-tip-text="tip position rb" data-tip-position="rb">
        <span>RB</span>
    </button>
    <button type="button" class="zr-tooltip" data-tip-text="tip position bl" data-tip-position="bl">
        <span>BL</span>
    </button>
    <button type="button" class="zr-tooltip" data-tip-text="tip position bottom" data-tip-position="bottom">
        <span>Bottom</span>
    </button>
    <button type="button" class="zr-tooltip" data-tip-text="tip position br" data-tip-position="br">
        <span>BR</span>
    </button>
```
<br/>

### 自定义文字内容

展示多行文本

```html
    <p style="width:480px;" class="zr-tooltip" data-tip-text="Here is the content...Here is the content...Here is the content...">Here is the content...Here is the content...Here is the content...</p>
```
<br/>

### 可以自定义事件

通过修改属性 `data-tip-event` 为 `click`,即可点击出现提示。建议属性选择有`hover`(默认)和`click`事件,同时支持其他事件

```html
    <p class="zr-tooltip" data-tip-event="click" data-tip-text="Click 事件名称，点击后生效">Click 事件名称，点击后生效</p>
```

### 节点属性

自定义属性能带来这么多绚丽的效果，那还有哪些属性可以使用呢？

 + data-tip-text
   
   - 描述：提示信息内容

   - 类型：String (必填)

 + data-tip-event
   
   - 描述：`hover`(默认),`click` 两种事件，同时也可以添加其他事件触发提示信息

   - 类型：String (选填)

 + data-tip-position
   
   - 描述："tl","top"(默认),"tr","rt","right","rb","br","bottom","bl","lb","left","lt"，12种位置

   - 类型：String (选填)

 + data-tip-maxwidth
   
   - 描述：提示信息的最大宽度设置，默认是250像素,data-tip-maxwidth='250'

   - 类型：StringNumber (选填)

 + data-tip-cache
   
   - 描述：是否使用缓存，默认是"true"，使用缓存。如果设置"false"则不使用缓存

   - 类型：String (选填)


[Demo展示](http://gtp-zr.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=606e2519dda948c2bf214fd62182a157&directoryName=Tooltip%20%E6%96%87%E5%AD%97%E6%8F%90%E7%A4%BA)

[留言和讨论](https://github.com/guguaihaha/zr-source/issues/23)

    