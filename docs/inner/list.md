# List 列表

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

---

### 使用方法

+ 建议到Demo中copy对应的代码片段[查看Demo](http://gtp-nv.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=3f5f4b94702d47aa907f67758e73c9ae&directoryName=List%20%E5%88%97%E8%A1%A8)

<br/>

### 不同尺寸

最简单的列表有大、中(默认)、小三种尺寸，nv-list 为中尺寸(默认)的样式，创建不同尺寸的列表，只需添加 `nv-list-sm` (小)、`nv-list-lg` (大)；
列表分为三部分：表头 `nv-list-header` 、表内容区 `nv-list-content` 、表尾 `nv-list-footer` ；其中表内容区每一行 `nv-list-item` 。

+ 默认尺寸（中号）

代码结构如下：

```html
    <div class="nv-list nv-list-border">
        <div class="nv-list-header">Header</div>
        <div class="nv-list-content">
            <div class="nv-list-item">Do one thing at a time, and do well</div>
        </div>
        <div class="nv-list-footer">Footer</div>
    </div>
```

<br/>

+ 大号尺寸

```html
    <div class="nv-list nv-list-border nv-list-lg">
        <div class="nv-list-header">Header</div>
        <div class="nv-list-content">
            <div class="nv-list-item">Do one thing at a time, and do well</div>
        </div>
        <div class="nv-list-footer">Footer</div>
    </div>
```

<br/>

+ 小号尺寸

```html
    <div class="nv-list nv-list-border nv-list-sm">
        <div class="nv-list-header">Header</div>
        <div class="nv-list-content">
            <div class="nv-list-item">Do one thing at a time, and do well</div>
        </div>
        <div class="nv-list-footer">Footer</div>
    </div>
```

<br/>

### 基本样式

创建最基本的列表样式，只需添加 `nv-list-base` 样式，如需去掉列表的外边框，则删除 `nv-list-border`

```html
    <div class="nv-list nv-list-base">
        <div class="nv-list-content">
            <div class="nv-list-item">
                <div class="nv-list-item-meta">
                    <span class="nv-list-avatar"><img src="https://storage.jd.com/nvstatic/images/demo1.jpg"></span>
                    <div class="nv-list-item-meta-content">
                        <h4 class="nv-list-item-title">Tittle A  User Name</h4>
                        <p class="nv-list-item-txt">By reading we enrich the mind; by conversation we polish it.  Coment Detail</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
```
<br/>

### 带有操作的列表

创建带有操作的列表和基础列表类同，只是行间多添加了一个操作列标签，示例中为 `<ul>` 标签，并给标签添加 `nv-list-item-action` 

代码结构如下：

```html
    <div class="nv-list nv-list-base">
        <div class="nv-list-content">
            <div class="nv-list-item">
                <div class="nv-list-item-meta">
                    <span class="nv-list-avatar"><img src="https://storage.jd.com/nvstatic/images/demo1.jpg"></span>
                    <div class="nv-list-item-meta-content">
                        <h4 class="nv-list-item-title">Tittle A  User Name</h4>
                        <p class="nv-list-item-txt">By reading we enrich the mind; by conversation we polish it.  Coment Detail</p>
                    </div>
                </div>
                <ul class="nv-list-item-action">
                    <li><a href="#">Reply</a></li>
                    <li><a href="#">More</a></li>
                </ul>
            </div>
        </div>
    </div>
```
<br/>

### 可加载的列表

创建可加载更多的列表，只需添加 nv-list-loading 样式；同时，需注意添加底部加载按钮

代码结构如下：

```html
    <div class="nv-list nv-list-base nv-list-loading">
        <div class="nv-list-content">
            <div class="nv-list-item">
                <div class="nv-list-item-meta">
                    <span class="nv-list-avatar"><img src="https://storage.jd.com/nvstatic/images/demo1.jpg"></span>
                    <div class="nv-list-item-meta-content">
                        <h4 class="nv-list-item-title">Tittle A  User Name</h4>
                        <p class="nv-list-item-txt">By reading we enrich the mind; by conversation we polish it.  Coment Detail</p>
                    </div>
                </div>
                <ul class="nv-list-item-action">
                    <li><a href="#">Reply</a></li>
                    <li><a href="#">More</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="nv-list-btn">
        <button type="button" class="nv-btn nv-btn-default">Loading More</button>
    </div>
```

### 多栏式列表

创建多栏式列表，只需添加 `nv-list-columns` 样式，行内容可为1栏，2栏，3栏……，本示例为3栏效果，具体分栏可参考 [栅格grid布局](http://gtp-nv.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=211290909d2f484ab834218f3cc7830f&directoryName=Grid%20%E6%A0%85%E6%A0%BC) ；

代码结构如下：

```html
     <div class="nv-list nv-list-border nv-list-columns">
        <div class="nv-list-content">
            <div class="nv-list-item nv-row">
                <div class="nv-col-8">
                    <h4 class="nv-list-item-title">Name</h4>
                    <p class="nv-list-item-txt">Andy Wang</p>
                </div>
                <div class="nv-col-8">
                    <h4 class="nv-list-item-title">Contact</h4>
                    <p class="nv-list-item-txt">18810779876</p>
                </div>
                <div class="nv-col-8">
                    <h4 class="nv-list-item-title">Time</h4>
                    <p class="nv-list-item-txt">2018-02-02 00:00:00</p>
                </div>
            </div>
        </div>
    </div>
```

[Demo展示](http://gtp-nv.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=3f5f4b94702d47aa907f67758e73c9ae&directoryName=List%20%E5%88%97%E8%A1%A8)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/18)

    