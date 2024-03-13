import {useLocation, useNavigate} from "react-router-dom";
import {useImage} from "../../../common/hooks/useImage";
import ImageSlider from "./ImageSlider";
import QRCode from "qrcode.react";
import {ProductDto, ReviewDto} from "../../../../api/Api";
import React, { useState } from "react";
import {AverageReviewScore} from "./AverageReviewScore";
import {SelectedOption} from "./SelectedOptionItem";
import {getApi} from "../../../../api/ApiWrapper";
import {useCurrencyFormat} from "../../../common/hooks/useCurrencyFormat";

/**
 * @since 
 * @author 이호연
 */

export type ProductInfoSectionProps = {
    productData: ProductDto
    reviewData: ReviewDto[]
    selectedOptions: SelectedOption[]
    setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOption[]>>
}

export const ProductInfoSection = (props: ProductInfoSectionProps) => {
    const hostname = window.location.origin
    const location = useLocation()
    const image = useImage()
    const formatter = useCurrencyFormat()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    // 모달 기능
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleHideModal = () => {
        setIsModalOpen(false);
    };

    // 장바구니 기능
    const onCartClicked = async () => {
        try {
            const api = await getApi();
            setLoading(true);
            await api.addProductToCart(props.productData.id!!, {qty: 1})
            navigate("/mypage/cart");
        } catch (e) {

        }
    }
    const onBuyNowClicked = () => {
        navigate("/order", {state: {products: [{product: props.productData, qty: 1}]}})
    }
    const onOpenPopup = () => {
        setShowPopup(true);
      };
    
      const onClosePopup = () => {
        setShowPopup(false);
      };
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
                    <AverageReviewScore
                        star={props.reviewData.reduce((acc, review) => acc + (review.star ?? 0), 0) / props.reviewData.length}
                        reviewCount={props.reviewData.length}/>
                </div>

                {/* 상품가격 */}
                <h2 className={"text-3xl font-bold mb-4" + props.productData.discountPercent !== undefined ? " line-through" : ""}>{formatter(props.productData.price ?? 0)}원</h2>
                {
                    (props.productData.discountPercent !== undefined && props.productData.discountPercent > 0) ?
                        <h2 className="text-3xl font-bold mb-4">{formatter((props.productData.price ?? 0) * ((100 - (props.productData.discountPercent ?? 0)) / 100 ?? 0))}원</h2>
                        : <></>

                }

                {/* QR코드  */}
                <QRCode className="mb-4" value={`${hostname}${location.pathname}`} size={100}/>

                {/* 쿠폰정보 */}
                <h2 className="rounded-md text-start p-6 m-2" style={{background: "#FAF8E9"}}> 쿠폰 할인 상품이 있어요! </h2>

                {/* 배송정보 */}
                <div className="flex flex-row">
                    <h2 className="text-gray-300 p-2">배송</h2>
                    <h2 className=" p-2">배송비 무료</h2>
                </div>

                {/* 주문금액 */}
                <div className="flex flex-row justify-between mb-8">
                    <h2 className="text-gray-300">주문금액</h2>
                    <h2 className="font-bold">{formatter(props.productData.price ?? 0)}원</h2>
                </div>

                {/* 버튼 그룹  */}
                <div className="flex flex-row h-16 justify-between gap-6">
                    <AddToCartButton 
                    data-modal-target="popup-modal"
                    data-modal-toggle="popup-modal"
                    onClick={handleToggleModal}/>
                    <BuyNowButton onClick={onBuyNowClicked}/>
                </div>
            </div>

            {/* 모달 뒷배경 */}
            {isModalOpen && (
                <div
                className="fixed top-0 right-0 bottom-0 left-0 bg-gray-300 opacity-70"
                onClick={handleHideModal}
                ></div>
            )}

            {/* 모달창 */}
            <div
                id="popup-modal"
                className={`${
                    isModalOpen
                      ? 'fixed flex items-center justify-center'
                      : 'hidden'
                  } overflow-y-auto overflow-x-hidden top-0 right-0 bottom-0 left-0 z-50`}>
                    <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                        type="button"
                        className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="popup-modal"
                        onClick={handleHideModal}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center">
                            <h3 className="mt-6 mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">장바구니에 담았습니다.</h3>
                            <button 
                            onClick={onCartClicked}
                            data-modal-hide="popup-modal" type="button" className="text-white bg-orange-800 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                장바구니로 가기
                            </button>
                            <button onClick={handleHideModal} data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">쇼핑 계속하기</button>
                        </div>
                    </div>
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

const AddToCartButton = ({onClick}: { onClick: () => void }) => {
    const navigate = useNavigate()
    return (
        <button 
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            className="border-4 flex-1 rounded-xl border-black text-black"
            onClick={onClick}
        >장바구니</button>
    )
}
const BuyNowButton = ({onClick}: { onClick: () => void }) => {
    const navigate = useNavigate()
    return (
        <button className="border-4 flex-1 rounded-xl bg-black border-black text-white" onClick={onClick}>바로구매</button>
    )
}
