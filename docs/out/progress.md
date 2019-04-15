# Progress 进度条

在需要很长时间才能完成的操作中为用户显示该操作的当前进度，让用户直观的看到当前的进度和状态。

---

### 使用方法

显示处理任务的进度，完成度，剩余未完成任务量的大小，和可能需要处理时间，一般超过2秒时用进度条。调用方法： `progress.init(config)`，具体配置信息可见下面config配置项。
在进度条节点可通过添加`data-percent`属性设置初始进度，如果`config`同时设置了`percent`属性，`data-percent`将会被覆盖


<br/>

### 基础样式

最基础的进度条样式，线形进度条`nv-progress-line` 。进度条有大（默认）、小 `nv-progress-line-sm` 两种尺寸，颜色有蓝色 `nv-progress-line-primary` 红色 `nv-progress-line-danger` 绿色 `nv-progress-line-success`


```html
     <!--HTML-->
     <!-- 蓝色 -->
     <div class="nv-progress nv-progress-line nv-progress-line-primary line-more" data-percent="0.3">
         <div class="nv-progress-width">
             <span class="nv-progress-current"></span>
         </div>
         <span class="nv-progress-line-status"></span>
     </div>
     <!-- 红色-->
     <div class="nv-progress nv-progress-line nv-progress-line-danger line-more" data-percent="0.3">
         <div class="nv-progress-width">
             <span class="nv-progress-current"></span>
         </div>
         <span class="nv-progress-line-status"></span>
     </div>
     <!-- 绿色 -->
     <div class="nv-progress nv-progress-line nv-progress-line-success line-more" data-percent="0.3">
         <div class="nv-progress-width">
             <span class="nv-progress-current"></span>
         </div>
         <span class="nv-progress-line-status"></span>
     </div>
     <!--Javascript-->
     Nv.use("progress", function (Nv, progress) {
         var proLineMore = progress.init({
             target: ".line-more"
         })
     });
```

<br/>

### 小尺寸进度条 

小尺寸的线形进度条


```html
   <!--HTML-->
   <!-- 小尺寸蓝色 -->
   <div class="nv-progress nv-progress-line nv-progress-line-sm nv-progress-line-primary line-more" data-percent="0.4">
       <div class="nv-progress-width">
           <span class="nv-progress-current"></span>
       </div>
       <span class="nv-progress-line-status"></span>
   </div>
   <!-- 小尺寸红色-->
   <div class="nv-progress nv-progress-line nv-progress-line-sm nv-progress-line-danger line-more">
       <div class="nv-progress-width">
           <span class="nv-progress-current"></span>
       </div>
       <span class="nv-progress-line-status"></span>
   </div>
   <!-- 小尺寸绿色 -->
   <div class="nv-progress nv-progress-line nv-progress-line-sm nv-progress-line-success line-more" data-percent="0.4">
       <div class="nv-progress-width">
           <span class="nv-progress-current"></span>
       </div>
       <span class="nv-progress-line-status"></span>
   </div>
   <!--Javascript-->
   Nv.use("progress", function (Nv, progress) {
       var proLineMore = progress.init({
           target: ".line-more"
       })
   });
```

<br/>

### 百分比内显

百分比放置于进度条内 `nv-progress-line-inset`,默认百分比显示在进度右侧，添加 `nv-progress-current-over` 类使百分比显示在已完成进度内侧


```html
    <!--HTML-->
    <!-- 百分比内显蓝色 -->
    <div class="nv-progress nv-progress-line nv-progress-line-primary nv-progress-line-inset line-more" data-percent="0.5">
        <div class="nv-progress-width">
            <span class="nv-progress-current">
                <span class="nv-progress-line-status"></span>
            </span>
        </div>
    </div>
    <!-- 百分比内显红色 -->
    <div class="nv-progress nv-progress-line nv-progress-line-danger nv-progress-line-inset nv-progress-current-over line-more"
        data-percent="0.5">
        <div class="nv-progress-width">
            <span class="nv-progress-current">
                <span class="nv-progress-line-status"></span>
            </span>
        </div>
    </div>
    <!-- 百分比内显绿色 -->
    <div class="nv-progress nv-progress-line nv-progress-line-success nv-progress-line-inset nv-progress-current-over line-more"
        data-percent="0.5">
        <div class="nv-progress-width">
            <span class="nv-progress-current">
                <span class="nv-progress-line-status"></span>
            </span>
        </div>
    </div>
    <!--Javascript-->
    Nv.use("progress", function (Nv, progress) {
        var proLineMore = progress.init({
            target: ".line-more"
        })
    });
```

<br/>


### 特殊文本显示

选择显示特定的文本而不是百分比


```html
    <!--HTML-->
    <!-- 特殊文本显示 -->
    <div class="nv-progress nv-progress-line nv-progress-line-primary nv-progress-line-inset nv-progress-current-over" id="line-content"
        data-percent="0.5">
        <div class="nv-progress-width">
            <span class="nv-progress-current">
                <span class="nv-progress-line-status"></span>
            </span>
        </div>
    </div>
    <!--Javascript-->
    Nv.use("progress", function (Nv, progress) {
        var proLineContent = progress.init({
            target: "#line-content",
            content: "50 of 100M"
        })
    });
```

