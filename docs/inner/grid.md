
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

经过实践，Nv重新设计栅格，在原来的12个栅格拓展到24个栅格，更能适应更多应用场景。建议横向排列的栅格单位最多4个，最少一个。

+ 一行1列栅格布局代码

```html
    <div class="nv-row">
        <div class="nv-col-24">nv-col-24（100%)</div>
    </div>
```
<br/>

+ 一行2列栅格布局代码

```html
    <div class="nv-row">
        <div class="nv-col-12">nv-col-12 (50%)</div>
        <div class="nv-col-12">nv-col-12 (50%)</div>
    </div>
```
<br/>

+ 另外一种一行2列的布局

```html
    <div class="nv-row">
        <div class="nv-col-16">nv-col-16 (66.66%)</div>
        <div class="nv-col-8">nv-col-8 (33.33%)</div>
    </div>
```
<br/>

+ 一行3列栅格布局代码

```html
    <div class="nv-row row">
        <div class="nv-col-8">nv-col-8 (33.33%)</div>
        <div class="nv-col-8">nv-col-8 (33.33%)</div>
        <div class="nv-col-8">nv-col-8 (33.33%)</div>
    </div>
```
<br/>

+ 一行4列栅格布局代码（建议布局最多一行4列）

```html
    <div class="nv-row">
        <div class="nv-col-6">nv-col-6 (25%)</div>
        <div class="nv-col-6">nv-col-6 (25%)</div>
        <div class="nv-col-6">nv-col-6 (25%)</div>
        <div class="nv-col-6">nv-col-6 (25%)</div>
    </div>
```
<br/>

### 基础栅格

使用单一的一组row与col栅格，列（col）必须在行中（row）

代码结构如下：

```html
    <div class="nv-row">
        <div class="nv-col-12">nv-col-12</div>
        <div class="nv-col-12">nv-col-12</div>
    </div>
    <div class="nv-row">
        <div class="nv-col-6">nv-col-6</div>
        <div class="nv-col-6">nv-col-6</div>
        <div class="nv-col-6">nv-col-6</div>
        <div class="nv-col-6">nv-col-6</div>
    </div>
    <div class="nv-row">
        <div class="nv-col-8">nv-col-8</div>
        <div class="nv-col-8">nv-col-8</div>
        <div class="nv-col-8">nv-col-8</div>
    </div>
```
<br/>

### 间隔布局

间隔布局需要在在 `nv-row` 的样式上添加 `nv-row-space`

代码结构如下：

```html
    <div class="nv-row nv-row-space">
        <div class="nv-col-6">nv-col-6</div>
        <div class="nv-col-6">nv-col-6</div>
        <div class="nv-col-6">nv-col-6</div>
        <div class="nv-col-6">nv-col-6</div>
    </div>
```
<br/>

### 栅格偏移

栅格中需要间隔布局，`nv-col` 的样式上添加 `nv-col-offset-1` 至 `nv-col-offset-24`，当然相加大于24会折行

代码结构如下：

```html
    <div class="nv-row nv-row-space">
        <div class="nv-col-6 nv-col-offset-3">nv-col-offset-3</div>
        <div class="nv-col-6 nv-col-offset-6">nv-col-offset-6</div>
    </div>
```
<br/>

### Flex布局

其实用flex布局就是直接样式 `nv-row` 替换掉为 `nv-row-flex` 即可，但Flex布局建议在IE10+浏览器上使用。简单的代码能实现CSS2较为复杂写下的功能特效

代码结构如下：

```html
    <div class="nv-row-flex nv-row-space">
        <div class="nv-col-6 nv-col-offset-3">nv-col-offset-3</div>
        <div class="nv-col-6 nv-col-offset-6">nv-col-offset-6</div>
    </div>
```
<br/>


### Flex 横向位置布局

