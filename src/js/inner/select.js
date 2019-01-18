var _select = {
	uid:30500000,
	version:"1.0.0",
	init:function(domObject){

        this.options._obj = domObject;
		this.events.eventList(domObject);
	},
	options:{
		_obj:{},//公共变量，永远不会变
		cacheName:"select_cache"
	},
	events:{
		/**
		 * @Author: zhangjinglin
		 * @Email: zhangjinglin@jd.com
		 * @Date: Created in 2018/2/9 下午5:18
		 * @Description:绑定关闭事件
		 * @params <Object> opt
		 * @paramsDescription
		 * {
            *   selector:_selector,//选择器模块
            *   module:_module,//模块名称
            *   options:_options,//所有该模块的附加对象
            *   array:_retSelector//传入的新模块对象
            * }
		 */
		eventList:function(opt){
			$.each(opt.array,function(i,n){
				//缓存_obj'
				$(n).data(_select.options.cacheName,_select.options._obj);
				//
				_select.eventFn.getValue($(n));
				$(n).on("DOMNodeInserted",function () {
					$(n).nextAll(".zr-unselect").eq(0).remove();
                        _select.eventFn.getValue($(n));
				});
				$(n).on("DOMNodeRemoved",function () {
					$(n).nextAll(".zr-unselect").eq(0).remove();
                        _select.eventFn.getValue($(n));
				});
                //自定义事件监听DOM变化
				$(n)[0]["zrchange"] = function(opt){
					var opts = {
							eventFn:"",
							other:""
						},
						opt = $.extend(opts,opt||{});
					opt.eventFn();
					$(n).nextAll(".zr-unselect").eq(0).remove();
					_select.eventFn.getValue($(n));
				}

			});
			//点击其他地方取消相关样式
			Zr.dom.clickQueen.push(function(){
				$.each(opt.array,function(i,n){
					$(_select.options._obj.options.contentClassName).addClass(_select.options._obj.options.hideClassName);
					$(_select.options._obj.options.titleClassName).find(".zricon-arrow-down").removeClass("zricon-arrow-up")
				})
			})
		}
	},
	eventFn:{
		//获取select下option的value和text
		getValue:function(obj){
			var _obj = obj.data(_select.options.cacheName);
			obj.addClass(_obj.options.hideClassName);
			var opt = obj.find("option"),
				optArr = [];
			if (obj.find("option[selected]").length > 0){
				var optSelected = obj.find("option[selected]");
			}else if (obj.val() && !obj.attr("multiple")) {
				var optSelected = obj.find("option[value="+obj.val()+"]");
			}else if (obj.val() && obj.attr("multiple")){
				var optSelected = obj.find("option[selected]");
			}else {
				var optSelected = [];
			}
            if (opt.length > 0){
				for (var i = 0,j = opt.length; i < j; i++){
					optArr.push({
						optVal:$(opt[i]).val(),
						optText:$(opt[i]).text(),
						optSelected:$(opt[i]).attr("selected")
					})
				};
				_select.eventFn.Unselect(obj,optArr,optSelected);
			}
		},
		//生成虚拟select
		Unselect:function (obj,arr,optSelected) {
			var _obj = obj.data(_select.options.cacheName);
			var optHtml = "",
				inputHtml = "",
				inputContent = '',
				html = "",
				selectAll = '<dt class="zr-select-checkbox" zr-option-value=""><span class="zr-select-checkbox-normal"><span class=""></span></span><div class="zr-select-checkbox-text">全选</div></dt>';
			for (var i = 0,j = arr.length; i < j; i++){
				if (obj.attr("multiple")){
					var selectClass = arr[i].optSelected?"zr-select-checkbox-checked":"";
					optHtml += '<dd class="zr-select-checkbox ' + selectClass +'" zr-option-value="' + arr[i].optVal +'" zr-option-text="' + arr[i].optText +'" title="'+arr[i].optText+'"><span class="zr-select-checkbox-normal"><span></span></span><div class="zr-select-checkbox-text">' + arr[i].optText + '</div></dd>';
				}else {
					optHtml += '<dd title="'+arr[i].optText+'" zr-option-value="' + arr[i].optVal + '">' + arr[i].optText + '</dd>';
				}
			};
			if (optSelected.length > 0){
                if (obj.attr("multiple")){
                	if (optSelected.length == arr.length){
                        selectAll = '<dt class="zr-select-checkbox zr-select-checkbox-checked" zr-option-value=""><span class="zr-select-checkbox-normal"><span class=""></span></span><div class="zr-select-checkbox-text">全选</div></dt>';
					} else {
                        selectAll = '<dt class="zr-select-checkbox zr-select-checkbox-checked" zr-option-value=""><span class="zr-select-checkbox-normal"><span class="zr-select-checkbox-uncheck"></span></span><div class="zr-select-checkbox-text">全选</div></dt>';
                    };
                    for (var i = 0,j = optSelected.length; i < j; i++){
                        inputContent += '<span>' + $(optSelected[i]).text() +  '<i zr-close-text="' + $(optSelected[i]).text() +'" zr-close-val="' + $(optSelected[i]).val() + '" class="zricon-close"></i></span>';
                    };
				}else {
                    inputHtml = $(optSelected).text();
                    inputContent = '<input type="text" value="' + inputHtml + '" readonly="readonly" '
				};
			} else {
				inputHtml = arr[0].optText;
				inputContent = '<input type="text" placeholder="' + inputHtml + '" readonly="readonly" '
			};
			if (obj.attr("disabled")){
				html = '<div class="zr-unselect zr-select-disable"><div class="zr-select-title zr-input-group">' + inputContent +'disabled="disabled" class="zr-input">' +
					'<span class="zr-input-addon"><i class="zricon-arrow-down"></i></span></div><dl class="zr-select-content zr-select-hide">' + optHtml + '</dl></div>';
			}else if (obj.attr("multiple")){
				if (optSelected.length > 0){
                    html = '<div class="zr-unselect"><div class="zr-select-title zr-input-group zr-select-values">' + inputContent +
                        '<i class="zricon-arrow-down"></i></div><dl class="zr-select-content zr-select-hide">' + selectAll + optHtml + '</dl></div>';
				} else {
                    html = '<div class="zr-unselect"><div class="zr-select-title zr-input-group">' + inputContent +' class="zr-input">' +
                        '<span class="zr-input-addon"><i class="zricon-arrow-down"></i></span></div><dl class="zr-select-content zr-select-hide">' + selectAll + optHtml + '</dl></div>';
				};
			}else if (obj.hasClass(_obj.options.smClassName)){
				html = '<div class="zr-unselect"><div class="zr-select-title zr-input-group">' + inputContent +' class="zr-input zr-input-sm">' +
					'<span class="zr-input-addon zr-input-sm"><i class="zricon-arrow-down"></i></span></div><dl class="zr-select-content zr-select-hide zr-select-content-sm">' + optHtml + '</dl></div>';
			}else if (obj.hasClass(_obj.options.lgClassName)){
				html = '<div class="zr-unselect"><div class="zr-select-title zr-input-group">' + inputContent +' class="zr-input zr-input-lg">' +
					'<span class="zr-input-addon zr-input-lg"><i class="zricon-arrow-down"></i></span></div><dl class="zr-select-content zr-select-hide zr-select-content-lg">' + optHtml + '</dl></div>';
			}else {
				html = '<div class="zr-unselect"><div class="zr-select-title zr-input-group">' + inputContent +' class="zr-input">' +
					'<span class="zr-input-addon"><i class="zricon-arrow-down"></i></span></div><dl class="zr-select-content zr-select-hide">' + optHtml + '</dl></div>';
			};

			obj.after(html);
			_select.eventFn.clickFn(_obj);
			_select.eventFn.deleteOpt(_obj);
		},
		//虚拟select点击事件
		clickFn:function (_obj) {
			//value显示区域点击事件
			$(_obj.options.titleClassName).off("click").on("click",function (ev) {
				ev.stopPropagation();
				// $(_obj.options.contentClassName).addClass(_obj.options.hideClassName);
                var $contentDom = $(this).closest(_obj.options.unselectClassName).find(_obj.options.contentClassName),
                    $icon = $(this).find(".zricon-arrow-down");

				if ($(this).closest(_obj.options.unselectClassName).hasClass(_obj.options.disableClassName)){
					return false;
				}else {
					//fix for guoming,toggle is removed by jQuery in high Level 2+
                    if($contentDom.hasClass(_obj.options.hideClassName)){
						//先判断select显示出来是不是会超出屏幕底部
						var top=$(this).offset().top,
							height=$(this).parent().find(_obj.options.contentClassName).height(),
							clientHeight=$(window).height(),
							documentTop=$(document).scrollTop();
						var ht=clientHeight-(top-documentTop)-$(this).height();
						ht=parseInt(Math.abs(ht));
						if(ht<parseInt(height)){
							//到可视窗口底部距离要小于下拉框的距离，此时下拉框要朝上
							$(this).parent().find(_obj.options.contentClassName).css({
								top:"-"+(parseInt(height)+5)+"px"
							})
						}else{
							$(this).parent().find(_obj.options.contentClassName).css({
								top:"36px"
							})
						}
                        $(_obj.options.unselectClassName).find(_obj.options.contentClassName).addClass(_obj.options.hideClassName);
                        $(_obj.options.titleClassName).find(".zricon-arrow-down").removeClass("zricon-arrow-up");
                        $contentDom.removeClass(_obj.options.hideClassName);
                        $icon.addClass("zricon-arrow-up");
					}else{
                        $contentDom.addClass(_obj.options.hideClassName);
                        $icon.removeClass("zricon-arrow-up");
					}
				}
			});
			//虚拟option点击事件
			$(".zr-select-content dd").off("click").on("click",function (ev) {
				ev.stopPropagation();
                var $dtDom = $(this).closest(_obj.options.contentClassName).find("dt"),
                    $contentDom = $(this).closest(_obj.options.contentClassName),
                    $unselectDom = $(this).closest(_obj.options.unselectClassName);
				if ($(this).hasClass("zr-select-checkbox")){
					var optVal = $(this).attr("zr-option-value"),
						optText = $(this).attr("zr-option-text"),
						optArr = [],
						opt = $(this).closest(_obj.options.contentClassName).find("dd"),
						optLength = $(this).closest(_obj.options.contentClassName).find("dd").length;
					for (var i = 0,j = opt.length; i < j; i++){
						if ($(opt[i]).hasClass("zr-select-checkbox-checked")){
							optArr.push({
								optVal:$(opt[i]).attr("zr-option-value"),
								optText:$(opt[i]).attr("zr-option-text")
							})
						}
					};
					// $(this).toggleClass("zr-select-checkbox-checked");
					if ($(this).hasClass("zr-select-checkbox-checked")){
						$(this).removeClass("zr-select-checkbox-checked");
					} else {
						$(this).addClass("zr-select-checkbox-checked");
					};
					if ($(this).hasClass("zr-select-checkbox-checked")){
						optArr.push({
							optVal:optVal,
							optText:optText
						})
					}else {
						_select.eventFn.removeByValue(optArr,optVal);
					};
					_select.eventFn.appendDom($(this),_obj,optArr);
					_select.eventFn.deleteOpt(_obj);
					if (optArr && optArr.length < optLength && optArr.length > 0){
                        $dtDom.addClass("zr-select-checkbox-checked");
                        $dtDom.find(".zr-select-checkbox-normal").find("span").addClass("zr-select-checkbox-uncheck");
					}else if (optArr && optArr.length == optLength){
                        $dtDom.addClass("zr-select-checkbox-checked");
                        $dtDom.find(".zr-select-checkbox-normal").find("span").removeClass("zr-select-checkbox-uncheck");
					}else{
						var firstVal = $(this).closest(_obj.options.contentClassName).find("dd").eq(0).attr("zr-option-text");
						var html = '<input type="text" placeholder="' + firstVal +'" readonly="readonly" class="zr-input"><span class="zr-input-addon"><i class="zricon-arrow-down"></i></span>';
						$unselectDom.find(_obj.options.titleClassName).addClass("zr-select-values").removeClass("zr-select-values").html(html);
						$contentDom.css({
							"top":$unselectDom.find(_obj.options.titleClassName).height() + 4
						});
						$dtDom.removeClass("zr-select-checkbox-checked");
					};
					_select.eventFn.bindVal($(this),_obj,optArr);
				}else {
					var optVal = $(this).attr("zr-option-value"),
						optText = $(this).text();
					$contentDom.addClass(_obj.options.hideClassName);
                    $unselectDom.find(_obj.options.titleClassName).find(".zricon-arrow-down").removeClass("zricon-arrow-up");
                    $unselectDom.find("input").val(optText);
                    $unselectDom.prev(_obj.selector).eq(0).val(optVal);
                    $unselectDom.prev(_obj.selector).eq(0).trigger("change");
					// _select.eventFn.bindVal($(this),_obj,optArr);
				}
			});
			//全选点击事件
			$(".zr-select-content dt").off("click").on("click",function (ev) {
				ev.stopPropagation();
				var optArr = [];
				// $(this).toggleClass("zr-select-checkbox-checked");
                if ($(this).hasClass("zr-select-checkbox-checked")){
                    $(this).removeClass("zr-select-checkbox-checked");
                } else {
                    $(this).addClass("zr-select-checkbox-checked");
                };
				if ($(this).hasClass("zr-select-checkbox-checked")){
					$(this).siblings("dd").addClass("zr-select-checkbox-checked");
					$(this).find(".zr-select-checkbox-normal").find("span").removeClass("zr-select-checkbox-uncheck");
					var ddArr = $(this).siblings("dd");
					for (var i = 0,j = ddArr.length; i < j; i++){
						optArr.push({
							optVal:$(ddArr[i]).attr("zr-option-value"),
							optText:$(ddArr[i]).attr("zr-option-text")
						})
					};
					_select.eventFn.appendDom($(this),_obj,optArr);
					_select.eventFn.deleteOpt(_obj);
				}else {
					$(this).siblings("dd").removeClass("zr-select-checkbox-checked");
					var firstVal = $(this).siblings("dd").eq(0).attr("zr-option-text");
					var html = '<input type="text" placeholder="' + firstVal +'" readonly="readonly" class="zr-input"><span class="zr-input-addon"><i class="zricon-arrow-down"></i></span>';
					$(this).closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).addClass("zr-select-values").removeClass("zr-select-values").html(html);
					$(this).closest(_obj.options.contentClassName).css({
						"top":$(this).closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).height() + 4
					});
				};
				$(this).closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).find(".zricon-arrow-down").addClass("zricon-arrow-up");
				_select.eventFn.bindVal($(this),_obj,optArr);
			});

		},
		//根据value删除数组元素
		removeByValue:function (arr, val) {
			for(var i=0; i<arr.length; i++) {
				if(arr[i].optVal == val) {
					arr.splice(i, 1);
					break;
				}
			}
		},
		//往value展示区域渲染DOM
		appendDom:function (obj,_obj,optArr) {
			var html = "";
			for (var i = 0,j = optArr.length; i < j; i++){
				html += '<span>' + optArr[i].optText +  '<i zr-close-text="' + optArr[i].optText +'" zr-close-val="' + optArr[i].optVal + '" class="zricon-close"></i></span>';
			};
			html = html + '<i class="zricon-arrow-down"></i>';
			obj.closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).addClass("zr-select-values").html(html);
			obj.closest(_obj.options.contentClassName).css({
				"top":obj.closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).height() + 14
			});
		},
		// value删除按钮事件
		deleteOpt:function (_obj) {
            // $(_obj.options.unselectClassName).find(".zricon-close")
            $(_obj.options.unselectClassName).find(".zricon-close").off("click").on("click",function (ev) {
				ev.stopPropagation();
				var closeDomArr = $(this).closest(_obj.options.titleClassName).find(".zricon-close"),
					closestDom = $(this).closest(_obj.options.unselectClassName);
				var optArr = [];
				for (var i = 0,j = closeDomArr.length; i < j; i++){
					optArr.push({
						optVal:$(closeDomArr[i]).attr("zr-close-val"),
						optText:$(closeDomArr[i]).attr("zr-close-text"),
					});
				};
				_select.eventFn.removeByValue(optArr,$(this).attr("zr-close-val"));
				closestDom.find(".zr-select-checkbox[zr-option-value=" + $(this).attr("zr-close-val") +"]").removeClass("zr-select-checkbox-checked");
				closestDom.find("dt").find(".zr-select-checkbox-normal").find("span").addClass("zr-select-checkbox-uncheck");
				_select.eventFn.bindVal($(this),_obj,optArr);
				if (optArr.length == 0){
					closestDom.find("dt").removeClass("zr-select-checkbox-checked");
					var firstVal = closestDom.find("dd").eq(0).attr("zr-option-text");
					var html = '<input type="text" placeholder="' + firstVal +'" readonly="readonly" class="zr-input"><span class="zr-input-addon"><i class="zricon-arrow-down"></i></span>';
					$(this).closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).addClass("zr-select-values").removeClass("zr-select-values").html(html);

				};
				_select.eventFn.appendDom($(this),_obj,optArr);
				if (optArr.length == 0){
					closestDom.find(_obj.options.contentClassName).css({
						"top":closestDom.find(_obj.options.titleClassName).height() + 4
					});
				}else {
					closestDom.find(_obj.options.contentClassName).css({
						"top":closestDom.find(_obj.options.titleClassName).height() + 14
					});
				}
				_select.eventFn.deleteOpt(_obj);
			})
		},
		// 往真实select绑定选中的数据
		bindVal:function (obj,_obj,optArr) {
			var selectVal = [],
				selectDom = obj.closest(_obj.options.unselectClassName).prev(_obj.selector).eq(0);
			for (var i = 0,j = optArr.length; i < j; i++){
				selectVal.push(optArr[i].optVal);
			};
			selectDom.val(selectVal);
			selectDom.trigger("change");
		}
	},
	ajax:{}
}





