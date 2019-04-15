# Breadcrumb 面包屑

告诉用户他们在网站中的位置以及如何返回

---

### 使用方法

尺寸的标准如下：

+ 网站层级较多（2层级以上）

+ 用户对网站不熟悉，需要知道自己在哪里

+ 用户有返回上级导航的需求

<br/>

### 基本用法

最基础简单的面包屑

代码结构如下：

```html
    <div class="nv-breadcrumb">
        <em class="nv-breadcrumb-normal">Home</em>
        <i class="nvicon-arrow-right nv-breadcrumb-icon"></i>
        <em class="nv-breadcrumb-normal">
            <a href="" class="nv-breadcrumb-link">Page</a>
        </em>
        <i class="nvicon-arrow-right nv-breadcrumb-icon"></i>
        <em class="nv-breadcrumb-normal">
            <a href="" class="nv-breadcrumb-link">Subpage</a>
        </em>
        <i class="nvicon-arrow-right nv-breadcrumb-icon"></i>
        <em class="nv-breadcrumb-normal nv-breadcrumb-current">Balabala</em>
    </div>
```

<br/>

### 图标组合

可以在每一级的面包屑前加一个图标，首级面包屑可以单独使用图标

首级图文混排代码结构：

```html
    <div class="nv-breadcrumb">
        <a href="" class="nv-breadcrumb-link">
            <i class="nvicon-home-empty"></i>
            <em class="nv-breadcrumb-normal">Home</em>
        </a>
        <i class="nvicon-arrow-right nv-breadcrumb-icon"></i>
        <a href="" class="nv-breadcrumb-link">
            <i class="nvicon-doc-empty"></i>
            <em class="nv-breadcrumb-normal">Page</em>
        </a>
        <i class="nvicon-arrow-right nv-breadcrumb-icon"></i>
        <em class="nv-breadcrumb-normal nv-breadcrumb-current">Balabala</em>
    </div>
```
<br/>

首级只有图标代码结构：

```html
    <div class="nv-breadcrumb">
        <a href="" class="nv-breadcrumb-link">
            <i class="nvicon-home-empty"></i>
        </a>
        <i class="nvicon-arrow-right"></i>
        <a href="" class="nv-breadcrumb-link">
            <i class="nvicon-doc-empty"></i>
            <em class="nv-breadcrumb-normal">Page</em>
        </a>
        <i class="nvicon-arrow-right"></i>
        <em class="nv-breadcrumb-normal nv-breadcrumb-current">Balabala</em>
    </div>
```

[DEMO展示](http://www.nv-js.com/api?type=breadcrumb)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/6)