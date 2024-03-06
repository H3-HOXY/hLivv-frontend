import Slider from "react-slick";
import { useImage } from "../../common/hooks/useImage";

export type StoreSliderProps = {
    sliderItems: StoreSliderItemProps[]
}

export type StoreSliderItemProps = {
    img: string
    title: string
}

export const StoreBanner = (props: StoreSliderProps) => {
    const image = useImage()
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
        <div className="StoreBannerWrapper">
        {/* 메인 슬라이드 배너 */}
        <div className="StoreBanner">
            <div className="StoreSlider">
                <Slider {...leftsettings}>
                    {props.sliderItems.map((item, idx) => {
                            return (
                                <div key={idx} className="StoreSliderItem">
                                    <img src={image(item.img)} title={item.title} alt={`${item.title}`}/>
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