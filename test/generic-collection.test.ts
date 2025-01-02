/**
 * 
 *  GENERIC COLLECTION
 * 
 * - Sebelumnya kita pernah menggunakan tipe data Array, dimana Array sebenarnya adalah tipe data Generic, oleh karena itu kita bisa menggunakan Array<tipe> ketika membuat Array.
 * - Selain Array, ada tipe data Collection (kumpulan data) yang berupa tipe data Generic, yaitu: 
 * * Set<T> : yaitu tipe data collection yang berisi data unique dan tidak ada jaminan urutan data.
 * * Map<K, V> : yaitu tipe data collection yang berisi data key-value.
 * 
 */

describe("Generic Collection", () => {
  it("should support array", () => {
    const array = new Array<string>();
    array.push("Muhammad");
    array.push("Faisal")

    expect(array[0]).toBe("Muhammad")
    expect(array[1]).toBe("Faisal")
  })

  it("should support set", () => {
    const set = new Set<string>();
    set.add("Lionel");
    set.add("Andress")
    set.add("Messi")

    expect(set.size).toBe(3);
    expect(set.has("Lionel")).toBe(true)
    expect(set.has("Andress")).toBe(true)
  })

  it("should support map", () => {
    const map = new Map<string, number>();

    map.set("ane", 100);
    map.set("Lio", 78);

    expect(map.get("ane")).toBe(100)
    expect(map.get("Lio")).toBe(78)

  })


})