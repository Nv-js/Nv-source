# Card 卡片

卡片容器，用来显示文字、列表、图文等元素。

---

### 使用方法

+ 找到符合项目的代码片段然后copy

<br/>

### 基础样式

最基本面板样式，可以同时展开多个面板。

```html
    <div class="zr-card">
        <div class="zr-card-title">
            <b>Title</b>
        </div>
        <div class="zr-card-content">
            <ul>
                <li>This is content…This is content…</li>
                <li>This is content…This is content…</li>
                <li>This is content…This is content…</li>
            </ul>
        </div>
    </div>
```

<br/>

### 含操作的卡片

如果操作超过4个可以收藏在汉堡菜单中

代码结构如下：

```html
<div class="zr-card">
    <div class="zr-card-title">
        <b>Title</b>
        <i class="zricon-seting-empty zr-card-operate"></i>
    </div>
    <div class="zr-card-content">
        <ul>
            <li>This is content…This is content…</li>
            <li>This is content…This is content…</li>
            <li>This is content…This is content…</li>
        </ul>
    </div>
</div>
<div class="zr-card">
    <div class="zr-card-title">
        <b>Title</b>
        <div class="zr-dropdown">
            <i class="zricon-menu-empty zr-card-operate"></i>
            <ul class="zr-dropdown-menu">
                <li class="zr-dropdown-item">
                    <a target="_blank" href="#">Option 1</a>
                </li>
                <li class="zr-dropdown-item">
                    <a target="_blank" href="#">Option 2</a>
                </li>
                <li class="zr-dropdown-item">
                    Option 3
                </li>
            </ul>
        </div>
    </div>
    <div class="zr-card-content">
        <ul>
            <li>This is content…This is content…</li>
            <li>This is content…This is content…</li>
            <li>This is content…This is content…</li>
        </ul>
    </div>
</div>
```
<br/>

### 无边框卡片

尝尝用在灰色背景色上。

代码结构如下：

```html
    <div class="zr-card zr-card-noborder">
        <div class="zr-card-title">
            <b>Title</b>
        </div>
        <div class="zr-card-content">
            <ul>
                <li>This is content…This is content…</li>
                <li>This is content…This is content…</li>
                <li>This is content…This is content…</li>
            </ul>
        </div>
    </div>
```
<br/>

### 简单卡片

```html
    <div class="zr-card">
        <div class="zr-card-content">
            <ul>
                <li>This is content…This is content…</li>
                <li>This is content…This is content…</li>
                <li>This is content…This is content…</li>
            </ul>
        </div>
    </div>
```

### 带图片的卡片

支持图片、头像、标题和描述信息的卡片

```html
    <div class="zr-card zr-card-pic">
        <div class="zr-card-img">
            <img src="http://storage.jd.com/zrstatic/design/pic.jpg" alt="">
        </div>
        <div class="zr-card-title">
            <span>Title</span>
        </div>
        <div class="zr-card-content">
            <div class="zr-card-left">
                <ul>
                    <li>This is content</li>
                </ul>
            </div>
            <div class="zr-card-right">
                <a href="#">More</a>
            </div>
        </div>
    </div>
```

[Demo展示](http://gtp-zr.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=32756a152cb54d1aa8ed1567944350e3&directoryName=Card%20%E5%8D%A1%E7%89%87)

[留言和讨论](https://github.com/guguaihaha/zr-source/issues/20)

    