import {useImage} from "../../../common/hooks/useImage";
import React from "react";
import {ReviewDto} from "../../../../api/Api";

export const UserReview = ({reviewDto}: { reviewDto: ReviewDto }) => {
    const image = useImage()
    const star = reviewDto.star!!;
    const reviewImage = reviewDto.reviewImages != null && reviewDto.reviewImages?.length > 0 ? reviewDto.reviewImages[0]!!.reviewImageUrl : ""
    const reviewDate = reviewDto.reviewDate != null ? reviewDto.reviewDate.split('T')[0] : ""
    return (
        <div className="flex flex-row mt-16">
            <div className="flex flex-col text-start ">
                <div className="text-2xl font-bold">{reviewDto.writer}</div>
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
                    <span className="text-gray-300 ml-4">{reviewDate}</span>
                </div>
                <div>
                    <div className="flex flex-row text-start my-8">
                        {/* 리뷰 이미지 */}
                        <img className="w-64 rounded-xl" src={reviewImage} alt="review"/>
                        {/* 리뷰 텍스트 */}
                        <p className="text-2xl font-normal ml-6">
                            {reviewDto.reviewText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}