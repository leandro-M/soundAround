var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
	return gulp.src('./source/sass/**/*.scss')
	.pipe(sass({ outputStyle: 'compressed' }))
	.on('error', notify.onError({
		title: 'CSS Error!',
		message: '<=% error.message %>'
	}))
	.pipe(autoprefixer({ browsers: ['> 0%'] }))
	.pipe(gulp.dest('./dist/css/'));
});

gulp.task('js', function() {
	return gulp.src('./source/js/**/*.js')
	.pipe(uglify())
	.on('error', notify.onError({
		title: 'Script Error!',
		message: '<%= error.message %>'
	}))
	.pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function() {
	gulp.watch('./source/sass/**/*.scss', ['sass']);
	gulp.watch('./source/js/**/*.js', ['js']);
})

gulp.task('default', ['watch'], function() {});