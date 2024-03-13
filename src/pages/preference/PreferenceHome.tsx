import "./styles/PreferenceHome.scss"
import { useImage } from "../common/hooks/useImage";

/**
 * @since 
 * @author 최정윤
 */

const Preference = () => {
  const image = useImage()
  return (
    <div className="Preference">
      <div className="PreferenceWrapper">
        <div className="PreferenceLeft">
          <img className="PreferenceLeftImg" src={image("취향메인이미지.png")} title="pic"></img>
        </div>
        <div className="PreferenceRight">
          <img className="PreferenceRightImg" src={image("취향설명이미지.png")} title="pic"></img>
          <a href="/preference/keywordselect">
            <button className="PreferenceBtn">시작하기</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Preference;