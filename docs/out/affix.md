# Affix 固钉

将元素固定在页面的某个位置，一直保持可见

---

### 基础样式

最基本的固钉：固定在顶部以及底部


```html
   <!--HTML-->
   <div class="nv-affix">
       <button type="button" id="demo-top" class="nv-btn nv-btn-primary">Affix top</button>
       <button type="button" id="demo-bottom" class="nv-btn nv-btn-primary">Affix bottom</button>
   </div>
   <!--Javascript-->
   Nv.use("affix",function(nv,affix){
       affix.init({
           target:"#demo-top"
       })
       affix.init({
           target:"#demo-bottom",
           type:"bottom"
       })
   });
```

<br/>

### 自定义样式

可以自定义固钉距离顶部以及底部的距离


```html
<!--HTML-->
    <button type="button" id="demo-sop" class="nv-btn nv-btn-primary">Affix top</button>
    <button type="button" id="demo-sottom" class="nv-btn nv-btn-primary">Affix bottom</button>
    <!--Javascript-->
    Nv.use("affix",function(nv,affix){
        affix.init({
            target:"#demo-sop",
            offsetTop:40
        })
        affix.init({
            target:"#demo-sottom",
            type:"bottom",
            offsetBottom:40
        })
    });

```

<br/>





[Demo展示](http://www.nv-js.com/api?type=affix)

[留言和讨论](https://github.com/Nv-js/nv-source/issues/32)

    