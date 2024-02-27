import "../Components_scss/Preference.scss"
import { Outlet } from "react-router-dom";

const Preference = () => {
  return (
    <div className="Preference">
      <Outlet/>
    </div>
  );
}

export default Preference;