import "./styles/Preference.scss"
import { Outlet } from "react-router-dom";
import { useImage } from "../common/hooks/useImage";

/**
 * @since 
 * @author 최정윤, 이호연
 */

const Preference = () => {
  const image = useImage()
  return (
    <div className="Preference">
      <Outlet/>
    </div>
  );
}

export default Preference;