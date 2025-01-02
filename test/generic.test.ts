

describe("generic", () => {

  class GenericData<T> {
  
    value: T;
  
    constructor(value: T) {
      this.value = value
    }
  }

  it("should only accept one type", () => {
    const data = new GenericData<string>("Muhammad")
    data.value = "Faisal"
    console.log(data.value)
  })

})
