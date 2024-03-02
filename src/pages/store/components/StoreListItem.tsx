import {useNavigate} from "react-router-dom";

export type StoreListItemProps = {
    image: string,
    title: string,
    price: number,
    productId: string,
    productType: "COLLABO" | "PRODUCT"
}
export const StoreListItem = (props: StoreListItemProps) => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col cursor-pointer"
             onClick={() => {
                 navigate(`/product/${props.productId}`)
             }}
        >
            <div className="border rounded-lg overflow-hidden flex-grow">
                <img src={props.image} alt="제품 이미지" className="w-full"/>
            </div>
            <div className="p-4 bg-white">
                <h4 className="text-gray-600">{props.title}</h4>
                <p className="text-gray-900 font-bold">₩{props.price}원</p>
            </div>
        </div>
    )
}
