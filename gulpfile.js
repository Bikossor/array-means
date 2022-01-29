const gulp = require("gulp");
const ts = require("gulp-typescript");
const del = require("del");
const merge = require("merge2");

const tsProject = ts.createProject("tsconfig.json");

const projectStream = tsProject.src().pipe(tsProject());

gulp.task("clean-up", function () {
  return del("dist/**", { force: true });
});

gulp.task("build-typescript", function () {
  return merge([
    projectStream.js.pipe(gulp.dest("dist/")),
    projectStream.dts.pipe(gulp.dest("dist/")),
  ]);
});

gulp.task("default", gulp.series("clean-up", "build-typescript"));
