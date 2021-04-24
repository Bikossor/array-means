const gulp = require("gulp");
const ts = require("gulp-typescript");
const del = require("del");

const tsProjectCjs = ts.createProject("tsconfig.cjs.json");
const tsProjectEsm = ts.createProject("tsconfig.esm.json");

gulp.task("clean-up", function () {
  return del("dist/**", { force: true });
});

gulp.task("build-typescript-to-cjs", function () {
  return tsProjectCjs.src().pipe(tsProjectCjs()).js.pipe(gulp.dest("dist/cjs"));
});

gulp.task("build-typescript-to-esm", function () {
  return tsProjectEsm.src().pipe(tsProjectEsm()).js.pipe(gulp.dest("dist/esm"));
});

gulp.task("default", gulp.series("clean-up", "build-typescript-to-cjs", "build-typescript-to-esm"));
