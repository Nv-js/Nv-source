
# Grid 栅格

栅格系统是参考了Bootstrap，但是采用的是24栅格方式，灵活性更强。

---

### 使用方法

栅格使用时候必须建立在行(row)与列(col)基础上，这样就能正常使用栅格系统

+ 栅格通过row建立一组布局

+ 内容放置在col内，并且其父层就是row，要养成良好的书写习惯，否则容易产生异常布局

+ 栅格数值按照1—24，一行数量总和小于等于24（当然算上offset的距离），超出则另起一行

<br/>

### 设计思路

经过实践，Zr重新设计栅格，在原来的12个栅格拓展到24个栅格，更能适应更多应用场景。建议横向排列的栅格单位最多4个，最少一个。

+ 一行1列栅格布局代码

```html
    <div class="zr-row">
        <div class="zr-col-24">zr-col-24（100%)</div>
    </div>
```
<br/>

+ 一行2列栅格布局代码

```html
    <div class="zr-row">
        <div class="zr-col-12">zr-col-12 (50%)</div>
        <div class="zr-col-12">zr-col-12 (50%)</div>
    </div>
```
<br/>

+ 另外一种一行2列的布局

```html
    <div class="zr-row">
        <div class="zr-col-16">zr-col-16 (66.66%)</div>
        <div class="zr-col-8">zr-col-8 (33.33%)</div>
    </div>
```
<br/>

+ 一行3列栅格布局代码

```html
    <div class="zr-row row">
        <div class="zr-col-8">zr-col-8 (33.33%)</div>
        <div class="zr-col-8">zr-col-8 (33.33%)</div>
        <div class="zr-col-8">zr-col-8 (33.33%)</div>
    </div>
```
<br/>

+ 一行4列栅格布局代码（建议布局最多一行4列）

```html
    <div class="zr-row">
        <div class="zr-col-6">zr-col-6 (25%)</div>
        <div class="zr-col-6">zr-col-6 (25%)</div>
        <div class="zr-col-6">zr-col-6 (25%)</div>
        <div class="zr-col-6">zr-col-6 (25%)</div>
    </div>
```
<br/>

### 基础栅格

使用单一的一组row与col栅格，列（col）必须在行中（row）

代码结构如下：

```html
    <div class="zr-row">
        <div class="zr-col-12">zr-col-12</div>
        <div class="zr-col-12">zr-col-12</div>
    </div>
    <div class="zr-row">
        <div class="zr-col-6">zr-col-6</div>
        <div class="zr-col-6">zr-col-6</div>
        <div class="zr-col-6">zr-col-6</div>
        <div class="zr-col-6">zr-col-6</div>
    </div>
    <div class="zr-row">
        <div class="zr-col-8">zr-col-8</div>
        <div class="zr-col-8">zr-col-8</div>
        <div class="zr-col-8">zr-col-8</div>
    </div>
```
<br/>

### 间隔布局

间隔布局需要在在 `zr-row` 的样式上添加 `zr-row-space`

代码结构如下：

```html
    <div class="zr-row zr-row-space">
        <div class="zr-col-6">zr-col-6</div>
        <div class="zr-col-6">zr-col-6</div>
        <div class="zr-col-6">zr-col-6</div>
        <div class="zr-col-6">zr-col-6</div>
    </div>
```
<br/>

### 栅格偏移

栅格中需要间隔布局，`zr-col` 的样式上添加 `zr-col-offset-1` 至 `zr-col-offset-24`，当然相加大于24会折行

代码结构如下：

```html
    <div class="zr-row zr-row-space">
        <div class="zr-col-6 zr-col-offset-3">zr-col-offset-3</div>
        <div class="zr-col-6 zr-col-offset-6">zr-col-offset-6</div>
    </div>
```
<br/>

### Flex布局

其实用flex布局就是直接样式 `zr-row` 替换掉为 `zr-row-flex` 即可，但Flex布局建议在IE10+浏览器上使用。简单的代码能实现CSS2较为复杂写下的功能特效

代码结构如下：

