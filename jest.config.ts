module.exports = {
  // coverageProvider: "v8", // will use `c8` instead of `instanbuljs` to collect coverage
  // moduleFileExtensions: ["*.spec.tsx"],

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleDirectories: ["node_modules", "<rootDir>/"],

  testEnvironment: "jest-environment-jsdom",

  // moduleNameMapper: {
  //   "@/(.*)": "<rootDir>/src/$1",
  // },

  coveragePathIgnorePatterns: [],

  coverageReporters: ["text", "lcov", "clover", ["text", { skipFull: true }]],

  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
