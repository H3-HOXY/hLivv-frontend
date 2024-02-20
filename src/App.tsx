import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./pages/home/Home";
import Intro from "./Components/Intro";
import Store from "./Components/Store";
import Order from "./Components/Order";
import Success from "./Components/Success";
import Fail from "./Components/Fail";
import Restore from "./Components/Restore";
import Raffle from "./Components/Raffle";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Mypage from "./Components/Mypage";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/store" element={<Store />} />
            <Route path="/order" element={<Order />} />
            <Route path="/success" element={<Success />} />
            <Route path="/success" element={<Fail />} />
            <Route path="/restore" element={<Restore />} />
            <Route path="/raffle" element={<Raffle />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mypage" element={<Mypage />} >
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
