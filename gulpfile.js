var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
	rename  =  require('gulp-rename');


gulp.task('build', function() {
	return gulp.src('./angular-flexText.js')
	.pipe(uglify())
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('./'))
	
});