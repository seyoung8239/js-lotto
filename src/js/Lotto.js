import { WINNING_PLACE_CNT } from "./lotto.constant";

class Lotto {
    #lottoNumbers;

    constructor(lottoNumbers) {
        Lotto.aseertNumbers(lottoNumbers);

        this.#lottoNumbers = lottoNumbers;
    }

    static LEN = 6;
    static MAX_NUM = 45;
    static MIN_NUM = 0;

    static aseertNumbers(lottoNumbers) {
        Lotto.assertValidLength(lottoNumbers.length);
        Lotto.assertUniqueNumber(lottoNumbers);
        lottoNumbers.every(n => Lotto.assertValidNumber(n));
    }
    static assertValidLength(len) {
        if(len !== Lotto.LEN) throw Error('invalid lotto number length')
    } 
    static assertValidNumber(lottoNum) {
        if(lottoNum > Lotto.MAX_NUM || lottoNum < Lotto.MIN_NUM) 
            throw Error('invalid lotto number range');
    }
    static assertUniqueNumber(lottoNumers) {
        const lottoSet = new Set(lottoNumers);
        if(lottoSet.size !== Lotto.LEN) throw Error('lotto numbers are not unique')
    }

    get numbers() {
        return this.#lottoNumbers;
    }

    getPlace(noramlWinningNumbers, specialWinningNumber) {
        const correctCnt = [this.#getNormalCorrectCnt(noramlWinningNumbers), this.#getSpecialCorrectCnt(specialWinningNumber)];
        WINNING_PLACE_CNT.values.forEach((entries, i)=>{
            entries.some()
        })
    }
    #getNormalCorrectCnt(noramlWinningNumbers) {
        const winningTable = [];
        noramlWinningNumbers.forEach(n => winningTable[n]=true)
        return this.#lottoNumbers.reduce((acc, cur)=> winningTable[cur] ? acc +1 : acc, 0);
    }
    #getSpecialCorrectCnt(specialWinningNumber) {
        return this.#lottoNumbers.includes(specialWinningNumber) ? 1 : 0;
    }
}

export default Lotto;