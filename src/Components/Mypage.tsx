import Sidebar from "./Sidebar";
import "../Components_scss/Mypage.scss"
import { Outlet } from "react-router-dom";
import Footer from "../pages/common/components/Footer";

 const Mypage = () => {
  
  return (<>
    <Sidebar/>
    <div className="Mypage">
      <Outlet/>
      {/* <div className="MypageFooter">
        <Footer />
      </div> */}
    </div>
    </>
 );
}
export default Mypage;