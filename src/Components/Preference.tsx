import "../Components_scss/Preference.scss"
import { Outlet } from "react-router-dom";
import { useImage } from "../pages/common/hooks/useImage";

const Preference = () => {
  const image = useImage()
  return (
    <div className="Preference">
      <Outlet/>
    </div>
  );
}

export default Preference;