import "../../../Components_scss/BuyDetail.scss"
import {useImage} from "../../common/hooks/useImage";
import {useEffect, useState} from "react"
import {getApi} from "../../../api/ApiWrapper";
import {PageOrderResDto, ProductDto} from "../../../api/Api";
import {BuyDetailItem} from "./components/BuyDetailItem";

const BuyDetail = () => {
    const image = useImage()
    const [orderHistoryItem, setOrderHistoryItem] = useState<ProductDto[]>([])
    useEffect(() => {
        async function fetchOrderHistory() {
            try {
                const products: ProductDto[] = []
                const api = await getApi()
                const myOrders = (await api.getOrders({page: 0, pageSize: 5}, {})).data as PageOrderResDto
                if (myOrders.content !== undefined) {
                    for (let p of myOrders.content) {
                        if (p.products === undefined) continue
                        for (let product of p.products) {
                            try {
                                // @ts-ignore
                                const res = (await api.getProduct1(product.productId)).data as ProductDto
                                products.push(res)

                            } catch (e) {

                            }
                        }
                    }
                    setOrderHistoryItem(products)
                }
            } catch (e) {
            }
        }

        fetchOrderHistory().then()
    }, []);
    return (
        <div className="BuyDetail">
            <div className="BuyDetailWrapper">
                <div className="BuyDetailTitle">구매내역</div>
                <div className="BuyDetailContent">
                    {/* 리뷰 아이템 */}
                    {
                        orderHistoryItem.map((item, index) => {
                            return (
                                <BuyDetailItem productDto={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default BuyDetail;

