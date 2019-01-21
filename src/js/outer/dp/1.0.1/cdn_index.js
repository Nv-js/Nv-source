Nv.add("./dp/1.0.1/cdn_index",function(nv){
    //
    var window = nv.window,
        document = nv.document;
    //
    var _col = _col || [];
    var _uuid = Math.floor(Math.random()*2147483648).toString(36);
    _col.push(['_accountLog',_uuid]);
    var params = {};
    //Document对象数据
    if (document) {
        params.domain = document.domain || '';
        params.url = document.URL || '';
        params.cookie = document.cookie || '';
        params.referrer = document.referrer || '';
        params.title = document.title || '';
    }
    //统计屏幕宽度
    var _scr = window.screen,
        _w = _scr.width,
        _h = _scr.height;
    params.screen = _w + "*" + _h;
    //颜色深度
    if(_scr.colorDepth){
        params.colorDepth = _scr.colorDepth;
    }


    //navigator对象数据
    if (navigator) {
        params.lang = navigator.language || '';
        params.agent = navigator.userAgent || '';
    }



    if (_col) {
        for (var i in _col) {
            switch (_col[i][0]) {
                case '_accountLog':
                    params.account = _col[i][1];
                    break;
                default:
                    break;
            }
        }
    }
    //拼接参数串
    var args = '';
    for (var i in params) {
        // alert(i);
        if (args != '') {
            args += '&';
        }
        args += i + '=' + params[i];           //将所有获取到的信息进行拼接
        // args += params[i];
    }
    //通过伪装成Image对象，请求后台
    var img = new Image(1, 1);
    var src = 'http://gtp-nv.jd.com/dataCollection/log.gif?args=' + encodeURIComponent(args);
    img.src = src;
    //
    return{}
})
