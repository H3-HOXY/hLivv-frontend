import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import './App.css';
import Intro from "./Components/Intro";
import Store from "./Components/Store";
import Order from "./Components/Order";
import Success from "./Components/Success";
import Fail from "./Components/Fail";
import Restore from "./Components/Restore";
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
import Cart from "./Components/Cart";

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
            {path:"/mypage", element:<Mypage/>},
            {path:"/mypage/cart", element:<Cart/>},
            productRoutes(),
        ]
    })
}

function productRoutes() {
    return {path: "/product/:productId", element: <Product/>, action: loginAction}
}

function RootRoutes() {
    return (
        <Routes>
            <Route element={<PageFrame/>}>
                <Route path="/intro" element={<Intro/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/restore" element={<Restore/>}/>
                <Route path="/raffle" element={<Raffle/>}/>

            </Route>
        </Routes>
    )
}

export default App;
