import React from "react";

/*
홈 네비바
        @since 2024.02.14
        @author 최정윤, 이호연
*/
export type PopularSearchTermsProps = {
    searchTerms: string[]
}
export const PopularSearchTerms = (props: PopularSearchTermsProps) => {
    return (
        <div className="HomeNav shadow-md border-t-2 border-gray-200 bg-white">
            {/* 실시간 검색어 */}
            <div className="describeWrapper max-w-7xl mx-auto px-6">
                <div className="describeMyself ">
                    <div className="describeTitle">실시간 검색어</div>
                    <ul className="descriptionList">
                        {props.searchTerms.map((term, idx) => {
                            return (
                                <li key={idx}><b>{idx + 1}</b>&nbsp;{term}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}