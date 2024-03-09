import {ProductDto} from "../../../../api/Api";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ReviewModal} from "./ReviewModal";

export function BuyDetailItem({productDto}: { productDto: ProductDto }) {
    // 사진 첨부 기능
    // 모달 기능
    const [isActive, setIsActive] = useState(false);
    const onClickModalOn = () => setIsActive(true);
    const onClickModalOff = () => setIsActive(false);

    const navigate = useNavigate()
    const goToProduct = () => {
        navigate(`/product/${productDto.id}`)
    }

    const productImage = (productDto.productImages == null) ? "" : productDto.productImages[0].imageUrl
    return (<div className="BuyDetailContentItem">
        <img className="BuyDetailContentItemImg cursor-pointer"
             src={productImage}
             title="pic"
             onClick={goToProduct}/>
        <div className="BuyDetailContentItemDetail">
            <div className="BuyDetailContentItemDetailText">
                <div className="BuyDetailContentItemDetailTextLeft">
                    {/*<div className="BuyDetailContentItemDetailBrand">코이</div>*/}
                    <div className="BuyDetailContentItemDetailName cursor-pointer"
                         onClick={goToProduct}>
                        {productDto.name}</div>
                    {/*<div className="BuyDetailContentItemDetailInfo">사이즈: 1200 / 색상: 화이트</div>*/}
                </div>
                {/*<div className="BuyDetailContentItemDetailPoint">포토 500P | 일반 100P</div>*/}
            </div>
            <button onClick={onClickModalOn} className="BuyDetailContentItemDetailBtn" title="리뷰쓰기">리뷰쓰기</button>
            <ReviewModal productDto={productDto} isActive={isActive} onClickModalOff={onClickModalOff}/>
        </div>
    </div>)
}