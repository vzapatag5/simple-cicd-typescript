/**
 * Unit tests for divide()
 * Loads the compiled divide.js so window.divide is available (same as in the browser).
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches divide to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(window.divide(6, 3)).toBe(2);
    expect(window.divide(5, 2)).toBe(2.5);
  });

  it("divides with zero as numerator", () => {
    expect(window.divide(0, 5)).toBe(0);
  });

  it("divides negative numbers", () => {
    expect(window.divide(-6, 3)).toBe(-2);
    expect(window.divide(6, -3)).toBe(-2);
    expect(window.divide(-6, -3)).toBe(2);
  });

  it("throws an error on division by zero", () => {
    expect(() => window.divide(6, 0)).toThrow("Division by zero is not allowed");
    expect(() => window.divide(0, 0)).toThrow("Division by zero is not allowed");
  });
});

export {};
