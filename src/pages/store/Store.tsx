import {StoreList} from "./components/StoreList";
import {GetMore} from "./components/GetMore";
import {useImage} from "../common/hooks/useImage";
import {StoreBanner} from "./components/StoreBanner";
import {CategoryMenu} from "./components/CategoryMenu";
import {SortingMenu} from "./SortingMenu";
import "./styles/Store.scss"
import {Await, useLoaderData} from "react-router-dom";
import React, {Suspense, useEffect, useState} from "react";
import {ProductDto} from "../../api/Api";
import {StoreListItemProps} from "./components/StoreListItem";
import {CategoryMenuItemProps} from "./components/CategoryMenuItem";
import {storeBannerItems} from "./data";

/**
 * @since 
 * @author 이호연
 */

export const Store = () => {
    const image = useImage()
    const loaderData = useLoaderData() as { products: ProductDto[] }
    const [products, setProducts] = useState<ProductDto[]>([])
    const [category, setCategory] = useState<string>("1")

    useEffect(() => {
        // search category product
    }, [category]);

    useEffect(() => {
        if (!loaderData) return
        setProducts([...products, ...loaderData.products])
    }, [loaderData]);

    const storeItemList = products.map(product => {
        return {
            image: (product.productImages && product.productImages!!.length > 0 ? product.productImages[0].imageUrl!! : ""),
            title: product.name!!,
            price: product.price!!,
            productId: `${product.id!!}`,
            productType: product.productType!!
        } as StoreListItemProps
    })

    const categoryList = ["전체", "소파", "식탁", "침대", "거실장", "옷장", "화장대", "수납장", "책상", "키즈", "홈데코", "벽지"] .map((category, idx) => {
        return {
            categoryId: `${idx}`,
            title: category
        } as CategoryMenuItemProps
    })

    return (
        <>
            <div className="Store">
                <div className="StoreWrapper container mx-auto p-12">
                    <div className="StoreTitle">STORE</div>
                    {/* <StoreBanner image={image("ARKA.png")} alt={"ARKA"}/> */}
                    <StoreBanner sliderItems={storeBannerItems}/>

                    {/*{카테고리 메뉴}*/}
                    <CategoryMenu categoryList={categoryList}
                                  onClick={(categoryId: string) => setCategory(categoryId)}/>

                    <SortingMenu/>
                    {/*{상품목록}*/}
                    <Suspense fallback={<div>loading</div>}>
                        <Await resolve={products}>
                            <StoreList itemProps={storeItemList}/>
                        </Await>
                        {/*{ 페이지네이션 버튼}*/}
                    </Suspense>
                    <GetMore/>
                </div>
            </div>
        </>
    )
}