```html
    <div class="zr-row-flex zr-row-space">
        <div class="zr-col-6 zr-col-offset-3">zr-col-offset-3</div>
        <div class="zr-col-6 zr-col-offset-6">zr-col-offset-6</div>
    </div>
```
<br/>


### Flex 横向位置布局

可以在zr-row-flex上添加 `zr-row-flex-start` 整行居左、`zr-row-flex-center` 整行居中、`zr-row-flex-end` 整行居右、`zr-row-flex-between` 整行两边对齐、`zr-row-flex-around` 整行左右均等对齐

代码结构如下：

```html
    <p>居左</p>
    <div class="zr-row-flex zr-row-flex-start">
        <div class="zr-col-4">zr-col-4</div>
        <div class="zr-col-4">zr-col-4</div>
        <div class="zr-col-4">zr-col-4</div>
        <div class="zr-col-4">zr-col-4</div>
    </div>
    <p>居中</p>
    <div class="zr-row-flex zr-row-flex-center">
        <div class="zr-col-4 pd">zr-col-4</div>
        <div class="zr-col-4 pd">zr-col-4</div>
        <div class="zr-col-4 pd">zr-col-4</div>
        <div class="zr-col-4 pd">zr-col-4</div>
    </div>
    <p>居右</p>
    <div class="zr-row-flex zr-row-flex-end row h80">
        <div class="zr-col-4 pd">zr-col-4</div>
        <div class="zr-col-4 pd">zr-col-4</div>
        <div class="zr-col-4 pd">zr-col-4</div>
        <div class="zr-col-4 pd">zr-col-4</div>
    </div>
    <p>两边对齐</p>
    <div class="zr-row-flex zr-row-flex-between row h80">
        <div class="zr-col-4 pd">zr-col-4</div>
        <div class="zr-col-4 pd">zr-col-4</div>
        <div class="zr-col-4 pd">zr-col-4</div>
        <div class="zr-col-4 pd">zr-col-4</div>
    </div>
    <p>左右均等对齐</p>
    <div class="zr-row-flex zr-row-flex-around row h80">
        <div class="zr-col-4 pd">zr-col-4</div>
        <div class="zr-col-4 pd">zr-col-4</div>
        <div class="zr-col-4 pd">zr-col-4</div>
        <div class="zr-col-4 pd">zr-col-4</div>
    </div>

```

### Flex对齐

垂直布局同横向布局，在 `zr-row-flex` 基础上增加额外样式 `zr-row-flex-top` 垂直顶部、`zr-row-flex-middle` 垂直居中、`zr-row-flex-end` 垂直底部

代码结构如下：

```html
    <p>垂直顶部</p>
    <div class="zr-row-flex zr-row-flex-around zr-row-flex-top">
        <div class="zr-col-4">zr-col-4</div>
        <div class="zr-col-4">zr-col-4</div>
        <div class="zr-col-4">zr-col-4</div>
        <div class="zr-col-4">zr-col-4</div>
    </div>
    <p>垂直居中</p>
    <div class="zr-row-flex zr-row-flex-around zr-row-flex-middle">
        <div class="zr-col-4">zr-col-4</div>
        <div class="zr-col-4">zr-col-4</div>
        <div class="zr-col-4">zr-col-4</div>
        <div class="zr-col-4">zr-col-4</div>
    </div>
    <p>垂直底部</p>
    <div class="zr-row-flex zr-row-flex-around zr-row-flex-bottom">
        <div class="zr-col-4">zr-col-4</div>
        <div class="zr-col-4">zr-col-4</div>
        <div class="zr-col-4">zr-col-4</div>
        <div class="zr-col-4">zr-col-4</div>
    </div>
```
<br/>

### Flex单元格垂直位置

垂直布局可以单独控制一个单元格位置，优势不言直表。在 `zr-row-flex` 中的 `zr-col` 上面添加 `zr-col-flex-top` 列居上 、 `zr-col-flex-middle` 列居中 、`zr-col-flex-bottom` 列局底、`zr-col-flex-stretch` 列垂直占满

代码结构如下：

