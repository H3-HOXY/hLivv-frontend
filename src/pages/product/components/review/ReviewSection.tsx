import React from "react";
import {AverageRating} from "./AverageRating";
import {DistributionBars} from "./DistributionBars";
import {UserReview} from "./UserReview";
import {ReviewSortButtons} from "./ReviewSortButtons";
import {ReviewDto} from "../../../../api/Api";

/**
 * @since 
 * @author 이호연
 */

export const ReviewSection = ({reviews}: { reviews: ReviewDto[] }) => {

    const star = reviews.reduce((acc, review) => acc + (review.star ?? 0), 0) / reviews.length

    return (
        <div>
            <div className="text-2xl font-bold text-start">리뷰 &nbsp;
                <span className="text-2xl font-bold text-amber-800">{reviews.length} 개</span>
            </div>
            <div className="flex flex-row">
                <div className="flex-1 flex flex-row items-center justify-center border-r-2 border-gray-200 ">
                    <AverageRating star={star}/>
                </div>
                <div className="flex-1">
                    <DistributionBars star={star}/>
                </div>
            </div>
            <div
                className="flex flex-row items-center py-8 border-t-2 border-t-gray-300 border-b-2 border-b-gray-300">
                <ReviewSortButtons/>
            </div>
            <div>
                {
                    reviews.map((review, index) => {
                        return (
                            <UserReview reviewDto={review}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

