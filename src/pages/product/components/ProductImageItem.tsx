import React from "react";

export type ProductImageItemProps = {
    imageUrl: string | undefined
    altText: string
}

export const ProductImageItem = (props: ProductImageItemProps) => {
    return props.imageUrl !== undefined ? (
        <img src={props.imageUrl} alt={props.altText} height="100px" width="100px"/>) : (<></>)
}