import Lotto from "./Lotto";

describe("로또 객체 인터페이스 테스트", () => {
  it("번호를 가지고 로또를 생성할 수 있다.", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);

    lotto.numbers.forEach((n, i) => {
      expect(n).toBe(numbers[i]);
    });
  });

  it("번호의 개수가 다른 경우 에러를 발생한다.", () => {
    const shortNumbers = [1, 2, 3, 4, 5];
    try {
      new Lotto(shortNumbers);
      throw Error("should not get here");
    } catch (e) {
      expect(e.message).toBe("invalid lotto number length");
    }
  });

  it("범위를 벗어난 번호를 입력하면 에러를 발생한다.", () => {
    const largetNumbers = [50, 60, 70, 80, 90, 100];
    try {
      new Lotto(largetNumbers);
      throw Error("should not get here");
    } catch (e) {
      expect(e.message).toBe("invalid lotto number range");
    }
  });

  it("중복된 로또 번호를 가지면 에러를 발생한다.", () => {
    const duplicatedNumbers = [1, 1, 2, 3, 4, 5];
    try {
      new Lotto(duplicatedNumbers);
      throw Error("should not get here");
    } catch (e) {
      expect(e.message).toBe("lotto numbers are not unique");
    }
  });

  it("당첨 등수를 알 수 있다.(1)", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);

    const winningNumbers = [1, 2, 3, 6, 7, 8];
    expect(lotto.getPlace(winningNumbers, 9)).toBe(4);
  });

  it("당첨 등수를 알 수 있다.(2)", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);

    const winningNumbers = [11, 12, 13, 16, 17, 18];
    expect(lotto.getPlace(winningNumbers, 19)).toBe(0);
  });
});
