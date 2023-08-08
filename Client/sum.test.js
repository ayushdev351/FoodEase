import { sum } from "./components/sum";

test("Testing summation", () => {
    const result = sum(5, 6);
    expect(result).toBe(11);
})