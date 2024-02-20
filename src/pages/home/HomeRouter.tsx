import {defer} from "react-router-dom";
import {getApi} from "../../api/ApiWrapper";
import {MemberNotLoggedInError} from "../../api/auth/errors";
import {ProductDto} from "../../api/Api";

export type HomeLoaderData = {
    bestProduct: ProductDto[],
    newProduct: ProductDto[]
}

//@ts-ignore
export async function homeLoader() {
    try {
        console.log("asdf")
        const api = await getApi()
        const bestProduct = await api.getProduct({page: 0, pageSize: 20}, {})
        const newProduct = await api.getProduct({page: 0, pageSize: 20}, {})
        console.log("asdf")

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
