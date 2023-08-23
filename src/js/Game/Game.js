import readlineSync from "readline-sync";
import Publisher from "../Publisher/Publisher.js";

export default class Game {
  static PAYMENT_UNIT = 1000;

  constructor() {
    const payment = +UI.getPayment();
    this.assertPayment(payment);
    const buyingLottoCount = payment / Game.PAYMENT_UNIT;
    const publisher = new Publisher();

    const lottos = publisher.sellLottos(buyingLottoCount);
    const [winningNumbers, bonusNumber] = UI.getWinningNumbers();
    console.log(winningNumbers, bonusNumber);
    publisher.setWinningNumbers(winningNumbers, bonusNumber);

    const ranks = lottos.map((lotto) =>
      lotto.getPlace(
        publisher.normalWinningNumbers,
        publisher.bonusWinningNumber
      )
    );
  }
  assertPayment(payment) {
    this.assertPaymentType(payment);
    this.assertPaymentUnit(payment);
  }
  assertPaymentType(payment) {
    if (isNaN(payment)) throw Error("숫자를 입력하세요.");
  }
  assertPaymentUnit(payment) {
    if (payment / Game.PAYMENT_UNIT !== Math.floor(payment / Game.PAYMENT_UNIT))
      throw Error("로또 구입 금액을 1,000원 단위로 입력해 주세요.");
  }
}

class UI {
  static getPayment() {
    // return readlineSync.question("구입할 금액을 입력해주세요.\n");
    return 4000;
  }
  static getWinningNumbers() {
    // return [
    //   readlineSync.question("당첨번호를 입력해 주세요\n").split(", "),
    //   readlineSync.question("보너스 번호를 입력해 주세요.\n"),
    // ];
    return [[1, 2, 3, 4, 5, 6], 7];
  }
}