<br/>

### 环形进度条

环形进度条 `nv-progress-circle` 。环形进度条有大（默认）、小 `nv-progress-circle-sm` 两种尺寸，颜色有蓝色 `nv-progress-circle-primary` 红色 `nv-progress-circle-danger` 绿色 `nv-progress-circle-success`


```html
    <!--HTML-->
    <!-- 环形进度条 蓝色 -->
    <div class="nv-progress nv-progress-circle" id="circle-one" data-percent="0.4">
        <svg width="128" height="128" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="nv-progress-circle-background" r="64" cx="64" cy="64" fill="transparent"/>
            <circle class="nv-progress-circle-bar" r="64" cx="64" cy="64" fill="transparent"
                    />
        </svg>
        <span class="nv-progress-circle-status"></span>
    </div>
    <!-- 环形进度条 红色 -->
    <div class="nv-progress-circle nv-progress-circle-danger circle-more" data-percent="0.5">
        <svg width="128" height="128" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="nv-progress-circle-background" r="64" cx="64" cy="64" fill="transparent"/>
            <circle class="nv-progress-circle-bar" r="64" cx="64" cy="64" fill="transparent"
                    />
        </svg>
        <span class="nv-progress-circle-status"></span>
    </div>
    <!-- 环形进度条 绿色-->
    <div class="nv-progress-circle nv-progress-circle-success circle-more" data-percent="0.5">
        <svg width="128" height="128" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="nv-progress-circle-background" r="64" cx="64" cy="64" fill="transparent"/>
            <circle class="nv-progress-circle-bar" r="64" cx="64" cy="64" fill="transparent"
                    />
        </svg>
        <span class="nv-progress-circle-status"></span>
    </div>
    <!--Javascript-->
    Nv.use("progress", function (Nv, progress) {
        var proCircle = progress.init({
            target: "#circle-one"
        })
        proCircle.change("0.6");

        var proCircleMore = progress.init({
            target: ".circle-more"
        });
        proCircleMore[0].change("0.3");
    });
```

<br/>

### 小尺寸环形进度条
``
小尺寸的环形进度条


```html
    <!--HTML-->
    <!-- 小尺寸环形进度条 蓝色 -->
    <div class="nv-progress nv-progress-circle nv-progress-circle-sm circle-sm-more" data-percent="0.7">
        <svg width="64" height="64" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="nv-progress-circle-background" r="32" cx="32" cy="32" fill="transparent"/>
            <circle class="nv-progress-circle-bar" r="32" cx="32" cy="32" fill="transparent"  stroke-dashoffset="0"
                    />
        </svg>
        <span class="nv-progress-circle-status"></span>
    </div>
    <!-- 小尺寸环形进度条 红色 -->
    <div class="nv-progress nv-progress-circle nv-progress-circle-sm nv-progress-circle-danger circle-sm-more" data-percent="0.6">
        <svg width="64" height="64" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="nv-progress-circle-background" r="32" cx="32" cy="32" fill="transparent"/>
            <circle class="nv-progress-circle-bar" r="32" cx="32" cy="32" fill="transparent"  stroke-dashoffset="0"
                    />
        </svg>
        <span class="nv-progress-circle-status"></span>
    </div>
    <!-- 小尺寸环形进度条 绿色 -->
    <div class="nv-progress nv-progress-circle nv-progress-circle-sm nv-progress-circle-success circle-sm-more" data-percent="0.5">
        <svg width="64" height="64" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="nv-progress-circle-background" r="32" cx="32" cy="32" fill="transparent"/>
            <circle class="nv-progress-circle-bar" r="32" cx="32" cy="32" fill="transparent"  stroke-dashoffset="0"
                    />
        </svg>
        <span class="nv-progress-circle-status"></span>
    </div>
    <!--Javascript-->
    Nv.use("progress", function (Nv, progress) {
        var proSmCircleMore = progress.init({
            target: ".circle-sm-more"
        })
    });
```

<br/>

### API

> var pro = progress.init(options)

+ `options`配置选项

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----  |
| options.target  | String（必填）  | 初始化进度条的目标元素，可使用ID选择器或类选择器</br>ID选择器初始化后返回的是一个Progress对象。</br>类选择器初始化后返回的是包含多个Progress对象的数组 |
| options.percent  | String (选填)   | 设置进度条的进度，例如：0.1，0.8（设置了此属性将会覆盖节点属性data-percent设置的值） |
| options.content  | String（必填）  | 进度条显示的内容，默认显示百分比，例如：10%，80%。可设置显示图标，例如：<i class="nvicon-ok"></i>|

> 初始化progress.init后返回的对象pro，可以调用change方法

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----  |
| pro.change  | Object config  | 修改进度条的进度和显示内容。|

> 以上入参的Object config的参数配置


 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----  |
| config.target  | String（必填）  | 修改进度条的进度，例如：0.1，0.8 |
| config.percent  | String (选填)   | 修改进度条的显示内容，默认显示百分比，例如：10%，80%。可设置显示图标，例如：<i class="nvicon-ok"></i> |


[Demo展示](http://www.nv-js.com/api?type=progress)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/35)

    