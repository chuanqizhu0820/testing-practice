const stringLength = require('./stringLength')

test("check the length of string", ()=>{
  expect(stringLength("hellohel")).toBe(true);
})
