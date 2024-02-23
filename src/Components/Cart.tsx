import "../Components_scss/Cart.scss"
const Cart = () => {
  return (
    <div className="Cart">
      {/* 상품 아이템 섹션 */}
      <div className="CartTitle">장바구니</div>
      <div className="CartContainSelection">
        <div className="CartContainSelectionAllCheck">
          <div className="CartContainSelectionAllCheckText">모두선택</div>
        </div>
        <div className="CartContainSelectionDel">선택삭제</div>
      </div>
      <div className="CartContain">
        <div className="CartContainHeader">
          <div className="CartContainTitle">COY</div>
        </div>
        <div className="CartContent">
          <div className="CartContentItem">
            <div className="CartContentItemProduct">
              <div className="CartContentProductCheckbox"></div>
              <div className="CartContentProductPic"><img className="ProfileImgSrc" src="img/flower.png" title="pic"></img></div>
              <div className="CartContentProductName"></div>
              <div className="CartContentProductDelivery"></div>
              <div className="CartContentProductDel"></div>
            </div>
            <div className="CartContentOrder">
              <div className="CartContentOrderHead"></div>
              <div className="CartContentOrderBottom"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 결제 섹션 */}
      <div className="CartPayTitle">결제금액</div>
      <div className="CartPayContain"></div>
    </div>
  );
}

export default Cart;