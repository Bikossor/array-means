const gulp = require("gulp");
const ts = require("gulp-typescript");
const del = require("del");
const merge = require("merge2");

const tsProjectCjs = ts.createProject("tsconfig.cjs.json");
const tsProjectEsm = ts.createProject("tsconfig.esm.json");

const streamCjs = tsProjectCjs.src().pipe(tsProjectCjs());
const streamEsm = tsProjectEsm.src().pipe(tsProjectEsm());

gulp.task("clean-up", function () {
  return del("dist/**", { force: true });
});

gulp.task("build-typescript-to-cjs", function () {
  return merge([
    streamCjs.js.pipe(gulp.dest("dist/cjs")),
    streamCjs.dts.pipe(gulp.dest("dist/cjs"))
  ]);
});

gulp.task("build-typescript-to-esm", function () {
  return merge([
    streamEsm.js.pipe(gulp.dest("dist/esm")),
    streamEsm.dts.pipe(gulp.dest("dist/esm"))
  ]);
});

gulp.task("default", gulp.series("clean-up", "build-typescript-to-cjs", "build-typescript-to-esm"));
