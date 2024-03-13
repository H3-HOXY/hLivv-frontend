import {useImage} from "../common/hooks/useImage";

/**
 * @since
 * @author 이호연
 */
/**
 * 상당수의 컴포넌트는 /pages/store의 컴포넌트를 재활용하고 있습니다.
 */
import {StoreBannerNoSlide} from "../store/components/StoreBanner";
import {SortingMenu} from "../store/SortingMenu";
import {StoreList} from "../store/components/StoreList";
import {GetMore} from "../store/components/GetMore";
import "./styles/Collabo.scss"
import {useLoaderData, useSearchParams} from "react-router-dom";
import {CollaboDto} from "../../api/Api";
import React, {useEffect, useState} from "react";
import {StoreListItemProps} from "../store/components/StoreListItem";
import {collaboCategory} from "./data";
import {CategoryMenu} from "../store/components/CategoryMenu";
import {CategoryMenuItemProps} from "../store/components/CategoryMenuItem";
import {Api} from "../../api/ApiWrapper";

export const Collabo = () => {
    const image = useImage()
    const loaderData = useLoaderData() as { collaboProducts: CollaboDto[] }
    const [products, setProducts] = useState<CollaboDto[]>([])
    const [category, setCategory] = useState<"C000000001" | "C000000002" | "C000000003" | "C000000004">("C000000001")

    const [searchParam, setSearchParam] = useSearchParams()
    const [pageNo, setPageNo] = useState(0)
    const [categoryId, setCategoryId] = useState<string>("")

    useEffect(() => {
        if (collaboCategory.filter(item => item.id === category).length === 0) setCategory("C000000001")
        // search category product
    }, [category]);

    // useEffect(() => {
    //     if (!loaderData) return
    //     setProducts([...products, ...loaderData.collaboProducts])
    // }, [loaderData]);

    useEffect(() => {
        fetchCollaboProduct().then()
    }, []);

    async function fetchCollaboProduct() {
        let categoryId = undefined
        try {
            categoryId = searchParam.get("categoryId") ?? undefined
        } catch (e) {
        }
        try {
            const api = Api
            if (categoryId === undefined) {
                const products = await api.getCollaboProducts({pageNo: pageNo, pageSize: 20}, {})
                setProducts(products.data)
                setPageNo(pageNo + 1)
                console.log(products)
            } else {
                const products = await api.getCollaboProducts({
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

    const categoryList = collaboCategory.map((category) => {
        return {
            categoryId: category.id,
            title: category.name,
        } as CategoryMenuItemProps
    })


    const selectedCategory = collaboCategory.filter(item => item.id === category)
    return (
        <>
            <div className="Collabo">
                <div className="CollaboWrapper container mx-auto p-12">
                    <div className="CollaboTitle">COLLABO</div>
                    <StoreBannerNoSlide
                        img={image(selectedCategory.length > 0 ? selectedCategory[0].image!! : collaboCategory[0].image)}
                        title={selectedCategory[0].name ?? ""}/>

                    {/*{카테고리 메뉴}*/}
                    <CategoryMenu categoryList={categoryList}
                                  onClick={(categoryId: "C000000001" | "C000000002" | "C000000003" | "C000000004") => setCategory(categoryId)}/>
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