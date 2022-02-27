import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
