# Tag 标签

用于对内容的分类标记

---


### 特点

+ 支持标签的增加及和删除

+ 支持标签的选择


### 基础样式

最基本的标签样式，可以通过添加 `closable` 变为可关闭标签。同时要调用 `tag.init` 方法初始化即可。页面中所有tag标签自己需要调用一次 `tag.init` 即可。


```html
   <span class="nv-tag-normal">普通标签</span>
   <span class="nv-tag-closable">
       可删除标签 <i class="nvicon-close"></i>
   </span>
   <!--javascript代码-->
    Nv.use("tag",function(nv,tag){
        //如果只是nv-tag-normal 普通标签，无需加载tag 组件。tag 组件用于可删除和可编辑的标签。
        tag.init();
    })
```

<br/>

### 动态编辑标签

支持显示图片、字符和icon，其中字符和icon可以更换背景色


```html
    <span class="nv-tag">
        <span class="nv-tag-addable">
            <i class="nvicon-add"></i> 可添加标签
        </span>
    <input type="text" class="nv-tag-input"/>
    </span>
    <!--javascript代码-->
    Nv.use("tag",function(nv,tag){
        //如果只是nv-tag-normal 普通标签，无需加载tag 组件。tag 组件用于可删除和可编辑的标签。
        tag.init();
    })
```

<br/>

### 五颜六色标签

支持显示图片、字符和icon，其中字符和icon可以更换背景色


```html
    <!--HTML代码-->
    <span class="nv-tag-normal nv-tag-red">Tag red</span>
    <span class="nv-tag-normal nv-tag-orange">Tag orange</span>
    <span class="nv-tag-normal nv-tag-yellow">Tag yellow</span>
    <span class="nv-tag-normal nv-tag-green">Tag green</span>
    <span class="nv-tag-normal  nv-tag-cyan">Tag cyan</span>
    <span class="nv-tag-normal nv-tag-geekblue">Tag geekblue</span>
    <span class="nv-tag-normal  nv-tag-blue">Tag blue</span>
    <span class="nv-tag-normal nv-tag-purple">Tag purple</span>
    <!--javascript代码-->
    Nv.ready(function () {
        Nv.use("tag", function (nv,tag) {
            tag.init();
        })
    })
```

<br/>





[Demo展示](http://www.nv-js.com/api?type=tag)

[留言和讨论](https://github.com/Nv-js/nv-source/issues/33)

    