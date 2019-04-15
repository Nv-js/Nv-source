# Form 表单

表单用于向用户显示数据，并允许用户输入数据，提交数据，包含输入框、复选框和选择器等组件

---

### 一个表单有三个基本组成部分

+ 表单标签

+ 表单域：包含了文本框、密码框、隐藏域、多行文本框、复选框、单选框、下拉选择框和文件上传框等

+ 表单按钮：包括提交按钮

<br/>

### 基础样式

包括各种表单项，比如输入框、选择器、开关、单选框、多选框等

代码结构如下：

```html
    <div class="nv-form">
       <div class="nv-form-item nv-row">
           <label class="nv-form-label">
               <span class="nv-form-item-title nv-col-5">input</span>
               <div class="nv-form-item-control nv-col-18 nv-col-offset-1">
                   <input type="text" placeholder="Please input text" class="nv-input">
               </div>
           </label>
       </div>
       <div class="nv-form-item nv-row">
               <span class="nv-form-item-title nv-col-5">Select</span>
               <div class="nv-form-item-control nv-col-18 nv-col-offset-1">
                   <select name="country" class="nv-select">
                       <option value="">请选择一个城市</option>
                       <option value="010">北京</option>
                       <option value="021">上海</option>
                       <option value="0571">杭州</option>
                   </select>
               </div>
       </div>
       <div class="nv-form-item nv-row">
           <span class="nv-form-item-title nv-col-5">Radio</span>
           <div class="nv-form-item-control nv-col-18 nv-col-offset-1">
               <input type="radio" name="demo0" class="nv-radio" value="0" title="Radio1" checked="checked">
               <input type="radio" name="demo0" class="nv-radio" value="1" title="Radio2">
           </div>
       </div>
       <div class="nv-form-item nv-row">
           <span class="nv-form-item-title nv-col-5">Checkbox</span>
           <div class="nv-form-item-control nv-col-18 nv-col-offset-1">
               <input type="checkbox" name="meau" class="nv-checkbox" value="0" title="Checkbox1">
               <input type="checkbox" name="meau" class="nv-checkbox" value="1" title="Checkbox2" checked="true">
               <input type="checkbox" name="meau" class="nv-checkbox" value="1" title="Checkbox3">
           </div>
       </div>
       <div class="nv-form-item nv-row">
           <label class="nv-form-label">
               <span class="nv-form-item-title nv-col-5">
                   Text
               </span>
               <div class="nv-form-item-control nv-col-18 nv-col-offset-1">
                   <textarea class="nv-textarea" placeholder="Textarea"></textarea>
               </div>
           </label>
       </div>
       <div class="nv-form-item nv-row">
           <span class="nv-form-item-title nv-col-5">Upload</span>
           <div class="nv-form-item-control nv-col-18 nv-col-offset-1">
               <input type="file" title="Click to upload" class="nv-upload">
           </div>
       </div>
       <div class="nv-form-item nv-row">
           <div class="nv-form-item-control nv-form-btn nv-col-18 nv-col-offset-6">
               <button type="button" class="nv-btn nv-btn-primary">Submit</button>
               <button type="button" class="nv-btn nv-btn-default">Cancel</button>
           </div>
       </div>
    </div>
```

<br/>

### 表单验证

即时反馈给用户所输入的表单状态


代码结构如下：

```html
    <div class="nv-form">
        <div class="nv-form-item nv-row nv-form-item-error">
            <label class="nv-form-label">
                <span class="nv-form-item-title nv-col-5">input</span>
                <div class="nv-form-item-control nv-col-18 nv-col-offset-1">
                    <input type="text" placeholder="Please input text" class="nv-input">
                    <p class="nv-error-message">Your options is incorrect, please re-enter it.</p>
                </div>
            </label>
        </div>
        <div class="nv-form-item nv-row nv-form-item-error">
                <span class="nv-form-item-title nv-col-5">Select</span>
                <div class="nv-form-item-control nv-col-18 nv-col-offset-1">
                    <select name="country" class="nv-select">
                        <option value="">请选择一个城市</option>
                        <option value="010">北京</option>
                        <option value="021">上海</option>
                        <option value="0571">杭州</option>
                    </select>
                    <p class="nv-error-message">Your options is incorrect, please re-enter it.</p>
                </div>
        </div>
        <div class="nv-form-item nv-row nv-form-item-error">
            <span class="nv-form-item-title nv-col-5">Radio</span>
            <div class="nv-form-item-control nv-col-18 nv-col-offset-1">
                <input type="radio" name="demo1" class="nv-radio" value="0" title="Radio1" checked="true">
                <input type="radio" name="demo1" class="nv-radio" value="1" title="Radio2">
                <p class="nv-error-message">Your options is incorrect, please re-enter it.</p>
            </div>
        </div>
        <div class="nv-form-item nv-row nv-form-item-error">
            <span class="nv-form-item-title nv-col-5">Checkbox</span>
            <div class="nv-form-item-control nv-col-18 nv-col-offset-1">
                <input type="checkbox" name="meau" class="nv-checkbox" value="0" title="Checkbox1">
                <input type="checkbox" name="meau" class="nv-checkbox" value="1" title="Checkbox2" checked="true">
                <input type="checkbox" name="meau" class="nv-checkbox" value="1" title="Checkbox3">
                <p class="nv-error-message">Your options is incorrect, please re-enter it.</p>
            </div>
        </div>
        <div class="nv-form-item nv-row nv-form-item-error">
            <label class="nv-form-label">
                <span class="nv-form-item-title nv-col-5">
                    Text
                </span>
                <div class="nv-form-item-control nv-col-18 nv-col-offset-1">
                    <textarea class="nv-textarea" placeholder="Textarea"></textarea>
                    <p class="nv-error-message">Your options is incorrect, please re-enter it.</p>
                </div>
            </label>
        </div>
        <div class="nv-form-item nv-row nv-form-item-error">
            <span class="nv-form-item-title nv-col-5">Upload</span>
            <div class="nv-form-item-control nv-col-18 nv-col-offset-1">
                <input type="file" title="Click to upload" class="nv-upload">
                <p class="nv-error-message">Your options is incorrect, please re-enter it.</p>
            </div>
        </div>
        <div class="nv-form-item nv-row nv-form-item-error">
            <div class="nv-form-item-control nv-form-btn nv-col-18 nv-col-offset-6">
                <button type="button" class="nv-btn nv-btn-primary">Submit</button>
                <button type="button" class="nv-btn nv-btn-default">Cancel</button>
            </div>
        </div>
    </div>
```
<br/>






[Demo展示](http://www.nv-js.com/api?type=form)

[留言和讨论](https://github.com/guguaihaha/nv-source/issues/15)

    