
describe("Generic Function", () => {
  function create<T>(value: T): T {
    return value
  }

  it("should support", () => {
    const result = create<string>("Hello");
    expect(result).toBe("Hello")

    const result2 = create<number>(123);
    expect(result2).toBe(123)
  })

})