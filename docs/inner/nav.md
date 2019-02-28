# Nav 导航和导航菜单

导航是展示栏目的方式，目前Nv主要将其分为顶部导航和侧边导航两种。

---

### 使用方法

+ 直接copy以下代码片段到页面即可

<br/>

### 顶部横向导航

在网页顶部使用，用于网站全局导航设置，可配合[顶部导航-侧边导航布局](http://gtp-nv.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=f709304e0f6d4333ad6ccd11f87b7918&directoryName=Layout%20%E5%B8%83%E5%B1%80)，此种类型导航建议最多拓展两层内容，用于全局类目的使用，添加 `nv-nav-horizontal` 样式就可以了。

代码结构如下：

```html
    <ul class="nv-nav nv-nav-horizontal">
        <!--当前选中状态 添加nv-nav-selected-->
        <li class="nv-nav-item nv-nav-selected"><a href="javascript:;">Navigation 1</a></li>
        <!--默认状态-->
        <li class="nv-nav-item"><a href="javascript:;">Navigation 2</a></li>
        <!--有下拉菜单状态-->
        <li class="nv-nav-item">
            Navigation 3 <i class="nvicon-arrow-down"></i>
            <!--一级菜单-->
            <ul class="nv-nav-menu">
                <li class="nv-nav-item"><a href="javascript:;">List 1</a></li>
                <li class="nv-nav-item">
                    List 2<i class="nvicon-arrow-right"></i>
                    <!--子集菜单-->
                    <ul class="nv-nav-leaves">
                        <li class="nv-nav-item">
                            <a href="javascript:;">Child 1 target blank</a>
                        </li>
                        <li class="nv-nav-item"><a href="javascript:;">Child 2</a></li>
                        <li class="nv-nav-item"><a href="javascript:;">Child 3</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <!--有链接状态-->
        <li class="nv-nav-item">
            <a href="javascript:;">Navigation 4-Link</a>
        </li>
    </ul>
```

<br/>

### 侧边导航

垂直菜单，用于显示网站的多级结构，为页面和功能提供导航菜单，在页面左侧。可配合[侧边栏导航](http://gtp-nv.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=f709304e0f6d4333ad6ccd11f87b7918&directoryName=Layout%20%E5%B8%83%E5%B1%80)、 [顶部—左侧导航深色背景](http://gtp-nv.jd.com/docs?languageCode=CN&columnUid=41c513f9dd334a1ebb0fbbd76d71e973&directoryUid=f709304e0f6d4333ad6ccd11f87b7918&directoryName=Layout%20%E5%B8%83%E5%B1%80)使用。只需要在添加样式 `nv-nav-tree` 。

代码结构如下：

```html
    <!--展开效果-->
    <ul class="nv-nav nv-nav-tree" nv-event="click">
        <!--二级导航一-->
        <li class="nv-nav-item">
            <a href="javascript:;" class="nv-nav-subtitle">
                <i class="nvicon-doc-empty"></i><span class="nv-nav-subset-title">Navigation 1</span>
                <i class="nvicon-arrow-down"></i>
            </a>
            <!--一级菜单-->
            <ul class="nv-nav-menu">
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 1</a>
                </li>
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 2</a>
                </li>
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">
                        <span class="nv-nav-subset-title">Submenu2</span><i class="nvicon-arrow-down"></i></a>
                    <!--子集菜单-->
                    <ul class="nv-nav-leaves">
                        <li class="nv-nav-item">
                            <a href="javascript:;" class="nv-nav-subtitle">Option 3</a>
                        </li>
                        <li class="nv-nav-item">
                            <a href="javascript:;" class="nv-nav-subtitle">Option 4</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <!--二级导航一-->
        <li class="nv-nav-item">
            <a href="javascript:;" class="nv-nav-subtitle">
                <i class="nvicon-home-empty"></i><span class="nv-nav-subset-title">Navigation 2</span>
                <i class="nvicon-arrow-down"></i>
            </a>
            <!--一级菜单-->
            <ul class="nv-nav-menu">
                <!-- 不可点击状态 添加 nv-nav-disable 即可 -->
                <li class="nv-nav-item nv-nav-disable">
                    <a href="javascript:;" class="nv-nav-subtitle">Group1</a>
                    <ul class="nv-nav-leaves">
                        <li class="nv-nav-item">
                            <a href="javascript:;" class="nv-nav-subtitle">Option 5</a>
                        </li>
                        <li class="nv-nav-item">
                            <a href="javascript:;" class="nv-nav-subtitle">Option 6</a>
                        </li>
                    </ul>
                </li>
                <li class="nv-nav-item nv-nav-disable">
                    <a href="javascript:;" class="nv-nav-subtitle">Group2</a>
                    <ul class="nv-nav-leaves">
                        <li class="nv-nav-item">
                            <a href="javascript:;" class="nv-nav-subtitle">Option 7</a>
                        </li>
                        <li class="nv-nav-item">
                            <a href="javascript:;" class="nv-nav-subtitle">Option 8</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <!--一级菜单-->
        <li class="nv-nav-item">
            <a href="javascript:;" class="nv-nav-subtitle">
                <i class="nvicon-classify-empty"></i><span class="nv-nav-subset-title">Navigation 3</span>
                <i class="nvicon-arrow-down"></i>
            </a>
            <!--二级菜单-->
            <ul class="nv-nav-menu">
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 8</a>
                </li>
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 9</a>
                </li>
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 10</a>
                </li>
            </ul>
        </li>
        <!--一级菜单-->
        <li class="nv-nav-item">
            <a href="javascript:;" class="nv-nav-subtitle">
                <i class="nvicon-heart-empty"></i><span class="nv-nav-subset-title">Option 11</span>
            </a>
        </li>
        <!--一级菜单-->
        <li class="nv-nav-item">
            <a href="javascript:;" class="nv-nav-subtitle">
                <i class="nvicon-star-empty"></i><span class="nv-nav-subset-title">Option 12</span>
            </a>
        </li>
        <!--一级菜单-->
        <li class="nv-nav-item">
            <a href="javascript:;" class="nv-nav-subtitle">
                <i class="nvicon-seting-empty"></i><span class="nv-nav-subset-title">Option 13</span>
            </a>
        </li>
    </ul>
```

<br/>

### 收起侧边导航

点击图标可收起/展开的侧边导航，只需要添加 `nv-nav-collapsed` ,即为导航收起效果;删除 `nv-nav-collapsed` 后，则默认为展开效果。

代码结构如下：

```html
    <!--点击图标可收起展开一-->
    <button class="nv-btn nv-btn-primary nv-btn-sm nv-nav-button" type="button"><i class="nvicon-left"></i></button>
    <br><br>
    <!--展开效果-->
    <ul class="nv-nav nv-nav-shrink nv-nav-tree" trigger="trigger" nv-event="click">
        <!--二级导航效果一-->
        <li class="nv-nav-item">
            <a href="javascript:;" class="nv-nav-subtitle">
                <i class="nvicon-doc-empty"></i><span class="nv-nav-subset-title">Navigation 1</span>
                <i class="nvicon-arrow-down"></i>
            </a>
            <!--一级菜单-->
            <ul class="nv-nav-menu">
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 1</a>
                </li>
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 2</a>
                </li>
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">
                        <span class="nv-nav-subset-title">Submenu2</span><i class="nvicon-arrow-down"></i></a>
                    <!--子集菜单-->
                    <ul class="nv-nav-leaves">
                        <li class="nv-nav-item">
                            <a href="javascript:;" class="nv-nav-subtitle">Option 3</a>
                        </li>
                        <li class="nv-nav-item">
                            <a href="javascript:;" class="nv-nav-subtitle">Option 4</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <!--二级导航效果一-->
        <li class="nv-nav-item">
            <a href="javascript:;" class="nv-nav-subtitle">
                <i class="nvicon-home-empty"></i><span class="nv-nav-subset-title">Navigation 2</span>
                <i class="nvicon-arrow-down"></i>
            </a>
            <!--一级菜单-->
            <ul class="nv-nav-menu">
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 5</a>
                </li>
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 6</a>
                </li>
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 7</a>
                </li>
            </ul>
        </li>
        <!--一级菜单效果-->
        <li class="nv-nav-item">
            <a href="javascript:;" class="nv-nav-subtitle">
                <i class="nvicon-classify-empty"></i><span class="nv-nav-subset-title">Navigation 3</span>
                <i class="nvicon-arrow-down"></i>
            </a>
            <!--一级菜单-->
            <ul class="nv-nav-menu">
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 8</a>
                </li>
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 9</a>
                </li>
                <li class="nv-nav-item">
                    <a href="javascript:;" class="nv-nav-subtitle">Option 10</a>
                </li>
            </ul>
        </li>
        <!--一级菜单效果-->
        <li class="nv-nav-item">
            <a href="javascript:;" class="nv-nav-subtitle">
                <i class="nvicon-heart-empty"></i><span class="nv-nav-subset-title">Option 11</span>
            </a>
        </li>
        <!--一级级菜单效果-->
        <li class="nv-nav-item">
            <a href="javascript:;" class="nv-nav-subtitle">
                <i class="nvicon-star-empty"></i><span class="nv-nav-subset-title">Option 12</span>
            </a>
        </li>
        <!--没有子菜单效果-->
        <li class="nv-nav-item">
            <a href="javascript:;" class="nv-nav-subtitle">
                <i class="nvicon-seting-empty"></i><span class="nv-nav-subset-title">Option 13</span>
            </a>
        </li>
    </ul>
```

<br/>

[Demo展示](http://nv.zhangjinglin.cn/api?type=nav)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/8)