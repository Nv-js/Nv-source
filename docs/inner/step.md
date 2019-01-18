# Step 步骤条

引导用户按照流程完成任务的分步导航条

---

### 使用方法

+ 也是很简便，直接copy以下代码片段到页面即可。

+ 显示当前页面所处的状态，提示用户需要完成几步，每一步要操作什么等。

+ 可根据实际应用场景设定步骤，不得少于2个步骤，每完成一个阶段，该阶段的状态高亮，表示此阶段已经完成。

<br/>

### 基础类型

最基础简单的步骤条,默认状态加 `zr-step-item` 即为初始状态，表示全未完成， `zr-step-finish` 表示已经完成， `zr-step-progress` 表示正在进行

代码结构如下：

```html
    <div class="zr-step">
        <div class="zr-step-item zr-step-finish">
            <div class="zr-step-icon">
                <span>1</span>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">Finished</div>
                <div class="zr-step-description">This is a description.</div>
            </div>
        </div>
        <div class="zr-step-item zr-step-progress">
            <div class="zr-step-icon">
                <span>2</span>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">In Progress</div>
                <div class="zr-step-description">This is a description.</div>
            </div>
        </div>
        <div class="zr-step-item">
            <div class="zr-step-icon">
                <span>3</span>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">Waiting</div>
                <div class="zr-step-description">This is a description.</div>
            </div>
        </div>
    </div>
    <!-- 按钮组合区域 -->
    <p class="c-demo-btn">
        <button type="button" class="zr-btn zr-btn-default">Previous</button>
        <button type="button" class="zr-btn zr-btn-primary">Next</button>
    </p>
```

<br/>

### 纵向排版样式

基于基础样式之上，在 `zr-step` 后面加 `zr-step-vertical` 属性即可纵向显示步骤条

代码结构如下：

```html
     <div class="zr-step zr-step-vertical">
        <div class="zr-step-item zr-step-finish">
            <div class="zr-step-icon">
                <span>1</span>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">Finished</div>
                <div class="zr-step-description">This is a description.</div>
            </div>
        </div>
        <div class="zr-step-item zr-step-progress">
            <div class="zr-step-icon">
                <span>2</span>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">In Progress</div>
                <div class="zr-step-description">This is a description.</div>
            </div>
        </div>
        <div class="zr-step-item">
            <div class="zr-step-icon">
                <span>3</span>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">Waiting</div>
                <div class="zr-step-description">This is a description.</div>
            </div>
        </div>
    </div>
    <!-- 组合按钮 -->
    <p class="c-demo-btn">
        <button type="button" class="zr-btn zr-btn-primary">Next</button>
    </p>
```
<br/>

### Mini 样式

基于基础样式之上，在  `zr-step` 后面加 `zr-step-small` 属性即可展示Mini版样式

代码结构如下：

```html
    <div class="zr-step zr-step-small">
        <div class="zr-step-item zr-step-finish">
            <div class="zr-step-icon">
                <span>1</span>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">Finished</div>
            </div>
        </div>
        <div class="zr-step-item zr-step-finish zr-step-progress">
            <div class="zr-step-icon">
                <span>2</span>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">In Progress</div>
            </div>
        </div>
        <div class="zr-step-item">
            <div class="zr-step-icon">
                <span>3</span>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">Waiting</div>
            </div>
        </div>
    </div>
    <!-- 组合按钮 -->
    <p class="c-demo-btn">
        <button type="button" class="zr-btn zr-btn-primary">Next</button>
    </p>
```
<br/>

### 带图标的步骤条

基于基础样式之上，在 zr-step 后面加 `zr-step-icons` 属性即可展示图标版本的步骤条， icon 使用方法详情见Icon 图标

代码结构如下：

```html
     <div class="zr-step zr-step-icons">
        <div class="zr-step-item zr-step-finish">
            <div class="zr-step-icon">
                <i class="zricon-edit"></i>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">Information</div>
            </div>
        </div>
        <div class="zr-step-item zr-step-progress">
            <div class="zr-step-icon">
                <i class="zricon-user-empty"></i>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">Verification</div>
            </div>
        </div>
        <div class="zr-step-item">
            <div class="zr-step-icon">
                <i class="zricon-down-circle-empty"></i>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">Done</div>
            </div>
        </div>
    </div>
    <!-- 组合按钮 -->
    <p class="c-demo-btn">
        <button type="button" class="zr-btn zr-btn-primary">Next</button>
    </p>
```

### 步骤运行错误

基于基础样式之上，在 `zr-step` 后面加 `zr-step-error` 属性即可，在 `zr-step-error` 下， `zr-step-finish` 表示已完成， `zr-step-progress` 表示出错状态

```html
     <div class="zr-step zr-step-error">
        <div class="zr-step-item zr-step-finish">
            <div class="zr-step-icon">
                <i class="zricon-down-circle-empty"></i>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">Finished</div>
                <div class="zr-step-description">This is a description.</div>
            </div>
        </div>
        <div class="zr-step-item zr-step-progress">
            <div class="zr-step-icon">
                <i class="zricon-close-circle-empty"></i>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">In Progress</div>
                <div class="zr-step-description">This is a description.</div>
            </div>
        </div>
        <div class="zr-step-item">
            <div class="zr-step-icon">
                <span>3</span>
            </div>
            <div class="zr-step-content">
                <div class="zr-step-title">Waiting</div>
                <div class="zr-step-description">This is a description.</div>
            </div>
        </div>
    </div>
```

[Demo展示](http://gtp-zr.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=a200ec6480234568bcce5253e72bf7b1&directoryName=Step%20%E6%AD%A5%E9%AA%A4%E6%9D%A1)

[留言和讨论](https://github.com/guguaihaha/zr-source/issues/9)

    