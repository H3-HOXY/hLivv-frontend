import {CollaboDto} from "../../api/Api";
import {defer} from "react-router-dom";
import {Api} from "../../api/ApiWrapper";

//@ts-ignore
export async function collaboLoader({request, params}) {
    try {
        const api = Api
        // const products = await api.getCollaboProducts({page: 0, pageSize: 20}, {})
        // const products = await api.getCollaboProducts({page: 0, pageSize: 20}, {})
        const products = await api.getCollaboProducts(
            {pageNo: 0, pageSize: 20}
        )
        return defer({collaboProducts: products.data} as { collaboProducts: CollaboDto[] })
    } catch (e) {
        return ({collaboProducts: [] as CollaboDto[]})
    }
}