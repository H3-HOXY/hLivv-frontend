import React, { useState } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import "../Components_scss/Navbar.scss";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="navbar shadow-md border-t-2 border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          {/* 메뉴 */}
          <div className="flex space-x-4">
            <div>
              <Link className="flex items-center py-5 px-2 text-gray-700" to="/">
                <img className="h-7 w-7 mr-2" alt="logo" src="img/hlivv_logo.png" />
                <span className="font-bold">H.Livv</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link className="py-5 px-3 text-gray-700 hover:text-red-900" to="/intro">
                INTRO
              </Link>
              <Link className="py-5 px-3 text-gray-700 hover:text-red-900" to="/store">
                STORE
              </Link>
              <Link className="py-5 px-3 text-gray-700 hover:text-red-900" to="/restore">
                RE-STORE
              </Link>
              <Link className="py-5 px-3 text-gray-700 hover:text-red-900" to="/raffle">
                RAFFLE
              </Link>
            </div>
          </div>

          {/* 메뉴2 */}
          <div className="hidden md:flex items-center space-x-1">
            <Link className="py-5 px-3" to="/login">
              Login
            </Link>
            <Link className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300" to="/signup">
              Signup
            </Link>
          </div>

          {/* mobile menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuToggle(!menuToggle)}
            >
              {menuToggle ? (
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
      <div className={classNames("md:hidden", { hidden: !menuToggle })}>
        <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/intro">
          INTRO
        </Link>
        <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/store">
          STORE
        </Link>
        <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/restore">
          RESTORE
        </Link>
        <Link className="block py-2 px-4 text-sm hover:bg-gray-200" to="/raffle">
          RAFFLE
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
