import "./styles/Product.scss"
import React, {useEffect, useRef, useState} from "react";
import {IFrameSize, ProductDetailSection} from "./components/detail/ProductDetailSection";
import {useLoaderData} from "react-router-dom";
import {ProductDto} from "../../api/Api";
import {useDescriptionPage} from "../common/hooks/useDescriptionPage";
import {ProductInfoSection} from "./components/info/ProductInfoSection";
import {JumpToSection} from "./components/JumpToSection";
import {useImage} from "../common/hooks/useImage";
import {ReviewSection} from "./components/review/ReviewSection";
import {SelectedOption} from "./components/info/SelectedOptionItem";

export const Product = () => {
    const productData = useLoaderData() as ProductDto
    const [iframeSize, setIframeSize] = useState<IFrameSize>({width: 500, height: 1000})
    const [selectedOption, setSelectedOption] = useState<SelectedOption[]>([])
    const descriptionPage = useDescriptionPage()

    useEffect(() => {
        if (productData != null) {
            setSelectedOption(["1번 옵션", "2번 옵션", "3번 옵션", "4번 옵션"].map((option, index) => {
                return {
                    index: index,
                    label: option,
                    quantity: 0,
                    price: 1000
                }
            }))
        }
    }, [productData]);
    const image = useImage()

    const descriptionRef = useRef<HTMLIFrameElement>(null);
    const reviewRef = useRef<HTMLDivElement>(null);

    const star = 4
    const sections = [
        {menu: "상품정보", onClick: () => descriptionRef.current?.scrollIntoView({behavior: "smooth"})},
        {menu: "리뷰", onClick: () => reviewRef.current?.scrollIntoView({behavior: "smooth"})},
        {
            menu: "문의", onClick: () => {
            }
        }, {
            menu: "배송/환불/교환", onClick: () => {
            }
        }]

    return (
        <div className="Product">

            {/* 상품에 대한 정보 */}
            <div className="ProductInfo container mx-auto mt-8 p-4 flex flex-col md:flex-row">
                <ProductInfoSection productData={productData}
                                    selectedOptions={selectedOption}
                                    setSelectedOptions={setSelectedOption}/>
            </div>

            <div
                className="flex w-full flex-row justify-center px-32 py-6 border-t-2 border-t-gray-200 border-b-2 border-b-gray-200"
                style={{background: "#FAFAFA"}}>
                <JumpToSection sections={sections}/>
            </div>

            {/* 제품 설명 */}
            <div className="ProductDetail container mx-auto" ref={descriptionRef}>
                <ProductDetailSection productLink={descriptionPage("P100001204.html")}
                                      iframeSize={iframeSize}
                                      setIFrameHeight={setIframeSize}/>
            </div>

            {/* 리뷰 */}
            <div className="container mx-auto" ref={reviewRef}>
                <ReviewSection/>
            </div>
        </div>
    )
}



