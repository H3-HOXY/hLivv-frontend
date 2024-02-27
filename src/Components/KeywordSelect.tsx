import "../Components_scss/KeywordSelect.scss"
import { useImage } from "../pages/common/hooks/useImage";

const Preference = () => {
  const image = useImage()
  return (
    <div className="PreferenceKeyword">
      <div className="PreferenceKeywordWrapper">
        <div className="PreferenceKeywordTitle">
          <div className="PreferenceKeywordSubTitle">인테리어 취향 테스트</div>
          <div className="PreferenceKeywordMainTitle">선호하는 키워드를 3개 선택해 주세요</div>
        </div>
        <hr className="PreferenceKeywordLine"/>
        <div className="PreferenceKeywordContent">
          <div className="PreferenceKeywordContentLine">
            <div className="PreferenceKeywordContentItem"># 심플한</div>
            <div className="PreferenceKeywordContentItem"># 깨끗한</div>
            <div className="PreferenceKeywordContentItem"># 모던한</div>
            <div className="PreferenceKeywordContentItem"># 내추럴한</div>
          </div>
          <div className="PreferenceKeywordContentLine">
            <div className="PreferenceKeywordContentItem"># 미니멀</div>
            <div className="PreferenceKeywordContentItem"># 비비드</div>
            <div className="PreferenceKeywordContentItem"># 우아한</div>
            <div className="PreferenceKeywordContentItem"># 고풍적</div>
          </div>
          <div className="PreferenceKeywordContentLine">
            <div className="PreferenceKeywordContentItem"># 동양적</div>
            <div className="PreferenceKeywordContentItem"># 트렌디</div>
          </div>
        </div>
        <div className="PreferenceKeywordMove">
          <a href="/preference">
            <button className="PreferenceKeywordPrev" title="이전">이전</button>
          </a>
          <a href="/preference/colorselect">
            <button className="PreferenceKeywordNext" title="다음">다음</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Preference;