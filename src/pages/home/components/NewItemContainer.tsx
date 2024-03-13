import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {ProductDto} from "../../../api/Api";
import Slider from "react-slick";
import {getItemList} from "../Home";
import {useCurrencyFormat} from "../../common/hooks/useCurrencyFormat";

export type NewItemContainerProps = {
    products: ProductDto[]
}
/* 홈 신상품
    @since 2024.02.19
    @author 최정윤, 이호연 */
    
export const NewItemContainer = (props: NewItemContainerProps) => {
    const navigate = useNavigate()
    const [isDragging, setDragging] = useState(false)
    const handleMouseDown = () => setDragging(false)
    const formatter = useCurrencyFormat()

    const handleMouseMove = () => setDragging(true)
    const newItemSliderSettings = {
        className: "center",
        centerMode:
            true,
        infinite:
            true,
        centerPadding:
            "150px",
        slidesToShow:
            3,
        speed:
            500
    }

    return (
        <div className="NewProduct max-w-7xl mx-auto px-8">
            <div className="NewTitle">이 주의 신상품</div>
            <div className="NewContent">
                <div className="NewSlider">
                    <Slider {...newItemSliderSettings}>
                        {getItemList(props.products).map((product, idx) => {
                            return (
                                <div key={idx} className="NewItem"
                                     onMouseDown={handleMouseDown}
                                     onMouseMove={handleMouseMove}
                                     onMouseUp={() => {
                                         if (!isDragging)
                                             navigate(`/product/${product.id}`)
                                     }
                                     }>
                                    <div className="NewItemWrapper overflow-hidden">
                                        <img
                                            src={`${product.productImages!![0].imageUrl}`}
                                            title="pic"
                                            alt={`${product.id}`}/>
                                        <div className="NewItemWrapperText text-start">
                                            <div className={"truncate w-full"}>{product.name}</div>
                                            <div>{formatter(product.price ?? 0)}원</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>)
}