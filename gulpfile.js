'use strict'

var gulp = require('gulp')
	, stylus = require('gulp-stylus')
	, autoprefixer = require('gulp-autoprefixer')
	, jeet = require('jeet')
	, rupture = require('rupture')

var paths = {
	stylus: './src/styles/style.styl',
  html: './*.html',
	css: './styles/style.css',
	dest: './'
}


// Project tasks
// --------------------
gulp.task('css-build', function() {
	return gulp.src(paths.stylus)
		.pipe(stylus({
			use: [jeet(), rupture()]
		}))
		.pipe(gulp.dest(paths.dest))
})

gulp.task('autoprefixer', function() {
	return gulp.src(paths.css)
		.pipe(autoprefixer({
			browsers: ['last 8 versions'],
			// cascade: false
		}))
		.pipe(gulp.dest(paths.dest))
})


// Default task
// --------------------
gulp.task('default', function() {
	gulp.watch(paths.stylus, ['css-build'])
	gulp.watch(paths.css, ['autoprefixer'])
})
