import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import './App.css';
import Intro from "./Components/Intro";
import Raffle from "./Components/Raffle";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Mypage from "./Components/Mypage";
import Order from "./Components/Order";
import {homeLoader} from "./pages/home/HomeRouter";
import Home from "./pages/home/Home";
import {loginAction} from "./pages/login/LoginRouter";
import {signUpAction} from "./pages/signup/SignUpRouter";
import {Logout} from "./pages/logout/Logout";
import {PageFrame} from "./pages/common/PageFrame";
import {Product} from "./pages/product/Product";
import {productLoader} from "./pages/product/ProductRouter";
import React from "react";
import {Store} from "./pages/store/Store";
import {Collabo} from "./pages/collabo/Collabo";
import Cart from "./Components/Cart";
import {Restore} from "./pages/restore/Restore";

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
            {path: "/store", element: <Store/>},
            {path: "/restore", element: <Restore/>},
            {path: "/raffle", element: <Raffle/>},
            {path: "/intro", element: <Intro/>},
            productRoutes(),
            collaboRoutes(),
            mypageRoutes(),
        ]
    })
}

function productRoutes() {
    return (
        {path: "/product/:productId", element: <Product/>, loader: productLoader}
    )
}

function mypageRoutes() {
    return {
        path: "/mypage", Component: Mypage, children: [
            // {path:"/mypage", element:<MypageHome/>},
            {path: "/mypage/cart", element: <Cart/>},
            // {path:"/mypage/profileedit", element:<ProfileEdit/>},
            // {path:"/mypage/passwordedit", element:<PasswordEdit/>},
            // {path:"/mypage/myrestore", element:<MyRestore/>},
            // {path:"/mypage/reviewwrite", element:<ReviewWrite/>},
            // {path:"/mypage/myreview", element:<MyReview/>},
        ]
    }
}

function collaboRoutes() {
    return (
        {path: "/collabo", element: <Collabo/>}
    )
}

function RootRoutes() {
    return (
        <Routes>
            <Route element={<PageFrame/>}>
                <Route path="/intro" element={<Intro/>}/>
                <Route path="/order" element={<Order/>}/>
            </Route>
        </Routes>
    )
}

export default App;
