# Alert 警告提示

用于展示重要信息，当然支持手动关闭，平台浮层基于样式不会自动消失

---

### 使用方法

+ 找到代码块，将自己喜欢的代码copy到项目代码中

<br/>

### 基础样式

基本使用方法，有四种样式可以选择 `nv-alert-info` 消息提醒 、 `nv-alert-success` 成功状态、 `nv-alert-error` 错误状态、 `nv-alert-warning` 信息警告，适用于简短的信息

```html
    <div class="nv-alert nv-alert-info">
        <span class="nv-alert-message">Info Text</span>
    </div>
    <div class="nv-alert nv-alert-success">
        <span class="nv-alert-message">Success Text</span>
    </div>
    <div class="nv-alert nv-alert-error">
        <span class="nv-alert-message">Error Text</span>
    </div>
    <div class="nv-alert nv-alert-warning">
        <span class="nv-alert-message">Warning Text</span>
    </div>
```

<br/>

### 含有描述信息

含有辅助性文字介绍的警告提示，需添加 `nv-alert-with-description`

```html
    <div class="nv-alert nv-alert-info nv-alert-with-description">
        <span class="nv-alert-message">Info</span>
        <span class="nv-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
    <div class="nv-alert nv-alert-success nv-alert-with-description">
        <span class="nv-alert-message">Success</span>
        <span class="nv-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
    <div class="nv-alert nv-alert-error nv-alert-with-description">
        <span class="nv-alert-message">Error</span>
        <span class="nv-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
    <div class="nv-alert nv-alert-warning nv-alert-with-description">
        <span class="nv-alert-message">Warning</span>
        <span class="nv-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
```
<br/>

### 可关闭的提示

显示关闭按钮，点击可关闭警告提示；添加关闭标签，并给标签添加相应样式 `nv-alert-close`

```html
    <div class="nv-alert nv-alert-error">
        <a class="nv-alert-close" href="javascript:void(0);">
            <i class="nvicon-close"></i>
        </a>
        <span class="nv-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
    <div class="nv-alert nv-alert-error nv-alert-with-description">
        <a class="nv-alert-close" href="javascript:void(0);">
            <i class="nvicon-close"></i>
        </a>
        <span class="nv-alert-message">Error</span>
        <span class="nv-alert-description">Error Description Error Description Error Description Error Description</span>
    </div>
```
<br/>

### 带图标的短提示

图标可以让提示更醒目，只需要添加 nv-alert-with-icon

```html
    <div class="nv-alert nv-alert-info nv-alert-with-icon">
        <i class="nvicon-info"></i>
        <span class="nv-alert-message">Info Text</span>
    </div>
    <div class="nv-alert nv-alert-success nv-alert-with-icon">
        <i class="nvicon-ok-circle"></i>
        <span class="nv-alert-message">Success Text</span>
    </div>
    <div class="nv-alert nv-alert-error nv-alert-with-icon">
        <i class="nvicon-close-circle"></i>
        <span class="nv-alert-message">Error Text</span>
    </div>
    <div class="nv-alert nv-alert-warning nv-alert-with-icon">
        <i class="nvicon-warning"></i>
        <span class="nv-alert-message">Warning Text</span>
    </div>
```

### 带图标的长提示信息

```html
    <div class="nv-alert nv-alert-info nv-alert-with-description nv-alert-with-icon">
        <i class="nvicon-info"></i>
        <span class="nv-alert-message">Info</span>
        <span class="nv-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
    <div class="nv-alert nv-alert-success nv-alert-with-description nv-alert-with-icon">
        <i class="nvicon-ok-circle"></i>
        <span class="nv-alert-message">Success</span>
        <span class="nv-alert-description">Success Description Success Description Success Description Success Description</span>
    </div>
    <div class="nv-alert nv-alert-error nv-alert-with-description nv-alert-with-icon">
        <i class="nvicon-close-circle"></i>
        <span class="nv-alert-message">Error</span>
        <span class="nv-alert-description">Error Description Error Description Error Description Error Description</span>
    </div>
    <div class="nv-alert nv-alert-warning nv-alert-with-description nv-alert-with-icon">
        <i class="nvicon-warning"></i>
        <span class="nv-alert-message">Warning</span>
        <span class="nv-alert-description">Warning Description Warning Description Warning Description Warning Description</span>
    </div>
```
<br/>

### 简短提示关闭按钮

自定义关闭按钮为文字或其他符号都是支持的，只要添加 `nv-alert-close`

```html
     <div class="nv-alert nv-alert-info nv-alert-with-icon">
        <a class="nv-alert-close" href="javascript:void(0);">close</a>
        <i class="nvicon-info"></i>
        <span class="nv-alert-message">Info Text</span>
    </div>
    <div class="nv-alert nv-alert-success nv-alert-with-icon">
        <a class="nv-alert-close" href="javascript:void(0);">close</a>
        <i class="nvicon-ok-circle"></i>
        <span class="nv-alert-message">Success Text</span>
    </div>
    <div class="nv-alert nv-alert-error nv-alert-with-icon">
        <a class="nv-alert-close" href="javascript:void(0);">close</a>
        <i class="nvicon-close-circle"></i>
        <span class="nv-alert-message">Error Text</span>
    </div>
    <div class="nv-alert nv-alert-warning nv-alert-with-icon">
        <a class="nv-alert-close" href="javascript:void(0);">close</a>
        <i class="nvicon-warning"></i>
        <span class="nv-alert-message">Warning Text</span>
    </div>
```

### 长提示关闭按钮

```html
    <div class="nv-alert nv-alert-info nv-alert-with-description nv-alert-with-icon">
        <a class="nv-alert-close" href="javascript:void(0);">close</a>
        <i class="nvicon-info"></i>
        <span class="nv-alert-message">Info</span>
        <span class="nv-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
    <div class="nv-alert nv-alert-success nv-alert-with-description nv-alert-with-icon">
        <a class="nv-alert-close" href="javascript:void(0);">close</a>
        <i class="nvicon-ok-circle"></i>
        <span class="nv-alert-message">Success</span>
        <span class="nv-alert-description">Success Description Success Description Success Description Success Description</span>
    </div>
    <div class="nv-alert nv-alert-error nv-alert-with-description nv-alert-with-icon">
        <a class="nv-alert-close" href="javascript:void(0);">close</a>
        <i class="nvicon-close-circle"></i>
        <span class="nv-alert-message">Error</span>
        <span class="nv-alert-description">Error Description Error Description Error Description Error Description</span>
    </div>
    <div class="nv-alert nv-alert-warning nv-alert-with-description nv-alert-with-icon">
        <a class="nv-alert-close" href="javascript:void(0);">close</a>
        <i class="nvicon-warning"></i>
        <span class="nv-alert-message">Warning</span>
        <span class="nv-alert-description">Warning Description Warning Description Warning Description Warning Description</span>
    </div>
```

[Demo展示](http://www.nv-js.com/api?type=alert)

[留言和讨论](https://github.com/Nv-js/nv-source/issues/16)

    