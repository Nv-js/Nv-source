# Table 表格

展示大量结构化数据，可以对这些数据进行排序、搜索、分页、自定义等操作。目前table分为基础样式类和依托外置组件类

---

### 使用方法

+ 当然还是参照样例，找到符合需求的类进行代码copy

+ 支持对数据的基本操作如查看、排序、筛选等，也支持一些复杂操作如自定义等

+ 支持表单对页面的自适应，设置最小宽度，页面小于最小宽度时出横向滚动条

+ 保持表单的可读性，每列表格可设置最小宽度以及最多可展示的字段数量，超过最多字段出省略号，鼠标悬停时出完整内容

<br/>

以下展示的是基础样式类，常用语幻灯片管理、图文管理等，限制在总数在30条数据以下采用以下`基础样式`和`批量操作`

### 基础样式

`nv-table-wrap` 为最基础简单的表格样式，在 `th` 或者 `td` 上添加 `nv-table-text-right` 样式属性表示文字右对齐。

```html
    <div class="nv-table-wrap">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Country</th>
                    <th class="nv-table-text-right">Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>001</td>
                    <td>Otto Clay</td>
                    <td>23</td>
                    <td>China</td>
                    <td class="nv-table-text-right">23.00</td>
                    <td><a>Edit</a><a>Delete</a></td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>Connor Johnston</td>
                    <td>31</td>
                    <td>Unit States</td>
                    <td class="nv-table-text-right">9.00</td>
                    <td><a>Edit</a><a>Delete</a></td>
                </tr>
                <tr>
                    <td>003</td>
                    <td>Timothy Henson</td>
                    <td>65</td>
                    <td>Unit States</td>
                    <td class="nv-table-text-right">100.00</td>
                    <td><a>Edit</a><a>Delete</a></td>
                </tr>
            </tbody>
        </table>
    </div>
```

<br/>

### 批量操作

