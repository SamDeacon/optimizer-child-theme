var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var input = './scss/**/*.scss';
var output = './';

gulp.task('sass-pipe', function () {
  return gulp
    // Find all `.scss` files from the `scss/` folder
    .src(input)
    // Run Sass on those files
 .pipe(sass().on('error', sass.logError))
    // Autoprefixer    
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});

gulp.task('default',function() {
    gulp.watch('./scss/**/*.scss',['sass-pipe']);
});


