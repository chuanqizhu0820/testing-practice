const reverseString= require('./reverseString')

test("check the reversed string", ()=>{
  expect(reverseString("hello")).toBe("olleh");
})
