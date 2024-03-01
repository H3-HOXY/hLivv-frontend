import {useImage} from "../../../common/hooks/useImage";
import React from "react";

export type AverageReviewScoreProps = {
    star: number
    reviewCount: number
}
export const AverageReviewScore = (props: AverageReviewScoreProps) => {
    const image = useImage()
    return (
        <>
            {
                Array<boolean>(5).fill(true).map((value, index) => {
                    return (
                        index < props.star ?
                            <img className="inline-block w-8" key={index} src={image("star_filled.png")}
                                 alt="star"/>
                            :
                            <img className="inline-block w-8" key={index} src={image("star_empty.png")}
                                 alt="star"/>
                    )
                })
            }
            <span className="inline-block pl-4">  {props.reviewCount}개 리뷰</span>
        </>
    )
}