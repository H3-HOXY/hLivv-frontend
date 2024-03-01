import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import './App.css';
import Intro from "./Components/Intro";
import Order from "./Components/Order";
import Success from "./Components/Success";
import Fail from "./Components/Fail";
import Raffle from "./Components/Raffle";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Mypage from "./Components/Mypage";
import {homeLoader} from "./pages/home/HomeRouter";
import Home from "./pages/home/Home";
import {loginAction} from "./pages/login/LoginRouter";
import {signUpAction} from "./pages/signup/SignUpRouter";
import {Logout} from "./pages/logout/Logout";
import {PageFrame} from "./pages/common/PageFrame";
import {Product} from "./pages/product/Product";
import ProfileEdit from "./Components/ProfileEdit";
import MyRestore from "./Components/MyRestore";
import MypageHome from "./Components/MypageHome";
import ReviewWrite from "./Components/ReviewWrite";
import MyReview from "./Components/MyReview";
import PasswordEdit from "./Components/PasswordEdit";
import {productLoader} from "./pages/product/ProductRouter";
import Preference from "./Components/Preference";
import React from "react";
import {Store} from "./pages/store/Store";
import {Collabo} from "./pages/collabo/Collabo";
import Cart from "./Components/Cart";
import Restore from "./Components/Restore";
import KeywordSelect from "./Components/KeywordSelect";
import PreferenceHome from "./Components/PreferenceHome";
import ColorSelect from "./Components/ColorSelect";
import Modal from "./Components/Modal";
import PreferenceTest from "./Components/PreferenceTest";
import PreferenceTestResult from "./Components/PreferenceTestResult";
import InteriorRecommend from "./Components/InteriorRecommend";

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
            {path:"/mypage", element:<Mypage/>},
            productRoutes(),
            collaboRoutes(),
            preferenceRoutes(),
            mypageRoutes(),
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
        {path: "/collabo", element: <Collabo/>}
    )
}

function preferenceRoutes() {
    return {path: "/preference", Component: Preference, children:[
            {path:"/preference", element:<PreferenceHome/>},
            {path:"/preference/keywordselect", element:<KeywordSelect/>},
            {path:"/preference/colorselect", element:<ColorSelect/>},
            {path:"/preference/preferencetest", element:<PreferenceTest/>},
            {path:"/preference/testresult", element:<PreferenceTestResult/>},
            {path:"/preference/interiorrecommend", element:<InteriorRecommend/>},
        ]}
}

function mypageRoutes(){
    return {path:"/mypage", Component: Mypage, children:[
        {path:"/mypage", element:<MypageHome/>},
        {path:"/mypage/cart", element:<Cart/>},
        {path:"/mypage/profileedit", element:<ProfileEdit/>},
        {path:"/mypage/passwordedit", element:<PasswordEdit/>},
        {path:"/mypage/myrestore", element:<MyRestore/>},
        {path:"/mypage/reviewwrite", element:<ReviewWrite/>},
        {path:"/mypage/myreview", element:<MyReview/>},
    ]}
}

function RootRoutes() {
    return (
        <Routes>
            <Route element={<PageFrame/>}>
                <Route path="/intro" element={<Intro/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/collabo" element={<Collabo/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/restore" element={<Restore/>}/>
                <Route path="/raffle" element={<Raffle/>}/>
                <Route path="/modal" element={<Modal/>}/>
            </Route>
        </Routes>
    )
}

export default App;
