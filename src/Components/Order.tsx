import "../Components_scss/Order.scss"
import { Select, initTE } from "tw-elements";
import { useEffect, useRef, useState } from "react"
import { loadPaymentWidget, PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk"
import { nanoid } from "nanoid"
import axios from "axios";
import ModalBase from './ModalBase';
import CardModal from './CardModal';
initTE({ Select });

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq"
const customerKey = "YbX2HuSlsC9uVJW6NMRMj"

const Order = () => {

  // 결제 기능
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null)
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null)
  const [price, setPrice] = useState(50_000)

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey)

      paymentWidget.renderPaymentMethods("#payment-widget", price)

      paymentWidgetRef.current = paymentWidget
    })()
  }, [])

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current

    if (paymentMethodsWidget == null) {
      return
    }

    paymentMethodsWidget.updateAmount(
      price,
      paymentMethodsWidget.UPDATE_REASON.COUPON
    )
  }, [price])

  // 모달 기능
  const [isActive, setIsActive] = useState(false);

  const onClickModalOn = () => {
    setIsActive(true);
  };

  const onClickModalOff = () => {
    setIsActive(false);
  };

  const onClickCardRemove = () => {
    alert('이벤트 실행');
  };

  return (
    <div className="Order max-w-7xl mx-auto px-4">
      <div className="OrderTitle">주문/결제</div>
      <div className="OrderContent">
        {/* 배송지 */}
        <div className="OrderDestination">
          <div className="OrderDestinationTitle">
            <div className="OrderDestinationTitleLeft">배송지</div>
            <button onClick={onClickModalOn}>변경</button>
            <ModalBase active={isActive} closeEvent={onClickModalOff}>
              <CardModal closeEvent={onClickModalOff} title="주소지 변경" actionMsg="삭제" actionEvent={onClickCardRemove}>
                주소록을 변경하시겠습니까?
                <br />
                변경할 주소를 선택하세요.
              </CardModal>
            </ModalBase>
          </div>
          <hr className="OrderLine"/>
          <div className="OrderDestinationContent">
            <div className="OrderDestinationFirst">
              <div className="OrderDestinationName">홍길동</div>
              <div className="OrderDestinationNameInfo">기본배송지</div>
            </div>
            <div className="OrderDestinationAddress">서울시 00구 00로 00아파트 000호</div>
            <div className="OrderDestinationTel">010-1234-5678</div>
            {/* 배송메세지 */}
            <select className="OrderDestinationRequire" title="message" data-te-select-init data-te-select-option-height="52">
              <option value="1" data-te-select-secondary-text="Secondary text">
                One
              </option>
              <option value="2" data-te-select-secondary-text="Secondary text">
                Two
              </option>
              <option value="3" data-te-select-secondary-text="Secondary text">
                Three
              </option>
              <option value="4" data-te-select-secondary-text="Secondary text">
                Four
              </option>
              <option value="5" data-te-select-secondary-text="Secondary text">
                Five
              </option>
            </select>
          </div>
        </div>

        {/* 주문자 */}
        <div className="OrderCustomer">
          <div className="OrderCustomerTitle">주문자</div>
          <hr className="OrderLine"/>
          <div className="OrderCustomerItem">
            <div className="OrderCustomerItemText">이름</div>
            <input className="OrderCustomerItemInput" title="이름"></input>
          </div>
          <div className="OrderCustomerItem">
            <div className="OrderCustomerItemText">이메일</div>
            <input className="OrderCustomerItemInput" title="이름"></input>
            <div className="OrderCustomerItemEmoji"> @ </div>
            <select className="OrderCustomerItemSelect" title="이메일" data-te-select-init data-te-select-option-height="52">
              <option>naver.com</option>
              <option>gmail.com</option>
              <option>hanmail.com</option>
            </select>
          </div>
          <div className="OrderCustomerItem">
            <div className="OrderCustomerItemText">전화번호</div>
            <input className="OrderCustomerItemInput" title="이름"></input>
          </div>
        </div>

        {/* 주문상품 */}
        <div className="OrderProduct">
          <div className="OrderProductTitle">주문상품</div>
          <hr className="OrderLine"/>
          <div className="OrderProductContainer">
            <div className="OrderProductContainerHeader">COY</div>
            <div className="OrderProductContainerContent">
              <img className="OrderProductContainerContentImg mr-2" alt="logo" src="img/베스트1.jpeg" />
              <div className="OrderProductContainerContentRight">
                <div className="OrderProductContainerContentRightName">코이 6단 이동식 책상세트</div>
                <div className="OrderProductContainerContentRightSize">사이즈 1200</div>
                <div className="OrderProductContainerContentRightColor">색상 화이트</div>
                <div className="OrderProductContainerContentRightPrice">702,000원 | 1개</div>
              </div>
            </div>
          </div>
        </div>

        {/* 쿠폰 */}
        <div className="OrderCoupon">
          <div className="OrderCouponTitle">
            <div className="OrderCouponTitleLeft">쿠폰</div>
            <div className="OrderCouponTitleRight">사용가능한 쿠폰이 없어요.</div>
          </div>
          <hr className="OrderLine"/>
          <select className="OrderCouponOption" title="coupon">
            <option></option>
          </select>
        </div>

        {/* 포인트 */}
        <div className="OrderPoint">
          <div className="OrderPointTitle">포인트</div>
          <hr className="OrderLine"/>
          <div className="OrderPointContent">
            <div className="OrderPointContentFirst">
              <input className="OrderPointPay" type="text" title="point"></input>
              <button className="OrderPointUse">전액사용</button>
            </div>
            <div className="OrderPointRest">
              <div className="OrderPointRestTitle">사용 가능 포인트</div>
              <div className="OrderPointRestMoney">134P</div>
            </div>
          </div>
        </div>

        {/* 결제수단 */}
        <div className="OrderMethod">
          <div className="OrderMethodTitle">결제수단</div>
          <hr className="OrderLine"/>
          <div className="App">
            <div id="payment-widget" />
          </div>
        </div>

        {/* 결제금액 */}
        <div className="OrderAmount">
          <div className="OrderAmountTitle">결제금액</div>
          <hr className="OrderLine"/>
          <div className="OrderAmountContent">
            <div className="OrderAmountContentLeft">
              <div className="OrderAmountContentLeftPay">
                <div className="OrderAmountContentLeftPayText">총 상품 금액</div>
                <div className="OrderAmountContentLeftPayNumber">26,900원</div>
              </div>
              <div className="OrderAmountContentLeftPay">
                <div className="OrderAmountContentLeftPayText">배송비</div>
                <div className="OrderAmountContentLeftPayNumber">0원</div>
              </div>
              <div className="OrderAmountContentLeftPay">
                <div className="OrderAmountContentLeftPayText">쿠폰 사용</div>
                <div className="OrderAmountContentLeftPayNumber">0원</div>
              </div>
              <div className="OrderAmountContentLeftPay">
                <div className="OrderAmountContentLeftPayText">포인트 사용</div>
                <div className="OrderAmountContentLeftPayNumber">0원</div>
              </div>
              <hr className="OrderAmountContentLeftLine"/>
              <div className="OrderAmountContentLeftPay">
                <div className="OrderAmountContentLeftFinalPayText">최종 결제 금액</div>
                <div className="OrderAmountContentLeftFinalPayNumber">26,900원</div>
              </div>
            </div>
            <div className="OrderAmountContentRight">
              <div className="OrderAmountContentRightWrapper">
                <div className="flex items-center mb-4">
                    <input title="agree" id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">아래 내용에 모두 동의합니다. (필수)</label>
                </div>
                <div className="flex items-center">
                    <input title="agree" id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">개인정보 수집 이용 및 제 3자 제공 동의 (필수)</label>
                </div>
                <div className="OrderAmountContentRightTitle">본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.</div>
                <div className="OrderAmountContentRightContent">
                  (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한
                  상품정보 및 거래 등에 대해 책임을 지지 않습니다 (단, (주)버킷플레이스가 판매자로
                  등록 판매한 상품은 판매자로서 책임을 부담합니다)
                </div>
                <button
                  className="OrderAmountBtn"
                  onClick={async () => {
                    const paymentWidget = paymentWidgetRef.current

                    try {
                      await paymentWidget?.requestPayment({
                        orderId: nanoid(),
                        orderName: "토스 티셔츠 외 2건",
                        customerName: "김토스",
                        customerEmail: "customer123@gmail.com",
                        successUrl: `${window.location.origin}/success`,
                        failUrl: `${window.location.origin}/fail`,
                    }) 
                    } catch (err) {
                        console.log(err)
                    }
                  }}
                >
                  결제하기
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
     </div>
  );
}

export default Order;