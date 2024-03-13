import React, {useState} from 'react';
import "./styles/Sidebar.scss";
import {FaInfoCircle, FaShoppingCart} from "react-icons/fa";
import {IoPersonCircle} from "react-icons/io5";

/**
 * @since 
 * @author 최정윤
 */

const Sidebar = () => {
    const [showMyInfoDropdown, setShowMyInfoDropdown] = useState(false);
    const [showMyShoppingDropdown, setShowMyShoppingDropdown] = useState(false);
    // const [showMyReviewDropdown, setShowMyReviewDropdown] = useState(false);

    const toggleDropdown = (dropdown: string) => {
        switch (dropdown) {
            case 'myInfo':
                setShowMyInfoDropdown(!showMyInfoDropdown);
                break;
            case 'myShopping':
                setShowMyShoppingDropdown(!showMyShoppingDropdown);
                break;
            // case 'myReview':
            //   setShowMyReviewDropdown(!showMyReviewDropdown);
            //   break;
            default:
                break;
        }
    };

    const renderDropdownIcon = (dropdown: string) => {
        return (
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d={showDropdown(dropdown) ? "M1 1 4 4 4-4" : "M9 1 6 4 6-4"}/>
            </svg>
        );
    };

    const showDropdown = (dropdown: string) => {
        switch (dropdown) {
            case 'myInfo':
                return showMyInfoDropdown;
            case 'myShopping':
                return showMyShoppingDropdown;
            // case 'myReview':
            //   return showMyReviewDropdown;
            default:
                return false;
        }
    };

    return (
        <div className="Sidebar">
            <aside id="sidebar-multi-level-sidebar"
                   className="fixed top-35 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                    {/* bg-gray-50 */}
                <div className="sidebarcontain h-full px-3 py-4 overflow-y-auto white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">

                        {/* 메인 메뉴 */}
                        <li>
                            <a href="/mypage"
                               className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-white dark:text-white dark:hover:bg-gray-700">
                                <span
                                    className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-white"
                                    aria-hidden="true">
                                {/* 사용할 아이콘 코드 (예시: 사용자 아이콘) */}
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-4 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm-3 5a1 1 0 0 1-2 0 1 1 0 0 1 2 0z" />
                                </svg> */}
                                    <IoPersonCircle/>
                                </span>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-white hover:text-gray-500">마이페이지</span>
                            </a>
                        </li>

                        {/* 나의정보 메뉴 */}
                        <li>
                            {/* <a href="/mypage" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <span className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-4 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm-3 5a1 1 0 0 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </span>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">나의정보</span>
              </a> */}
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-white hover:text-gray-500 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-shopping" data-collapse-toggle="dropdown-shopping"
                                onClick={() => toggleDropdown('myInfo')}
                            >
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                </svg> */}
                                <FaInfoCircle className='hover:text-gray-500'/>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-white hover:text-gray-500">나의 정보</span>
                                {/* <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg> */}
                                {renderDropdownIcon('myInfo')}
                            </button>
                            {showMyInfoDropdown && (
                                <ul id="dropdown-shopping" className="py-2 space-y-2">
                                    <li>
                                        <a href="/mypage/profileedit"
                                           className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-gray-500 dark:text-white dark:hover:bg-gray-700">프로필
                                            편집</a>
                                    </li>
                                    <li>
                                        <a href="/mypage/passwordedit"
                                           className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-gray-500 dark:text-white dark:hover:bg-gray-700">비밀번호
                                            수정</a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* 나의쇼핑 메뉴 */}
                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-white hover:text-gray-500 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-shopping" data-collapse-toggle="dropdown-shopping"
                                onClick={() => toggleDropdown('myShopping')}
                            >
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                </svg> */}
                                <FaShoppingCart/>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-white hover:text-gray-500">나의 쇼핑</span>
                                {/* <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg> */}
                                {renderDropdownIcon('myShopping')}
                            </button>
                            {showMyShoppingDropdown && (
                                <ul id="dropdown-shopping" className="py-2 space-y-2">
                                    <li>
                                        <a href="/mypage/cart"
                                           className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-gray-500 dark:text-white dark:hover:bg-gray-700">장바구니</a>
                                    </li>
                                    <li>
                                        <a href="/mypage/buydetail"
                                           className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-gray-500 dark:text-white dark:hover:bg-gray-700">구매내역</a>
                                    </li>
                                    <li>
                                        <a href="/mypage/myrestore"
                                           className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-gray-500 dark:text-white dark:hover:bg-gray-700">리스토어</a>
                                    </li>
                                    {/* <li>
                  <a href="/mypage/myrestoredetail" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">리스토어내역</a>
                </li> */}
                                    <li>
                                        <a href="/mypage/coupon"
                                           className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-gray-500 dark:text-white dark:hover:bg-gray-700">쿠폰함</a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* 나의리뷰 메뉴 */}
                        {/* <li>
              <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-shopping" data-collapse-toggle="dropdown-shopping"
              onClick={() => toggleDropdown('myReview')}
              >
                <MdRateReview />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">나의 리뷰</span>
                {renderDropdownIcon('myReview')}
              </button>
              {showMyReviewDropdown && (
              <ul id="dropdown-shopping" className="py-2 space-y-2">
                <li>
                  <a href="/mypage/reviewwrite" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">리뷰쓰기</a>
                </li>
                <li>
                  <a href="/mypage/myreview" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">내가 작성한 리뷰</a>
                </li>
              </ul>
              )}
            </li> */}
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;