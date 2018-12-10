const gulp  = require('gulp');

/*
	拷贝html
*/

gulp.task('copy-html',function () {
	return gulp.src('html/*.html')
	.pipe(gulp.dest('dist/html'))
	.pipe(connect.reload());
})

/*
	拷贝图片
*/
gulp.task('images',function(){
	return gulp.src('images/*.{jpg,png}')
	.pipe(gulp.dest('dist/images'))
	.pipe(connect.reload());
})

/*
	使用gulp-sass-china 编译scss文件
	gulp-minify-css
	gulp-rename
*/
const scss= require('gulp-sass');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');

gulp.task('trolley_scss',function(){
	return gulp.src('css/trolley.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(minifycss())
	.pipe(rename('trolley.min.css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());

})

gulp.task('details_scss',function(){
	return gulp.src('css/details.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(minifycss())
	.pipe(rename('details.min.css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());

})


gulp.task('particulars_scss',function(){
	return gulp.src('css/particulars.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(minifycss())
	.pipe(rename('particulars.min.css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());

})
gulp.task('login_scss',function(){
	return gulp.src('css/login.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(minifycss())
	.pipe(rename('login.min.css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());

})
// 
gulp.task('index_scss',function(){
	return gulp.src('css/index.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(minifycss())
	.pipe(rename('index.min.css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());

})
gulp.task('asus_base.scss',function(){
	return gulp.src('css/asus_base.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(minifycss())
	.pipe(rename('asus_base.min.css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());

})
/*
	拷贝js文件
*/

gulp.task('scripts',function(){
	return gulp.src(['js/*.js'])
	.pipe(gulp.dest('dist/js'))
	.pipe(connect.reload());
})

/*
	拷贝数据
*/

gulp.task('php',function(){
	return gulp.src(['php/**/*'])
	.pipe(gulp.dest('dist/php'))
	.pipe(connect.reload());
})
gulp.task('iconfont',function(){
	return gulp.src(['iconfont/**/*'])
	.pipe(gulp.dest('dist/iconfont'))
	.pipe(connect.reload());
})
gulp.task('json',function(){
	return gulp.src(['json/**/*'])
	.pipe(gulp.dest('dist/json'))
	.pipe(connect.reload());
})
/*
	建立工程任务
*/

gulp.task('build',['copy-html','images','trolley_scss','details_scss','login_scss','index_scss','particulars_scss','asus_base.scss','scripts','php','json','iconfont'],function(){
	console.log('编译成功');
})

/*
	监听
*/

gulp.task('watch',function(){
	gulp.watch(['php/*.php'],['php']);
	gulp.watch(['js/*.js'],['scripts']);
	gulp.watch(['css/trolley.scss'],['trolley_scss']);
	gulp.watch(['css/details.scss'],['details_scss']);
	gulp.watch(['css/login.scss'],['login_scss']);
	gulp.watch(['css/particulars.scss'],['particulars_scss']);
	gulp.watch(['css/index.scss'],['index_scss']);
	gulp.watch(['css/asus_base.scss'],['asus_base.scss']);
	gulp.watch(['iconfont/**/*'],['iconfont']);
	gulp.watch(['images/*.{jpg,png}'],['images']);
	gulp.watch(['html/*.html'],['copy-html']);
	gulp.watch(['json/**/*'],['json']);
})

/*
	gulp-connect 启动服务
*/

const connect =  require('gulp-connect');
gulp.task('server',function(){
	connect.server({
		root:'dist',
		port:'8888',
		livereload:true
	})
})


/*
	默认任务
*/

gulp.task('default',['watch','build','server']);