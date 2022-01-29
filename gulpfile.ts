import { dest, series, task } from "gulp";
import { createProject } from "gulp-typescript";
import del from "del";
import merge from "merge2";

const tsProject = createProject("tsconfig.json");

const projectStream = tsProject.src().pipe(tsProject());

task("clean-up", function () {
  return del("dist/**", { force: true });
});

task("build-typescript", function () {
  return merge([
    projectStream.js.pipe(dest("dist/")),
    projectStream.dts.pipe(dest("dist/")),
  ]);
});

task("default", series("clean-up", "build-typescript"));
