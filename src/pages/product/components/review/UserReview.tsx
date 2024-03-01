import {useImage} from "../../../common/hooks/useImage";
import React from "react";

export const UserReview = () => {
    const image = useImage()
    const star = 4;
    return (
        <div className="flex flex-row mt-16">
            <div className="flex flex-col text-start ">
                <div className="text-2xl font-bold">홍길동</div>
                <div className="flex flex-row items-center">
                    {
                        Array<boolean>(5).fill(false).map((_, idx) => {
                            return (
                                <img className="w-8 h-8"
                                     key={idx}
                                     src={
                                         idx < star ? image("star_filled.png") : image("star_empty.png")
                                     }
                                     alt="star"/>
                            )
                        })
                    }
                    {/* 리뷰 작성일 */}
                    <span className="text-gray-300 ml-4">2021.08.12</span>
                </div>
                <div>
                    <div className="flex flex-row text-start my-8">
                        {/* 리뷰 이미지 */}
                        <img className="w-64 rounded-xl" src={image("review.png")} alt="review"/>
                        {/* 리뷰 텍스트 */}
                        <p className="text-2xl font-normal ml-6">
                            [매장/타쇼핑몰 구매 후기] 색도 부드럽고 따뜻해서 예쁘고,
                            폭신폭신하니
                            좋아요</p>
                    </div>
                </div>
            </div>
        </div>
    )
}