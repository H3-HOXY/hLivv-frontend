import {useNavigate} from "react-router-dom";
import {useCurrencyFormat} from "../../common/hooks/useCurrencyFormat";
import "../styles/Store.scss"

export type StoreListItemProps = {
    image: string,
    title: string,
    price: number,
    productId: string,
    productType: "COLLABO" | "PRODUCT"
}
export const StoreListItem = (props: StoreListItemProps) => {
    const navigate = useNavigate()
    const formatter = useCurrencyFormat()
    return (
        <div className="flex flex-col cursor-pointer"
             onClick={() => {
                 navigate(`/product/${props.productId}`)
             }}
        >
            <div className="border rounded-lg overflow-hidden flex-grow w-55 h-55">
                <img src={props.image} alt="제품 이미지" className="w-full w-55 h-55"/>
            </div>
            <div className="p-4 bg-white">
                <div className="text-gray-600">{props.title}</div>
                <p className="text-gray-900 font-bold">₩{formatter(props.price)}원</p>
            </div>
        </div>
    )
}
