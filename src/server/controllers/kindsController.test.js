const { getAllKinds } = require("./kindsController");

describe("Given a kindsController function", () => {
  describe("When its invoked with a request", () => {
    test("Then it should invoke the json status method with a 200", () => {
      const res = {
        status: jest.fn().mockReturnValue(),
        json: () => {},
      };

      getAllKinds(null, res);
    });
  });
});
