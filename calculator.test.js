import { describe, expect, it } from "vitest";
import { add, subtract, multiply } from "./calculator.js";

describe("calculator", () => {
    it("adds two numbers", () => {
        expect(add(2, 3)).toBe(5);
    });

    it("subtracts two numbers", () => {
        expect(subtract(5, 3)).toBe(2);
    });

    it("multiplies two numbers", () => {
        expect(multiply(4, 3)).toBe(12);
    });
});
