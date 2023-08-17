import Lotto from '../js/Lotto'

describe('로또 객체 인터페이스 테스트', ()=> {
    it('번호를 가지고 로또를 생성할 수 있다.', ()=> {
        const numbers = [1,2,3,4,5,6];
        const lotto = new Lotto(numbers);
        
        lotto.numbers.forEach((n, i) => {
            expect(n).toBe(numbers[i])
        })
    })

    it('번호의 개수가 다른 경우 에러를 발생한다.', ()=> {
        const shortNumbers = [1,2,3,4,5];
        expect(new Lotto(shortNumbers)).toThrow(Error);
    })

    it('정해진 범위의 번호만 입력할 수 있다.', ()=> {
        const largetNumbers = [50,60,70,80,90,100];
        expect(new Lotto(largetNumbers)).toThrow(Error);
    })

    it('당첨 등수를 알 수 있다.(1)', ()=> {
        const numbers = [1,2,3,4,5,6];
        const lotto = new Lotto(numbers);
        
        const winningNumbers = [1,2,3,6,7,8,9];
        expect(lotto.getPlace(winningNumbers)).toBe(5);
    })

    it('당첨 등수를 알 수 있다.(2)', ()=> {
        const numbers = [1,2,3,4,5,6];
        const lotto = new Lotto(numbers);
        
        const winningNumbers = [11,12,13,16,17,18,19];
        expect(lotto.getPlace(winningNumbers)).toBe(0);
    })
})