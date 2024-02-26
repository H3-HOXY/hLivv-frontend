import "../Components_scss/Preference.scss"
import { useImage } from "../pages/common/hooks/useImage";

const Preference = () => {
  const image = useImage()
  return (
    <div className="Preference">
      <div className="PreferenceWrapper">
        <img className="PreferenceLeftImg" src={image("취향메인이미지.png")} title="pic"></img>
        <div className="PreferenceRight">
          <img className="PreferenceRightImg" src={image("취향설명이미지.png")} title="pic"></img>
          <button className="PreferenceBtn">시작하기</button>
        </div>
      </div>
    </div>
  );
}

export default Preference;