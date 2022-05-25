import { Calculator } from "../functions/calculator";

describe("계산기 테스트", () => {
  let calculator: Calculator;

  beforeEach(async () => {
    calculator = new Calculator();
  });

  it("더하기", () => {
    expect(calculator.sum({ number1: 1, number2: 2 })).toBe(3);
  });

  it("빼기", () => {
    expect(calculator.subtract({ number1: 1, number2: 2 })).toBe(-1);
  });

  it("곱셈", () => {
    expect(calculator.multiply({ number1: 1, number2: 2 })).toBe(2);
  });

  it("나눗셈", () => {
    expect(calculator.division({ number1: 1, number2: 2 })).toBe(0.5);
  });
});
