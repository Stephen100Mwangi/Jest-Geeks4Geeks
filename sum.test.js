const sumFunction = require("./sum");

// Syntax
// test('What should test do', () => {
//     What should we expect
// })

test("Should add two numbers", () => {
  expect(2 + 3).toBe(5);
});
