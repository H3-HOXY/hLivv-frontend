import {ProductDto} from "../../api/Api";
import {defer} from "react-router-dom";
import {Api} from "../../api/ApiWrapper";

//@ts-ignore
export async function storeLoader({request, params}) {
    let categoryId = undefined
    try {
        const url = new URL(request.url);
        categoryId = url.searchParams.get("categoryId") ?? undefined;

    } catch (e) {
    }
    try {
        const api = Api
        if (categoryId === undefined) {
            const products = await api.getProduct({pageNo: 0, pageSize: 20}, {})
            return defer({products: products.data} as { products: ProductDto[] })
        } else {
            const products = await api.getProductsWithCategory(categoryId, {
                pageNo: 0,
                pageSize: 20
            }, {})
            return defer({products: products.data} as { products: ProductDto[] })
        }
    } catch (e) {
        return ({products: [] as ProductDto[]})
    }
}
