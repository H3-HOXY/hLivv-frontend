import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import classNames from 'classnames';
import "../styles/Navbar.scss";
import {useImage} from "../hooks/useImage";

export type NavbarProps = {
    marginTop: string,
    setMarginTop: React.Dispatch<React.SetStateAction<string>>,
    authentication: boolean,
    setAuthentication: React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar = (props: NavbarProps) => {
    //@ts-ignore
    const navigate = useNavigate()
    const ref = useRef(null);
    const image = useImage()
    const [showMenus, setShowMenus] = useState(false)

    const [showMenu, setShowMenu] = useState<boolean>(false)

    useEffect(() => {
        if (ref.current === null) return
        // @ts-ignore
        if (ref.current.offsetHeight !== props.marginTop) {
            // @ts-ignore
            props.setMarginTop(ref.current.offsetHeight + "px")
            // @ts-ignore
            console.log(ref.current.offsetHeight);
        }
    }, [ref]);
    return (
        <nav ref={ref} className="navbar shadow-md border-t-4 border-gray-200 bg-white">
            {/* max-w-7xl */}
            <div className="max-w-screen-2xl mx-auto px-5">
                <div className="flex justify-between">
                    {/* 메뉴 */}
                    <div className="flex space-x-4">
                        <div>
                            <Link className="flex items-center py-5 px-2 text-gray-700" to="/">
                                <img className="h-7 w-7 mr-2" alt="logo" src={image("hlivv_logo.png")}/>
                                <span className="font-bold">H.Livv</span>
                            </Link>
                        </div>
                        <div className="navbarmenu hidden md:flex items-center space-x-1">
                            {/* <Link className="py-5 px-3 text-gray-700 hover:text-red-900" to="/intro">
                                INTRO
                            </Link> */}
                            <Link className="py-5 px-3 text-gray-700 hover:text-red-900" to="/store">
                                쇼핑
                            </Link>
                            <Link className="py-5 px-3 text-gray-700 hover:text-red-900" to="/collabo">
                                콜라보
                            </Link>
                            <Link className="py-5 px-3 text-gray-700 hover:text-red-900" to="/preference">
                                취향찾기
                            </Link>
                            <Link className="py-5 px-3 text-gray-700 hover:text-red-900" to="/restore">
                                리스토어
                            </Link>
                            {/* <Link className="py-5 px-3 text-gray-700 hover:text-red-900" to="/raffle">
                                RAFFLE
                            </Link> */}
                        </div>
                    </div>

                    {/* 메뉴2 */}
                    {/* Menu for authenticated users */}
                    {props.authentication && (
                        <div className="navbarauth hidden md:flex items-center space-x-1">
                            <Link className="py-5 px-3" to="/logout">
                                로그아웃
                            </Link>
                            {/* bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 */}
                            <Link
                                className="py-2 px-3 rounded transition duration-300"
                                to="/mypage">
                                마이페이지
                            </Link>
                        </div>
                    )}

                    {/* Menu for non-authenticated users */}
                    {!props.authentication && (
                        <div className="hidden md:flex items-center space-x-1">
                            <Link className="py-5 px-3" to="/login">
                                로그인
                            </Link>
                            <Link
                                className="py-2 px-3  rounded transition duration-300"
                                to="/signup">
                                회원가입
                            </Link>
                        </div>
                    )}

                    {/* mobile menu */}
                    <div className="md:hidden flex items-center z-50">
                        <button onClick={() => setShowMenus(!showMenus)}>
                            {showMenus ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile menu items */}
            <div className={classNames("md:hidden", {hidden: !showMenus})}>
                <Link className="block py-2 px-4 text-sm hover:bg-gray-200 z-50" to="/">
                    홈
                </Link>
                {/* <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/intro">
                    INTRO
                </Link> */}
                <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/store">
                    쇼핑
                </Link>
                <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/collabo">
                    콜라보
                </Link>
                <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/preference">
                    취향찾기
                </Link>
                <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/restore">
                    리스토어
                </Link>
                {/* <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/raffle">
                    RAFFLE
                </Link> */}
            </div>
        </nav>
    );
}

export default Navbar;