```html
    <p>居上 (zr-col-flex-top)</p>
    <div class="zr-row-flex zr-row-flex-around">
        <div class="zr-col-4 zr-col-flex-top">zr-col-4</div>
        <div class="zr-col-4 pd zr-col-flex-middle">zr-col-4</div>
        <div class="zr-col-4 zr-col-flex-top">zr-col-4</div>
        <div class="zr-col-4 pd zr-col-flex-middle">zr-col-4</div>
    </div>
    <p>居中 (zr-col-flex-middle)</p>
    <div class="zr-row-flex zr-row-flex-around">
        <div class="zr-col-4 zr-col-flex-middle">zr-col-4</div>
        <div class="zr-col-4 zr-col-flex-middle">zr-col-4</div>
        <div class="zr-col-4 zr-col-flex-middle">zr-col-4</div>
        <div class="zr-col-4 zr-col-flex-middle">zr-col-4</div>
    </div>
    <p>底部 (zr-col-flex-bottom)</p>
    <div class="zr-row-flex zr-row-flex-around">
        <div class="zr-col-4 zr-col-flex-bottom">zr-col-4</div>
        <div class="zr-col-4 zr-col-flex-bottom">zr-col-4</div>
        <div class="zr-col-4 zr-col-flex-middle">zr-col-4</div>
        <div class="zr-col-4 zr-col-flex-middle">zr-col-4</div>
    </div>
    <p>垂直占满 (zr-col-flex-stretch)</p>
    <div class="zr-row-flex zr-row-flex-around">
        <div class="zr-col-4 zr-col-flex-stretch">zr-col-4</div>
        <div class="zr-col-4 zr-col-flex-stretch">zr-col-4</div>
        <div class="zr-col-4 zr-col-flex-middle">zr-col-4</div>
        <div class="zr-col-4 zr-col-flex-middle">zr-col-4</div>
    </div>
```

<br/>

### Flex排序

flex排序是根据1—24序号顺序进行排序，在 `zr-row-flex` 中的 `zr-col` 上面添加 `zr-col-flex-order-1` 至  `zr-col-flex-order-24`

代码结构如下：

```html
    <p>排序前</p>
    <div class="zr-row-flex zr-row-flex-around zr-row-flex-top">
        <div class="zr-col-4">元素第1个</div>
        <div class="zr-col-4">元素第2个</div>
        <div class="zr-col-4">元素第3个</div>
        <div class="zr-col-4">元素第4个</div>
    </div>
    <p>排序后</p>
    <div class="zr-row-flex zr-row-flex-around zr-row-flex-top">
        <div class="zr-col-4 pd zr-col-flex-order-4">元素第1个</div>
        <div class="zr-col-4 pd zr-col-flex-order-1">元素第2个</div>
        <div class="zr-col-4 pd zr-col-flex-order-3">元素第3个</div>
        <div class="zr-col-4 pd zr-col-flex-order-2">元素第4个</div>
    </div>
```

<br/>

### 响应式布局

参照了BootStrap的响应式设计，Zr预设了五个尺寸

手机尺寸：`zr-col-xs-1` 至 `zr-col-xs-24`

平板尺寸：`zr-col-sm-?` 至 `zr-col-sm-24`

桌面显示器尺寸：`zr-col-md-?` 至 `zr-col-md-24`

大桌面显示器尺寸：`zr-col-lg-?` 至 `zr-col-lg-24`

大屏慕显示器尺寸：`zr-col-xl-?` 至 `zr-col-xl-24`

代码结构如下：

```html
    <div class="zr-row-flex row">
        <div class="zr-col-xs-24 zr-col-sm-12 zr-col-md-6 zr-col-lg-8">1</div>
        <div class="zr-col-xs-24 zr-col-sm-12 zr-col-md-6 zr-col-lg-8">2</div>
        <div class="zr-col-xs-24 zr-col-sm-12 zr-col-md-6 zr-col-lg-8">3</div>
    </div> 
```
<br/>

[查看所有DEMO](http://gtp-zr.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=211290909d2f484ab834218f3cc7830f&directoryName=Grid%20%E6%A0%85%E6%A0%BC)

[留言和讨论](https://github.com/guguaihaha/zr-source/issues/4)


