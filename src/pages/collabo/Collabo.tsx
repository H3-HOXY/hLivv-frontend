import {useImage} from "../common/hooks/useImage";

/**
 * 상당수의 컴포넌트는 /pages/store의 컴포넌트를 재활용하고 있습니다.
 */
import {CollaboBanner} from "../store/components/CollaboBanner";
import {CategoryMenu} from "../store/components/CategoryMenu";
import {RoundedButton} from "../store/components/RoundedButton";
import {SortingMenu} from "../store/SortingMenu";
import {StoreList} from "../store/components/StoreList";
import {GetMore} from "../store/components/GetMore";
import "./styles/Collabo.scss"
import {useLoaderData} from "react-router-dom";
import {ProductDto} from "../../api/Api";
import {useEffect, useState} from "react";
import {StoreListItemProps} from "../store/components/StoreListItem";

export const Collabo = () => {
    const image = useImage()
    const loaderData = useLoaderData() as { products: ProductDto[] }
    const [products, setProducts] = useState<ProductDto[]>([])

    useEffect(() => {
        if (!loaderData) return
        setProducts([...products, ...loaderData.products])
    }, [loaderData]);

    const storeItemList = products.map(product => {
        return {
            image: (product.productImages && product.productImages!!.length > 0 ? product.productImages[0].imageUrl!! : ""),
            title: product.name!!,
            price: product.price!!,
            productId: `${product.id!!}`
        } as StoreListItemProps
    })

    const categoryList = ["전체", "거실", "서재", "주방", "자녀방", "침실"]
    return (
        <>
            <div className="Collabo">
                <div className="CollaboWrapper container mx-auto p-12">
                    <div className="CollaboTitle">COLLABO</div>
                    <CollaboBanner image={image("ARKA.png")} alt={"ARKA"}/>

                    {/*{카테고리 메뉴}*/}
                    <CategoryMenu categoryList={categoryList}/>

                    <div className="flex py-4">
                        <RoundedButton title={"전체"}/>
                        <RoundedButton title={"컬러"} arrow={true}/>
                        <RoundedButton title={"가격"} arrow={true}/>
                        <RoundedButton title={"브랜드"} arrow={true}/>
                    </div>

                    <SortingMenu/>

                    {/*{상품목록}*/}
                    <StoreList itemProps={storeItemList}/>

                    {/*{ 페이지네이션 버튼}*/}
                    <GetMore/>
                </div>
            </div>
        </>
    )
}