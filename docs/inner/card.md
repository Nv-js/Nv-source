# Card 卡片

卡片容器，用来显示文字、列表、图文等元素。

---

### 使用方法

+ 找到符合项目的代码片段然后copy

<br/>

### 基础样式

最基本面板样式，可以同时展开多个面板。

```html
    <div class="nv-card">
        <div class="nv-card-title">
            <b>Title</b>
        </div>
        <div class="nv-card-content">
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
<div class="nv-card">
    <div class="nv-card-title">
        <b>Title</b>
        <i class="nvicon-seting-empty nv-card-operate"></i>
    </div>
    <div class="nv-card-content">
        <ul>
            <li>This is content…This is content…</li>
            <li>This is content…This is content…</li>
            <li>This is content…This is content…</li>
        </ul>
    </div>
</div>
<div class="nv-card">
    <div class="nv-card-title">
        <b>Title</b>
        <div class="nv-dropdown">
            <i class="nvicon-menu-empty nv-card-operate"></i>
            <ul class="nv-dropdown-menu">
                <li class="nv-dropdown-item">
                    <a target="_blank" href="#">Option 1</a>
                </li>
                <li class="nv-dropdown-item">
                    <a target="_blank" href="#">Option 2</a>
                </li>
                <li class="nv-dropdown-item">
                    Option 3
                </li>
            </ul>
        </div>
    </div>
    <div class="nv-card-content">
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
    <div class="nv-card nv-card-noborder">
        <div class="nv-card-title">
            <b>Title</b>
        </div>
        <div class="nv-card-content">
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
    <div class="nv-card">
        <div class="nv-card-content">
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
    <div class="nv-card nv-card-pic">
        <div class="nv-card-img">
            <img src="http://storage.jd.com/nvstatic/design/pic.jpg" alt="">
        </div>
        <div class="nv-card-title">
            <span>Title</span>
        </div>
        <div class="nv-card-content">
            <div class="nv-card-left">
                <ul>
                    <li>This is content</li>
                </ul>
            </div>
            <div class="nv-card-right">
                <a href="#">More</a>
            </div>
        </div>
    </div>
```

[Demo展示](http://gtp-nv.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=32756a152cb54d1aa8ed1567944350e3&directoryName=Card%20%E5%8D%A1%E7%89%87)

[留言和讨论](https://github.com/Nv-js/nv-source/issues/20)

    