import "../Components_scss/ColorSelect.scss"
import { useImage } from "../pages/common/hooks/useImage";

const Preference = () => {
  const image = useImage()
  return (
    <div className="ColorSelect">
      <div className="ColorSelectWrapper">
        <div className="ColorSelectTitle">
          <div className="ColorSelectSubTitle">인테리어 취향 테스트</div>
          <div className="ColorSelectMainTitle">선호하는 컬러를 2개 선택해 주세요</div>
        </div>
        <hr className="ColorSelectLine"/>
        <div className="ColorSelectContent">
          <div className="ColorSelectContentLine">
            <img className="ColorSelectImg" src={image("블랙.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("화이트.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("그레이.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("베이지.png")} title="pic"></img>
          </div>
          <div className="ColorSelectContentLine">
            <img className="ColorSelectImg" src={image("오크.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("월넛.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("레드.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("핑크.png")} title="pic"></img>
          </div>
          <div className="ColorSelectContentLine">
            <img className="ColorSelectImg" src={image("옐로우.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("그린.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("민트.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("블루.png")} title="pic"></img>
          </div>
          <div className="ColorSelectContentLine">
            <img className="ColorSelectImg" src={image("네이비.png")} title="pic"></img>
          </div>
        </div>
        <div className="ColorSelectMove">
          <a href="/preference/keywordselect">
            <button className="ColorSelectPrevBtn" title="이전">이전</button>
          </a>
          <a href="/preference/">
            <button className="ColorSelectNextBtn" title="다음">다음</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Preference;