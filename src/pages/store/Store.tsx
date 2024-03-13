import {StoreList} from "./components/StoreList";
import {GetMore} from "./components/GetMore";
import {useImage} from "../common/hooks/useImage";
import {StoreBanner} from "./components/StoreBanner";
import {CategoryMenu} from "./components/CategoryMenu";
import "./styles/Store.scss"
import {Await, useLoaderData, useSearchParams} from "react-router-dom";
import React, {Suspense, useEffect, useState} from "react";
import {ProductDto} from "../../api/Api";
import {StoreListItemProps} from "./components/StoreListItem";
import {CategoryMenuItemProps} from "./components/CategoryMenuItem";
import {storeBannerItems} from "./data";
import {Api} from "../../api/ApiWrapper";
import {SortingMenu} from "./SortingMenu";
import categoryData from "../../data/category.json"

/**
 * @since
 * @author 이호연
 */

export const Store = () => {
    const image = useImage()
    const loaderData = useLoaderData() as { products: ProductDto[] }
    const [products, setProducts] = useState<ProductDto[]>([])

    const [searchParam, setSearchParam] = useSearchParams()
    const [pageNo, setPageNo] = useState(0)
    const [categoryId, setCategoryId] = useState<string>("")

    useEffect(() => {
        fetchProducts().then()
    }, [categoryId]);


    useEffect(() => {
        fetchProducts().then()
    }, []);

    async function fetchProducts() {
        let categoryId = undefined
        try {
            categoryId = searchParam.get("categoryId") ?? undefined
        } catch (e) {
        }
        try {
            const api = Api
            if (categoryId === undefined) {
                const products = await api.getProduct({pageNo: pageNo, pageSize: 20}, {})
                setProducts(products.data)
                setPageNo(pageNo + 1)
                console.log(products)
            } else {
                const products = await api.getProductsWithCategory(categoryId, {
                    pageNo: pageNo,
                    pageSize: 20
                }, {})
                setProducts(products.data)
                setPageNo(pageNo + 1)
                console.log(products)
            }
        } catch (e) {
        }
    }

    const storeItemList = products.map(product => {
        return {
            image: (product.productImages && product.productImages!!.length > 0 ? product.productImages[0].imageUrl!! : ""),
            title: product.name!!,
            price: product.price!!,
            productId: `${product.id!!}`,
            productType: product.productType!!
        } as StoreListItemProps
    })

    const categoryList = categoryData.map((category, idx) => {
        return {
            categoryId: `${category.id}`,
            title: category.name
        } as CategoryMenuItemProps
    })

    return (
        <>
            <div className="Store">
                <div className="StoreWrapper container mx-auto p-12">
                    <div className="StoreTitle">STORE</div>
                    <StoreBanner sliderItems={storeBannerItems}/>

                    {/*{카테고리 메뉴}*/}
                    <CategoryMenu categoryList={categoryList}
                                  onClick={(categoryId: string) => {
                                      setCategoryId(categoryId)
                                      searchParam.set("categoryId", categoryId)
                                      setSearchParam(searchParam)
                                      setPageNo(0)
                                  }}/>
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
// @ts-ignore