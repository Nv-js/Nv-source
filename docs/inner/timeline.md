# Timeline 时间轴

按照时间顺序垂直展示信息

---

### 使用方法

+ 找到自己喜欢的代码块，copy到项目中

<br/>

### 基础样式

最基本的时间轴，只需结构保证为外层是 `zr-timeline` 样式，每个条目是样式 `zr-timeline-item`

```html
<ul class="zr-timeline">
    <li class="zr-timeline-item">
        <i class="zr-timeline-icon"></i>
        <div class="zr-timeline-content">
            <h3>2018-01-11</h3>
            <span>
                <p>Approve and initiate a project</p>
                <p>project description</p>
            </span>
        </div>
    </li>
    <li class="zr-timeline-item">
        <i class="zr-timeline-icon"></i>
        <div class="zr-timeline-content">
            <h3>2018-01-03</h3>
            <span>
                <p>Require review</p>
            </span>
        </div>
    </li>
    <li class="zr-timeline-item">
        <i class="zr-timeline-icon"></i>
        <div class="zr-timeline-content">
            <h3>2018-01-01</h3>
            <span>
                <p>UE&amp;UI design</p>
            </span>
        </div>
    </li>
</ul>
```

<br/>

### 状态提示

绿色样式 `zr-timeline-green` 用于已完成、成功状态、红色样式 `zr-timeline-error` 表示错误、橙色样式 `zr-timeline-warning` 表示警告状态、 蓝色为默认色可表示正在进行

```html
    <ul class="zr-timeline">
        <li class="zr-timeline-item zr-timeline-green">
            <i class="zr-timeline-icon"></i>
            <div class="zr-timeline-content">
                <h3>2018-01-21</h3>
                <span>
                        <p>Approve and initiate a project</p>
                        <p>project description</p>
                    </span>
            </div>
        </li>
        <li class="zr-timeline-item zr-timeline-warning">
            <i class="zr-timeline-icon"></i>
            <div class="zr-timeline-content">
                <h3>2018-01-13</h3>
                <span>
                        <p>Require review</p>
                    </span>
            </div>
        </li>
        <li class="zr-timeline-item zr-timeline-error">
            <i class="zr-timeline-icon"></i>
            <div class="zr-timeline-content">
                <h3>2018-01-11</h3>
                <span>
                        <p>UE&amp;UI design</p>
                    </span>
            </div>
        </li>
        <li class="zr-timeline-item">
            <i class="zr-timeline-icon"></i>
            <div class="zr-timeline-content">
                <h3>2018-01-01</h3>
                <span>
                        <p>Front-end development</p>
                    </span>
            </div>
        </li>
    </ul>
```
<br/>

### 自定义时间轴

可以将时间节点设置为图标，将图标样式 zr-timeline-icon 改成需求图标即可，详情[图标icon](http://gtp-zr.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=8fd3459c5ba04cf681494941b2db31e2&directoryName=Icon%20%E5%9B%BE%E6%A0%87)

```html
    <ul class="zr-timeline">
        <li class="zr-timeline-item zr-timeline-green">
            <i class="zricon-ok-circle"></i>
            <div class="zr-timeline-content">
                <h3>2018-01-21</h3>
                <span>
            <p>Approve and initiate a project</p>
            <p>project description</p>
        </span>
            </div>
        </li>
        <li class="zr-timeline-item zr-timeline-error">
            <i class="zricon-close-circle"></i>
            <div class="zr-timeline-content">
                <h3>2018-01-13</h3>
                <span>
            <p>Require review</p>
        </span>
            </div>
        </li>
        <li class="zr-timeline-item zr-timeline-warning">
            <i class="zr-timeline-icon"></i>
            <div class="zr-timeline-content">
                <h3>2018-01-11</h3>
                <span>
            <p>UE&amp;UI design</p>
        </span>
            </div>
        </li>
        <li class="zr-timeline-item">
            <i class="zr-timeline-icon"></i>
            <div class="zr-timeline-content">
                <h3>2018-01-01</h3>
                <span>
            <p>Front-end development</p>
        </span>
            </div>
        </li>
    </ul>
```
<br/>

### 幽灵节点

可以将最后一个节点设置为幽灵节点，表示任务正在进行,将最后图标更改为[图标icon](http://gtp-zr.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=8fd3459c5ba04cf681494941b2db31e2&directoryName=Icon%20%E5%9B%BE%E6%A0%87)的动态图标即可


```html
    <ul class="zr-timeline">
        <li class="zr-timeline-item zr-timeline-green">
            <i class="zricon-ok-circle"></i>
            <div class="zr-timeline-content">
                <h3>2018-01-21</h3>
                <span>
            <p>Approve and initiate a project</p>
            <p>project description</p>
        </span>
            </div>
        </li>
        <li class="zr-timeline-item zr-timeline-error">
            <i class="zricon-close-circle"></i>
            <div class="zr-timeline-content">
                <h3>2018-01-13</h3>
                <span>
            <p>Require review</p>
        </span>
            </div>
        </li>
        <li class="zr-timeline-item zr-timeline-warning">
            <i class="zr-timeline-icon"></i>
            <div class="zr-timeline-content">
                <h3>2018-01-11</h3>
                <span>
            <p>UE&amp;UI design</p>
        </span>
            </div>
        </li>
        <li class="zr-timeline-item">
            <i class="zricon-spin6 animate-spin"></i>
            <div class="zr-timeline-content">
                <h3>2018-01-01</h3>
                <span>
            <p>Front-end development</p>
        </span>
            </div>
        </li>
    </ul>
```

[Demo展示](http://gtp-zr.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=1608e3f56a864772b61d62ff32a89afc&directoryName=Timeline%20%E6%97%B6%E9%97%B4%E8%BD%B4)

[留言和讨论](https://github.com/guguaihaha/zr-source/issues/17)

    