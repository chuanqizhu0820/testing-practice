let calculator = require('./calculator')

describe("add method", ()=>{
  test("test add method", ()=>{
    expect(calculator.add(1,2)).toBe(3);
  })

  test("test add method", ()=>{
    expect(calculator.add(2,3)).toBe(5);
  })

  test("test add method", ()=>{
    expect(calculator.add(3,4)).toBe(7);
  })
})

describe("subtract method", ()=>{
  test("test subtract method", ()=>{
    expect(calculator.subtract(1,2)).toBe(-1);
  })

  test("test subtract method", ()=>{
    expect(calculator.subtract(4,2)).toBe(2);
  })

  test("test subtract method", ()=>{
    expect(calculator.subtract(5,2)).toBe(3);
  })
})

describe("divide method", ()=>{
  test("test divide method", ()=>{
    expect(calculator.divide(1,2)).toBe(0.5);
  })

  test("test divide method", ()=>{
    expect(calculator.divide(5,2)).toBe(2.5);
  })

  test("test divide method", ()=>{
    expect(calculator.divide(4,2)).toBe(2);
  })
})

describe("test multiply method", ()=>{
  test("test multiply method", ()=>{
    expect(calculator.multiply(1,2)).toBe(2);
  })

  test("test multiply method", ()=>{
    expect(calculator.multiply(5,2)).toBe(10);
  })

  test("test multiply method", ()=>{
    expect(calculator.multiply(4,2)).toBe(8);
  })
})
