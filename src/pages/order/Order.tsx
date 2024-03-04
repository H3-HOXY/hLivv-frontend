import {Iamport} from "./types/Iamport";
import {useEffect} from "react";
import {useActionData, useLoaderData, useSubmit} from "react-router-dom";
import {OrderReqDto} from "../../api/Api";

declare global {
    export interface Window {
        IMP?: Iamport
    }
}

export const Order = () => {
    const submit = useSubmit()
    const loaderData = useLoaderData()
    const actionData = useActionData()

    useEffect(() => {
        console.log(loaderData)
    }, [loaderData]);
    useEffect(() => {
        console.log(actionData)
    }, [actionData]);

    //결제모듈 초기화
    useEffect(initIamport, []);

    return (<>
        {/*<Form action="/order/create" method="post">*/}
        <button onClick={
            () => {
                let formData = new FormData()

                // TODO : 주문 form에서 주문서 생성
                const orderRequest: OrderReqDto = {
                    addressId: 1,
                    requestMsg: '빠른 배송 테스트',
                    orderPoint: 100,
                    // requestDate: new Date('2024-02-29').toDateString(),
                    productList: [{productId: 1, productQty: 1}, {productId: 2, productQty: 1}],
                };

                formData.append('orderRequest', JSON.stringify(orderRequest))

                submit(formData, {
                    action: "/order",
                    method: "POST",
                })
            }}>결제하기
        </button>

        {/*</Form>*/}
    </>)
};


function initIamport() {
    const jquery = document.createElement("script");
    jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
    document.head.appendChild(jquery);

    const iamport = document.createElement("script");
    iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(iamport);
    // if (window.IMP == null) {
    //     throw new Error("IAMPORT 모듈을 초기화하지 못했습니다.");
    // }
    // window.IMP!!.init('imp22727087');
    return () => {
        document.head.removeChild(iamport);
    }
}
