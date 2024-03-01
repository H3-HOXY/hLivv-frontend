import "../Components_scss/Cart.scss"
import { useImage } from "../pages/common/hooks/useImage";
const Cart = () => {
  const image = useImage()
  return (
    <div className="Cart">
      <div className="CartWrapper">
        {/* 상품 아이템 섹션 */}
        <div className="CartTitle">장바구니</div>
        <div className="CartContainSelection">
          <div className="CartContainSelectionAllCheck">
            <div className="CartContainSelectionAllCheckText">모두선택</div>
          </div>
          <div className="CartContainSelectionDel">선택삭제</div>
        </div>
        {/* 같은 브랜드 상품 담을 컨테인 */}
        <div className="CartContain">
          <div className="CartContainHeader">
            COY
          </div>
          {/* 같은 브랜드 내에서 세부 상품 (여러개) */}
          <div className="CartContent">
            {/* 상품 하나 */}
            <div className="CartContentItem">
              <div className="CartContentItemProduct">
                <div className="CartContentProductLeft">
                  <div className="CartContentProductCheckbox"></div>
                  <img className="ProfileImgSrc" src={image("베스트1.jpeg")} title="pic"></img>
                  <div className="CartContentText">
                    <div className="CartContentProductName">코이 6단 이동식 책상세트</div>
                    <div className="CartContentProductDelivery">무료배송 | 일반택배</div>
                  </div>
                </div>
                <div className="CartContentProductDel">X</div>
              </div>
              <div className="CartContentOrder">
                <div className="CartContentOrderHead">
                  <div>사이즈: 1200 / 색상: 화이트</div>
                  <div>X</div>
                </div>
                <div className="CartContentOrderBottom">
                  <div>- 1 +</div>
                  <div>702,000원</div>
                </div>
              </div>
              <div className="CartContentTotal">
                <div>옵션변경 | 바로구매</div>
                <div>702,000원</div>
              </div>
            </div>
          </div>
          <div className="CartContainBottom">
            <div className="">배송비 무료</div>
          </div>
        </div>

        {/* 결제 섹션 */}
        <div className="CartPayTitle">결제금액</div>
        <div className="CartPayContain">
          <div className="CartPayContainLeft">
            <div className="CartPayContainLeftPay">
              <div className="CartPayContainLeftText">총 상품 금액</div>
              <div className="CartPayContainLeftPayNumber">26,900원</div>
            </div>
            <div className="CartPayContainLeftPay">
              <div className="CartPayContainLeftText">총 배송비</div>
              <div className="CartPayContainLeftPayNumber">0원</div>
            </div>
            <div className="CartPayContainLeftPay">
              <div className="CartPayContainLeftText">총 할인 금액</div>
              <div className="CartPayContainLeftPayNumber">0원</div>
            </div>
            <hr className="CartPayContainLine"/>
            <div className="CartPayContainLeftTotalPay">
              <div className="CartPayContainLeftText">최종 결제 금액</div>
              <div className="CartPayContainLeftTotalPayNumber">26,900원</div>
            </div>
          </div>
          <div className="CartPayContainRight">
            <div className="CartPayContainRightAgree">
              <div className="CartPayContainRightAgreeText">아래 내용에 모두 동의합니다. (필수)</div>
              <div className="CartPayContainRightAgreeText">개인정보 수집 이용 및 제3자 제공 동의 (필수)</div>
            </div>
            <div className="CartPayContainRightDescription">본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.</div>
            <div className="CartPayContainRightDescription">(주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다.</div>
            <div className="CartPayContainRightDescription">(단, (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다)</div>
            <div className="CartPayContainRightBtn"><a href="/order">1개 상품 구매하기</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;