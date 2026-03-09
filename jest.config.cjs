module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  testMatch: ["**/*.test.ts"],
  moduleFileExtensions: ["ts", "js"],
  collectCoverageFrom: ["sum.ts"],
  coveragePathIgnorePatterns: ["/node_modules/", "\\.test\\.ts$"],
};
