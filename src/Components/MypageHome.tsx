import Sidebar from "./Sidebar";
import "../Components_scss/MypageHome.scss"

const MypageHome = () => {
  
  return (
    <>
      <div className="MypageHome">
        <div className="MypageWrapper">
          {/* 프로필 컨텐츠 */}
          <div className="MypageProfile">
            <div className="ProfileImg">
              <img className="ProfileImgSrc" src="img/flower.png" title="pic"></img>
            </div>
            <div className="ProfileInfo">
              <div className="ProfileName">jeong-yooon</div>
              <div className="ProfileEmail">c******@naver.com</div>
              <a href="/mypage/profileedit">
                <button className="ProfileBtn" title="프로필편집">프로필편집</button>
              </a>
            </div>
            <div className="ProfileBenefit">
              <div className="ProfilePoint">
                <img src="img/point.png" title="pic"></img>
                <div className="">0P</div>
              </div>
              <div className="ProfileCoupon">
                <img src="img/coupon.png" title="pic"></img>
                <div className="">쿠폰0</div>
              </div>
            </div>
          </div>

          {/* 구매내역 */}
          <div className="MypageBuy">
            <div className="MypageBuyTitle">구매내역</div>
            <div className="MypageBuyContain">
              <div className="MypageBuyItem">
                <div className="MypageBuyItemTitle">주문내역</div>
                <div className="MypageBuyItemContent">0</div>
              </div>
              <div className="MypageBuyItem">
                <div className="MypageBuyItemTitle">배송중</div>
                <div className="MypageBuyItemContent">0</div>
              </div>
              <div className="MypageBuyItem">
                <div className="MypageBuyItemTitle">배송완료</div>
                <div className="MypageBuyItemContent">0</div>
              </div>
              <div className="MypageBuyItem">
                <div className="MypageBuyItemTitle">리뷰</div>
                <div className="MypageBuyItemContent">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MypageHome;