module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/common/_utils/__mocks__/fileMock.ts",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.test.json",
    },
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "jest-styled-components",
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/build",
    "<rootDir>/es",
    "<rootDir>/lib",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/es",
    "<rootDir>/lib",
    "<rootDir>/node_modules/",
  ],
}
