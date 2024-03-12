import "../../../Components_scss/MypageHome.scss"
import {useEffect, useState} from "react";
import {getApi} from "../../../api/ApiWrapper";
import {MemberDto} from "../../../api/Api";
import {useNavigate} from "react-router-dom";
import diagnosis from "../../../result.json";

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
    const filteredDiagnosis = diagnosis.filter(item => {
        return item.id === convertInteriorTypeEnumToCode(memberInfo?.interiorType ?? "")
    })
    const diagnosisText = filteredDiagnosis[0]?.diagnosis ?? "유형설명"

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
                        <div className="MypageTypeTitle">나의 인테리어 유형</div>
                        <div className="MypageTypeContain">
                            <div className="MypageTypeContainWrapper">
                                <div className="MypageTypeContainWrapperType">
                                    <div className="MypageTypeContainLeftKind mr-2">유형 |</div>
                                    <div className="MypageTypeContainLeftKindDescription">{convertInteriorTypeEnumToKor(memberInfo?.interiorType ?? "")}</div>
                                </div>
                                <div className="MypageTypeContainRightInterior">인테리어 취향 진단</div>
                                <div className="MypageTypeContainRightDescription">{
                                    diagnosisText
                                }</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MypageHome;
const convertInteriorTypeEnumToKor = (type: string) => {
    if (type === "WINTER") return "겨울"
    if (type === "SPRING") return "봄"
    if (type === "SUMMER") return "여름"
    if (type === "FALL") return "가을"
    return "유형설명"
}
const convertInteriorTypeEnumToCode = (type: string) => {
    if (type === "WINTER") return "d"
    if (type === "SPRING") return "c"
    if (type === "SUMMER") return "b"
    if (type === "FALL") return "a"
    return ""
}
