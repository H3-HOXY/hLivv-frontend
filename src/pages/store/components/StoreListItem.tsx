export type StoreListItemProps = {
    image: string,
    title: string,
    price: number
}
export const StoreListItem = (props: StoreListItemProps) => {
    return (
        <div className="flex flex-col">
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
