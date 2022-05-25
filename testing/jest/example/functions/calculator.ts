type TwoNumbers = { number1: number; number2: number };

export class Calculator {
  public sum({ number1, number2 }: TwoNumbers): number {
    return number1 + number2;
  }

  public subtract({ number1, number2 }: TwoNumbers): number {
    return number1 - number2;
  }

  public division({ number1, number2 }: TwoNumbers): number {
    return number1 / number2;
  }
  public multiply({ number1, number2 }: TwoNumbers): number {
    return number1 * number2;
  }
}
