import React from "react";
import {AverageRating} from "./AverageRating";
import {DistributionBars} from "./DistributionBars";
import {UserReview} from "./UserReview";
import {ReviewSortButtons} from "./ReviewSortButtons";

export const ReviewSection = () => {
    const star = 4
    return (
        <div>
            <div className="text-2xl font-bold text-start">리뷰 &nbsp;
                <span className="text-2xl font-bold text-amber-800">23</span>
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
                <UserReview/>
            </div>
        </div>
    )
}

