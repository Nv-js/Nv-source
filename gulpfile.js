const G = require('gulp'),
      less = require("gulp-less"),
      concat = require('gulp-concat'),//合并文件 --合并只是放一起--压缩才会真正合并相同样式
      minifyCss = require('gulp-minify-css'),
      minifyJs = require('gulp-jsmin'),
      rename = require('gulp-rename'),
      autoprefixer = require("gulp-autoprefixer"),
      webserver = require('gulp-webserver'),
      gclone = require('gulp-clone'),
      runSequence = require('run-sequence'),
      watch = require('gulp-watch');

const prefix = 'nv'      

//可执行方法，编译内容模版的样式文件
G.task('contentLess',function(){
    let target = 'dist/local/css/content',
        input = 'src/less/inner/custom/content.less'
    G.src(input)
     .pipe(less())
     .pipe(autoprefixer({
        //last 2 versions- 主流浏览器的最新两个版本  
        browsers: ['last 5 versions','Safari >0', 'Explorer >0', 'Edge >0', 'Opera >0', 'Firefox >=20'],
        //是否美化属性值 默认：true 像这样：
        cascade: true, 
        //-webkit-transform: rotate(45deg);
        //        transform: rotate(45deg);
        //是否去掉不必要的前缀 默认：true  
        remove:true 
     }))
     .pipe(G.dest(target))
     .pipe(minifyCss())
     .pipe(rename({suffix:'.min'}))
     .pipe(G.dest(target))
})

//可执行方法，编译组件库的样式文件
G.task('coreLess',function(){
    let input = ['src/less/inner/core/index.less','src/less/inner/font/css/fontello.css','src/less/inner/font/css/animation.css'],
        target = 'dist/cdn'
    G.src(input)
     .pipe(less())
     .pipe(autoprefixer({
        //last 2 versions- 主流浏览器的最新两个版本  
        browsers: ['last 5 versions','Safari >0', 'Explorer >0', 'Edge >0', 'Opera >0', 'Firefox >=20'],
        //是否美化属性值 默认：true 像这样：
        cascade: true, 
        //-webkit-transform: rotate(45deg);
        //        transform: rotate(45deg);
        //是否去掉不必要的前缀 默认：true  
        remove:true 
     }))
     .pipe(concat(prefix+'.css'))
     .pipe(G.dest(target))
     .pipe(minifyCss())
     .pipe(rename({suffix:".min"}))
     .pipe(G.dest(target))

})

//编译内置组件的脚本文件同时合并输出
G.task('innerJs',function(){
     let input = 'src/js/inner/*.js',
         target = 'src/js/innerWrap/'
     let s = G.src(input)  
            .pipe(concat('inner.js'))
            .pipe(G.dest(target))
})

G.task('combineJs',function(){
    let input = ['src/js/innerWrap/header.js','src/js/innerWrap/inner.js','src/js/innerWrap/footer.js'],
        target = 'dist/cdn/init/1.0.1'
    G.src(input)
        .pipe(concat('cdn_index.js'))
        .pipe(minifyJs())
        .pipe(G.dest(target))
})

//可执行方法




//////////////////////
function jsMine(path, T){
    let target = T ? T : path.replace(/[/|\\]src[/|\\]js[/|\\]outer/,'/dist/cdn').replace(/[/|\\]\w+\.js/,'/')
    G.src(path)
        .pipe(minifyJs())
        .pipe(G.dest(target))
        let input = path.replace(/[/|\\]\w+\.js/,'/static')
        other(input,target + '/static')
}
function lessMine(path, T){
    let target = T ? T :path.replace(/[/|\\]src[/|\\]js[/|\\]outer/,'/dist/cdn').replace(/[/|\\]less[/|\\]/,'/css/').replace(/[/|\\]\w+\.less/,'/')
    G.src(path)
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 5 versions','Safari >0', 'Explorer >0', 'Edge >0', 'Opera >0', 'Firefox >=20'],//last 2 versions- 主流浏览器的最新两个版本
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(minifyCss())
        .pipe(G.dest(target))
        let input = path.replace(/[/|\\]less[/|\\].+/,'/static')
        other(input,target.replace(/[/|\\]css[/|\\].*/,'/static'))
}

function other(path,T){
    console.log('如果有静态资源，目前正在clone...')
    G.src(path+'/**/*')
        .pipe(gclone())
        .pipe(G.dest(T))
}
//可执行方法，用于编写外部插件，要保证src/js/outer/*/@version/less、src/js/outer/*/@version/static、src/js/outer/*/@version/cdn_index.js的目录结构
G.task('watcher',function(){
    G.watch('src/js/outer/**/*',function(cb){
        if(cb.type === 'changed'){
            let fileName = (cb.path.match(/^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/) || [])[4] || ""
            fileName = fileName.toLowerCase()
            switch (fileName){
                case '.js' :
                jsMine(cb.path)
                break
                case '.less' :
                lessMine(cb.path)
                break

            }
        }
    })
    
})


G.task('init',function(){
    //用于合并cdn/init/cdn_index.js
    let innerJs = G.watch('src/js/inner/*.js',['innerJs']),
        initJs = G.watch('src/js/innerWrap/*.js',['combineJs']),
        coreLess = G.watch('src/less/inner/**/*.less',['coreLess','contentLess'])
})



G.task('webserver', function() {
    G.src('./')
    .pipe(webserver({
        livereload: true,
        directoryListing: true,
        port:9999,
        open: true
    }));
});


//默认执行
G.task('default',['webserver','init','watcher'])