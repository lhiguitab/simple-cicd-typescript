import { multiply } from "./multiply";
describe("multiply", () => {
 // Casos básicos
 test("3 * 4 = 12", () => expect(multiply(3, 4)).toBe(12));
 test("1 * 99 = 99", () => expect(multiply(1, 99)).toBe(99));
 // Casos con cero
 test("0 * 5 = 0", () => expect(multiply(0, 5)).toBe(0));
 test("5 * 0 = 0", () => expect(multiply(5, 0)).toBe(0));
 // Casos con negativos
 test("-2 * 3 = -6", () => expect(multiply(-2, 3)).toBe(-6));
 test("-2 * -3 = 6", () => expect(multiply(-2, -3)).toBe(6));
});