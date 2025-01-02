describe("multiple generic type", () => {
  class Entry<K, V> {

    constructor(public key: K, public value: V) {

    }
  }

  class Triple<K, V, T>{
    constructor(public first: K, public second: V, public third: T) {

    }
  }

  it("should support type", () => {
    const entry = new Entry<number, string>(1, "Hello");
    expect(entry.key).toBe(1);
    expect(entry.value).toBe("Hello")


    const triple = new Triple<number, string, boolean>(1, "Faisal", true);
    expect(triple.first).toBe(1);
    expect(triple.second).toBe("Faisal")
    expect(triple.third).toBe(true)
  })

  it("should optional type", () => {
    const entry = new Entry(1, "Hello"); // disini tidak perlu explicit type nya apa : Entry<number, string>
    expect(entry.key).toBe(1);
    expect(entry.value.toUpperCase()).toBe("HELLO")
  })

})