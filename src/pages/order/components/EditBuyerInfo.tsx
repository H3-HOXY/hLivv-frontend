import "../styles/Order.scss"
import React from "react";

/**
 * @since 
 * @author 이호연, 최정윤
 */

export interface BuyerInfo {
    name: string
    emailId: string
    emailProvider: string
    telephoneNumber: string
    points: number
}

export type EditBuyerInfoProps = {
    buyerInfo: BuyerInfo
    setBuyerInfo: React.Dispatch<React.SetStateAction<BuyerInfo>>
}

export function EditBuyerInfo(props: EditBuyerInfoProps) {


    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setBuyerInfo({...props.buyerInfo, name: e.target.value});
    }

    const onEmailIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setBuyerInfo({...props.buyerInfo, emailId: e.target.value});
    }

    const onTelephoneChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setBuyerInfo({...props.buyerInfo, telephoneNumber: e.target.value});
    }

    const onEmailProviderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        props.setBuyerInfo({...props.buyerInfo, emailProvider: e.target.value});
    }

    return (
        <div className="OrderCustomer">
            <div className="OrderCustomerTitle">주문자</div>
            <hr className="OrderLine"/>
            <div className="OrderCustomerItem">
                <div className="OrderCustomerItemText">이름</div>
                <input className="OrderCustomerItemInput"
                       title="이름"
                       value={props.buyerInfo.name}
                       onChange={onNameChange}></input>
            </div>
            <div className="OrderCustomerItem">
                <div className="OrderCustomerItemText">이메일</div>
                <input className="OrderCustomerItemInput"
                       title="이름"
                       value={props.buyerInfo.emailId}
                       onChange={onEmailIdChange}></input>
                <div className="OrderCustomerItemEmoji"> @</div>
                <select className="OrderCustomerItemSelect"
                        title="이메일"
                        value={props.buyerInfo.emailProvider}
                        data-te-select-init
                        onChange={onEmailProviderChange}
                        data-te-select-option-height="52">
                    <option>naver.com</option>
                    <option>gmail.com</option>
                    <option>hanmail.com</option>
                </select>
            </div>
            <div className="OrderCustomerItem">
                <div className="OrderCustomerItemText">전화번호</div>
                <input className="OrderCustomerItemInput"
                       title="이름"
                       value={props.buyerInfo.telephoneNumber}
                       onChange={onTelephoneChanged}/>
            </div>
        </div>
    )
}

