# Badge 徽标

出现在图标或者按钮的右上角，提醒用户有未读信息

---

### 使用方法

+ 徽标是常用的提醒功能，找到项目中需要的样式直接使用

<br/>

### 基础样式

最基本徽标显示方式

```html
    <span class="zr-badge">
        <button class="zr-btn zr-btn-default">Comment</button>
        <span class="zr-badge-normal" data-max="99">9</span>
    </span>
    <span class="zr-badge">
        <button class="zr-btn zr-btn-default">Comment</button>
        <span class="zr-badge-normal" data-max="99">99</span>
    </span>
    <span class="zr-badge">
        <span class="zr-photo">
            <img src="//storage.jd.com/zrstatic/images/demo1.jpg" alt="">
        </span>
        <span class="zr-badge-normal" data-max="99">9</span>
    </span>
    <span class="zr-badge">
        <button class="zr-btn zr-btn-primary">Comment</button>
        <span class="zr-badge-normal" data-max="99">99+</span>
    </span>
    <span>
        <span>option1</span>
        <span class="zr-badge-normal" data-max="99">9</span>
    </span>
```

<br/>

### 最大值

可自定义显示最大值，默认最大值为99，超过99显示为99+

```html
    <span class="zr-badge">
        <button class="zr-btn zr-btn-default">Comment</button>
        <span class="zr-badge-normal" data-max="99">99+</span>
    </span>
    <span class="zr-badge">
        <button class="zr-btn zr-btn-default">Comment</button>
        <span class="zr-badge-normal" data-max="999">999+</span>
    </span>
    <span class="zr-badge">
        <button class="zr-btn zr-btn-default">Comment</button>
        <span class="zr-badge-normal" data-max="9999">9999+</span>
    </span>
```
<br/>

### 小红点

不显示具体数字，只提示用户有需要关注的信息

```html
    <span class="zr-badge">
        <span>New Message</span>
        <span class="zr-badge-pointer"></span>
    </span>
    <span class="zr-badge">
        <span>……</span>
        <span class="zr-badge-pointer"></span>
    </span>
```
<br/>

### 自定义文本内容

不显示具体数字，只提示用户有需要关注的信息

```html
    <span class="zr-badge">
        <button class="zr-btn zr-btn-default">Comment</button>
        <span class="zr-badge-normal">Comment</span>
    </span>
```


[Demo展示](http://gtp-zr.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=6beaa733cf904e398dadffca48a49954&directoryName=Badge%20%E5%BE%BD%E6%A0%87)

[留言和讨论](https://github.com/guguaihaha/zr-source/issues/24)

    