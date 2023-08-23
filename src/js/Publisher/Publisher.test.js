import Lotto from "../Lotto/Lotto";
import Publisher from "./Publisher";

describe("Publisher를 테스트 한다.", () => {
  it("새 로또를 발급할 수 있다.", () => {
    const publisher = new Publisher();
    const lotto = publisher.publishLotto();
    expect(lotto).toBeInstanceOf(Lotto);
  });

  it("당첨 번호를 설정할 수 있다.", () => {
    const publisher = new Publisher();

    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    publisher.setWinningNumbers(winningNumbers, bonusNumber);
    expect(publisher.normalWinningNumbers).toEqual(winningNumbers);
    expect(publisher.bonusWinningNumber).toBe(bonusNumber);
  });
});
