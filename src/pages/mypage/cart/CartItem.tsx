import {useImage} from "../../common/hooks/useImage";
import {Api, CartDto} from "../../../api/Api";
import {useEffect, useState} from "react";
import {useCurrencyFormat} from "../../common/hooks/useCurrencyFormat";


function CartItemQuantity({cartItem, changeQty}: {
    cartItem: CartDto,
    changeQty: (productId: number, qty: number) => void
}) {
    const setQty = (qty: number) => {
        if (qty > 0 && qty < cartItem.stockQuantity!!)
            changeQty(cartItem.productId!!, qty)
    }
    const increaseQty = () => {
        if (cartItem.cartQty!! + 1 <= cartItem.stockQuantity!!)
            setQty(cartItem.cartQty!! + 1)
    };
    const decreaseQty = () => {
        if (cartItem.cartQty!! - 1 > 0)
            setQty(cartItem.cartQty!! - 1)
    };
    return (<div className={"flex flex-row"}>
        <div className={"cursor-pointer"}
             onClick={
                 decreaseQty
             }>-
        </div>
        <input className={"w-10 text-center"}
               value={cartItem.cartQty}
               onChange={(e) => {
                   if (cartItem.cartQty!! > 0 && cartItem.cartQty!! < cartItem.stockQuantity!!)
                       setQty(parseInt(e.target.value))
               }}/>
        <div className={"cursor-pointer"}
             onClick={
                 increaseQty
             }>+
        </div>
    </div>);
}

export const CartItem = ({item, onCartUpdate}: {
    item: CartDto,
    onCartUpdate: (productId: number, qty: number) => void
}) => {
    const image = useImage()
    const [productImageSrc, setProductImageSrc] = useState<string | null>(null)
    const formatter = useCurrencyFormat()
    const [cartItem, setCartItem] = useState(item)

    useEffect(() => {
        if (item.productId === undefined) return
        new Api().api.getProduct1(item.productId).then((res) => {
            setProductImageSrc(res.data.productImages!![0].imageUrl!!)
        }).catch((e) => {
            console.error(e)
        })
    }, []);
    console.log(cartItem)
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
            <div>
                <CartItemQuantity cartItem={item}
                                  changeQty={(productId, qty) => {
                                      onCartUpdate(productId, qty)
                                  }}/>
                <div>{formatter(((item.unitPrice ?? 0) * (item.cartQty ?? 1)))}원</div>
            </div>
            <div className="CartContentProductDel" onClick={
                async () => await onCartUpdate(item.productId!!, 0)
            }>X
            </div>
        </div>
    </div>)
}