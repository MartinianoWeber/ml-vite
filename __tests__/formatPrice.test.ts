import formatPrice from "../src/utils/formatPrice";

describe("formatPrice", () => {
  it("should format price correctly", () => {
    expect(formatPrice(1000)).toBe("1.000");
    expect(formatPrice(10000)).toBe("10.000");
    expect(formatPrice(100000)).toBe("100.000");
  });

  it("should round to upper", () => {
    expect(formatPrice(1000.99)).toBe("1.001");
    expect(formatPrice(10000.99)).toBe("10.001");
    expect(formatPrice(100000.99)).toBe("100.001");
  });

  it("should not format correctly", () => {
    expect(formatPrice(1000)).not.toBe("1000");
    expect(formatPrice(10000)).not.toBe("10000");
    expect(formatPrice(100000)).not.toBe("100000");
  });
});
