import "./styles/InteriorRecommend.scss"
import { useImage } from "../../pages/common/hooks/useImage";

/**
 * @since 
 * @author 최정윤
 */

const InteriorRecommend = () => {
  const image = useImage()
  return (
    <div className="InteriorRecommend">
      <div className="InteriorRecommendWrapper">
        <div className="InteriorRecommendContain">
          <div className="InteriorRecommendTitle">인테리어 취향 테스트 결과</div>
          <div className="InteriorRecommendContent">
            <div className="InteriorRecommendContentLeft">
              <img className="InteriorRecommendContentImg" src={image("인테리어추천.png")} title="pic"></img>
            </div> 
            <div className="InteriorRecommendContentRight">
              <div className="InteriorRecommendContentRightKoTitle">세미클래식</div>
              <div className="InteriorRecommendContentRightEnTitle">Semi Classic</div>
              <hr className="InteriorRecommendContentRightLine"/>
              <div className="InteriorRecommendContentRightContentList">
                <li>특별한 인테리어로 변화주고 싶다면</li>
                <li>정통 클래식 인테리어는 부담스럽다면</li>
                <li>부피가 큰 클래식한 가구난 조명, 소품으로 장식하고 싶다면</li>
              </div>
              <div className="InteriorRecommendContentRightContentDescription">크림, 웜 그레이 컬러를 기본으로 곡선 형태의 장식적인 요소를 더한 우아한 클래식 감성을 표현한 스타일입니다. 화려하고 고급스러운 패턴의 소재를 매치하여 특별하고 우아한 매력을 느낄 수 있습니다.</div>
            </div>
          </div>
        </div>
        <a href="/collabo">
          <button className="InteriorRecommendBtn" title="추천버튼">해당 스타일 상품 보러가기</button>
        </a>
      </div>
    </div>
  );
}

export default InteriorRecommend;