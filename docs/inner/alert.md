# Alert 警告提示

用于展示重要信息，当然支持手动关闭，平台浮层基于样式不会自动消失

---

### 使用方法

+ 找到代码块，将自己喜欢的代码copy到项目代码中

<br/>

### 基础样式

基本使用方法，有四种样式可以选择 `zr-alert-info` 消息提醒 、 `zr-alert-success` 成功状态、 `zr-alert-error` 错误状态、 `zr-alert-warning` 信息警告，适用于简短的信息

```html
    <div class="zr-alert zr-alert-info">
        <span class="zr-alert-message">Info Text</span>
    </div>
    <div class="zr-alert zr-alert-success">
        <span class="zr-alert-message">Success Text</span>
    </div>
    <div class="zr-alert zr-alert-error">
        <span class="zr-alert-message">Error Text</span>
    </div>
    <div class="zr-alert zr-alert-warning">
        <span class="zr-alert-message">Warning Text</span>
    </div>
```

<br/>

### 含有描述信息

含有辅助性文字介绍的警告提示，需添加 `zr-alert-with-description`

```html
    <div class="zr-alert zr-alert-info zr-alert-with-description">
        <span class="zr-alert-message">Info</span>
        <span class="zr-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
    <div class="zr-alert zr-alert-success zr-alert-with-description">
        <span class="zr-alert-message">Success</span>
        <span class="zr-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
    <div class="zr-alert zr-alert-error zr-alert-with-description">
        <span class="zr-alert-message">Error</span>
        <span class="zr-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
    <div class="zr-alert zr-alert-warning zr-alert-with-description">
        <span class="zr-alert-message">Warning</span>
        <span class="zr-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
```
<br/>

### 可关闭的提示

显示关闭按钮，点击可关闭警告提示；添加关闭标签，并给标签添加相应样式 `zr-alert-close`

```html
    <div class="zr-alert zr-alert-error">
        <a class="zr-alert-close" href="javascript:void(0);">
            <i class="zricon-close"></i>
        </a>
        <span class="zr-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
    <div class="zr-alert zr-alert-error zr-alert-with-description">
        <a class="zr-alert-close" href="javascript:void(0);">
            <i class="zricon-close"></i>
        </a>
        <span class="zr-alert-message">Error</span>
        <span class="zr-alert-description">Error Description Error Description Error Description Error Description</span>
    </div>
```
<br/>

### 带图标的短提示

图标可以让提示更醒目，只需要添加 zr-alert-with-icon

```html
    <div class="zr-alert zr-alert-info zr-alert-with-icon">
        <i class="zricon-info"></i>
        <span class="zr-alert-message">Info Text</span>
    </div>
    <div class="zr-alert zr-alert-success zr-alert-with-icon">
        <i class="zricon-ok-circle"></i>
        <span class="zr-alert-message">Success Text</span>
    </div>
    <div class="zr-alert zr-alert-error zr-alert-with-icon">
        <i class="zricon-close-circle"></i>
        <span class="zr-alert-message">Error Text</span>
    </div>
    <div class="zr-alert zr-alert-warning zr-alert-with-icon">
        <i class="zricon-warning"></i>
        <span class="zr-alert-message">Warning Text</span>
    </div>
```

### 带图标的长提示信息

```html
    <div class="zr-alert zr-alert-info zr-alert-with-description zr-alert-with-icon">
        <i class="zricon-info"></i>
        <span class="zr-alert-message">Info</span>
        <span class="zr-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
    <div class="zr-alert zr-alert-success zr-alert-with-description zr-alert-with-icon">
        <i class="zricon-ok-circle"></i>
        <span class="zr-alert-message">Success</span>
        <span class="zr-alert-description">Success Description Success Description Success Description Success Description</span>
    </div>
    <div class="zr-alert zr-alert-error zr-alert-with-description zr-alert-with-icon">
        <i class="zricon-close-circle"></i>
        <span class="zr-alert-message">Error</span>
        <span class="zr-alert-description">Error Description Error Description Error Description Error Description</span>
    </div>
    <div class="zr-alert zr-alert-warning zr-alert-with-description zr-alert-with-icon">
        <i class="zricon-warning"></i>
        <span class="zr-alert-message">Warning</span>
        <span class="zr-alert-description">Warning Description Warning Description Warning Description Warning Description</span>
    </div>
```
<br/>

### 简短提示关闭按钮

自定义关闭按钮为文字或其他符号都是支持的，只要添加 `zr-alert-close`

```html
     <div class="zr-alert zr-alert-info zr-alert-with-icon">
        <a class="zr-alert-close" href="javascript:void(0);">close</a>
        <i class="zricon-info"></i>
        <span class="zr-alert-message">Info Text</span>
    </div>
    <div class="zr-alert zr-alert-success zr-alert-with-icon">
        <a class="zr-alert-close" href="javascript:void(0);">close</a>
        <i class="zricon-ok-circle"></i>
        <span class="zr-alert-message">Success Text</span>
    </div>
    <div class="zr-alert zr-alert-error zr-alert-with-icon">
        <a class="zr-alert-close" href="javascript:void(0);">close</a>
        <i class="zricon-close-circle"></i>
        <span class="zr-alert-message">Error Text</span>
    </div>
    <div class="zr-alert zr-alert-warning zr-alert-with-icon">
        <a class="zr-alert-close" href="javascript:void(0);">close</a>
        <i class="zricon-warning"></i>
        <span class="zr-alert-message">Warning Text</span>
    </div>
```

### 长提示关闭按钮

```html
    <div class="zr-alert zr-alert-info zr-alert-with-description zr-alert-with-icon">
        <a class="zr-alert-close" href="javascript:void(0);">close</a>
        <i class="zricon-info"></i>
        <span class="zr-alert-message">Info</span>
        <span class="zr-alert-description">Info Description Info Description Info Description Info Description</span>
    </div>
    <div class="zr-alert zr-alert-success zr-alert-with-description zr-alert-with-icon">
        <a class="zr-alert-close" href="javascript:void(0);">close</a>
        <i class="zricon-ok-circle"></i>
        <span class="zr-alert-message">Success</span>
        <span class="zr-alert-description">Success Description Success Description Success Description Success Description</span>
    </div>
    <div class="zr-alert zr-alert-error zr-alert-with-description zr-alert-with-icon">
        <a class="zr-alert-close" href="javascript:void(0);">close</a>
        <i class="zricon-close-circle"></i>
        <span class="zr-alert-message">Error</span>
        <span class="zr-alert-description">Error Description Error Description Error Description Error Description</span>
    </div>
    <div class="zr-alert zr-alert-warning zr-alert-with-description zr-alert-with-icon">
        <a class="zr-alert-close" href="javascript:void(0);">close</a>
        <i class="zricon-warning"></i>
        <span class="zr-alert-message">Warning</span>
        <span class="zr-alert-description">Warning Description Warning Description Warning Description Warning Description</span>
    </div>
```

[Demo展示](http://gtp-zr.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=3b984ea2722a425eaf1be196d4777b64&directoryName=Alert%20%E8%AD%A6%E5%91%8A%E6%8F%90%E7%A4%BA)

[留言和讨论](https://github.com/guguaihaha/zr-source/issues/16)

    