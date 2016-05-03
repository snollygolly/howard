"use strict";

// Load plugins
const gulp = require("gulp");
const concat = require("gulp-concat");
const babel = require("gulp-babel");

const paths = {
	scripts: {
		name: "main.js",
		src: "app/src/**/*.js",
		dest: "app/dist"
	}
};

gulp.task("concat", () => {
	return gulp.src(paths.scripts.src)
		.pipe(concat(paths.scripts.name))
		.pipe(gulp.dest(paths.scripts.dest));
});

gulp.task("babel", ["concat"], () => {
	return gulp.src(`${paths.scripts.dest}/${paths.scripts.name}`)
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(gulp.dest(paths.scripts.dest));
});

gulp.task("watch", () => {
	gulp.watch(paths.scripts.src, ["concat", "babel"]);
});


// Default task
gulp.task("default", ["watch", "concat", "babel"]);
