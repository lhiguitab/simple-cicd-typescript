import { subtract } from "./subtract";
describe("subtract", () => {
 // Casos básicos con enteros positivos
 test("10 - 3 = 7", () => expect(subtract(10, 3)).toBe(7));
 test("5 - 5 = 0", () => expect(subtract(5, 5)).toBe(0));
 // Casos con cero
 test("0 - 0 = 0", () => expect(subtract(0, 0)).toBe(0));
 test("7 - 0 = 7", () => expect(subtract(7, 0)).toBe(7));
 // Casos con negativos
 test("-3 - (-2) = -1", () => expect(subtract(-3, -2)).toBe(-1));
 test("5 - (-3) = 8", () => expect(subtract(5, -3)).toBe(8));
});
