import strictEquals from "./index";

describe("Given the function stricEqual", () => {
  describe("When it's called and it recived 0 and -0", () => {
    test("Then function should return true", () => {
      const number1 = 0;
      const number2 = -0;
      const expectedResult = true;

      const receivedResult = strictEquals(number1, number2);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});

describe("Given the function strictEquals", () => {
  describe("When it's called and it recived null and null", () => {
    test("Then the function should return true", () => {
      const number1 = 1;
      const number2 = 1;
      const expectedResult = true;

      const receivedResult = strictEquals(number1, number2);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});
