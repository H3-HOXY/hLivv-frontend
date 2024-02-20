import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {ProductDto} from "../../../api/Api";
import {getApi} from "../../../api/ApiWrapper";
import Slider from "react-slick";
import { getItemList} from "../Home";

/* 홈 신상품
    @since 2024.02.19
    @author 최정윤, 이호연 */
export const NewItemContainer = () => {
    const navigate = useNavigate()

    const [products, setProducts] = useState<ProductDto[]>()

    const newItemSliderSettings = {
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

    useEffect(() => {
        try {
            getApi().then(api => {
                return api.getProduct({page: 0, pageSize: 20}, {})
            }).then((res) => {
                setProducts(res.data)
            }).catch((err) => {
                if (err instanceof Error) {
                    console.log(err.message)
                } else {
                    console.log(err)
                }
            })

        } catch (e) {
            console.log(e)
        }
    }, [])

    return (
        <div className="NewProduct max-w-7xl mx-auto px-8">
            <div className="NewTitle">이 주의 신상품</div>
            <div className="NewContent">
                <div className="NewSlider">
                    <Slider {...newItemSliderSettings}>
                        {getItemList(products).map((product, idx) => {
                            return (
                                <div className="NewItem"
                                     onClick={() => {
                                         navigate(`/product/${product.id}`)
                                     }
                                     }>
                                    <img src={`${product.productImages!![0].imageUrl}`} title="pic"/>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>)
}