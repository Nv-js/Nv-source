# Back top 返回顶部

返回页面顶部的操作

---

### 使用方法

+ 这个很简单，加上对应的top样式，同时可以自定义top样式

<br/>

### 基本样式

尺寸为40px*40px，页面滚动400px时出现，距右边下边距离40px

```html
    <div class="nv-top-wrap" data-position="auto 20px 100px auto">
        <div class="nv-top">
            <button class="nv-btn nv-btn-primary nv-btn-lg"><i class="nvicon-up"></i></button>
        </div>
    </div>
```

<br/>

### 自定义样式 

可以自定义回到顶部按钮的样式

```html
    <div class="nv-top-wrap" data-position="auto 20px 100px auto">
        <div class="nv-top nv-top-custom">
            <button class="nv-btn nv-btn-primary nv-btn-lg"><i class="nvicon-up"></i></button>
        </div>
    </div>
```
<br/>

### 节点属性

如果还想自定义位置，有个很好的配置 `data-position`

+ data-position

  - 描述：控制返回顶部结构的偏移位置，对应的位置信息如：data-position = "auto 20px 100px auto" => 位置：上、右、下、左

  - 类型：必填（String）






[Demo展示](http://gtp-nv.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=31be0fd339b241d08956341d7ef7efc3&directoryName=Top%20%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8)

[留言和讨论](https://github.com/Nv-js/nv-source/issues/25)

    