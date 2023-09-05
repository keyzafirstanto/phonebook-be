module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "@root": "<rootDir>/app.ts",
    "@constants": "<rootDir>/app/constants",
    "@controllers": "<rootDir>/app/controllers",
    "@middlewares": "<rootDir>/app/middlewares",
    "@models": "<rootDir>/app/models",
    "@serializers": "<rootDir>/app/serializers",
    "@services": "<rootDir>/app/services",
    "@utils": "<rootDir>/app/utils",
    "@configs": "<rootDir>/configs",
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
};
