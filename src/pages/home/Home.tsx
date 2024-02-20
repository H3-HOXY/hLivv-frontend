import "./styles/Home.scss"
import React, {Suspense} from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {ProductDto} from "../../api/Api";
import {BestItemContainer} from "./components/BestItemContainer";
import {NewItemContainer} from "./components/NewItemContainer";
import {HomeBanner, HomeSliderItemProps} from "./components/HomeBanner";
import {Category, CategoryItemProps} from "./components/Category";
import {PopularSearchTerms} from "./components/PopularSearchTerms";
import {Await, useLoaderData} from "react-router-dom";
import {HomeLoaderData} from "./HomeRouter";

const categoryItems: CategoryItemProps[] = [
    {img: "img/소파.png", text: "소파"},
    {img: "img/식탁.png", text: "식탁"},
    {img: "img/침대:매트리스.png", text: "침대/매트리스"},
    {img: "img/거실장.png", text: "거실장"},
    {img: "img/옷장:드레스룸.png", text: "옷장/드레스룸"},
    {img: "img/서재.png", text: "서재"},
    {img: "img/유아동.png", text: "유아동"},
    {img: "img/홈데코.png", text: "홈데코"},
    {img: "img/가전.png", text: "가전"},
];

const homeBannerItems: HomeSliderItemProps[] = [
    {img: "img/리바트.png", title: "banner1"},
    {img: "img/리바트.png", title: "banner2"},
    {img: "img/리바트.png", title: "banner3"},
    {img: "img/리바트.png", title: "banner4"},
    {img: "img/리바트.png", title: "banner5"},
    {img: "img/리바트.png", title: "banner6"},
]

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
    console.log(products)
    if (products === undefined) return (Array<ProductDto>())
    return products.filter(products => products.productImages?.[0].imageUrl !== undefined)
}

export default Home;
