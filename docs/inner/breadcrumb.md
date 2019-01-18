# Breadcrumb 面包屑

告诉用户他们在网站中的位置以及如何返回

---

### 使用方法

尺寸的标准如下：

+ 网站层级较多（2层级以上）

+ 左侧导航的宽度尺寸计算范围：200+8n

[点击了解栅格系统](https://github.com/guguaihaha/zr-source/blob/master/docs/inner/grid.md)

<br/>

### 基本用法

最基础简单的面包屑

代码结构如下：

```html
    <div class="zr-breadcrumb">
        <em class="zr-breadcrumb-normal">Home</em>
        <i class="zricon-arrow-right zr-breadcrumb-icon"></i>
        <em class="zr-breadcrumb-normal">
            <a href="" class="zr-breadcrumb-link">Page</a>
        </em>
        <i class="zricon-arrow-right zr-breadcrumb-icon"></i>
        <em class="zr-breadcrumb-normal">
            <a href="" class="zr-breadcrumb-link">Subpage</a>
        </em>
        <i class="zricon-arrow-right zr-breadcrumb-icon"></i>
        <em class="zr-breadcrumb-normal zr-breadcrumb-current">Balabala</em>
    </div>
```

<br/>

### 图标组合

可以在每一级的面包屑前加一个图标，首级面包屑可以单独使用图标

首级图文混排代码结构：

```html
    <div class="zr-breadcrumb">
        <a href="" class="zr-breadcrumb-link">
            <i class="zricon-home-empty"></i>
            <em class="zr-breadcrumb-normal">Home</em>
        </a>
        <i class="zricon-arrow-right zr-breadcrumb-icon"></i>
        <a href="" class="zr-breadcrumb-link">
            <i class="zricon-doc-empty"></i>
            <em class="zr-breadcrumb-normal">Page</em>
        </a>
        <i class="zricon-arrow-right zr-breadcrumb-icon"></i>
        <em class="zr-breadcrumb-normal zr-breadcrumb-current">Balabala</em>
    </div>
```

<br/>

首级只有图标代码结构：

```html
    <div class="zr-breadcrumb">
        <a href="" class="zr-breadcrumb-link">
            <i class="zricon-home-empty"></i>
        </a>
        <i class="zricon-arrow-right"></i>
        <a href="" class="zr-breadcrumb-link">
            <i class="zricon-doc-empty"></i>
            <em class="zr-breadcrumb-normal">Page</em>
        </a>
        <i class="zricon-arrow-right"></i>
        <em class="zr-breadcrumb-normal zr-breadcrumb-current">Balabala</em>
    </div>
```

[DEMO展示](http://gtp-zr.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=1ef74d93a52d4ae8b58dd8489db71393&directoryName=Breadcrumb%20%E9%9D%A2%E5%8C%85%E5%B1%91)

[留言和讨论](https://github.com/guguaihaha/zr-source/issues/6)