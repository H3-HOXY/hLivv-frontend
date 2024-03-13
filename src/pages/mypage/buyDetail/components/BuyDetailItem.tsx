import {ProductDto} from "../../../../api/Api";
import {useState} from "react";
import { useImage } from "../../../common/hooks/useImage";
import {useNavigate} from "react-router-dom";
import {ReviewModal} from "./ReviewModal";

/**
 * @since 
 * @author 최정윤, 이호연
 */

export function BuyDetailItem({productDto}: { productDto: ProductDto }) {
    // 사진 첨부 기능
    const image = useImage()
    // 모달 기능
    const [isActive, setIsActive] = useState(false);
    const onClickModalOn = () => setIsActive(true);
    const onClickModalOff = () => setIsActive(false);

    const navigate = useNavigate()
    const goToProduct = () => {
        navigate(`/product/${productDto.id}`)
    }

    const productImage = (productDto.productImages == null) ? "" : productDto.productImages[0].imageUrl
    return (<div className="BuyDetailContentItem mt-8">
        <img className="BuyDetailContentItemImg cursor-pointer"
             src={productImage}
             title="pic"
             onClick={goToProduct}/>
        <div className="BuyDetailContentItemDetail">
            <div className="BuyDetailContentItemDetailText">
                <div className="BuyDetailContentItemDetailTextLeft">
                    <div className="BuyDetailContentItemDetailName cursor-pointer"
                         onClick={goToProduct}>
                        {productDto.name}</div>
                </div>
            </div>
            <button onClick={onClickModalOn} className="BuyDetailContentItemDetailBtn" title="리뷰쓰기">리뷰쓰기</button>
            <ReviewModal productDto={productDto} isActive={isActive} onClickModalOff={onClickModalOff}/>
        </div>
    </div>)
}