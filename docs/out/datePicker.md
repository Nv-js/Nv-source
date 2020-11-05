# DatePicker 日期控件

输入或选择日期的控件，支持年、月、日期等类型

---

### 基础样式

最基础的日期选择框,只需要使用组件名称"datePicker"，然后调动datePicker.init(options)即可


```html
   <!--选择日期-->
   <div style="width:240px">
       <div class="nv-input-group">
           <input type="text" placeholder="Select Date" class="nv-input" id="date-1">
           <span class="nv-input-addon">
             <i class="nvicon-calendar-empty"></i>
           </span>
       </div>
   </div>
   <!--选择日期与时间-->
   <div style="width:240px">
       <div class="nv-input-group">
           <input type="text" placeholder="Select DateTime" class="nv-input" id="date-2">
           <span class="nv-input-addon">
             <i class="nvicon-calendar-empty"></i>
           </span>
       </div>
   </div>
   <!--读取输入框日期选择-->
   <div style="width:240px">
       <div class="nv-input-group">
           <input type="text" placeholder="YYYY-MM-DD HH:mm:ss" value="1987-07-29 06:10:38" class="nv-input" id="date-5">
           <span class="nv-input-addon">
             <i class="nvicon-calendar-empty"></i>
           </span>
       </div>
   </div>
   <!--选择年-->
   <div style="width:240px">
       <div class="nv-input-group">
           <input type="text" placeholder="Select year" class="nv-input" id="date-3">
           <span class="nv-input-addon">
             <i class="nvicon-calendar-empty"></i>
           </span>
       </div>
   </div>
   <!--选择月-->
   <div style="width:240px">
       <div class="nv-input-group">
           <input type="text" placeholder="Select month" class="nv-input" id="date-4">
           <span class="nv-input-addon">
             <i class="nvicon-calendar-empty"></i>
           </span>
       </div>
   </div>
   <!--选择周-->
   <div style="width:240px">
       <div class="nv-input-group">
           <input type="text" placeholder="Select week" class="nv-input" id="date-6">
           <span class="nv-input-addon">
             <i class="nvicon-calendar-empty"></i>
           </span>
       </div>
   </div>
   <!--双日历选择区间-->
   <div style="width:360px">
       <div class="nv-input-group nv-input nv-input-datepicker" id="date-7">
           <input type="text" class="nv-datepicker-range-start" placeholder="Start Date" readonly>
           —
           <input type="text" class="nv-datepicker-range-end" placeholder="End Date" readonly>
           <span class="nv-input-addon">
             <i class="nvicon-calendar-empty"></i>
           </span>
       </div>
   </div>
<script type="text/javascript">
    Nv.use("datePicker",function(nv,picker){
           picker.init({
               target:"#date-1",
               type:"normal"
           });
           picker.init({
               target:"#date-2",
               type:"datetime",
               format:"YYYY-MM-DD HH"
           });
           picker.init({
               target:"#date-5",
               type:"datetime"
           });
           picker.init({
               target:"#date-3",
               type:"year",
               autoClose:true
           });
           picker.init({
               target:"#date-4",
               type:"month"
           });
           picker.init({
               target:"#date-6",
               type:"week"
           });
           picker.init({
               target:'#date-7',
               type:"range"
           })
       })
</script>
```

<br/>

> 综上，datePicker.init(options)配置项目如下：

[配置参数详见demo中options配置文档](http://www.nv-js.com/api?type=datePicker)



[Demo展示](http://www.nv-js.com/api?type=datePicker)

[留言和讨论](https://github.com/Nv-js/nv-source/issues/30)

    
