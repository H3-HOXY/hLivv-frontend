import {defer} from "react-router-dom";
import {MemberNotLoggedInError} from "../../api/auth/Errors";
import {ProductDto} from "../../api/Api";
import {Api} from "../../api/ApiWrapper";

/**
 * @since
 * @author 이호연
 */

export type HomeLoaderData = {
    bestProduct: ProductDto[],
    newProduct: ProductDto[]
}

//@ts-ignore
export async function homeLoader() {
    try {
        const api = Api
        const bestProduct = await api.getProduct({pageNo: 0, pageSize: 20, sortCriteria: "PRICE_ASC"}, {})
        const newProduct = await api.getProduct({pageNo: 0, pageSize: 20, sortCriteria: "PRICE_DESC"}, {})

        return defer({
            bestProduct: bestProduct.data,
            newProduct: newProduct.data
        } as HomeLoaderData)
    } catch (e) {
        if (e instanceof MemberNotLoggedInError) {
            //TODO: 로그인되어 있지 않은 경우
            console.error(`사용자가 로그인되어 있지 않습니다.`)
            console.error(e)
        }
        return ({
            bestProduct: Array<ProductDto[]>(),
            newProduct: Array<ProductDto[]>()
        } as HomeLoaderData)
    } finally {
    }
}
