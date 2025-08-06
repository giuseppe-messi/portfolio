const path = require("path");

module.exports = {
  preset: "ts-jest",

  // a DOM-like environment so you can render React components.
  testEnvironment: "jsdom",
  // automatically include your RTL + axe setup
  setupFilesAfterEnv: [require.resolve(path.join(__dirname, "jest.setup.ts"))],

  moduleNameMapper: {
    // stub out CSS modules
    "\\.module\\.css$": "identity-obj-proxy",

    // stub out all other static assets (.css, images, fonts, etc.)
    "\\.(png|jpe?g|gif|svg?)$": "<rootDir>/__mocks__/assetFileStub.js"
  },

  // point ts-jest at tsconfig.test.json instead of default tsconfig.json,
  // so  tests compile with the correct compiler options
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.test.json" }]
  },

  // ← always collect coverage
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],

  // ← enforce at least 80% everywhere (adjust to taste)
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
