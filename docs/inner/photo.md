# Photo 头像

显示用户的头像，支持图片、图标和字符

---

### 使用方法

+ 内置组件，添加对应的样式即可表现出对应的类型。

<br/>

### 基础样式

三种尺寸，两种形状 `nv-photo` 为默认样式，`nv-photo-circle` 为圆形样式，`nv-photo-lg` 表示大图标，`nv-photo-sm` 表示小图标

```html
    <span class="nv-photo  nv-photo-circle nv-photo-lg">
        <i class="nvicon-user-empty"></i>
    </span>
            <span class="nv-photo  nv-photo-circle">
        <i class="nvicon-user-empty"></i>
    </span>
            <span class="nv-photo  nv-photo-circle nv-photo-sm">
        <i class="nvicon-user-empty"></i>
    </span>
            <span class="nv-photo  nv-photo-lg">
        <i class="nvicon-user-empty"></i>
    </span>
            <span class="nv-photo">
        <i class="nvicon-user-empty"></i>
    </span>
            <span class="nv-photo nv-photo-sm">
        <i class="nvicon-user-empty"></i>
    </span>
```

<br/>

### 多样式类型

基于基础样式之上，在 `nv-photo `之后添加 `nv-photo-db` 属性则背景变为深蓝, 添加 `nv-photo-wb` 属性则背景变为浅蓝，添加 `nv-photo-do` 属性则背景变为深橘色， 添加 `nv-photo-wo` 属性则背景变为浅橘色

多样性的代码结构如下：

```html
    <span class="nv-photo  nv-photo-circle">
        <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
    </span>
    <span class="nv-photo  nv-photo-circle">
        <i class="nvicon-user-empty"></i>
    </span>
    <span class="nv-photo  nv-photo-circle  nv-photo-db">
        <i class="nvicon-user-empty"></i>
    </span>
    <span class="nv-photo  nv-photo-circle nv-photo-wb">
        <i class="nvicon-user-empty"></i>
    </span>
        <span class="nv-photo  nv-photo-circle">
        L
    </span>
    <span class="nv-photo  nv-photo-circle  nv-photo-do">
        L
    </span>
    <span class="nv-photo  nv-photo-circle nv-photo-wo">
        L
    </span>
        <span class="nv-photo  nv-photo-circle">
        Ran
    </span>
    <span class="nv-photo  nv-photo-circle  nv-photo-do">
        Ran
    </span>
    <span class="nv-photo  nv-photo-circle nv-photo-wo">
        Ran
    </span>
```
<br/>

### 背景换色

点击按钮可实现更换背景色

```html
    <span class="nv-photo nv-photo-circle nv-photo-db">
    L
    </span>
    <button type="button" class="nv-btn nv-btn-default nv-btn-sm">Change</button>
```
<br/>

### 带徽标的头像

用于新消息的提醒

```html
    <span class="nv-badge">
        <span class="nv-photo">
            <i class="nvicon-user-empty"></i>
        </span>
         <span class="nv-badge-normal">
             9
         </span>
    </span>
    <span class="nv-badge">
        <span class="nv-photo">
            <i class="nvicon-user-empty"></i>
        </span>
         <span class="nv-badge-pointer"></span>
    </span>
```
<br/>

[Demo展示](http://gtp-nv.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=ef23ab31b4a241e6b10fd2a3ac5ef85c&directoryName=Photo%20%E5%A4%B4%E5%83%8F)

[留言和讨论](https://github.com/Nv-js/nv-source/issues/22)

    