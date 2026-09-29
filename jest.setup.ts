// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from jest.config.js
jest.mock("lucide-react-native", () => {
  return new Proxy(
    {},
    {
      get: () => () => null,
    },
  );
});
