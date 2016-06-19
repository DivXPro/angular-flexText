var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
	rename  =  require('gulp-rename');


gulp.task('build', function() {
	return gulp.src('./angular-flexText.js')
	.pipe(uglify({preserveComments: 'license'}))
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('./'))
	
});