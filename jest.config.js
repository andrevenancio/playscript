module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testRegex: "^.+\\.spec\\.(ts|tsx|js|jsx)$",
  testPathIgnorePatterns: ["/node_modules/", "lib"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
}
