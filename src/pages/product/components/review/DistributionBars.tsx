import React from "react";

export const DistributionBars = (props: { star: number }) => {
    return (
        <>
            {
                [5, 4, 3, 2, 1].map((star, idx) => {
                    return (
                        <div key={idx} className="flex flex-row mb-4">
                            <div className="text-xl font-bold w-3/12 ">{star}점</div>
                            <div className="flex flex-row w-6/12 m-2.5 ml-4 bg-gray-200 rounded-2xl">
                                <div className="w-9/12 bg-amber-800 rounded-2xl"
                                     style={{width: `${props.star * 20}%`}}/>
                            </div>
                            <div className="w-3/12">{props.star * 3}</div>
                        </div>)
                })
            }
        </>
    )
}