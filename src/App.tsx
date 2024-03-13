import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import './App.css';
import Success from "./pages/order/Success";
import Fail from "./pages/order/Fail";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Mypage from "./pages/mypage/Mypage";
import {homeLoader} from "./pages/home/HomeRouter";
import Home from "./pages/home/Home";
import {loginAction} from "./pages/login/LoginRouter";
import {signUpAction} from "./pages/signup/SignUpRouter";
import {Logout} from "./pages/logout/Logout";
import {PageFrame} from "./pages/common/PageFrame";
import {Product} from "./pages/product/Product";
import ProfileEdit from "./pages/mypage/ProfileEdit";
import MyRestore from "./pages/mypage/myrestore/MyRestore";
import ReviewWrite from "./pages/mypage/buyDetail/Review";
import MypageHome from "./pages/mypage/home/MypageHome";
import PasswordEdit from "./pages/mypage/PasswordEdit";
import {productLoader} from "./pages/product/ProductRouter";
import Preference from "./pages/preference/Preference";
import React from "react";
import {Store} from "./pages/store/Store";
import {Collabo} from "./pages/collabo/Collabo";
import Cart from "./pages/mypage/cart/Cart";
import Restore from "./pages/restore/Restore";
import KeywordSelect from "./pages/preference/KeywordSelect";
import PreferenceHome from "./pages/preference/PreferenceHome";
import ColorSelect from "./pages/preference/ColorSelect";
import PreferenceTest from "./pages/preference/PreferenceTest";
import PreferenceTestResult from "./pages/preference/PreferenceTestResult";
import InteriorRecommend from "./pages/preference/InteriorRecommend";
import BuyDetail from "./pages/mypage/buyDetail/BuyDetail";
import Coupon from "./pages/mypage/Coupon";
import {orderAction} from "./pages/order/OrderRouter";
import Order from "./pages/order/Order";
import {storeLoader} from "./pages/store/StoreRouter";
import {editProfileAction} from "./pages/mypage/MyPageRouter";
import {collaboLoader} from "./pages/collabo/CollaboRouter";
import axios from "axios";

/**
 * @since 
 * @author 이호연, 최정윤
 */

const App = () => {
    return (
        <RouterProvider router={browserRouter}/>
    );
}

const browserRouter = createBrowserRouter(
    [
        homeRoutes(),
        {path: "*", Component: RootRoutes},
    ]
)

function homeRoutes() {
    return ({
        path: '/', Component: PageFrame, children: [
            {index: true, element: <Home/>, loader: homeLoader},
            {path: "/login", element: <Login/>, action: loginAction},
            {path: "/signup", element: <Signup/>, action: signUpAction},
            {path: "/logout", element: <Logout/>},
            {path: "/mypage", element: <Mypage/>},
            productRoutes(),
            collaboRoutes(),
            orderRouters(),
            preferenceRoutes(),
            mypageRoutes(),
            storeRouters(),
        ]
    })
}

function productRoutes() {
    return (
        {path: "/product/:productId", element: <Product/>, loader: productLoader}
    )
}

function collaboRoutes() {
    return (
        {path: "/collabo", element: <Collabo/>, loader: collaboLoader}
    )
}

function preferenceRoutes() {
    return {
        path: "/preference", Component: Preference, children: [
            {path: "/preference", element: <PreferenceHome/>},
            {path: "/preference/keywordselect", element: <KeywordSelect/>},
            {path: "/preference/colorselect", element: <ColorSelect/>},
            {path: "/preference/preferencetest", element: <PreferenceTest/>},
            {path: "/preference/testresult", element: <PreferenceTestResult/>},
            {path: "/preference/interiorrecommend", element: <InteriorRecommend/>},
        ]
    }
}

function mypageRoutes() {
    return {
        path: "/mypage", Component: Mypage, children: [
            {path: "/mypage", element: <MypageHome/>},
            {path: "/mypage/profileedit", element: <ProfileEdit/>, action: editProfileAction},
            {path: "/mypage/passwordedit", element: <PasswordEdit/>},
            {path: "/mypage/cart", element: <Cart/>},
            {path: "/mypage/buydetail", element: <BuyDetail/>},
            {path: "/mypage/myrestore", element: <MyRestore/>},
            {path: "/mypage/coupon", element: <Coupon/>},
            {path: "/mypage/reviewwrite", element: <ReviewWrite/>},
        ]
    }
    return {
        path: "/preference", Component: Preference, children: [
            {path: "/preference", element: <PreferenceHome/>},
            {path: "/preference/keywordselect", element: <KeywordSelect/>},
            {path: "/preference/colorselect", element: <ColorSelect/>},
        ]
    }

}

function storeRouters() {
    return {
        path: "/store", element: <Store/>, loader: storeLoader
    }
}

function orderRouters() {
    return {
        path: "/order", action: orderAction, children: [
            {index: true, element: <Order/>},
            {path: "/order/success", element: <Success/>},
            {path: "/order/fail", element: <Fail/>},
        ]
    }
}

function RootRoutes() {
    return (
        <Routes>
            <Route element={<PageFrame/>}>
                <Route path="/collabo" element={<Collabo/>}/>
                <Route path="/restore" element={<Restore/>}/>
            </Route>
        </Routes>
    )
}

export default App;
