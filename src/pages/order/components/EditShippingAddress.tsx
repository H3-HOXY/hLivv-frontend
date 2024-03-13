import "../styles/Order.scss"
import React, {useState} from "react";
import ModalBase from "../../mypage/ModalBase";
import CardModal from "../../mypage/CardModal";
import DaumPostcode from "react-daum-postcode";

/**
 * @since 
 * @author 이호연, 최정윤
 */

export interface AddressInfo {
    addressId: number
    name: string
    zipCode: string
    streetAddress: string
    detailedAddress: string
    telephoneNumber: string
    mobilePhoneNumber: string
    requestMsg: string
}

export type EditShippingAddress = {
    address: AddressInfo
    setAddress: React.Dispatch<React.SetStateAction<AddressInfo>>
}

export function EditShippingAddress(props: EditShippingAddress) {
    /* 배송지 */

    // 모달 기능
    const [isActive, setIsActive] = useState(false);

    const onClickModalOn = () => {
        setIsActive(true);
    };

    const onClickModalOff = () => {
        setIsActive(false);
    };

    // 주소 결제 기능


    const completeHandler = (data: any) => {
        props.setAddress({...props.address, zipCode: data.zonecode, streetAddress: data.roadAddress});
        onClickModalOff();
    }

    // 상세 주소검색 event
    const changeAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setAddress({...props.address, detailedAddress: e.target.value});
    }

    const changeTelHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setAddress({...props.address, telephoneNumber: e.target.value});
    }

    const changeMobileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setAddress({...props.address, mobilePhoneNumber: e.target.value});
    }

    const changeRequestHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        props.setAddress({...props.address, requestMsg: e.target.value});
    }

    return (
        <div className="OrderDestination">
            <div className="OrderDestinationTitle">
                <div className="OrderDestinationTitleLeft">배송지</div>
                <button onClick={onClickModalOn}>변경</button>
                <ModalBase active={isActive} closeEvent={onClickModalOff}>
                    <CardModal closeEvent={onClickModalOff} title="주소지 변경" actionMsg="">
                        <div className="OrderModal">
                            <DaumPostcode
                                onComplete={completeHandler}
                            />
                        </div>
                    </CardModal>
                </ModalBase>
            </div>
            <hr className="OrderLine"/>
            <div className="OrderDestinationContent">
                <div className="OrderDestinationFirst">
                    <div className="OrderDestinationName">{props.address.name}</div>
                    {
                        (props.address.name !== "") ? <div className="OrderDestinationNameInfo">기본배송지</div> : <></>
                    }
                </div>
                <div className="OrderDestinationSecond">
                    <div className="OrderDestinationSecondTitle">우편번호</div>
                    <input className="OrderDestinationZipAddress" value={props.address.zipCode} readOnly
                           placeholder="우편번호"/>
                </div>
                <div className="OrderDestinationSecond">
                    <div className="OrderDestinationSecondTitle">도로명주소</div>
                    <input className="OrderDestinationStreetAddress" value={props.address.streetAddress} readOnly
                           placeholder="도로명 주소"/>
                </div>
                <div className="OrderDestinationSecond">
                    <div className="OrderDestinationSecondTitle">상세주소</div>
                    <input className="OrderDestinationDetailAddress" type="text" onChange={changeAddressHandler}
                           value={props.address.detailedAddress} placeholder="상세주소"/>
                </div>
                <div className="OrderDestinationSecond">
                    <div className="OrderDestinationSecondTitle">전화번호</div>
                    <input className="OrderDestinationDetailAddress" type="text" onChange={changeTelHandler}
                           value={props.address.telephoneNumber} placeholder="전화번호"/>
                </div>
                <div className="OrderDestinationSecond">
                    <div className="OrderDestinationSecondTitle">휴대전화</div>
                    <input className="OrderDestinationDetailAddress" type="text" onChange={changeMobileHandler}
                           value={props.address.mobilePhoneNumber} placeholder="휴대전화"/>
                </div>
                {/* 배송메세지 */}
                <select className="OrderDestinationRequire" title="message" onChange={changeRequestHandler}
                        data-te-select-init
                        data-te-select-option-height="52">
                    <option value="부재시 경비실에 맡겨주세요." data-te-select-secondary-text="Secondary text">
                        부재시 경비실에 맡겨주세요.
                    </option>
                    <option value="부재시 문앞에 놔주세요." data-te-select-secondary-text="Secondary text">
                        부재시 문앞에 놔주세요.
                    </option>
                    <option value="방문시 노크하지 말아주세요." data-te-select-secondary-text="Secondary text">
                        방문시 노크하지 말아주세요.
                    </option>
                    <option value="방문전 미리 연락 부탁드립니다." data-te-select-secondary-text="Secondary text">
                        방문전 미리 연락 부탁드립니다.
                    </option>
                    <option value="경비실에 맡겨주세요." data-te-select-secondary-text="Secondary text">
                        경비실에 맡겨주세요.
                    </option>
                </select>
                {/*<button className="OrderDestinationContentBtn" onClick={clickHandler} title="클릭">주소지저장</button>*/}
            </div>
        </div>
    )
}
