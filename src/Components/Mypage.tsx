import Sidebar from "./Sidebar";
import "../Components_scss/Mypage.scss"

const Mypage = () => {
  
  return (
    <>
      <div className="Mypage">
        <Sidebar/>
        <div className="MypageWrapper">
          <div className="MypageProfile">
            <div className="ProfileImg">
              <img src="img/flower.png" title="pic"></img>
            </div>
            <div className="ProfileInfo">
              <div className="ProfileName">jeong-yooon</div>
              <div className="ProfileEmail">c******@naver.com</div>
              <button className="ProfileBtn" title="프로필편집">프로필편집</button>
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
        </div>
      </div>
      {/* <div className="MypageFooter">
        <Footer />
      </div> */}
    </>
  );
}

export default Mypage;