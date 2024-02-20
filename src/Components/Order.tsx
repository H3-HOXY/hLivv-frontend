import "../Components_scss/Order.scss"
import { Select, initTE } from "tw-elements";
initTE({ Select });

const Order = () => {
  return (
    <div className="Order">
      <div>주문/결제</div>
      {/* 배송지 */}
      <div className="OrderDestination">
        <div className="OrderDestinationTitle">
          <div className="OrderDestinationTitleLeft">배송지</div>
          <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">변경</button>
        </div>
        <hr/>
        <div className="OrderDestinationFirst">
          <div className="OrderDestinationName">홍길동</div>
        </div>
        <div className="OrderDestinationAddress">서울시 00구 00로 00아파트 000호</div>
        <div className="OrderDestinationTel">010-1234-5678</div>
        {/* 배송메세지 */}
        <select title="message" data-te-select-init data-te-select-option-height="52">
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

      {/* 주문자 */}
      <div className="OrderCustomer">
        <div className="OrderCustomerTitle">주문자</div>
        <hr/>
        <div className="OrderCustomerName">이름 홍길동</div>
        <div className="OrderCustomerEmail">이메일 abcd123@naver.com</div>
        <div className="OrderCustomerTel">전화번호 01012345678</div>
      </div>

      {/* 주문상품 */}
      <div className="OrderProduct">
        <div className="OrderProductTitle">주문상품</div>
        <hr/>
        <div className="OrderProductContainer">
          <div className="OrderProductContainerHeader">COY</div>
          <div className="OrderProductContainerContent">
            <div className="OrderProductContainerContentLeft">(가구사진)</div>
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
        <hr/>
      </div>

      {/* 포인트 */}
      <div className="OrderPoint">
        <div className="OrderPointTitle">포인트</div>
        <hr/>
        <input type="text" title="point"></input>
        <button>전액 사용</button>
      </div>

      {/* 결제수단 */}
      <div className="OrderMethod">
        <div className="OrderMethodTitle">결제수단</div>
        <hr/>
      </div>

      {/* 결제금액 */}
      <div className="OrderAmount">
        <div className="OrderAmountTitle">결제금액</div>
        <hr/>
      </div>

      {/* 주소록 변경 모달창 */}
      <div id="crud-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Product
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                </div>
                {/* ... other input fields ... */}
              </div>
              <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                Add new product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;