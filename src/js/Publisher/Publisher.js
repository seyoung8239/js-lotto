import Lotto from "../Lotto/Lotto.js";
import { assertUniqueNumbers, generateRandomNum } from "../utils.js";

export default class Publisher {
  normalWinningNumbers;
  bonusWinningNumber;

  constructor() {
    return;
  }

  sellLottos(num) {
    return new Array(num).fill(0).map(() => this.publishLotto());
  }

  publishLotto() {
    const LottoNumSet = new Set();
    while (LottoNumSet.size < 6) {
      const randomNum = generateRandomNum(1, 45);
      LottoNumSet.add(randomNum);
    }

    return new Lotto([...LottoNumSet]);
  }

  setWinningNumbers(numbers, bonusNumber) {
    assertUniqueNumbers([...[...numbers], bonusNumber]);

    this.normalWinningNumbers = numbers;
    this.bonusWinningNumber = bonusNumber;
  }
}
