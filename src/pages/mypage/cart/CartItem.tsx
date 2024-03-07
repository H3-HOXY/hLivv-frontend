import {useImage} from "../../common/hooks/useImage";
import {Api, CartDto} from "../../../api/Api";
import {useEffect, useState} from "react";
import {useCurrencyFormat} from "../../common/hooks/useCurrencyFormat";
import {CartItemQuantity} from "./CartItemQuantity";
import {useNavigate} from "react-router-dom";


export const CartItem = ({item, checked, onCartUpdate, onChange}: {
    item: CartDto,
    checked: boolean,
    onCartUpdate: (productId: number, qty: number) => void
    onChange: (productId: number, checked: boolean) => void
}) => {
    const image = useImage()
    const navigate = useNavigate()
    const [productImageSrc, setProductImageSrc] = useState<string | null>(null)
    const formatter = useCurrencyFormat()

    useEffect(() => {
        if (item.productId === undefined) return
        new Api().api.getProduct1(item.productId).then((res) => {
            setProductImageSrc(res.data.productImages!![0].imageUrl!!)
        }).catch((e) => {
            console.error(e)
        })
    }, []);
    const goToProduct = () => {
        navigate(`/product/${item.productId}`)
    }

    return (
    <div className="CartContentItem my-6 ">
        <div className="CartContentItemProduct">
            <div className="CartContentProductLeft">
                <div className="CartContentProductCheckbox">
                    <input type="checkbox"
                           checked={checked}
                           title="체크박스"
                           onChange={event => {
                               onChange(item.productId!!, event.target.checked)
                           }}/>
                </div>
                <img className="ProfileImgSrc cursor-pointer"
                     src={productImageSrc ?? image("베스트1.jpeg")}
                     title="pic"
                     alt={`${item.productId}`}
                     onClick={goToProduct}
                />
                <div className="CartContentText">
                    <div className="CartContentTextProductInfo">
                        <div className="CartContentProductName cursor-pointer"
                            onClick={goToProduct}> {item.productName}</div>
                        <div className="CartContentProductDelivery">무료배송 | 일반택배</div>
                    </div>
                    <div className="CartContentTextCount">
                        <CartItemQuantity
                                        cartItem={item}
                                        changeQty={(productId, qty) => {
                                            onCartUpdate(productId, qty)
                                        }}/>
                        <div className="CartContentTextCountPrice">{formatter(((item.unitPrice ?? 0) * (item.cartQty ?? 1)))}원</div>
                    </div>
                </div>
            </div>
            <div className="CartContentProductDel cursor-pointer" onClick={
                async () => {
                    onCartUpdate(item.productId!!, 0)
                }
            }>x
            </div>
        </div>
    </div>)
}