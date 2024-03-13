//@ts-ignore
import {Api, OrderReqDto, OrderResDto} from "../../api/Api";
import {getApi} from "../../api/ApiWrapper";
import {FormMessage} from "../../common/FormMessage";
import {RequestPayParams} from "./types/RequestPayParams";
import {RequestPayResponse} from "./types/RequestPayResponse";

/**
 * @since 
 * @author 이호연
 */

//@ts-ignore
export async function orderAction({request, params}): Promise<any> {

    try {
        const formData = await request.formData()

        const orderReqDto: OrderReqDto = {...JSON.parse(formData.get('orderReqDto') as string)}
        const requestPayParams: RequestPayParams = {...JSON.parse(formData.get('requestPayParams') as string)}

        console.log(orderReqDto)
        console.log(requestPayParams)

        const api = await getApi()
        const newOrder = await api.createOrder(orderReqDto)
        const orderResDto = newOrder.data as OrderResDto

        const paymentParams: RequestPayParams = {
            ...requestPayParams, amount: orderResDto.orderCash!!
        }

        if (window.IMP === undefined) return FormMessage.createFormMessage("결제모듈을 불러오는데 실패했습니다.", 500)

        window.IMP.init('imp22727087')

        const payment = await requestPayAsync(`${orderResDto.orderId}`, paymentParams)

        // Display loading image for 3 seconds
        showLoadingImage();

        // Wait for 3 seconds
        await delay(3000);

        // Hide loading image after 3 seconds
        hideLoadingImage();

        // return FormMessage.createFormMessage("주문 성공", 200)
        return Response.redirect("/mypage/buydetail", 303)
    } catch (e) {
        console.log(e)
        return FormMessage.createFormMessage(`${e}`, 500)
    }

    function showLoadingImage() {
        // Create an image element and set its source to the loading image (cart.gif)
        const loadingImage = document.createElement('img');
        loadingImage.src = '/public/img/cart.gif';
        loadingImage.id = 'loading-image';
    
        // Append the image to the body or a specific container
        document.body.appendChild(loadingImage);
    }
    
    function hideLoadingImage() {
        // Remove the loading image element from the DOM
        const loadingImage = document.getElementById('loading-image');
        if (loadingImage && loadingImage.parentNode) {
            // Remove the loading image element from the DOM
            loadingImage.parentNode.removeChild(loadingImage);
        }
    }
    
    function delay(ms: number) {
        // Helper function to introduce a delay using Promises
        return new Promise(resolve => setTimeout(resolve, ms));
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
        return FormMessage.createFormMessage('결제 취소 성공', 500)
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
        return FormMessage.createFormMessage('결제 취소 성공', 500)

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