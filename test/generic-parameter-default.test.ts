describe("generic parameter default", () => {
  class SimpleGeneric<T = number> {
    private value?: T;

    setValue(value: T) {
      this.value = value;
    }

    getValue(): T | undefined {
      return this.value;
    }
  }


  it("should create simple generic", () => {
    const simple = new SimpleGeneric<string>(); // default akan berpengaruh di bagian pembuatan object in apabila tidak di tentukan maka akan mengikuti type default yang telah di tentukan di Class
    simple.setValue("Yupa");
    expect(simple.getValue()!.toUpperCase()).toBe("YUPA")
  })

})