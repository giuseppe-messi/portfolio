import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";
import { TextEncoder } from "util";

// add the axe matcher
expect.extend(toHaveNoViolations);

// polyfill TextEncoder, should be bundled with jsdom, but it's not with current version
global.TextEncoder = TextEncoder;

// mocking entire component where tsparticles is used, package was being an pain to work with in terms of testing
jest.mock("./src/components/ParticlesBackground/ParticlesBackground", () => ({
  ParticlesBackground: () => null
}));
