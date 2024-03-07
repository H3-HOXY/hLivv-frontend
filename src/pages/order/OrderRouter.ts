//@ts-ignore
import {Api} from "../../api/Api";
import {OrderReqDto, OrderResDto} from "../../api/Api";
import {getApi} from "../../api/ApiWrapper";
import {FormMessage} from "../../common/FormMessage";
import {RequestPayParams} from "./types/RequestPayParams";
import {RequestPayResponse} from "./types/RequestPayResponse";

//@ts-ignore
export async function orderAction({request, params}) {
    const formData = await request.formData()
    const orderDto = JSON.parse(Object.fromEntries(formData).orderRequest) as OrderReqDto
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(orderDto)

    // const{
    //     streetAddress,
    //     detailedAddress,
    //     zipCode,
    //     telephoneNumber,
    //     mobilePhoneNumber,
    //     requestMsg,
    //     defaltYn
    // } = formDataObj;

    // const validationResult = validateOrderInput(streetAddress, detailedAddress, zipCode, telephoneNumber, mobilePhoneNumber, requestMsg, defaltYn)

    // if (validationResult !== null) {
    //     return validationResult
    // }

    try {
        const api = await getApi()
        // const result = await api.orders({
        //     streetAddress: streetAddress!!.toString(),
        //     detailedAddress: detailedAddress!!.toString(),
        //     zipCode: zipCode!!.toString(),
        //     telephoneNumber: telephoneNumber!!.toString(),
        //     mobilePhoneNumber: mobilePhoneNumber!!.toString(),
        //     requestMsg: requestMsg!!.toString(),
        //     defaltYn: defaltYn!!.toString()
        // })
        const newOrder = await api.createOrder(orderDto)
        const orderResDto = newOrder.data as OrderResDto

        // TODO: formData로부터 받아오기
        const paymentParams: RequestPayParams = {
            pg: 'kakaopay',
            pay_method: 'card',
            merchant_uid: String(new Date().getTime()),
            name: '테스트 상품',
            amount: Number(orderResDto.orderCash),
            buyer_email: 'test@naver.com',
            buyer_name: '코드쿡',
            buyer_tel: '010-1234-5678',
            buyer_addr: '서울특별시',
            buyer_postcode: '123-456',
        }
        if (window.IMP === undefined) return FormMessage.createFormMessage("결제모듈을 불러오는데 실패했습니다.", 500)

        window.IMP.init('imp22727087')

        const payment = await requestPayAsync(`${orderResDto.orderId}`, paymentParams)

        return {code: 200, data: orderResDto}
    } catch (e) {
        console.log(e)
        return FormMessage.createFormMessage(`${e}`, 500)
    }
}

function requestPayAsync(orderId: string, params: RequestPayParams): Promise<any> {
    return new Promise((resolve, reject) => {
        window.IMP!!.request_pay(params, async (response: RequestPayResponse) => {
            console.log(response)
            if (response.success) {
                const api = await getApi()
                try {
                    const validation = await api.validatePayment(orderId, response.imp_uid!!)
                    resolve(validation)
                } catch (e) {
                    const cancellation = await handleCancelPayment(orderId, response.imp_uid!!)
                    reject(cancellation)
                }
            } else {
                const cancellation = await handleCancelPaymentByOrder(orderId)
                reject(cancellation);
            }
        });
    });
}


async function handleCancelPayment(orderId: string, impUid: string) {
    try {
        const api = await getApi()
        const data = await api.requestCancelPayment(orderId, impUid)
        return FormMessage.createFormMessage('결제 취소 성공', 200)
    } catch (error) {
        console.error('결제 취소 중 오류 발생:', error);
        alert('결제 취소 실패');
        return FormMessage.createFormMessage('결제 취소 실패', 500)
    }
};

async function handleCancelPaymentByOrder(orderId: string) {
    try {
        const api = await getApi()
        await api.requestCancelPaymentByOrder(orderId)
        return FormMessage.createFormMessage('결제 취소 성공', 200)

    } catch (error) {
        return FormMessage.createFormMessage('결제 취소 실패', 500)
    }
};

class PaymentError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "PaymentError"
    }
}

const validateOrderInput = () => {

}