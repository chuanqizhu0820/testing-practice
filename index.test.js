const stringLength = require('./index')

test("check the length of string", ()=>{
  expect(stringLength("hello")).toBe(5);
})
