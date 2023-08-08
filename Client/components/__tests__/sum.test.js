import { sum } from "../sum";

test("Testing summation", () => {
    const result = sum(5, 6);
    expect(result).toBe(11);
})