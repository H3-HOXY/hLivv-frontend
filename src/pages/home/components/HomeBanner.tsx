import Slider from "react-slick";
import React from "react";

/*
홈 배너
    @since 2024.02.15
    @author 최정윤, 이호연
*/
export type HomeSliderProps = {
    sliderItems: HomeSliderItemProps[]
}

export type HomeSliderItemProps = {
    img: string
    title: string
}
export const HomeBanner = (props: HomeSliderProps) => {
    // 왼쪽 배너 세팅
    const leftsettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // 자동 재생 활성화
        autoplaySpeed: 6000, // 간격(ms) 설정 (예: 6초 = 6000ms)
    };

    return (
        <div className="HomeBannerWrapper max-w-7xl mx-auto px-4">
            {/* 메인 슬라이드 배너 */}
            <div className="HomeBanner">
                <div className="HomeSlider">
                    <Slider {...leftsettings}>
                        {props.sliderItems.map((item, idx) => {
                                // return (<HomeSliderItem key={idx} img={item.img} title={item.title}/>)
                                return (
                                    <div className="HomeSliderItem">
                                        <img src={item.img} title={item.title}/>
                                    </div>
                                )
                            }
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    )

}