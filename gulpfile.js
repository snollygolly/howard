"use strict";

// Load plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

var paths = {
  scripts: {
		name: "main.js",
		src: 'app/src/**/*.js',
		dest: 'app/dist'
	}
};

gulp.task('concat', function() {
	return gulp.src(paths.scripts.src)
		.pipe(concat(paths.scripts.name))
		.pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('babel', ["concat"], function() {
	return gulp.src(paths.scripts.dest + "/" + paths.scripts.name)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts.src, ["concat", "babel"]);
});


// Default task
gulp.task('default', ["watch", "concat", "babel"]);
