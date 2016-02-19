var gulp = require("gulp");
var babel = require("gulp-babel");
var	watch = require('gulp-watch');

// files location
var file = {
	"src": {
		"js": "../src/js",
		"mainJS": "../src/js/script.js"
	},
	"dist": {
		"mainJS": "../dist/js/"
	}
};

gulp.task("default", function () {
  return gulp.src(file.src.mainJS)
    .pipe(babel())
    .pipe(gulp.dest(file.dist.mainJS));
});