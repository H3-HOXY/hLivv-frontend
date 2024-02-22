import React from "react";

/*
홈 카테고리
        @since 2024.02.19
        @author 최정윤
*/
export type CategoryProps = {
    categoryItems: CategoryItemProps[]
}

export type CategoryItemProps = {
    img: string
    text: string
}
export const Category = (props: CategoryProps) => {
    return (
        <div className="Category max-w-7xl mx-auto px-8">
            <div className="CategoryTitle">카테고리</div>
            <div className="CategoryContent">
                {props.categoryItems.map((item, idx) => {
                        return (
                            <CategoryItem key={idx} img={item.img} text={item.text}/>
                        )
                    }
                )}
            </div>
        </div>)
}

export const CategoryItem = (props: CategoryItemProps) => {
    return (
        <div className="CategoryItemCircle h-25 w-25">
            <img className="Elec" alt={props.text} src={props.img}/>
            <div>{props.text}</div>
        </div>
    )
}
