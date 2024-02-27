import {useImage} from "../../../common/hooks/useImage";
import React from "react";

export const AverageRating = (props: { star: number }) => {
    const image = useImage()
    return (
        <>
            {
                Array<boolean>(5).fill(false).map((_, idx) => {
                    return (
                        <img className="w-16 h-16"
                             key={idx}
                             src={
                                 idx < props.star ? image("star_filled.png") : image("star_empty.png")
                             }
                             alt="star"/>
                    )
                })
            }
            <span className="ml-8 font-bold text-4xl">4.0</span>
        </>
    )
}