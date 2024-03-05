import {useLocation, useNavigate} from "react-router-dom";
import {useImage} from "../../../common/hooks/useImage";
import ImageSlider from "./ImageSlider";
import QRCode from "qrcode.react";
import React from "react";
import {ProductDto} from "../../../../api/Api";

import {AverageReviewScore} from "./AverageReviewScore";
import {SelectedOption} from "./SelectedOptionItem";
import {getApi} from "../../../../api/ApiWrapper";
import {useCurrencyFormat} from "../../../common/hooks/useCurrencyFormat";

export type ProductInfoSectionProps = {
    productData: ProductDto
    selectedOptions: SelectedOption[]
    setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOption[]>>
}

export const ProductInfoSection = (props: ProductInfoSectionProps) => {
    const hostname = window.location.origin
    const location = useLocation()
    const image = useImage()
    const formatter = useCurrencyFormat()

    return (
        <>
            <ImageSlider images={
                props.productData.productImages!!.map((item, idx) => {
                    return {id: idx, imageUrl: item.imageUrl!!}
                })}/>
            <div className="basis-1/2 text-start mt-4 md:mt-0 pt-20 pl-20">
                {/* 상품이름 */}
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl font-bold mb-4">{props.productData.name}</h1>
                    <div>
                        <img className="inline-block" src={image("bookmark.svg")} alt="heart"/>
                        <img className="px-4 inline-block" src={image("share.svg")} alt="heart"/>
                    </div>
                </div>

                {/* 평점 */}
                <div className="mb-4">
                    <AverageReviewScore star={4} reviewCount={100}/>
                </div>

                {/* 상품가격 */}
                <h2 className="text-3xl font-bold mb-4">{formatter(props.productData.price ?? 0)}원</h2>

                {/* QR코드  */}
                <QRCode className="mb-4" value={`${hostname}${location.pathname}`} size={100}/>

                {/* 쿠폰정보 */}
                <h2 className="rounded-md text-start p-6 m-2" style={{background: "#FAF8E9"}}> 쿠폰 할인 상품이 있어요! </h2>

                {/* 배송정보 */}
                <div className="flex flex-row">
                    <h2 className="text-gray-300 p-2">배송</h2>
                    <h2 className=" p-2">배송비 무료</h2>
                </div>

                {/*/!* 주문옵션 *!/*/}
                {/*<SelectableOption selectedOption={props.selectedOptions}*/}
                {/*                  setSelectedOption={props.setSelectedOptions}/>*/}

                {/*/!* 선택된 옵션 *!/*/}
                {/*<SelectedOptions selectedOptions={props.selectedOptions}*/}
                {/*                 whenQuantityChanged={*/}
                {/*                     whenOptionQuantityChanged(props.selectedOptions, props.setSelectedOptions)*/}
                {/*                 }/>*/}

                {/* 주문금액 */}
                <div className="flex flex-row justify-between mb-8">
                    <h2 className="text-gray-300">주문금액</h2>
                    <h2 className="font-bold">{formatter(props.productData.price ?? 0)}원</h2>
                </div>

                {/* 버튼 그룹  */}
                <div className="flex flex-row h-16 justify-between gap-6">
                    <AddToCartButton productId={props.productData.id!!}/>
                    <BuyNowButton/>
                </div>
            </div>
        </>
    )
}

// 옵션으로 선택된 항목이 변동되면 호출되는 함수
export const whenOptionQuantityChanged = (selectedOptions: SelectedOption[], setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOption[]>>) => {
    return (changedOption: SelectedOption) => {
        selectedOptions[changedOption.index].quantity = changedOption.quantity
        setSelectedOptions([...selectedOptions])
    }
}

function getTotalPrice(selectedOptions: SelectedOption[]) {
    return selectedOptions.map((value) => value.price * value.quantity).reduce((prev, curr) => prev + curr, 0)
}

const AddToCartButton = ({productId}: { productId: number }) => {
    const navigate = useNavigate()
    return (
        <button className="border-4 flex-1 rounded-xl border-black text-black"
                onClick={async () => {
                    try {
                        const api = await getApi();
                        await api.addProductToCart(productId, {qty: 1})
                        navigate("/mypage/cart")
                    } catch (e) {

                    }
                }}
        >장바구니</button>
    )
}
const BuyNowButton = () => {
    return (
        <button className="border-4 flex-1 rounded-xl bg-black border-black text-white">바로구매</button>
    )
}
