const getName = require("./name");

test("Fetch user's name", () => {
  expect(getName()).toEqual({ name: "John" });
});

test("Fetch user's wrong name", () => {
  expect(getName()).not.toEqual({ name: "Peter" });
});
