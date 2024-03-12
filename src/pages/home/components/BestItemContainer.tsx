import React, {useState} from "react";
import {ProductDto} from "../../../api/Api";
import {useNavigate} from "react-router-dom";
import Slider from "react-slick";
import {getItemList} from "../Home";
import {useCurrencyFormat} from "../../common/hooks/useCurrencyFormat";


type BestItemContainerProps = {
    products: ProductDto[]
}
/* 홈 베스트 상품
    @since 2024.02.19
    @author 최정윤, 이호연 */
export const BestItemContainer = (props: BestItemContainerProps) => {
    const [isDragging, setDragging] = useState(false)
    const navigate = useNavigate()
    const handleMouseDown = () => setDragging(false)
    const formatter = useCurrencyFormat()

    const handleMouseMove = () => setDragging(true)


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
                        {getItemList(props.products).map((product, idx) => {
                                const handleMouseUp = () => {
                                    if (!isDragging) {
                                        navigate(`/product/${product.id}`)
                                    }
                                    setDragging(false)
                                }
                                return (
                                    <div key={idx}
                                         className="BestItem"
                                         onMouseDown={handleMouseDown}
                                         onMouseMove={handleMouseMove}
                                         onMouseUp={handleMouseUp}>
                                        <div className="BestItemWrapper overflow-hidden">
                                            <img
                                                src={`${product.productImages!![0].imageUrl}`}
                                                title="pic"
                                                className="cursor-pointer"
                                                alt={`${product.id}`}/>
                                            <div className="BestItemWrapperText text-start">
                                                <div className={"truncate w-full cursor-pointer"}>{product.name}</div>
                                                <div>{formatter(product.price ?? 0)}원</div>
                                            </div>
                                        </div>

                                    </div>)
                            }
                        )
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}