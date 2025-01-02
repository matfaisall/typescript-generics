/**
 * Generic Constraint 
 * 
 * - Secara default, saat menggunakan generic type, kita bisa bebas menggunakan type data apapun.
 * - Namun, kadang kita ingin membatasi jenis tipe data yang diperbolehkan.
 * - Kita bisa menggunakan perintah extends TipeData pada operator <>, yang artinya tipe data yang boleh di gunakan hanyalah tipe data TypeData dan turunannya.
 */

describe("Generic Constraint", () => {

  interface Employee {
    id: string;
    name: string;
  }
  
  interface Manager extends Employee {
    totalemployee: number
  }
  
  interface VP extends Manager {
    totalManager: number
  }
  
  
  class EmployeeData<T extends Employee> {
    constructor(public employee: T){}
  }

  it("should support constraint", () => {
    const data1 = new EmployeeData<Employee>({
      id: "100",
      name: "Muhammad Faisal"
    })

    const data2 = new EmployeeData<Manager>({
      id: "101",
      name: "Yoseph",
      totalemployee: 700
    })

    // const data3 = new EmployeeData<string>("Messi"); 
    // const data3 = new EmployeeData<number>(12);
  })

})


