module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  testRegex: "./*\\.test?\\.ts$",
  moduleFileExtensions: ["ts", "js"],
};
