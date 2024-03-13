import Sidebar from "./Sidebar";
import "./styles/Mypage.scss"
import { Outlet } from "react-router-dom";
import Footer from "../common/components/Footer";

/**
 * @since 
 * @author 최정윤, 이호연
 */

 const Mypage = () => {
  
  return (<>
    <Sidebar/>
    <div className="Mypage">
      <Outlet/>
    </div>
    </>
 );
}
export default Mypage;