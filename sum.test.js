const sumFunction = require("./sum");

// Syntax
// test('What should test do', () => {
//     What should we expect
// })

test("Should add two numbers", () => {
  expect(sumFunction(1, 4)).toBe(5);
});
