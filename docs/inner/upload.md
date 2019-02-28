# Upload 上传

可以通过点击选择、拖拽、手动上传文件

---

### 使用方法

+ 上传文件的大小不易过大

<br/>

### 基础样式

最基础的上传文件的方式 `nv-upload` ，点击按钮出现选择文件选择框

代码结构如下：

```html
   <input type="file" title="Click to upload" class="nv-upload">
```

<br/>

### 文字说明样式

对上传文件的大小、格式等有相应的文字说明，可添加样式 `nv-upload-explain`，会显示对应alt的内容


代码结构如下：

```html
    <!--小尺寸 需额外增加样式“nv-select-sm”-->
     <input type="file" title="Click to upload" alt="The file size is no more than 500kb and the file format is JPG/PNG" class="nv-upload nv-upload-explain">
```
<br/>

### 已上传文件列表

已上传列表样式为 `nv-upload-list` ，有默认状态、上传失败 `nv-upload-error`、上传中 `nv-upload-doing` 三种状态。

代码结构如下：

```html
    <input type="file" title="Click to upload" class="nv-upload">
    <ul class="nv-upload-list">
        <li>
            <i class="nvicon-accessory-empty"></i>
            <span>Accessory1.png</span>
            <i class="delete nvicon-close"></i>
        </li>
        <li class="nv-upload-error">
            <i class="nvicon-accessory-empty"></i>
            <span>Accessory2.png</span>
            <i class="delete nvicon-close"></i>
        </li>
        <li class="nv-upload-doing">
            <i class="nvicon-accessory-empty"></i>
            <span>Accessory3.png</span>
            <em>10%</em>
            <div class="nv-upload-progress">
                <span style="width: 40%"></span>
            </div>
        </li>
    </ul>
```
<br/>

### 头像上传

点击上传用户头像，并且要能够限制用户上传的图片格式和大小，需添加样式 `nv-upload-avatar`

代码结构如下：

```html
  <input type="file" class="nv-upload nv-upload-avatar" />
```

### 多图片上传

用户可以上传多张图片，需要限制上传数量，到达上传上限，上传按钮消失，本示例中最多上传3张图片。多图片上传样式 `nv-upload-picture` ，图片列表样式 `nv-upload-list-picture`

代码结构如下：

```html
    <ul class="nv-upload-list nv-upload-list-picture">
        <li>
            <img src="https://storage.jd.com/nvstatic/images/demo1.jpg">
            <div class="nv-upload-list-mask">
                <i class="nvicon-visible-empty view"></i>
                <i class="nvicon-trash-empty delete"></i>
            </div>
        </li>
    </ul>
    <input type="file" class="nv-upload nv-upload-picture">
```

### 图片列表

已上传图片列表样式 nv-upload-list-photo ，有两种排列方式：默认 、垂直 `nv-upload-list-vertical`

代码结构如下：

```html
    <!--默认排列方式-->
    <input type="file" title="Click to upload" class="nv-upload nv-upload-photo">
    <ul class="nv-upload-list nv-upload-list-photo">
        <li>
            <img src="https://storage.jd.com/nvstatic/images/demo1.jpg">
            <div title="photo1.jpg">photo1.jpg</div>
            <i class="nvicon-close delete"></i>
        </li>
        <li>
            <img src="https://storage.jd.com/nvstatic/images/demo1.jpg">
            <div title="photo1.jpg">photo1.jpg</div>
            <i class="nvicon-close delete"></i>
        </li>
    </ul>
    <!--垂直排列方式-->
    <input type="file" title="Click to upload" class="nv-upload nv-upload-photo">
    <ul class="nv-upload-list nv-upload-list-photo nv-upload-list-vertical">
        <li>
            <img src="https://storage.jd.com/nvstatic/images/demo1.jpg">
            <div title="photo1.jpg">photo1.jpg</div>
            <i class="nvicon-close delete"></i>
        </li>
        <li>
            <img src="https://storage.jd.com/nvstatic/images/demo1.jpg">
            <div title="photo1.jpg">photo1.jpg</div>
            <i class="nvicon-close delete"></i>
        </li>
    </ul>
```

### 拖拽上传

把文件拖拽至指定区域即可完成上传，同样支持点击上传，拖拽上传需添加样式 nv-upload-drag

代码结构如下：

```html
    <input type="file" title="Click or drag file to this area to upload" alt="The file size is no more than 500kb and the file format is JPG/PNG" class="nv-upload nv-upload-drag">
    <ul class="nv-upload-list">
        <li>
            <i class="nvicon-accessory-empty"></i>
            <span>Accessory1.png</span>
            <i class="delete nvicon-close"></i>
        </li>
    </ul>
```

### 手动上传

手动上传需添加样式 `nv-upload-manual` ，默认状态下，Upload按钮为灰色不可点击状态，当选择文件后，Upload按钮成激活状态，Upload按钮触发上传文件操作，手动上传文件。

代码结构如下：

```html
    <!-- 未选择文件状态 -->
    <input type="file" accept="" class="nv-upload nv-upload-manual" />
    <div class="nv-upload-btn">
        <button class="nv-btn nv-btn-primary nv-btn-disable">Upload</button>
    </div>
    <!-- 已选择文件状态 -->
    <input type="file" accept="" class="nv-upload nv-upload-manual" />
    <ul class="nv-upload-list">
        <li>
            <i class="nvicon-accessory-empty"></i><span>Accessory1.png</span><i class="delete nvicon-close"></i>
        </li>
    </ul>
    <div class="nv-upload-btn">
        <button class="nv-btn nv-btn-primary">Upload</button>
    </div>
```


### API

| 属性名称  | 类型（是否必要）   |  描述  |  默认值 |
| --------    | :----- | :----:  | :----: |
| title  | String   | 上传按钮的名称 | Click to Upload（基础上传）、Select File（手动上传）|
| alt  | String   | 上传要求描述文字 | The file size is no more than 500kb and the file format is JPG/PNG |





[Demo展示](http://nv.zhangjinglin.cn/api?type=upload)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/14)

    