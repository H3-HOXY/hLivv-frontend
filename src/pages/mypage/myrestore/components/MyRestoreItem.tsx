import {ProductDto} from "../../../../api/Api";
import {useState, useRef} from "react";
import { useImage } from "../../../common/hooks/useImage";
import {useNavigate} from "react-router-dom";
import { MyRestoreModal } from "./MyRestoreModal";
import MyRestoreDetail from "../../../../Components/MyRestoreDetail";

export function MyRestoreItem({productDto}: {productDto: ProductDto}) {
  const image = useImage()
  // 모달 기능
  const [isActive, setIsActive] = useState(false);
  const onClickModalOn = () => {
    setIsActive(true);
  };
  const onClickModalOff = () => {
    setIsActive(false);
  };
  const navigate = useNavigate()
  const goToProduct = () => {
    navigate(`/product/${productDto.id}`)
  }
  const productImage = (productDto.productImages == null) ? "" : productDto.productImages[0].imageUrl
  return (
    <div className="MyRestoreContentItem">
      <img className="MyRestoreContentItemImg cursor-pointer"
      // src={image("베스트1.jpeg")} 
      src={productImage}
      title="pic"
      onClick={goToProduct}></img>
      <div className="MyRestoreContentItemText">
        <div className="MyRestoreContentItemBrand">코이</div>
        <div className="MyRestoreContentItemName cursor-pointer"
        onClick={goToProduct}>
          코이 6단 이동식 책상세트
          {productDto.name} </div>
        <div className="MyRestoreContentItemInfo">사이즈: 1200 / 색상: 화이트</div>
      </div>
      <button onClick={onClickModalOn} className="MyRestoreContentItemBtn" title="신청하기">신청하기</button>
      <MyRestoreModal productDto={productDto} isActive={isActive} onClickModalOff={onClickModalOff}/>
    </div>
  )
}