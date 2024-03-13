import React from "react";

/**
 * @since 
 * @author 이호연
 */

export const ReviewSortButtons = () => {
    return (
        <>
            {
                ["베스트순", "최신순"].map((value, idx) => {
                    return (
                        <a key={idx}
                           onClick={e => {
                               e.preventDefault()
                           }}
                           className="inline mr-4 cursor-pointer active:text-amber-800">
                            {value}
                        </a>
                    )
                })
            }</>
    )
}