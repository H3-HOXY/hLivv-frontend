import {Api, ProductDto} from "../../api/Api";
import {defer} from "react-router-dom";

//@ts-ignore
export async function storeLoader({request, params}) {
    try {
        const api = new Api().api
        const products = await api.getProduct({page: 0, pageSize: 20}, {})
        return defer({products: products.data} as { products: ProductDto[] })
    } catch (e) {
        return ({products: [] as ProductDto[]})
    }
}