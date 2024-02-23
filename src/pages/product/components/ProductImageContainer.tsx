import React from "react";
import {ProductImageDto} from "../../../api/Api";
import {ProductImageItem} from "./ProductImageItem";

export type ProductImageContainerProps = {
    style?: React.CSSProperties
    productImages: ProductImageDto[]
    altText: string
}

export const ProductImageContainer = (props: ProductImageContainerProps) => {
    const style = props.style ? props.style : {}
    return (
        <div className="ProductImageContainer">
            <div className="PrimaryProductImage">
                <img src={props.productImages[0].imageUrl}
                     alt={props.altText}/>
            </div>
            <div className="productImages"
                 style={{display: "flex", flexDirection: "row", overflow: "hidden", justifyContent: "center"}}>
                {
                    props.productImages?.map(
                        (image, index) =>
                            <ProductImageItem key={index} imageUrl={image.imageUrl}
                                              altText={props.altText}/>
                    )
                }
            </div>
        </div>
    )
}
