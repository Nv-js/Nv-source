Nv.add("./compress/1.0.1/cdn_index",function(nv,$){
    var defaults = {
        //图片大于400w,压缩至400w以下.高于500w,IOS中Canvas大小不能画出图形
        ratio:4000000,
        //铺底色,用于转换png到jpg时候出现的黑色背景问题
        bgColor:"#fff",
        //图片像素大于200w像素出现无法正常toDataURL,所以选择分段绘制
        piece:1000000,
        //分段绘制弥补色
        fillColor:"#fff",
        //压缩后的图片格式
        compressType:"image/jpeg",
        //压缩后的比率
        compressRadio:0.4,
        //压缩使用方式,base64与blob
        compressResult:"base64",
        //压缩成功后
        compressSuccess:function(data){},
        //如果开启上传请如下使用
        uploadFlag:true,
        //上传图片关键key自定义名称
        uploadBase64Name:"base64str",
        //ajax上传附带参数
        uploadOptions:{

        }
    }
    //data => blob
    function dataURItoBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], {type: mimeString});
    }
    var uploadImage ={
        filereader:function(base64){
            var img = new Image(),canvas = document.createElement("canvas"),ctx = canvas.getContext("2d"),
                tCanvas = document.createElement("canvas"),
                tCtx = tCanvas.getContext("2d");
            var file = "";
            if(!base64){
                var _files = this.files,
                    _this = this;
                if(!_files.length){
//                alert("请选择一个图片") ;
                    return false;
                }
                var files = [].slice.call(_files);
                var size = _files[0].size,
                    type = files[0].type;
                if(!/\/(?:jpeg|png|gif|jpg)/i.test(type)){
                    alert("图片类型不正确");
                    return false;
                }
                file = files[0];
            }else{

                file = dataURItoBlob(base64);
            }

            var reader = new FileReader();
            reader.onload = function(event){
                var result = this.result;
                img = new Image();
                img.src = result;
                var kbSize = size/1000;
                if(kbSize <= 200){
                    img = null;
                    uploadImage.uploadBase64(result);
                    return;
                }
                if(img.complete){
                    callback()
                }else{
                    img.onload = callback;
                }
                function callback(){
                    if(defaults.compressResult == "base64"){
                        var data = uploadImage.compress(img,size,canvas,tCanvas,ctx,tCtx);
                        // $('#img'+$(_this).attr('name')).attr('src',data);
                        defaults.compressSuccess(data);
                        if(defaults.uploadFlag){
                            uploadImage.uploadBase64(data);
                        }
                        img = null;
                    }else{
                        uploadImage.compress(img,size,canvas,tCanvas,ctx,tCtx);
                        img = null;
                    }
                }
            }
            reader.readAsDataURL(file);
        },

        compress:function(img,size,canvas,tCanvas,ctx,tCtx){
            //压缩率
            var _initSize = size, _width = parseInt(img.width),_height = parseInt(img.height);
            //图片大于400w,压缩至400w以下.高于500w,IOS中Canvas大小不能画出图形
            var ratio = (_width * _height)/defaults.ratio;
            if(ratio > 1){
                ratio = ratio*20;
            }else{
                ratio = 1;
            }
            ratio = Math.sqrt(ratio);
            var width = _width / ratio,height = _height / ratio;
            canvas.width = width;
            canvas.height = height;
            //铺底色,用于转换png到jpg时候出现的黑色背景问题
            ctx.fillStyle = defaults.bgColor;
            ctx.fillRect(0,0,width,height);
            if(defaults.compressResult == "base64"){
                //图片像素大于200w像素出现无法正常toDataURL,所以选择分段绘制
                var piece = width*height/defaults.piece;
                if(piece > 1){
                    piece = ~~(Math.sqrt(piece)+1);
                    piece += 10;
                    var nw = parseFloat(width / piece),nh = parseFloat(height / piece);
                    tCanvas.width = width,
                        tCanvas.height = nh;
                    tCtx.fillStyle = defaults.fillColor;
                    tCtx.fillRect(0,0,width,nh);
                    for(var i = 0;i<piece;i++){
                        tCtx.drawImage(img,0,i*nh,width,nh,0,0,width,nh);
                        ctx.drawImage(tCanvas,0,i*nh,width,nh);
                    }
                }else{
                    ctx.drawImage(img,0,0,width,height);
                }
                var data = canvas.toDataURL(defaults.compressType,defaults.compressRadio);
                canvas.width = canvas.height = 0;
                return data
            }else{
                canvas.toBlob(function(blob){
                    defaults.compressSuccess(blob);
                    if(defaults.uploadFlag){
                        uploadImage.uploadBase64(blob);
                    }
                }, defaults.compressType, defaults.compressRadio);
            }


        },
        uploadBase64: function(result){
            var _o = {
                data:{}
            };
            _o.data[defaults.uploadBase64Name] = result;
            var options = $.extend(true,_o,defaults.uploadOptions);
            $.ajax(options);
        }
    }




    return {
        config(options){
            defaults = $.extend(true,defaults,options);
        },
        /**
         * @Author: zhangjinglin
         * @Email: zhangjinglin@jd.com
         * @Date: Created in 2017/10/29 下午9:25
         * @Description:初始化并绑定input输入框
         * @params <String> inputSelector
         * @paramsDescription  节点选择器，主要针对表单input属性 :
         */
        initSelector(inputSelector){
            $(inputSelector).off("change").on("change",uploadImage.filereader);
        },
        initImg(imgSrc){
            uploadImage.filereader(imgSrc);
        }

    }
},{requires:["jquery"]})