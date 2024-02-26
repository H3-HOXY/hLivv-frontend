import "../Components_scss/Restore.scss"

const Restore = () => {
  return (
    <div className="Restore">
      <div className="RestoreWrapper">
        <div className="RestoreIntro">
          <div className="RestoreIntroTitle">리스토어 서비스</div>
          <div className="RestoreIntroContent">
            <p className="RestoreIntroContentText">더 이상 사용하지 않는 가구를 H.Livv에 다시 가져오세요.
            리스토어(Restore) 서비스를 통해 H.Livv는 중고가구를 직접 매입하여 제품의 수명을 연장시키고, 사원순환을 실천합니다.</p>
            <p className="RestoreIntroContentText">바이백 서비스를 이용하면 더 안전하고 간편하게 중고가구를 거리하고 환불카드를 받을 수 있습니다.
            H.Livv에 매입된 중고가구는 자원순환 허브에서 다른 고객에게 재판매되어 새로운 삶을 얻게 됩니다.
            환경을 생각하며 모두가 행복해지는 H.Livv의 바이백 서비스를 이용해보세요.</p>
          </div>
          <div className="RestoreIntroInfo">서비스 이용안내 | 접수가능 제품 기준 | 자주 묻는 질문</div>
        </div>
        <a href="/mypage/myrestore">
        <button className="RestoreBtn" title="중고가구 예상가">중고가구 예상가 계산하기 </button>
        </a>

        <div className="RestoreHowToUse">
          <div className="RestoreHowToUseTitle">리스토어 서비스 이용안내</div>
          <div className="RestoreHowToUseContent">
            <p className="RestoreHowToUseContentMainText">1. 판매 가능한 가구가 맞는지 확인하세요.</p>
            <p className="RestoreHowToUseContentText">완전히 조립되고, 개조되지 않은 H.Livv 가구만 매입 가능합니다. 접수 가능/불가능 제품 목록을 미리 확인하세요.</p>
            <p className="RestoreHowToUseContentMainText">2. 중고가구의 예상 견적을 알아보세요.</p>
            <p className="RestoreHowToUseContentText">판매하고자 하는 가구명 및 상태를 중고가구 예상가 계산기에 입력하면 예상가를 미리 확인할 수 있습니다.</p>
            <p className="RestoreHowToUseContentText">온라인 예상가와 실제 매입가는 다를 수 있습니다. (제품 검색이 잘 안되는 경우, 영어 제품명으로도 검색히주세요.)</p>
            <p className="RestoreHowToUseContentMainText">3. 가까운 현대백화점 매장에 방문하세요.</p>
            <p className="RestoreHowToUseContentText">조립된 상태의 가구와 예상 견적서를 H.Livv 매장 내 교환 & 환불 코너에 가져가세요.</p>
            <p className="RestoreHowToUseContentMainText">4. 판매 가능한 가구가 맞는지 확인하세요</p>
            <p className="RestoreHowToUseContentText">완전히 조립되고, 개조되지 않은 IKEA 가구만 매입 가능합니다. 접수 가능/불가능 제품 목록을 미리 확인하세요.</p>
            <p className="RestoreHowToUseContentMainText">5 . 판매 가능한 가구가 맞는지 확인하세요</p>
            <p className="RestoreHowToUseContentText">완전히 조립되고, 개조되지 않은 IKEA 가구만 매입 가능합니다. 접수 가능/불가능 제품 목록을 미리 확인하세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restore;