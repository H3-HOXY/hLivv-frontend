import React from "react";
import {ProductDto} from "../../../api/Api";
import {useNavigate} from "react-router-dom";
import Slider from "react-slick";
import {getItemList} from "../Home";


type BestItemContainerProps = {
    products: ProductDto[]
}
/* 홈 베스트 상품
    @since 2024.02.19
    @author 최정윤, 이호연 */
export const BestItemContainer = (props: BestItemContainerProps) => {

    const navigate = useNavigate()
    const bestItemSliderSettings = {
        className: "center",
        centerMode:
            true,
        infinite:
            true,
        centerPadding:
            "100px",
        slidesToShow:
            3,
        speed:
            500
    }
    return (
        <div className="BestProduct max-w-7xl mx-auto px-8">
            <div className="BestTitle">베스트 상품</div>
            <div className="BestContent">
                <div className="BestSlider">
                    <Slider {...bestItemSliderSettings}>
                        {
                            getItemList(props.products).map((product, idx) => {
                                    return (
                                        <div key={idx} className="BestItem" onClick={
                                            () => {
                                                navigate(`/product/${product.id}`)
                                            }
                                        }>
                                            <img src={`${product.productImages!![0].imageUrl}`} title="pic"
                                                 alt={`${product.id}`}/>
                                        </div>
                                    )
                                }
                            )
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}