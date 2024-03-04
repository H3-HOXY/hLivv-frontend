import "../Components_scss/Coupon.scss";

interface Coupon {
  id: string;
  title: string;
  value: number;
  date: string;
  condition: string;
  state: boolean;
}

const couponList: Coupon[] = [
  { id: '1', title: '이안가구 비밀 쿠폰 5%', value: 5, date: '2024년 03월 3일까지', condition: '1원 이상 구매시', state: true},
  { id: '2', title: '추천가구 주문 쿠폰 10%', value: 10, date: '2024년 03월 3일까지', condition: '1원 이상 구매시', state: true},
  { id: '3', title: '봄맞이 장바구니 쿠폰 5%', value: 5, date: '2024년 03월 3일까지', condition: '1원 이상 구매시', state: false},
  { id: '4', title: '신규 가입 고객 쿠폰 25%', value: 25, date: '2024년 03월 3일까지', condition: '1원 이상 구매시', state: false},
  { id: '5', title: '세계가구 특별 추가할인쿠폰 10%', value: 10, date: '2024년 03월 3일까지', condition: '1원 이상 구매시', state: false},
];

const Coupon = () => {
  // state가 true인 것만 필터링
  const alreadyCoupons = couponList.filter((coupon) => coupon.state);
  // state가 false인 것만 필터링
  const yetCoupons = couponList.filter((coupon) => !coupon.state);

  return (
    <div className="Coupon">
      <div className="CouponWrapper">
        <div className="CouponTitle">쿠폰</div>
        <div className="AlreadyCoupon">
          <ul className="CouponCardList grid grid-cols-2 pt-8 md:grid-cols-4 gap-12">
            {alreadyCoupons.map((coupon) => (
              <li className="CouponCard" key={coupon.id}>
                <div className="AlreadyCouponCard">
                  <div className="AlreadyCouponCardContent">
                    <div className="AlreadyCouponCardContentTitle font-semibold">{coupon.title}</div>
                    <div className="AlreadyCouponCardContentValue"><p>{coupon.value}</p>%</div>
                    <div className="AlreadyCouponCardContentDate">{coupon.date}</div>
                    <div className="AlreadyCouponCardContentCondition">{coupon.condition}</div>
                  </div>
                  <button className="AlreadyCouponCardBtn" title="받음">받음</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr className="CouponLine"/>
        <div className="YetCoupon">
          <ul className="CouponCardList grid grid-cols-2 pt-8 md:grid-cols-4 gap-12">
            {yetCoupons.map((coupon) => (
              <li className="CouponCard" key={coupon.id}>
                <div className="YetCouponCard">
                  <div className="YetCouponCardContent">
                    <div className="YetCouponCardContentTitle font-semibold">{coupon.title}</div>
                    <div className="YetCouponCardContentValue"><p>{coupon.value}</p>%</div>
                    <div className="YetCouponCardContentDate">{coupon.date}</div>
                    <div className="YetCouponCardContentCondition">{coupon.condition}</div>
                  </div>
                  <button className="YetCouponCardBtn" title="받기">받기</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Coupon;