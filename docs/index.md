### Nv API 导航

> 名词解释

+ 内置组件

   内置组件的特点就是只需要在实际Dom节点上添加className或者添加自定义属性，如下:
   
```html
   <button type="button" class="nv-tooltip" data-tip-text="tip position tl" data-ip-position="tl">
     <span>show me</span>
   </button>
```

   可以看到，添加了nv-tooltip 的className即可将按钮变成了文字提示，提示位置`data-tip-position`和内容`data-tip-text`又是自定义的属性来控制。
   
   当然如果需要控制具体回调事件的操作，每个内置组件基本都会在文档中说明是否嵌入了onnvchange，具体详细参考各个内置模块的api[了解更多](http://nv.jd.com)
   
   [内置组件讨论和改进意见](//github.com/guguaihaha/Nv-source/issues/36)
   
   

+ 外置组件

   外置组件的特点就是要使用[Nv.use](//github.com/guguaihaha/Nv-engine/blob/master/docs/API.md#user-content-use)是用插件和[Nv.add](://github.com/guguaihaha/Nv-engine/blob/master/docs/API.md#user-content-add )封装插件了
   外置组件是用灵活，扩展性强，当然如果再外置组件有问题，可以在[外置组件讨论和改进意见](//github.com/guguaihaha/Nv-source/issues/37)，
   同时外置组件分为以下两点：
  
  * 外置平台件 
  
    通常是指Nv的team研发的组件，负责修改和更新。比如`message`,`modal`等，可以[参考官网](http://nv.jd.com)
  
  * 外置第三方组件
  
    通常指封装的第三方组件，文档和内容都是外链的。比如`jquery`,`swiper`等，[常见第三方组件列表](otherPlugins.md)
  
   <br/> 
   <br/>
   <br/>


> 导航树 <span id="guide">#</span>

---

| 组件名称     | Demo地址   |  API地址  |  讨论地址  |
| --------    | :----- | :----:  | :----:  |
| Nv的API  |    | [API](//github.com/guguaihaha/Nv-engine/blob/master/docs/API.md)    |  |
| 快速使用  |    | [API](//github.com/guguaihaha/Nv-engine/blob/master/docs/quick.md)    | [讨论](//github.com/guguaihaha/Nv-engine/issues/3) |
| 组件封装技巧  |    | [API](//github.com/guguaihaha/Nv-engine/blob/master/docs/API.md#user-content-add)    | [讨论](//github.com/guguaihaha/Nv-engine/issues/5) |
| PRO的使用  |    | [API](//github.com/guguaihaha/Nv-pro)    | [讨论](//github.com/guguaihaha/Nv-pro/issues) |
| 主题修改  |    | [API](theme.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/38) |
|   |    |    |  |
| button 按钮  | [demo](http://nv.zhangjinglin.cn/api?type=buttons)   | [API](./inner/button.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/2) |
| icon 图标  | [demo](http://nv.zhangjinglin.cn/api?type=icons)   | [API](./inner/icon.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/3) |
| grid 栅格  | [demo](http://nv.zhangjinglin.cn/api?type=grid)   | [API](./inner/grid.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/4) |
| layout 布局  | [demo](http://nv.zhangjinglin.cn/api?type=layout)   | [API](./inner/layout.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/5) |
| breadcrumb 面包屑  | [demo](http://nv.zhangjinglin.cn/api?type=breadcrumb)   | [API](./inner/breadcrumb.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/6) |
| dropdown 下拉菜单  | [demo](http://nv.zhangjinglin.cn/api?type=dropdown)   | [API](./inner/dropdown.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/7) |
| nav 导航和导航菜单  | [demo](http://nv.zhangjinglin.cn/api?type=nav)   | [API](./inner/nav.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/8) |
| step 步骤条  | [demo](http://nv.zhangjinglin.cn/api?type=step)   | [API](./inner/step.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/9) |
| input 输入框  | [Demo](http://nv.zhangjinglin.cn/api?type=input)   | [API](./inner/input.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/10) |
| radio 单选框  | [Demo](http://nv.zhangjinglin.cn/api?type=radio)   | [API](./inner/radio.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/11) |
| checkbox 复选框  | [Demo](http://nv.zhangjinglin.cn/api?type=checkbox)   | [API](./inner/checkbox.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/12) |
| select 下拉选择  | [Demo](http://nv.zhangjinglin.cn/api?type=select)   | [API](./inner/select.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/13) |
| upload 上传  | [Demo](http://nv.zhangjinglin.cn/api?type=upload)   | [API](./inner/upload.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/14) |
| form 表单  | [Demo](http://nv.zhangjinglin.cn/api?type=form)   | [API](./inner/form.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/15) |
| alert 警告提示  | [demo](http://nv.zhangjinglin.cn/api?type=alert)   | [API](./inner/alert.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/16) |
| timeline 时间轴  | [demo](http://nv.zhangjinglin.cn/api?type=timeline)   | [API](./inner/timeline.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/17) |
| list 列表  | [demo](http://nv.zhangjinglin.cn/api?type=list)   | [API](./inner/list.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/18) |
| table 表格  | [demo](http://nv.zhangjinglin.cn/api?type=table)   | [API](./inner/table.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/19) |
| card 卡片  | [demo](http://nv.zhangjinglin.cn/api?type=card)   | [API](./inner/card.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/20) |
| divide 分割线  | [demo](http://nv.zhangjinglin.cn/api?type=divide)   | [API](./inner/divide.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/21) |
| photo 头像  | [demo](http://nv.zhangjinglin.cn/api?type=photo)   | [API](./inner/photo.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/22) |
| tooltip 文字提示  | [Demo](http://nv.zhangjinglin.cn/api?type=tip)   | [API](./inner/tooltip.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/23) |
| badge 徽标  | [Demo](http://nv.zhangjinglin.cn/api?type=badge)   | [API](./inner/badge.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/24) |
| top 返回顶部  | [Demo](http://nv.zhangjinglin.cn/api?type=top)   | [API](./inner/top.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/25) |
| tab 选项卡  | [Demo](http://nv.zhangjinglin.cn/api?type=tabs)   | [API](./out/tab.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/26) |
| modal 弹框  | [Demo](http://nv.zhangjinglin.cn/api?type=modal)   | [API](./out/modal.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/27) |
| page 分页  | [Demo](http://nv.zhangjinglin.cn/api?type=page)   | [API](./out/page.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/28) |
| message 全局提示  | [Demo](http://nv.zhangjinglin.cn/api?type=message)   | [API](./out/message.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/29) |
| datePicker 日期控件  | [Demo](http://nv.zhangjinglin.cn/api?type=datePicker)   | [API](./out/datePicker.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/30) |
| popover 气泡卡片  | [Demo](http://nv.zhangjinglin.cn/api?type=popover)   | [API](./out/popover.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/31) |
| affix 固钉  | [Demo](http://nv.zhangjinglin.cn/api?type=affix)   | [API](./out/affix.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/32) |
| tag 标签  | [Demo](http://nv.zhangjinglin.cn/api?type=tag)   | [API](./out/tag.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/33) |
| notification 通知提醒  | [Demo](http://nv.zhangjinglin.cn/api?type=notification)   | [API](./out/notification.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/34) |
| progress 进度条  | [Demo](http://nv.zhangjinglin.cn/api?type=progress)   | [API](./out/progress.md)    | [讨论](//github.com/guguaihaha/Nv-source/issues/35) |
