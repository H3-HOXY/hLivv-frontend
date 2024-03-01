import {defer} from "react-router-dom";
import {getApi} from "../../api/ApiWrapper";
import {MemberNotLoggedInError} from "../../api/auth/Errors";
import {ProductDto} from "../../api/Api";

//@ts-ignore
export async function productLoader({request, params}) {
    try {
        const productId = Number(params.productId)
        const api = await getApi()
        const product = await api.getProduct1(productId)
        return defer({...product.data} as { product: ProductDto })
    } catch (e) {
        if (e instanceof MemberNotLoggedInError) {
            console.log(`사용자가 로그인되어 있지 않습니다.`)
        } else {
            console.error(e)
        }
        return ({product: {} as ProductDto})
    }
}