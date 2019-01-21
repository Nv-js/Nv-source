var _upload = {
    uid: 30900000,
    version: "1.0.0",
    init: function(domObject){
        this.options._obj = domObject;
        this.events.uploadEvent(domObject);
    },
    options: {
        _obj: {}//公共变量，永远不会变
    },
    events:{
        uploadEvent: function(opt){
            if(opt.array.length>0){
                $.each(opt.array,function(index,elem){
                    var str   = "",
                        a     = "<a class='nv-btn nv-btn-default'></a>",
                        sDef = "Click to upload",
                        sDef2 = "Select File",
                        label = $("<label class='nv-upload-module'></label>");

                    if($(elem).hasClass(_upload.options._obj.options.avatarClassName)){    //头像上传
                        label.addClass(_upload.options._obj.options.avatarClassName);
                        str  += "<i class='nvicon-add'></i>";
                    }else if($(elem).hasClass(_upload.options._obj.options.pictureClassName)){   //多图片上传
                        label.addClass(_upload.options._obj.options.pictureClassName);
                        str  += "<i class='nvicon-add'></i>";
                    }else if($(elem).hasClass(_upload.options._obj.options.dragClassName)){   //拖拽上传
                        label.addClass(_upload.options._obj.options.dragClassName);
                        str  += "<i class='nvicon-upload-empty'></i><h4>" + $(elem).attr('title') +
                                "</h4><p>" + $(elem).attr('alt') + "</p>";
                    }else if($(elem).hasClass(_upload.options._obj.options.manualClassName)){   // 手动上传
                        label = label.append(a).addClass(_upload.options._obj.options.manualClassName);
                        str  += "<i class='nvicon-doc-empty'></i>";
                        $(elem).attr("title")== undefined ? str += sDef2 : str += $(elem).attr("title");
                    }else if($(elem).hasClass(_upload.options._obj.options.explainClassName)){   //带文字说明
                        var p = $('<p>' + $(elem).attr('alt') + '</p>');
                        label = label.append(a).addClass(_upload.options._obj.options.explainClassName).append(p);
                        str  += "<i class='nvicon-upload-1'></i>";
                        $(elem).attr("title")== undefined ? str += sDef : str += $(elem).attr("title");
                    }else{   //默认上传
                        label = label.append(a);
                        str  += "<i class='nvicon-upload-1'></i>";
                        $(elem).attr("title")== undefined ? str += sDef : str += $(elem).attr("title");
                    }
                    $(elem).addClass(_upload.options._obj.options.hideClassName).wrap(label);
                    $(elem).before(str);

                })
            }
        }
    },
    eventFn:{

    },
    ajax:{}

}

