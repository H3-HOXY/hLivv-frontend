import React from "react";

/**
 * @since 
 * @author 이호연
 */

type JumpToSectionItemProps = {
    menu: string
    onClick: () => void
}

export type JumpToSectionProps = {
    sections: JumpToSectionItemProps[]
}

export const JumpToSectionItem = (props: JumpToSectionItemProps) => {
    return (
        <a className="w-full justify-center text-xl font-bold cursor-pointer"
           onClick={props.onClick}>
            {props.menu}
        </a>
    )
}

export const JumpToSection = (props: JumpToSectionProps) => {
    return (
        <>
            {
                props.sections.map((value, index) => {
                    return (
                        <JumpToSectionItem key={index} menu={value.menu} onClick={value.onClick}/>
                    )
                })
            }
        </>)
}