用户可以进行批量操作，在 `nv-table-wrap` 后面添加 `nv-table-checkbox` 属性，首列添加 `Checkbox` 对应组件模块，`Checkbox` 使用详情见 [Checkbox 复选框](https://github.com/guguaihaha/nv-source/blob/master/docs/inner/checkbox.md)

```html
    <div class="nv-table-wrap nv-table-checkbox">
        <table>
            <thead>
            <tr>
                <th>
                    <input type="checkbox" name="" value="0" class="nv-checkbox">
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
                <th class="nv-table-text-right c-table-w-125">Price</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <input type="checkbox" name="" value="0" class="nv-checkbox">
                </td>
                <td>001</td>
                <td>Otto Clay</td>
                <td>23</td>
                <td>China</td>
                <td class="nv-table-text-right">23.00</td>
                <td><a>Edit</a><a>Delete</a></td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="" value="0" class="nv-checkbox">
                </td>
                <td>002</td>
                <td>Connor Johnston</td>
                <td>31</td>
                <td>Unit States</td>
                <td class="nv-table-text-right">9.00</td>
                <td><a>Edit</a><a>Delete</a></td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="" value="0" class="nv-checkbox">
                </td>
                <td>003</td>
                <td>Alexander</td>
                <td>42</td>
                <td>Unit States</td>
                <td class="nv-table-text-right">100.00</td>
                <td><a>Edit</a><a>Delete</a></td>
            </tr>
            </tbody>
        </table>
    </div>
```
<br/>

如果是数据较多需要分批次展示，这时候仅仅是内置组件无法满足需求，基于大量调研，最终采用了基于`datatables`的外置第三方组件可以满足
大部分用户的转换需求，同时为此Nv还定制了一套Nv风格的主题。以下展示为基于`datatables`的插件用法：固定表头、固定列、固定表头和列


### 固定表头

只需要在参数配置时候设置 `scrollY`

以下为HTML代码：

```html
    <div class="nv-table-wrap nv-table-wrap-border">
        <table id="example">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Extn.</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>001</td>
                    <td>Tiger</td>
                    <td>Nixon</td>
                    <td>System</td>
                    <td>Tokyo</td>
                    <td>14</td>
                    <td>01/25</td>
                    <td>$800</td>
                    <td>5421</td>
                    <td><a>Edit</a></td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>Connor</td>
                    <td>Nixon</td>
                    <td>System</td>
                    <td>Tokyo</td>
                    <td>24</td>
                    <td>03/25</td>
                    <td>$800</td>
                    <td>5421</td>
                    <td><a>Edit</a></td>
                </tr>
                <tr>
                    <td>003</td>
                    <td>Johnston</td>
                    <td>Nixon</td>
                    <td>System</td>
                    <td>Tokyo</td>
                    <td>18</td>
                    <td>10/25</td>
                    <td>$800</td>
                    <td>5421</td>
                    <td><a>Edit</a></td>
                </tr>
                <tr>
                    <td>004</td>
                    <td>Alexander</td>
                    <td>Nixon</td>
                    <td>System</td>
                    <td>Tokyo</td>
                    <td>21</td>
                    <td>06/25</td>
                    <td>$800</td>
                    <td>5421</td>
                    <td><a>Edit</a></td>
                </tr>
                <tr>
                    <td>005</td>
                    <td>Amy</td>
                    <td>Nixon</td>
                    <td>System</td>
                    <td>Tokyo</td>
                    <td>19</td>
                    <td>04/01</td>
                    <td>$800</td>
                    <td>5421</td>
                    <td><a>Edit</a></td>
                </tr>
                <tr>
                    <td>006</td>
                    <td>Tony</td>
                    <td>Nixon</td>
                    <td>System</td>
                    <td>Tokyo</td>
                    <td>16</td>
                    <td>08/25</td>
                    <td>$800</td>
                    <td>5421</td>
                    <td><a>Edit</a></td>
                </tr>
            </tbody>
        </table>
    </div>
```
对应的javascript代码如下，因为是 `jQuery` 插件，所以需要使用 `jQuery` 语法：

以下代码仅供示意，最好将此代码片段封装于[Nv.add](https://github.com/guguaihaha/nv-engine/blob/master/docs/API.md#user-content-add)方法中，然后再页面调用一个公共方法来引用，减少页面维护成本。

```javascript
    Nv.ready(function(){
        Nv.use("jquery", "fixedColumns",function ($) {
            //因为fixedColumns和datatables都是jQuery类插件，所以使用时按照jQuery语法即可
            var table = $('#example').DataTable({
                scrollY: "150px",
                scrollX: true,
                scrollCollapse: true,
                paging: true,
                bLengthChange:false,
                oLanguage:{
                    oPaginate:{
                        "sPrevious": "<i class="nvicon-arrow-left"></i>",
                        "sNext": "<i class="nvicon-arrow-right"></i>",
                    }
                },
                columnDefs:[{
                    targets : [2,3,4,7,8,9],
                    orderable : false
                }]
            });
        }
    })
```


<br/>

### 固定列

引用了 `fixedColumns` ，其中 `fixedColumns` 依赖 `datatables` 和 `jQuery`。

以下为HTML代码：

```html
  <div class="nv-table-wrap nv-table-wrap-border">
        <table id="example1">
            <thead>
            <tr>
                <th>Number</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Shool</th>
                <th>Salary</th>
                <th>Extn.</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>001</td>
                <td>Tiger</td>
                <td>Nixon</td>
                <td>System</td>
                <td>Tokyo</td>
                <td>14</td>
                <td>01/25</td>
                <td>AU</td>
                <td>$800</td>
                <td>5421</td>
                <td><a>Edit</a></td>
            </tr>
            <tr>
                <td>002</td>
                <td>Connor</td>
                <td>Nixon</td>
                <td>System</td>
                <td>Tokyo</td>
                <td>24</td>
                <td>03/25</td>
                <td>AU</td>
                <td>$800</td>
                <td>5421</td>
                <td><a>Edit</a></td>
            </tr>
            <tr>
                <td>003</td>
                <td>Johnston</td>
                <td>Nixon</td>
                <td>System</td>
                <td>Tokyo</td>
                <td>18</td>
                <td>10/25</td>
                <td>AU</td>
                <td>$800</td>
                <td>5421</td>
                <td><a>Edit</a></td>
            </tr>
            <tr>
                <td>004</td>
                <td>Alexander</td>
                <td>Nixon</td>
                <td>System</td>
                <td>Tokyo</td>
                <td>21</td>
                <td>06/25</td>
                <td>AU</td>
                <td>$800</td>
                <td>5421</td>
                <td><a>Edit</a></td>
            </tr>
            <tr>
                <td>005</td>
                <td>Amy</td>
                <td>Nixon</td>
                <td>System</td>
                <td>Tokyo</td>
                <td>19</td>
                <td>04/01</td>
                <td>AU</td>
                <td>$800</td>
                <td>5421</td>
                <td><a>Edit</a></td>
            </tr>
            <tr>
                <td>006</td>
                <td>Tony</td>
                <td>Nixon</td>
                <td>System</td>
                <td>Tokyo</td>
                <td>16</td>
                <td>08/25</td>
                <td>AU</td>
                <td>$800</td>
                <td>5421</td>
                <td><a>Edit</a></td>
            </tr>
            </tbody>
        </table>
    </div>
```

然后再调用javascript代码，因为是 `jQuery` 插件，所以需要使用 `jQuery` 语法：：

以下代码仅供示意，最好将此代码片段封装于[Nv.add](https://github.com/guguaihaha/nv-engine/blob/master/docs/API.md#user-content-add)方法中，然后再页面调用一个公共方法来引用，减少页面维护成本。

```javascript
    Nv.ready(function(){
        Nv.use("jquery", "fixedColumns",function ($,DataTable) {
            var table = $('#example').DataTable({
                scrollX: true,
                scrollCollapse: true,
                paging: true,
                bLengthChange:false,
                fixedColumns: {
                    leftColumns: 1,
                    rightColumns: 1
                },
                oLanguage:{
                    oPaginate:{
                        "sPrevious": "<i class="nvicon-arrow-left"></i>",
                        "sNext": "<i class="nvicon-arrow-right"></i>",
                    }
                },
                columnDefs:[{
                    targets : [2,3,4,7,8,9,10],
                    orderable : false
                }]
            });
        })
    })
```

<br/>

### 固定表头和列

同样只需要设置对应的`scrollY` 、 `fixedColumns`

以下为HTML代码：

```html
    <div class="nv-table-wrap nv-table-wrap-border">
        <table id="example2">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Shool</th>
                    <th>Salary</th>
                    <th>Extn.</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>001</td>
                    <td>Tiger</td>
                    <td>Nixon</td>
                    <td>System</td>
                    <td>Tokyo</td>
                    <td>14</td>
                    <td>01/25</td>
                    <td>AU</td>
                    <td>$800</td>
                    <td>5421</td>
                    <td><a>Edit</a></td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>Connor</td>
                    <td>Nixon</td>
                    <td>System</td>
                    <td>Tokyo</td>
                    <td>24</td>
                    <td>03/25</td>
                    <td>AU</td>
                    <td>$800</td>
                    <td>5421</td>
                    <td><a>Edit</a></td>
                </tr>
                <tr>
                    <td>003</td>
                    <td>Johnston</td>
                    <td>Nixon</td>
                    <td>System</td>
                    <td>Tokyo</td>
                    <td>18</td>
                    <td>10/25</td>
                    <td>AU</td>
                    <td>$800</td>
                    <td>5421</td>
                    <td><a>Edit</a></td>
                </tr>
                <tr>
                    <td>004</td>
                    <td>Alexander</td>
                    <td>Nixon</td>
                    <td>System</td>
                    <td>Tokyo</td>
                    <td>21</td>
                    <td>06/25</td>
                    <td>AU</td>
                    <td>$800</td>
                    <td>5421</td>
                    <td><a>Edit</a></td>
                </tr>
                <tr>
                    <td>005</td>
                    <td>Amy</td>
                    <td>Nixon</td>
                    <td>System</td>
                    <td>Tokyo</td>
                    <td>19</td>
                    <td>04/01</td>
                    <td>AU</td>
                    <td>$800</td>
                    <td>5421</td>
                    <td><a>Edit</a></td>
                </tr>
                <tr>
                    <td>006</td>
                    <td>Tony</td>
                    <td>Nixon</td>
                    <td>System</td>
                    <td>Tokyo</td>
                    <td>16</td>
                    <td>08/25</td>
                    <td>AU</td>
                    <td>$800</td>
                    <td>5421</td>
                    <td><a>Edit</a></td>
                </tr>
            </tbody>
        </table>
    </div>
```

然后再调用javascript代码，因为是 `jQuery` 插件，所以需要使用 `jQuery` 语法：：

以下代码仅供示意，最好将此代码片段封装于[Nv.add](https://github.com/guguaihaha/nv-engine/blob/master/docs/API.md#user-content-add)方法中，然后再页面调用一个公共方法来引用，减少页面维护成本。

```javascript
    Nv.ready(function(){
        Nv.use("jquery", "fixedColumns",function ($,DataTable) {
            var table = $('#example2').DataTable({
                scrollY: "150px",
                scrollX: true,
                scrollCollapse: true,
                paging: true,
                bLengthChange:false,
                    fixedColumns: {
                        leftColumns: 1,
                        rightColumns: 1
                    },
                oLanguage:{
                    oPaginate:{
                        "sPrevious": "<i class="nvicon-arrow-left"></i>",
                        "sNext": "<i class="nvicon-arrow-right"></i>",
                    }
                },
                columnDefs:[{
                    targets : [2,3,4,7,8,9,10],
                    orderable : false
                }]
            });
        })
    })
```

[Demo展示](http://www.nv-js.com/api?type=table)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/19)

[常见第三方组件列表](http://www.nv-js.com/api?type=others/plugins)

    