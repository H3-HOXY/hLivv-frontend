import {useImage} from "../../common/hooks/useImage";
import {Api, CartDto} from "../../../api/Api";
import {useEffect, useState} from "react";

export const CartItem = ({item, onCartUpdate}: {
    item: CartDto,
    onCartUpdate: (productId: number, qty: number) => void
}) => {
    const image = useImage()
    const [productImageSrc, setProductImageSrc] = useState<string | null>(null)

    useEffect(() => {
        if (item.productId === undefined) return
        new Api().api.getProduct1(item.productId).then((res) => {
            setProductImageSrc(res.data.productImages!![0].imageUrl!!)
        }).catch((e) => {
            console.error(e)
        })
    }, []);
    return (<div className="CartContentItem">
        <div className="CartContentItemProduct">
            <div className="CartContentProductLeft">
                <div className="CartContentProductCheckbox"></div>
                <img className="ProfileImgSrc" src={productImageSrc ?? image("베스트1.jpeg")} title="pic"></img>
                <div className="CartContentText">
                    <div className="CartContentProductName">{item.productName}</div>
                    <div className="CartContentProductDelivery">무료배송 | 일반택배</div>
                </div>
            </div>
            <div className="CartContentProductDel" onClick={
                async () => await onCartUpdate(item.productId!!, 0)
            }>X
            </div>
        </div>
        <div className="CartContentOrder">
            <div className="CartContentOrderHead">
                <div>사이즈: 1200 / 색상: 화이트</div>
                <div>X</div>
            </div>
            <div className="CartContentOrderBottom">
                <div>- {item.cartQty} +</div>
                <div>{item.unitPrice}원</div>
            </div>
        </div>
        <div className="CartContentTotal">
            <div>옵션변경 | 바로구매</div>
            <div>{item.unitPrice}원</div>
        </div>
    </div>)
}