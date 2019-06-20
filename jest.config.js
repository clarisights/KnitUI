module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/components/_utils/__mocks__/fileMock.ts",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  preset: "ts-jest",
  "globals": {
    "ts-jest": {
      "tsConfig": "./tsconfig.test.json"
    }
  },
  setupFilesAfterEnv: [
    "react-testing-library/cleanup-after-each"
  ],
  modulePathIgnorePatterns: ["<rootDir>/build"],
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"]
}