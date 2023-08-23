import { WINNING_PLACE_CNT } from "./lotto.constant.js";
import {
  assertNumbersLength,
  assertUniqueNumbers,
  assertNumberRange,
} from "../utils.js";

class Lotto {
  #lottoNumbers;

  constructor(lottoNumbers) {
    Lotto.aseertNumbers(lottoNumbers);

    this.#lottoNumbers = lottoNumbers;
  }

  static LEN = 6;
  static MAX_NUM = 45;
  static MIN_NUM = 1;

  static aseertNumbers(lottoNumbers) {
    assertNumbersLength(lottoNumbers, Lotto.LEN);
    assertUniqueNumbers(lottoNumbers);
    lottoNumbers.every((n) => assertNumberRange(n, this.MIN_NUM, this.MAX_NUM));
  }

  get numbers() {
    return this.#lottoNumbers;
  }

  getPlace(noramlWinningNumbers, specialWinningNumber) {
    const correctCnt = [
      this.#getNormalCorrectCnt(noramlWinningNumbers),
      this.#getSpecialCorrectCnt(specialWinningNumber),
    ];

    let rank;
    const findRank = (entries, i) => {
      if (rank) return;
      const idx = entries.findIndex((el) =>
        el.every((e, i) => e === correctCnt[i])
      );
      if (idx === -1) return;
      rank = i + 1;
    };

    Object.values(WINNING_PLACE_CNT).forEach(findRank);
    return rank ?? 0;
  }

  #getNormalCorrectCnt(noramlWinningNumbers) {
    const winningTable = [];
    noramlWinningNumbers.forEach((n) => (winningTable[n] = true));
    return this.#lottoNumbers.reduce(
      (acc, cur) => (winningTable[cur] ? acc + 1 : acc),
      0
    );
  }

  #getSpecialCorrectCnt(specialWinningNumber) {
    return this.#lottoNumbers.includes(specialWinningNumber) ? 1 : 0;
  }
}

export default Lotto;
