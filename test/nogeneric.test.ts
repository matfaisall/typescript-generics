
describe("no generic", () => {
   class Data {
    value: any;
  
    constructor(value: any) {
      this.value = value
    }
  }
  
    it("should can accept number", () => {
      const data = new Data(123)
      data.value = "Faisal"
      data.value = true

      console.log(data)
    })
});