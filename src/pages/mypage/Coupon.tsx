import { useEffect, useState } from 'react';
import {getApi} from "../../api/ApiWrapper";
import {CouponDto} from "../../api/Api";
import {useNavigate} from "react-router-dom";
import "./styles/Coupon.scss";

/**
 * @since 
 * @author 최정윤
 */

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
  const [couponInfo, setCouponInfo] = useState<CouponDto[] | null>(null)
  const navigate = useNavigate()
  // couponList의 복사본을 만들어 상태를 관리합니다.
  const [coupons, setCoupons] = useState([...couponList]);
  // state가 true인 것만 필터링
  const alreadyCoupons = coupons.filter((coupons) => coupons.state);
  // state가 false인 것만 필터링
  const yetCoupons = coupons.filter((coupons) => !coupons.state);

  // "받음" 버튼 클릭 핸들러
  const handleAlreadyCouponClick = (couponId: string) => {
    setCoupons((prevCoupons) =>
      prevCoupons.map((coupon) =>
        coupon.id === couponId ? { ...coupon, state: false } : coupon
      )
    );
  };

  // "받기" 버튼 클릭 핸들러
  const handleYetCouponClick = (couponId: string) => {
    setCoupons((prevCoupons) =>
      prevCoupons.map((coupon) =>
        coupon.id === couponId ? { ...coupon, state: true } : coupon
      )
    );
  };

  useEffect(() => {
    const getMyInfo = async () => {
        try {
            const api = await getApi();
            const res = await api.getAllCoupon();
            setCouponInfo(res.data);
        } catch (e) {
            navigate("/mypage/coupon");
            throw e;
        }
    }
    getMyInfo().then();
  }, []);

  return (
    <div className="Coupon">
      <div className="CouponWrapper">
        <div className="CouponTitle">쿠폰</div>
        <div className="AlreadyCoupon">
          <ul className="CouponCardList grid grid-cols-2 pt-10 lg:grid-cols-3 gap-12 xl:grid-cols-4">
            {alreadyCoupons.map((coupons) => (
              <li className="CouponCard" key={coupons.id}>
                <div className="AlreadyCouponCard">
                  <div className="AlreadyCouponCardContent">
                    <div className="AlreadyCouponCardContentTitle font-semibold">{coupons.title}</div>
                    <div className="AlreadyCouponCardContentValue"><p className='PercentNumber'>{coupons.value}</p><p className='Percent'>%</p></div>
                    <div className="AlreadyCouponCardContentDate">{coupons.date}</div>
                    <div className="AlreadyCouponCardContentCondition">{coupons.condition}</div>
                  </div>
                  <button className="AlreadyCouponCardBtn" title="받음"
                  onClick={() => handleAlreadyCouponClick(coupons.id)}>받음</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr className="CouponLine"/>
        <div className="YetCoupon">
          <ul className="CouponCardList grid grid-cols-2 pt-10 lg:grid-cols-3 gap-12 xl:grid-cols-4 gap-12">
            {yetCoupons.map((coupons) => (
              <li className="CouponCard" key={coupons.id}>
                <div className="YetCouponCard">
                  <div className="YetCouponCardContent">
                    <div className="YetCouponCardContentTitle font-semibold">{coupons.title}</div>
                    <div className="YetCouponCardContentValue"><p className='PercentNumber'>{coupons.value}</p><p className='Percent'>%</p></div>
                    <div className="YetCouponCardContentDate">{coupons.date}</div>
                    <div className="YetCouponCardContentCondition">{coupons.condition}</div>
                  </div>
                  <button className="YetCouponCardBtn" title="받기"
                  onClick={() => handleYetCouponClick(coupons.id)}>받기</button>
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