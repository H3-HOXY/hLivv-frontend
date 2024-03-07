import {CartDto} from "../../../api/Api";

export function CartItemQuantity({cartItem, changeQty}: {
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

    return (<div className={"flex flex-row justify-between border-2 rounded-md border-t-gray-300 "}>
        <div className={"pl-2 text-xl cursor-pointer"}
             onClick={
                 decreaseQty
             }>-
        </div>
        <input className={"w-10 text-center"}
               value={cartItem.cartQty}
               title="수량"
               onChange={(e) => {
                   if (cartItem.cartQty!! > 0 && cartItem.cartQty!! < cartItem.stockQuantity!!)
                       setQty(parseInt(e.target.value))
               }}/>
        <div className={"pr-1 text-xl cursor-pointer"}
             onClick={
                 increaseQty
             }>+
        </div>
    </div>);
}