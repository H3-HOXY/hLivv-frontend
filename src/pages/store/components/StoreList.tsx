import {StoreListItem, StoreListItemProps} from "./StoreListItem";

/**
 * @since 
 * @author 이호연
 */

export type StoreListProps = {
    itemProps: StoreListItemProps[]
}
export const StoreList = (props: StoreListProps) => {
    return (
        <div className="grid grid-cols-2 pt-8 md:grid-cols-4 gap-12">
            {
                /*{<!-- 제품 카드 -->}*/
                props.itemProps.map((item, index) =>
                    <StoreListItem key={index}
                                   image={item.image}
                                   title={item.title}
                                   price={Number(item.price)}
                                   productId={item.productId}
                                   productType={item.productType}
                    />
                )
            }
        </div>
    )
}