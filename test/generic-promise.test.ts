/**
 * GENERIC PROMISE
 * 
 * - Saat kita menggunakan Javascript Async, kita akan sering bertemu dengan Promise.
 * - Typescript menggunakan Generic sebagai representasi untuk tipe data Promise<T>
 * - Oleh karena itu, ketika membuat function yang mengembalikan Promise, kita bisa menentukan tipe data apa yang akan di kembalikan oleh Promise tersebut.
 */

describe("Generic Promise", () => {
  const fetchData = async (value: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if(value === "Faisal") {
          resolve("Hallo " + value)
        } else {
          reject("Not found")
        }
      })
    })
  }

  it("should support promise generic", async () => {
    const result = await fetchData("Faisal");
    expect(result).toBe("Hallo Faisal")

    try {
      await fetchData("Messi")
    } catch (e) {
      expect(e).toBe("Not found")
    }
  })
})


