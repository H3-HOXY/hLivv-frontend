import React, {useEffect, useState} from "react";
import {ProductDto} from "../../../api/Api";
import {useNavigate} from "react-router-dom";
import {getApi} from "../../../api/ApiWrapper";
import Slider from "react-slick";
import {getItemList} from "../Home";


/* 홈 베스트 상품
    @since 2024.02.19
    @author 최정윤, 이호연 */
export const BestItemContainer = () => {
    const [products, setProducts] = useState<ProductDto[]>()
    const navigate = useNavigate()

    useEffect(() => {
        getApi().then(api => {
            return api.getProduct({page: 0, pageSize: 20}, {})
        }).then((res) => {
            setProducts(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

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
                            getItemList(products).map((product, idx) => {
                                    return (
                                        <div className="BestItem" onClick={
                                            () => {
                                                navigate(`/product/${product.id}`)
                                            }
                                        }>
                                            <img src={`${product.productImages!![0].imageUrl}`} title="pic"/>
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