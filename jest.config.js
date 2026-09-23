module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@constants/(.*)$": "<rootDir>/src/constants/$1",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
    "^@assets/(.*)$": "<rootDir>/assets/$1",
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|nativewind|react-native-reanimated|react-native-worklets|react-native-safe-area-context)",
  ],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!src/global.css"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
};
