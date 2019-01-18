# Layout 布局

有关整体页面布局的设计原则

---

### 设计原则

尺寸的标准如下：

+ 顶部导航的高度尺寸计算范围：48+8n

+ 左侧导航的宽度尺寸计算范围：200+8n

[点击了解栅格系统](https://github.com/guguaihaha/zr-source/blob/master/docs/inner/grid.md)

<br/>

### 基础布局上、中、下模式

代码结构如下：

```html
    <div class="zr-layout">
        <div class="zr-layout-header grey-bgc-3">
            Header
        </div>
        <div class="zr-layout-content grey-bgc-4">
            Content
        </div>
        <div class="zr-layout-footer grey-bgc-3">
            Footer
        </div>
    </div>
```

<br/>

### 基础布局上、中（左侧导航和右侧内容区）、下模式

代码结构如下：

```html
     <div class="zr-layout">
        <div class="zr-layout-header grey-bgc-3">
            Header
        </div>
        <div class="zr-layout zr-layout-has-side grey-bgc-4">
            <div class="zr-layout-side">
                <div class="zr-layout-side-children">
                    Side
                </div>
            </div>
            <div class="zr-layout-content">
                Content
            </div>
        </div>
        <div class="zr-layout-footer grey-bgc-3">
            Footer
        </div>
    </div>
```

<br/>

### 基础布局左、右（上、中、下）模式

代码结构如下：

```html
     <div class="zr-layout zr-layout-has-side">
        <div class="zr-layout-side">Side</div>
        <div class="zr-layout">
            <div class="zr-layout-header">Header</div>
            <div class="zr-layout-content">Content</div>
            <div class="zr-layout-footer">Footer</div>
        </div>
    </div>
```
<br/>

[点击了解更多Demo和案例](http://gtp-zr.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=f709304e0f6d4333ad6ccd11f87b7918&directoryName=Layout%20%E5%B8%83%E5%B1%80)

[留言和讨论](https://github.com/guguaihaha/zr-source/issues/5)