可以在nv-row-flex上添加 `nv-row-flex-start` 整行居左、`nv-row-flex-center` 整行居中、`nv-row-flex-end` 整行居右、`nv-row-flex-between` 整行两边对齐、`nv-row-flex-around` 整行左右均等对齐

代码结构如下：

```html
    <p>居左</p>
    <div class="nv-row-flex nv-row-flex-start">
        <div class="nv-col-4">nv-col-4</div>
        <div class="nv-col-4">nv-col-4</div>
        <div class="nv-col-4">nv-col-4</div>
        <div class="nv-col-4">nv-col-4</div>
    </div>
    <p>居中</p>
    <div class="nv-row-flex nv-row-flex-center">
        <div class="nv-col-4 pd">nv-col-4</div>
        <div class="nv-col-4 pd">nv-col-4</div>
        <div class="nv-col-4 pd">nv-col-4</div>
        <div class="nv-col-4 pd">nv-col-4</div>
    </div>
    <p>居右</p>
    <div class="nv-row-flex nv-row-flex-end row h80">
        <div class="nv-col-4 pd">nv-col-4</div>
        <div class="nv-col-4 pd">nv-col-4</div>
        <div class="nv-col-4 pd">nv-col-4</div>
        <div class="nv-col-4 pd">nv-col-4</div>
    </div>
    <p>两边对齐</p>
    <div class="nv-row-flex nv-row-flex-between row h80">
        <div class="nv-col-4 pd">nv-col-4</div>
        <div class="nv-col-4 pd">nv-col-4</div>
        <div class="nv-col-4 pd">nv-col-4</div>
        <div class="nv-col-4 pd">nv-col-4</div>
    </div>
    <p>左右均等对齐</p>
    <div class="nv-row-flex nv-row-flex-around row h80">
        <div class="nv-col-4 pd">nv-col-4</div>
        <div class="nv-col-4 pd">nv-col-4</div>
        <div class="nv-col-4 pd">nv-col-4</div>
        <div class="nv-col-4 pd">nv-col-4</div>
    </div>

```

### Flex对齐

垂直布局同横向布局，在 `nv-row-flex` 基础上增加额外样式 `nv-row-flex-top` 垂直顶部、`nv-row-flex-middle` 垂直居中、`nv-row-flex-end` 垂直底部

代码结构如下：

```html
    <p>垂直顶部</p>
    <div class="nv-row-flex nv-row-flex-around nv-row-flex-top">
        <div class="nv-col-4">nv-col-4</div>
        <div class="nv-col-4">nv-col-4</div>
        <div class="nv-col-4">nv-col-4</div>
        <div class="nv-col-4">nv-col-4</div>
    </div>
    <p>垂直居中</p>
    <div class="nv-row-flex nv-row-flex-around nv-row-flex-middle">
        <div class="nv-col-4">nv-col-4</div>
        <div class="nv-col-4">nv-col-4</div>
        <div class="nv-col-4">nv-col-4</div>
        <div class="nv-col-4">nv-col-4</div>
    </div>
    <p>垂直底部</p>
    <div class="nv-row-flex nv-row-flex-around nv-row-flex-bottom">
        <div class="nv-col-4">nv-col-4</div>
        <div class="nv-col-4">nv-col-4</div>
        <div class="nv-col-4">nv-col-4</div>
        <div class="nv-col-4">nv-col-4</div>
    </div>
```
<br/>

### Flex单元格垂直位置

垂直布局可以单独控制一个单元格位置，优势不言直表。在 `nv-row-flex` 中的 `nv-col` 上面添加 `nv-col-flex-top` 列居上 、 `nv-col-flex-middle` 列居中 、`nv-col-flex-bottom` 列局底、`nv-col-flex-stretch` 列垂直占满

代码结构如下：

