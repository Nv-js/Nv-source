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
    Nv.use("dataPicker",function(nv,picker){
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

### API

+ options
 
  方法  | 入参（是否必要）   |  描述  |
 | --------    | :----- | :----  |
 | language | String(选填)  | 目前支持zh-CN(默认)和EN两种选择，可以拓展，不设置读取默认组件库配置,[语言列表](https://github.com/guguaihaha/Nv-engine/blob/master/docs/language.md) |
 | target  | String(选填)    | 选择器，可以不填写直接调取，填写后自动绑定关系，支持class、id、element |
 | type | String(选填)   | 可选参数:<br/> 'month'<br/>'year'<br/>'time'<br/>'week'<br/>'normal'<br/>'range'<br/>'datetime'(默认) |
 | autoClose  | Boolean(选填)  | 警告信息提示，可单独配置相关信息 |
 | showBtnTools  | Boolean(选填)   | 错误信息提示，可单独配置相关信息 |
 | format  | String(选填)    | 加载信息提示，可单独配置相关信息 |
 | isTabSwitch | Boolean(选填)  | 加载隐藏 |
 | autoOffset  |Object (选填)  | 信息警告提示框，content为信息内容|
 | initialDate  | Date String (选填)  | 信息确认提示框，content为信息内容 |
 | minDate  | Date String (选填)  | 信息确认提示框，content为信息内容 |
 | maxDate  | Date String (选填)  | 信息确认提示框，content为信息内容 |
 | onOpen(time)  | Function (选填)  | 信息确认提示框，content为信息内容 |
 | onSelect(time)  | Function (选填)  | 信息确认提示框，content为信息内容 |
 | onSure(time)  | Function (选填) | 信息确认提示框，content为信息内容 |
 | onClose(time)  | Function (选填)  | 信息确认提示框，content为信息内容 |
 | onClear(time)  | Function (选填) | 信息确认提示框，content为信息内容 |



[Demo展示](http://nv.zhangjinglin.cn/api?type=message)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/29)

    