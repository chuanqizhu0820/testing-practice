const capitalize = require("./capitalize")

test("test the first letter of the string", ()=>{
  expect(capitalize('hello')).toBe("Hello");
})
