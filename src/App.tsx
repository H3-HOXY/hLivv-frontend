import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import './App.css';
import Intro from "./Components/Intro";
import Success from "./Components/Success";
import Fail from "./Components/Fail";
import Raffle from "./Components/Raffle";
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
import MyRestore from "./Components/MyRestore";
import ReviewWrite from "./Components/Review";
import MypageHome from "./pages/mypage/home/MypageHome";
import MyReview from "./Components/MyReview";
import PasswordEdit from "./pages/mypage/PasswordEdit";
import {productLoader} from "./pages/product/ProductRouter";
import Preference from "./Components/Preference";
import React from "react";
import {Store} from "./pages/store/Store";
import {Collabo} from "./pages/collabo/Collabo";
import Cart from "./pages/mypage/cart/Cart";
import Restore from "./Components/Restore";
import KeywordSelect from "./Components/KeywordSelect";
import PreferenceHome from "./Components/PreferenceHome";
import ColorSelect from "./Components/ColorSelect";
import Modal from "./Components/Modal";
import PreferenceTest from "./Components/PreferenceTest";
import PreferenceTestResult from "./Components/PreferenceTestResult";
import InteriorRecommend from "./Components/InteriorRecommend";
import BuyDetail from "./Components/BuyDetail";
import MyRestoreDetail from "./Components/MyRestoreDetail";
import Coupon from "./Components/Coupon";
import {orderAction} from "./pages/order/OrderRouter";
import {Order} from "./pages/order/Order";
import Order2 from "./pages/order/Order2";
import {storeLoader} from "./pages/store/StoreRouter";
import {editProfileAction} from "./pages/mypage/MyPageRouter";
import {collaboLoader} from "./pages/collabo/CollaboRouter";


const App = () => {
    console.log(process.env)
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
            {path: "/mypage/myrestoredetail", element: <MyRestoreDetail/>},
            {path: "/mypage/coupon", element: <Coupon/>},
            {path: "/mypage/reviewwrite", element: <ReviewWrite/>},
            {path: "/mypage/myreview", element: <MyReview/>},
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
            {index: true, element: <Order2/>},
            {path: "/order/success", element: <Success/>},
            {path: "/order/fail", element: <Fail/>},
            {path: "/order/two", element: <Order/>}
        ]
    }
}

function RootRoutes() {
    return (
        <Routes>
            <Route element={<PageFrame/>}>
                <Route path="/intro" element={<Intro/>}/>
                <Route path="/collabo" element={<Collabo/>}/>
                <Route path="/restore" element={<Restore/>}/>
                <Route path="/raffle" element={<Raffle/>}/>
                <Route path="/modal" element={<Modal/>}/>
            </Route>
        </Routes>
    )
}

export default App;
