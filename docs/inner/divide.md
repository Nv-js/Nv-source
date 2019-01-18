# Divide 分割线

用来分割不同内容

---

### 使用方法

+ 找到对应的分割线代码结构然后copy到应用项目中

<br/>

### 基本样式

水平分割线最基本的样式：实线分割线，只需要添加样式 `zr-divide-hr`；虚线分割线，只需要添加样式 `zr-divide-dashed`；带标题的分割线，只需要添加样式 `zr-divide-fieldset`

```html
     <div class="zr-divide">
        <!--实线分割线-->
        <div class="zr-divide-horizontal"></div>
        <!--虚线分割线-->
        <div class="zr-divide-horizontal zr-divide-dashed"></div>
        <!--带标题的分割线-->
        <div class="zr-divide-fieldset"><span class="zr-divide-legend">TEXT</span></div>
    </div>
```

<br/>

### 链接样式

垂直分割线

```html
    <div class="zr-divide">
        <a class="zr-divide-unlink"><cite>Text</cite></a>
        <span class="zr-divide-separator">|</span>
        <a href="">Link One</a>
        <span class="zr-divide-separator">|</span>
        <a href="">Link Two</a>
    </div>
```
<br/>

[Demo展示](http://gtp-zr.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=96ce09c82c0c4a859580db435d93a5b6&directoryName=Divide%20%E5%88%86%E5%89%B2%E7%BA%BF)

[留言和讨论](https://github.com/guguaihaha/zr-source/issues/21)

    