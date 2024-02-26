import "./styles/Home.scss"
import React, {Suspense} from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {ProductDto} from "../../api/Api";
import {BestItemContainer} from "./components/BestItemContainer";
import {NewItemContainer} from "./components/NewItemContainer";
import {HomeBanner} from "./components/HomeBanner";
import {Category} from "./components/Category";
import {PopularSearchTerms} from "./components/PopularSearchTerms";
import {Await, useLoaderData} from "react-router-dom";
import {HomeLoaderData} from "./HomeRouter";
import {categoryItems, homeBannerItems} from "./data";
import { useImage } from "../common/hooks/useImage";


/**
 * @since 2024.02.14
 * @author 최정윤
 */

const Home = () => {
    const {bestProduct, newProduct} = useLoaderData() as HomeLoaderData
 

    const popularTerms = ["Ambitious"
        , "Promising"
        , "Creative"
        , "ambitious"]

    return (
        <>
            <div className="HomeWrapper">
                <PopularSearchTerms searchTerms={popularTerms}/>
                <HomeBanner sliderItems={homeBannerItems}/>
                <Category categoryItems={categoryItems}/>
                <Suspense fallback={<div>loading</div>}>
                    <Await resolve={bestProduct}>
                        {(product) => (<BestItemContainer products={product}/>)}
                    </Await>
                </Suspense>
                <Suspense fallback={<div>loading</div>}>
                    <Await resolve={newProduct}>
                        {(product) => (<NewItemContainer products={product}/>)}
                    </Await>
                </Suspense>
            </div>
        </>
    );
}


export const getItemList = (products: ProductDto[] | undefined) => {
    if (products === undefined) return (Array<ProductDto>())
    return products.filter(products => products.productImages?.[0].imageUrl !== undefined)
}

export default Home;
