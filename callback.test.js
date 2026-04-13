const callBFunc = require("./callback");

test("Should callback itself", (done) => {
  function callFunc(data) {
    try {
      expect(data).toBe("Hello. I am a callback function");
      done();
    } catch (error) {
      done(error);
    }
  }

  callBFunc(callFunc)
});
