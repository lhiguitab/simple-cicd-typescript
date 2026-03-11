import { divide } from "./divide";
describe("divide", () => {
 // Casos básicos
 test("10 / 2 = 5", () => expect(divide(10, 2)).toBe(5));
 test("9 / 3 = 3", () => expect(divide(9, 3)).toBe(3));
 // Casos con cero en numerador
 test("0 / 5 = 0", () => expect(divide(0, 5)).toBe(0));
 // Casos con negativos
 test("-6 / 2 = -3", () => expect(divide(-6, 2)).toBe(-3));
 test("-6 / -2 = 3", () => expect(divide(-6, -2)).toBe(3));
 // Caso límite: división por cero lanza error
 test("divide by zero throws", () => {
 expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
 });
});