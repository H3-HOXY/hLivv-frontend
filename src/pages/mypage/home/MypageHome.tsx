import "../../../Components_scss/MypageHome.scss"
import {useEffect, useState} from "react";
import {getApi} from "../../../api/ApiWrapper";
import {MemberDto} from "../../../api/Api";
import {useNavigate} from "react-router-dom";

const MypageHome = () => {
    const [memberInfo, setMemberInfo] = useState<MemberDto | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const getMyInfo = async () => {
            try {
                const api = await getApi();
                const res = await api.getMyUserInfo();
                setMemberInfo(res.data);
            } catch (e) {
                navigate("/login");
                throw e;
            }
        }
        getMyInfo().then();
    }, []);

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
                            <div className="ProfileName">{memberInfo?.name ?? "회원"}</div>
                            <div className="ProfileEmail">{memberInfo?.email ?? ""}</div>
                            <a href="/mypage/profileedit">
                                <button className="ProfileBtn" title="프로필편집">프로필편집</button>
                            </a>
                        </div>
                        <div className="ProfileBenefit">
                            <div className="ProfilePoint">
                                <img src="img/point.png" title="pic"></img>
                                <div className="ProfilePointNumber">포인트 {memberInfo?.points ?? 0}</div>
                            </div>
                            <div className="ProfileCoupon">
                                <img src="img/coupon.png" title="pic"></img>
                                <div className="ProfileCouponNumber">쿠폰 0</div>
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

                    {/* 나의유형 */}
                    <div className="MypageType">
                        <div className="MypageTypeTitle">나의 유형</div>
                        <div className="MypageTypeContain">
                            <div className="MypageTypeContainLeft">
                                <div className="MypageTypeContainLeftKind">유형</div>
                                <div className="MypageTypeContainLeftKindDescription">유형설명</div>
                            </div>
                            <div className="MypageTypeContainRight">
                                <div className="MypageTypeContainRightInterior">인테리어 취향 진단</div>
                                <div className="MypageTypeContainRightDescription">진단설명</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MypageHome;