import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
};

export default config;
