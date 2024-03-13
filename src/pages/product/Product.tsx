import "./styles/Product.scss"
import React, {useEffect, useRef, useState} from "react";
import {IFrameSize} from "./components/detail/ProductDetailSection";
import {useLoaderData, useLocation} from "react-router-dom";
import {ProductDto, ReviewDto} from "../../api/Api";
import {useDescriptionPage} from "../common/hooks/useDescriptionPage";
import {ProductInfoSection} from "./components/info/ProductInfoSection";
import {JumpToSection} from "./components/JumpToSection";
import {useImage} from "../common/hooks/useImage";
import {ReviewSection} from "./components/review/ReviewSection";
import {SelectedOption} from "./components/info/SelectedOptionItem";
import {StoreList} from "../store/components/StoreList";
import {StoreListItemProps} from "../store/components/StoreListItem";
import {Api} from "../../api/ApiWrapper";

/**
 * @since 
 * @author 이호연
 */

export const Product = () => {
    const productData = useLoaderData() as ProductDto
    const [iframeSize, setIframeSize] = useState<IFrameSize>({width: 500, height: 1000})
    const [selectedOption, setSelectedOption] = useState<SelectedOption[]>([])
    const descriptionPage = useDescriptionPage()
    const [collaboProducts, setCollaboProducts] = useState<StoreListItemProps[]>([])
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    useEffect(() => {
        if (productData != null) {
            console.log(productData.productType)
            Api.getCollaboProductItems(productData.id!!).then(response => {
                console.log(response.data)

                setCollaboProducts(response.data.map((product, index) => {
                    return {
                        image: (product.productImages && product.productImages!!.length > 0 ? product.productImages[0].imageUrl!! : ""),
                        title: product.name!!,
                        price: product.price!!,
                        productId: `${product.id!!}`,
                        productType: product.productType!!
                    } as StoreListItemProps
                }))
            }).catch(e => console.log(e))

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

    const [reviews, setReviews] = useState<ReviewDto[]>([])
    useEffect(() => {
        async function fetchProductReviews() {
            const api = Api
            const reviews = (await api.getReviewsByProductId(productData.id!!)).data as ReviewDto[]
            return reviews
        }

        fetchProductReviews().then(reviews => setReviews(reviews))
    }, []);
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
            <div className="ProductWrapper">
                {/* 상품에 대한 정보 */}
                <div className="ProductInfo container mx-auto mt-8 p-4 flex flex-col md:flex-row">
                    <ProductInfoSection productData={productData}
                                        reviewData={reviews}
                                        selectedOptions={selectedOption}
                                        setSelectedOptions={setSelectedOption}/>
                </div>

                <div
                    className="flex w-full flex-row justify-center px-32 py-6 border-t-2 border-t-gray-200 border-b-2 border-b-gray-200"
                    style={{background: "#FAFAFA"}}>
                    <JumpToSection sections={sections}/>
                </div>
                {
                    productData.productType === "PRODUCT" ?
                        (<>
                            {/* 일반 상품인 경우 -> 제품 설명 */}
                            <div className="ProductDetail container mx-auto" ref={descriptionRef}>
                                <img alt="" src={`https://hlivv-image-bucket.s3.ap-northeast-2.amazonaws.com/product/${productData.id}.png`}/>
                                {/*<ProductDetailSection productLink={descriptionPage("P100001204.html")}*/}
                                {/*                      iframeSize={iframeSize}*/}
                                {/*                      setIFrameHeight={setIframeSize}/>*/}
                            </div>
                        </>) :
                        (<>
                            {/* 콜라보 상품인 경우 -> 콜라보 상품 목록 */}
                            <StoreList itemProps={collaboProducts}/>
                        </>)
                }


                {/* 리뷰 */}
                <div className="container mx-auto" ref={reviewRef}>
                    {
                        productData.id != null ? <ReviewSection reviews={reviews}/> : <></>
                    }
                </div>
            </div>
        </div>
    )
}



