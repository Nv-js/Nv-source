# Pagination 分页

当数据量较多一屏展示不下时，可使用分页快速进行数据切换

---

### 使用方法

+ 用户知悉页面总量，支持在当页或其他页面进行进一步操作

<br/>

### 基础样式

最基本的分页样式，当分页小于7页时，全部展示：


```html
   <!--HTML代码-->
   <div class="nv-pagination" id="page1"></div>
   <!--javascript-->
   page.init({
       'id': 'page1',
       'total': 30,
       'pageSize': 5
   })
```

<br/>

### 更多分页 

当分页大于6页时，部分页码隐藏

代码结构如下：

```html
     <!--HTML代码-->
     <div class="nv-pagination" id="page2-demo"></div>
     <!--javascript-->
     page.init({
         'id': 'page2',
         'total': 35,
         'pageSize': 5
     })
```
<br/>

### 可选择每页数量 

可以选择每页显示列表数量

```html
   <!--HTML代码-->
   <div class="nv-pagination" id="page3-demo"></div>
   <!--javascript-->
   page.init({
       'id': 'page3',
       'total': 100,
       'pageSize': 5,
       'showPageSize': true
   })
```
<br/>

### 可跳转至某页

出现跳转输入框,输入页数按下enter键即可跳转到相对应的页数

```html
    <!--HTML-->
    <div class="nv-pagination" id="page4-demo"></div>
    <!--jQuery-->
    page.init({
        'id': 'page4',
        'total': 100,
        'pageSize': 5,
        'showPageSize': true,
        'showJump': true,
    })
```
<br/>

### 显示总数

可选择是否显示总数

```html
   <!--HTML-->
   <div class="nv-pagination" id="page5-demo"></div>
   <!--jQuery-->
   page.init({
       'id': 'page5',
       'total': 100,
       'pageSize': 5,
       'showPageSize': true,
       'showJump': true,
       'showTotal': true
   })
```
<br/>

### MINI页码

去除了翻页按钮边框的简洁型翻页

```html
    <!--HTML-->
    <div class="nv-pagination" id="page6-demo"></div>
    <!--jQuery-->
    page.init({
        'id': 'page6',
        'total': 100,
        'pageSize': 5,
        'showPageSize': true,
        'showJump': true,
        'showTotal': true,
        'type': 'mini'
    })
```
<br/>


> 综上，page.init(config)配置项目如下：

### API

page.init(config)

+ `config`配置选项

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----  |
| current  | Number (选填)  | 当前页码 |
| pageSize  | Number(选填)   | 每页条数默认10条 |
| total  | Number (选填)  | 总条数 |
| pageSizeOptions  | Array(选填)   | 下拉条数数组[10, 20, 50, 100] |
| showPageSize  | Boolean (选填)  | 是否显示分页切换,默认false |
| showTotal  | Boolean(选填)   | 是否显示总条数,默认false |
| showTotalPage  | Boolean (选填)  | 是否显示总页数,默认false |
| showJump  | Boolean(选填)   | 是否显示跳转框,默认false |
| onChange  | Function (选填)  | 分页点击回调函数 |
| onShowSizeChange  | Function(选填)   | 每页下拉回调函数 |
| type  | String (选填)  | 分页类型默认complete,可选mini |
| errNotice  | String(选填)   | 错误提示文案 |
| language  | Function (选填)  | 多语言 |
| showTextBtn  | Function(选填)   | 是否使用文字替换上下页箭头 |
| showInfo  | String (选填)  | 是否显示分页信息(待更新) |


[Demo展示](http://www.nv-js.com/api?type=page)

[留言和讨论](https://github.com/Nv-js/nv-source/issues/28)

    