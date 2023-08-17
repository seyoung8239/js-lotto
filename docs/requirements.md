## Requirements

### Game(ui)
- [] 금액을 입력한다 -> buyer->seller
- [] 로또 번호를 입력한다 -> buyer->seller
- [] 당첨 번호를 입력한다 -> publisher
- [] 재시작을 결정한다 -> game

### Buyer(user)
- [] 로또를 다수 가질 수 있다.

- [] 로또를 구매한다
- [] 로또 번호를 입력한다
- [] 로또 수익금을 계산을 의뢰한다

### Seller
- [] 구매 요청을 처리한다
- [] publisher에게 로또 발행을 의뢰한다
- [] publisher가 발행한 로또를 buyer에게 판매한다

### Publisher
- [] 로또를 발행한다
- [] 당첨 번호를 입력받는다

### Lotto
- [] 번호를 갖는다
- [] 당첨 여부를 판단한다

### RevenuCalculator
- [] 다수의 로또 번호를 입력받는다 
- [] 로또에게 당첨 여부를 의뢰한다
- [] 수익률을 계산한다