```html
    <p>居上 (nv-col-flex-top)</p>
    <div class="nv-row-flex nv-row-flex-around">
        <div class="nv-col-4 nv-col-flex-top">nv-col-4</div>
        <div class="nv-col-4 pd nv-col-flex-middle">nv-col-4</div>
        <div class="nv-col-4 nv-col-flex-top">nv-col-4</div>
        <div class="nv-col-4 pd nv-col-flex-middle">nv-col-4</div>
    </div>
    <p>居中 (nv-col-flex-middle)</p>
    <div class="nv-row-flex nv-row-flex-around">
        <div class="nv-col-4 nv-col-flex-middle">nv-col-4</div>
        <div class="nv-col-4 nv-col-flex-middle">nv-col-4</div>
        <div class="nv-col-4 nv-col-flex-middle">nv-col-4</div>
        <div class="nv-col-4 nv-col-flex-middle">nv-col-4</div>
    </div>
    <p>底部 (nv-col-flex-bottom)</p>
    <div class="nv-row-flex nv-row-flex-around">
        <div class="nv-col-4 nv-col-flex-bottom">nv-col-4</div>
        <div class="nv-col-4 nv-col-flex-bottom">nv-col-4</div>
        <div class="nv-col-4 nv-col-flex-middle">nv-col-4</div>
        <div class="nv-col-4 nv-col-flex-middle">nv-col-4</div>
    </div>
    <p>垂直占满 (nv-col-flex-stretch)</p>
    <div class="nv-row-flex nv-row-flex-around">
        <div class="nv-col-4 nv-col-flex-stretch">nv-col-4</div>
        <div class="nv-col-4 nv-col-flex-stretch">nv-col-4</div>
        <div class="nv-col-4 nv-col-flex-middle">nv-col-4</div>
        <div class="nv-col-4 nv-col-flex-middle">nv-col-4</div>
    </div>
```

<br/>

### Flex排序

flex排序是根据1—24序号顺序进行排序，在 `nv-row-flex` 中的 `nv-col` 上面添加 `nv-col-flex-order-1` 至  `nv-col-flex-order-24`

代码结构如下：

```html
    <p>排序前</p>
    <div class="nv-row-flex nv-row-flex-around nv-row-flex-top">
        <div class="nv-col-4">元素第1个</div>
        <div class="nv-col-4">元素第2个</div>
        <div class="nv-col-4">元素第3个</div>
        <div class="nv-col-4">元素第4个</div>
    </div>
    <p>排序后</p>
    <div class="nv-row-flex nv-row-flex-around nv-row-flex-top">
        <div class="nv-col-4 pd nv-col-flex-order-4">元素第1个</div>
        <div class="nv-col-4 pd nv-col-flex-order-1">元素第2个</div>
        <div class="nv-col-4 pd nv-col-flex-order-3">元素第3个</div>
        <div class="nv-col-4 pd nv-col-flex-order-2">元素第4个</div>
    </div>
```

<br/>

### 响应式布局

参照了BootStrap的响应式设计，Nv预设了五个尺寸

手机尺寸：`nv-col-xs-1` 至 `nv-col-xs-24`

平板尺寸：`nv-col-sm-?` 至 `nv-col-sm-24`

桌面显示器尺寸：`nv-col-md-?` 至 `nv-col-md-24`

大桌面显示器尺寸：`nv-col-lg-?` 至 `nv-col-lg-24`

大屏慕显示器尺寸：`nv-col-xl-?` 至 `nv-col-xl-24`

代码结构如下：

```html
    <div class="nv-row-flex row">
        <div class="nv-col-xs-24 nv-col-sm-12 nv-col-md-6 nv-col-lg-8">1</div>
        <div class="nv-col-xs-24 nv-col-sm-12 nv-col-md-6 nv-col-lg-8">2</div>
        <div class="nv-col-xs-24 nv-col-sm-12 nv-col-md-6 nv-col-lg-8">3</div>
    </div> 
```
<br/>

[查看所有DEMO](http://gtp-nv.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=211290909d2f484ab834218f3cc7830f&directoryName=Grid%20%E6%A0%85%E6%A0%BC)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/4)


