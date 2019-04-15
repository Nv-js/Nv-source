# Popover 气泡卡片

文字提示气泡框，当鼠标悬浮时出现

---

### 基础样式

触发按钮添加`nv-popover-btn`类，默认是hover触发。


```html
   <span class="nv-popover" id="nv-popover-clcik">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">Click</button>
       <div class="nv-popover-content" >
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <span class="nv-popover" id="nv-popover-hover">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">Hover</button>
       <div class="nv-popover-content" >
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover hover <br/>
               I am popover hover <br/>
               I am popover hover
           </div>
       </div>
   </span>
   <script type="text/javascript">
       Nv.ready(function(){
           Nv.use("popover",function(nv,popover){
               popover.init({
                   target: '#nv-popover-clcik',
                   position: 'top',
                   width: '230px',
                   event: 'click'
               });
               popover.init({
                  target: '#nv-popover-hover',
                  position: 'right'
               });
           });
       })
   
   </script>
```

<br/>

### 不同的展示位置

位置有12个方向


```html
   <span class="nv-popover" id="nv-popover-tl">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">上左</button>
       <div class="nv-popover-content">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <span class="nv-popover" id="nv-popover-top">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">上边</button>
       <div class="nv-popover-content">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <span class="nv-popover" id="nv-popover-tr">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">上右</button>
       <div class="nv-popover-content">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <span class="nv-popover" id="nv-popover-lt">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">左上</button>
       <div class="nv-popover-content">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <span class="nv-popover" id="nv-popover-left">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">左边</button>
       <div class="nv-popover-content">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <span class="nv-popover" id="nv-popover-lb">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">左下</button>
       <div class="nv-popover-content">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <span class="nv-popover" id="nv-popover-rt">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">右上</button>
       <div class="nv-popover-content">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <span class="nv-popover" id="nv-popover-right">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">右边</button>
       <div class="nv-popover-content">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <span class="nv-popover" id="nv-popover-rb">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">右下</button>
       <div class="nv-popover-content">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <span class="nv-popover" id="nv-popover-bl">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">下左</button>
       <div class="nv-popover-content">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <span class="nv-popover" id="nv-popover-bottom">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">下边</button>
       <div class="nv-popover-content">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <span class="nv-popover" id="nv-popover-br">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">下右</button>
       <div class="nv-popover-content">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am popover content <br/>
               I am popover content <br/>
               I am popover content
           </div>
       </div>
   </span>
   <script>
       popover.init({
       target: '#nv-popover-tl',
       position: 'tl'
   });
   popover.init({
       target: '#nv-popover-top',
       position: 'top'
   });
   popover.init({
       target: '#nv-popover-tr',
       position: 'tr'
   });
   popover.init({
       target: '#nv-popover-lt',
       position: 'lt'
   });
   popover.init({
       target: '#nv-popover-left',
       position: 'left'
   });
   popover.init({
       target: '#nv-popover-lb',
       position: 'lb'
   });
   popover.init({
       target: '#nv-popover-rt',
       position: 'rt'
   });
   popover.init({
       target: '#nv-popover-right',
       position: 'right'
   });
   popover.init({
       target: '#nv-popover-rb',
       position: 'rb'
   });
   popover.init({
       target: '#nv-popover-bl',
       position: 'bl'
   });
   popover.init({
       target: '#nv-popover-bottom',
       position: 'bottom'
   });
   popover.init({
       target: '#nv-popover-br',
       position: 'br'
   });
   </script> 
```

<br/>

### 同时初始化多个卡片

支持使用class类名同时初始化多个气泡卡片


```html
   <span class="nv-popover same-popover">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">下左</button>
       <div class="nv-popover-content" >
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am init at the same time1 <br/>
               I am init at the same time <br/>
               I am init at the same time
           </div>
       </div>
   </span>
   <span class="nv-popover same-popover">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">下左</button>
       <div class="nv-popover-content" >
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am init at the same time2 <br/>
               I am init at the same time <br/>
               I am init at the same time
           </div>
       </div>
   </span>
   <span class="nv-popover same-popover">
       <button type="button" class="nv-btn nv-btn-default nv-popover-btn">下左</button>
       <div class="nv-popover-content" >
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               I am init at the same time3 <br/>
               I am init at the same time <br/>
               I am init at the same time
           </div>
       </div>
   </span>
   <script>
       popover.init({
           target: '.same-popover',
           position: 'bl'
       })
   </script>
```

<br/>

### 内嵌操作

更为轻量的弹窗框，可操作


```html
   <span class="nv-popover" id="nv-popover-delete">
       <p class="nv-popover-btn">Delete</p>
       <div class="nv-popover-content" style="display: none">
           <div class="nv-popover-arrow"></div>
           <div class="nv-popover-inner">
               <p style="padding: 10px 0 20px 0">Are you sure delete this task?</p>
               <div style="text-align: right;">
                   <button class="nv-btn nv-btn-default nv-btn-sm" style="margin-right: 8px;">No</button><button class="nv-btn nv-btn-primary nv-btn-sm nv-popover-confirm-ok">Ok</button>
               </div> 
           </div>
       </div>
   </span>
   <script>
       popover.init({
       target: '#nv-popover-delete',
       onClose: function(dom){
           console.log(dom.id);
       },
       onOpen: function(dom){
           console.log(dom.id)
       }
   });
   </script> 
```

<br/>

### 内嵌信息

触发按钮添加`nv-popover-btn`类，默认是hover触发。


```html
   <span class="nv-popover" id="nv-popover-table">
   <button class="nv-btn nv-btn-default nv-popover-btn">Click</button>
   <div class="nv-popover-content" style="display: none">
       <div class="nv-popover-arrow"></div>
       <div class="nv-popover-inner">
           <div class="nv-table-wrap">
               <table>
                   <thead>
                   <tr>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Age</th>
                   </tr>
                   </thead>
                   <tbody>
                   <tr>
                       <td>001</td>
                       <td>Otto Clay</td>
                       <td>23</td>
                   </tr>
                   <tr>
                       <td>002</td>
                       <td>Otto Clay</td>
                       <td>23</td>
                   </tr>
                   <tr>
                       <td>003</td>
                       <td>Otto Clay</td>
                       <td>23</td>
                   </tr>
                   <tr>
                       <td>004</td>
                       <td>Otto Clay</td>
                       <td>23</td>
                   </tr>
                   </tbody>
               </table>
           </div>
       </div>
   </div>
</span>
<script>
   popover.init({
   target: '#nv-popover-table',
   position: 'rt',
   width: '400',
   event: 'click',
   onOpen: function(dom){
       console.log("打开");
   },
   onClose: function(dom){
       console.log("关闭")
   }
});
</script> 
```

<br/>

### API

popover.init(options)

+ `options`配置选项

| 属性名称  | 类型（是否必要）   |  描述  |
| --------    | :----- | :----  |
| target  | String（必填）  | 触发的目标元素，可使用ID选择器或类选择器（类选择器可同时初始化多个属性相同的气泡卡片） |
| width  | Number (选填)   | 值为number类型数字，定义卡片宽度，默认为240 |
| position  | String（必填）  | 卡片的位置，默认为top，可选值为tl,top,tr,lt,left,lb,rt,right,rb,bl,bottom,br |
| event  | String（必填）   | 触发的事件，默认为hover，可选click |
| onOpen  | Function (选填)  | 卡片显示时的回调函数 |
| onClose  | Function (选填)   | 卡片关闭时的回调函数 |





[Demo展示](http://www.nv-js.com/api?type=popover)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/31)

    