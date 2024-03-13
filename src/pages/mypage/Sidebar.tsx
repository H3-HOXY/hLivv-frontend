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

    const toggleDropdown = (dropdown: string) => {
        switch (dropdown) {
            case 'myInfo':
                setShowMyInfoDropdown(!showMyInfoDropdown);
                break;
            case 'myShopping':
                setShowMyShoppingDropdown(!showMyShoppingDropdown);
                break;
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
                                    <IoPersonCircle/>
                                </span>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-white hover:text-gray-500">마이페이지</span>
                            </a>
                        </li>

                        {/* 나의정보 메뉴 */}
                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-white hover:text-gray-500 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-shopping" data-collapse-toggle="dropdown-shopping"
                                onClick={() => toggleDropdown('myInfo')}
                            >
                                <FaInfoCircle className='hover:text-gray-500'/>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-white hover:text-gray-500">나의 정보</span>
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
                                <FaShoppingCart/>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-white hover:text-gray-500">나의 쇼핑</span>
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
                                    <li>
                                        <a href="/mypage/coupon"
                                           className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-gray-500 dark:text-white dark:hover:bg-gray-700">쿠폰함</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;