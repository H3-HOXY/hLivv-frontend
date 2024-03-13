import React from "react";
import {useCurrencyFormat} from "../../common/hooks/useCurrencyFormat";

/**
 * @since 
 * @author 이호연, 최정윤
 */

export type OrderProductContainerContentProps = {
    productName: string;
    productImage: string;
    unitPrice: number;
    productQty: number;
}

export const OrderProductContainerContent = (props: OrderProductContainerContentProps) => {
    const format = useCurrencyFormat()
    return (<div className="OrderProductContainerContent">
        <img className="OrderProductContainerContentImg mr-2" alt="logo" src={props.productImage}/>
        <div className="OrderProductContainerContentRight">
            <div className="OrderProductContainerContentRightName">{props.productName}</div>
            {/*<div className="OrderProductContainerContentRightSize">사이즈 1200</div>*/}
            {/*<div className="OrderProductContainerContentRightColor">색상 화이트</div>*/}
            <div className="OrderProductContainerContentRightPrice">{format(props.unitPrice)}원 | {props.productQty}개
            </div>
        </div>
    </div>);
}