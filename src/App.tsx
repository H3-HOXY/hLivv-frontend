import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Store from "./Components/Store";
import Restore from "./Components/Restore";
import Raffle from "./Components/Raffle";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/restore" element={<Restore />} />
          <Route path="/raffle" element={<Raffle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
