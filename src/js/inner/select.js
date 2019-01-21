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
					$(n).nextAll(".nv-unselect").eq(0).remove();
                        _select.eventFn.getValue($(n));
				});
				$(n).on("DOMNodeRemoved",function () {
					$(n).nextAll(".nv-unselect").eq(0).remove();
                        _select.eventFn.getValue($(n));
				});
                //自定义事件监听DOM变化
				$(n)[0]["nvchange"] = function(opt){
					var opts = {
							eventFn:"",
							other:""
						},
						opt = $.extend(opts,opt||{});
					opt.eventFn();
					$(n).nextAll(".nv-unselect").eq(0).remove();
					_select.eventFn.getValue($(n));
				}

			});
			//点击其他地方取消相关样式
			nv.dom.clickQueen.push(function(){
				$.each(opt.array,function(i,n){
					$(_select.options._obj.options.contentClassName).addClass(_select.options._obj.options.hideClassName);
					$(_select.options._obj.options.titleClassName).find(".nvicon-arrow-down").removeClass("nvicon-arrow-up")
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
				selectAll = '<dt class="nv-select-checkbox" nv-option-value=""><span class="nv-select-checkbox-normal"><span class=""></span></span><div class="nv-select-checkbox-text">全选</div></dt>';
			for (var i = 0,j = arr.length; i < j; i++){
				if (obj.attr("multiple")){
					var selectClass = arr[i].optSelected?"nv-select-checkbox-checked":"";
					optHtml += '<dd class="nv-select-checkbox ' + selectClass +'" nv-option-value="' + arr[i].optVal +'" nv-option-text="' + arr[i].optText +'" title="'+arr[i].optText+'"><span class="nv-select-checkbox-normal"><span></span></span><div class="nv-select-checkbox-text">' + arr[i].optText + '</div></dd>';
				}else {
					optHtml += '<dd title="'+arr[i].optText+'" nv-option-value="' + arr[i].optVal + '">' + arr[i].optText + '</dd>';
				}
			};
			if (optSelected.length > 0){
                if (obj.attr("multiple")){
                	if (optSelected.length == arr.length){
                        selectAll = '<dt class="nv-select-checkbox nv-select-checkbox-checked" nv-option-value=""><span class="nv-select-checkbox-normal"><span class=""></span></span><div class="nv-select-checkbox-text">全选</div></dt>';
					} else {
                        selectAll = '<dt class="nv-select-checkbox nv-select-checkbox-checked" nv-option-value=""><span class="nv-select-checkbox-normal"><span class="nv-select-checkbox-uncheck"></span></span><div class="nv-select-checkbox-text">全选</div></dt>';
                    };
                    for (var i = 0,j = optSelected.length; i < j; i++){
                        inputContent += '<span>' + $(optSelected[i]).text() +  '<i nv-close-text="' + $(optSelected[i]).text() +'" nv-close-val="' + $(optSelected[i]).val() + '" class="nvicon-close"></i></span>';
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
				html = '<div class="nv-unselect nv-select-disable"><div class="nv-select-title nv-input-group">' + inputContent +'disabled="disabled" class="nv-input">' +
					'<span class="nv-input-addon"><i class="nvicon-arrow-down"></i></span></div><dl class="nv-select-content nv-select-hide">' + optHtml + '</dl></div>';
			}else if (obj.attr("multiple")){
				if (optSelected.length > 0){
                    html = '<div class="nv-unselect"><div class="nv-select-title nv-input-group nv-select-values">' + inputContent +
                        '<i class="nvicon-arrow-down"></i></div><dl class="nv-select-content nv-select-hide">' + selectAll + optHtml + '</dl></div>';
				} else {
                    html = '<div class="nv-unselect"><div class="nv-select-title nv-input-group">' + inputContent +' class="nv-input">' +
                        '<span class="nv-input-addon"><i class="nvicon-arrow-down"></i></span></div><dl class="nv-select-content nv-select-hide">' + selectAll + optHtml + '</dl></div>';
				};
			}else if (obj.hasClass(_obj.options.smClassName)){
				html = '<div class="nv-unselect"><div class="nv-select-title nv-input-group">' + inputContent +' class="nv-input nv-input-sm">' +
					'<span class="nv-input-addon nv-input-sm"><i class="nvicon-arrow-down"></i></span></div><dl class="nv-select-content nv-select-hide nv-select-content-sm">' + optHtml + '</dl></div>';
			}else if (obj.hasClass(_obj.options.lgClassName)){
				html = '<div class="nv-unselect"><div class="nv-select-title nv-input-group">' + inputContent +' class="nv-input nv-input-lg">' +
					'<span class="nv-input-addon nv-input-lg"><i class="nvicon-arrow-down"></i></span></div><dl class="nv-select-content nv-select-hide nv-select-content-lg">' + optHtml + '</dl></div>';
			}else {
				html = '<div class="nv-unselect"><div class="nv-select-title nv-input-group">' + inputContent +' class="nv-input">' +
					'<span class="nv-input-addon"><i class="nvicon-arrow-down"></i></span></div><dl class="nv-select-content nv-select-hide">' + optHtml + '</dl></div>';
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
                    $icon = $(this).find(".nvicon-arrow-down");

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
                        $(_obj.options.titleClassName).find(".nvicon-arrow-down").removeClass("nvicon-arrow-up");
                        $contentDom.removeClass(_obj.options.hideClassName);
                        $icon.addClass("nvicon-arrow-up");
					}else{
                        $contentDom.addClass(_obj.options.hideClassName);
                        $icon.removeClass("nvicon-arrow-up");
					}
				}
			});
			//虚拟option点击事件
			$(".nv-select-content dd").off("click").on("click",function (ev) {
				ev.stopPropagation();
                var $dtDom = $(this).closest(_obj.options.contentClassName).find("dt"),
                    $contentDom = $(this).closest(_obj.options.contentClassName),
                    $unselectDom = $(this).closest(_obj.options.unselectClassName);
				if ($(this).hasClass("nv-select-checkbox")){
					var optVal = $(this).attr("nv-option-value"),
						optText = $(this).attr("nv-option-text"),
						optArr = [],
						opt = $(this).closest(_obj.options.contentClassName).find("dd"),
						optLength = $(this).closest(_obj.options.contentClassName).find("dd").length;
					for (var i = 0,j = opt.length; i < j; i++){
						if ($(opt[i]).hasClass("nv-select-checkbox-checked")){
							optArr.push({
								optVal:$(opt[i]).attr("nv-option-value"),
								optText:$(opt[i]).attr("nv-option-text")
							})
						}
					};
					// $(this).toggleClass("nv-select-checkbox-checked");
					if ($(this).hasClass("nv-select-checkbox-checked")){
						$(this).removeClass("nv-select-checkbox-checked");
					} else {
						$(this).addClass("nv-select-checkbox-checked");
					};
					if ($(this).hasClass("nv-select-checkbox-checked")){
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
                        $dtDom.addClass("nv-select-checkbox-checked");
                        $dtDom.find(".nv-select-checkbox-normal").find("span").addClass("nv-select-checkbox-uncheck");
					}else if (optArr && optArr.length == optLength){
                        $dtDom.addClass("nv-select-checkbox-checked");
                        $dtDom.find(".nv-select-checkbox-normal").find("span").removeClass("nv-select-checkbox-uncheck");
					}else{
						var firstVal = $(this).closest(_obj.options.contentClassName).find("dd").eq(0).attr("nv-option-text");
						var html = '<input type="text" placeholder="' + firstVal +'" readonly="readonly" class="nv-input"><span class="nv-input-addon"><i class="nvicon-arrow-down"></i></span>';
						$unselectDom.find(_obj.options.titleClassName).addClass("nv-select-values").removeClass("nv-select-values").html(html);
						$contentDom.css({
							"top":$unselectDom.find(_obj.options.titleClassName).height() + 4
						});
						$dtDom.removeClass("nv-select-checkbox-checked");
					};
					_select.eventFn.bindVal($(this),_obj,optArr);
				}else {
					var optVal = $(this).attr("nv-option-value"),
						optText = $(this).text();
					$contentDom.addClass(_obj.options.hideClassName);
                    $unselectDom.find(_obj.options.titleClassName).find(".nvicon-arrow-down").removeClass("nvicon-arrow-up");
                    $unselectDom.find("input").val(optText);
                    $unselectDom.prev(_obj.selector).eq(0).val(optVal);
                    $unselectDom.prev(_obj.selector).eq(0).trigger("change");
					// _select.eventFn.bindVal($(this),_obj,optArr);
				}
			});
			//全选点击事件
			$(".nv-select-content dt").off("click").on("click",function (ev) {
				ev.stopPropagation();
				var optArr = [];
				// $(this).toggleClass("nv-select-checkbox-checked");
                if ($(this).hasClass("nv-select-checkbox-checked")){
                    $(this).removeClass("nv-select-checkbox-checked");
                } else {
                    $(this).addClass("nv-select-checkbox-checked");
                };
				if ($(this).hasClass("nv-select-checkbox-checked")){
					$(this).siblings("dd").addClass("nv-select-checkbox-checked");
					$(this).find(".nv-select-checkbox-normal").find("span").removeClass("nv-select-checkbox-uncheck");
					var ddArr = $(this).siblings("dd");
					for (var i = 0,j = ddArr.length; i < j; i++){
						optArr.push({
							optVal:$(ddArr[i]).attr("nv-option-value"),
							optText:$(ddArr[i]).attr("nv-option-text")
						})
					};
					_select.eventFn.appendDom($(this),_obj,optArr);
					_select.eventFn.deleteOpt(_obj);
				}else {
					$(this).siblings("dd").removeClass("nv-select-checkbox-checked");
					var firstVal = $(this).siblings("dd").eq(0).attr("nv-option-text");
					var html = '<input type="text" placeholder="' + firstVal +'" readonly="readonly" class="nv-input"><span class="nv-input-addon"><i class="nvicon-arrow-down"></i></span>';
					$(this).closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).addClass("nv-select-values").removeClass("nv-select-values").html(html);
					$(this).closest(_obj.options.contentClassName).css({
						"top":$(this).closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).height() + 4
					});
				};
				$(this).closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).find(".nvicon-arrow-down").addClass("nvicon-arrow-up");
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
				html += '<span>' + optArr[i].optText +  '<i nv-close-text="' + optArr[i].optText +'" nv-close-val="' + optArr[i].optVal + '" class="nvicon-close"></i></span>';
			};
			html = html + '<i class="nvicon-arrow-down"></i>';
			obj.closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).addClass("nv-select-values").html(html);
			obj.closest(_obj.options.contentClassName).css({
				"top":obj.closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).height() + 14
			});
		},
		// value删除按钮事件
		deleteOpt:function (_obj) {
            // $(_obj.options.unselectClassName).find(".nvicon-close")
            $(_obj.options.unselectClassName).find(".nvicon-close").off("click").on("click",function (ev) {
				ev.stopPropagation();
				var closeDomArr = $(this).closest(_obj.options.titleClassName).find(".nvicon-close"),
					closestDom = $(this).closest(_obj.options.unselectClassName);
				var optArr = [];
				for (var i = 0,j = closeDomArr.length; i < j; i++){
					optArr.push({
						optVal:$(closeDomArr[i]).attr("nv-close-val"),
						optText:$(closeDomArr[i]).attr("nv-close-text"),
					});
				};
				_select.eventFn.removeByValue(optArr,$(this).attr("nv-close-val"));
				closestDom.find(".nv-select-checkbox[nv-option-value=" + $(this).attr("nv-close-val") +"]").removeClass("nv-select-checkbox-checked");
				closestDom.find("dt").find(".nv-select-checkbox-normal").find("span").addClass("nv-select-checkbox-uncheck");
				_select.eventFn.bindVal($(this),_obj,optArr);
				if (optArr.length == 0){
					closestDom.find("dt").removeClass("nv-select-checkbox-checked");
					var firstVal = closestDom.find("dd").eq(0).attr("nv-option-text");
					var html = '<input type="text" placeholder="' + firstVal +'" readonly="readonly" class="nv-input"><span class="nv-input-addon"><i class="nvicon-arrow-down"></i></span>';
					$(this).closest(_obj.options.unselectClassName).find(_obj.options.titleClassName).addClass("nv-select-values").removeClass("nv-select-values").html(html);

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





