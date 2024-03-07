import "../Components_scss/BuyDetail.scss"
import { useImage } from "../pages/common/hooks/useImage";
import { useRef, useState } from "react"
import ModalBase from './ModalBase';
import CardModal from './CardModal';

const BuyDetail = () => {
  const image = useImage()

    // 모달 기능
    const [isActive, setIsActive] = useState(false);
    const onClickModalOn = () => {
      setIsActive(true);
    };
    const onClickModalOff = () => {
      setIsActive(false);
    };
    const onClickCardConfirm = () => {
      // 모달을 닫고 캐시 비우기
      onClickModalOff();
      setImgFile(undefined);
      setImgPath("");
      if (imgRef.current) {
        imgRef.current.value = "";
      } 
      alert('리뷰가 등록되었습니다.');
    };

    // 사진 첨부 기능
    const [imgFile, setImgFile] = useState<File>();
    const [imgPath, setImgPath] = useState("");
    const imgRef = useRef<HTMLInputElement>(null);
    const MAX_IMAGE_SIZE_BYTES = 1024 * 1024 * 2;

    const previewImage = () => {
      if (imgRef.current && imgRef.current.files) {
        const img = imgRef.current.files[0];
        setImgFile(img);
        
        //이미지 미리보기 기능
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => {
          setImgPath(reader.result as string);
        };
      }
    };

  return (
    <div className="BuyDetail">
      <div className="BuyDetailWrapper">
        <div className="BuyDetailTitle">구매내역</div>
        <div className="BuyDetailContent">
          {/* 리뷰 아이템 */}
          <div className="BuyDetailContentItem">
            <img className="BuyDetailContentItemImg" src={image("베스트1.jpeg")} title="pic"></img>
            <div className="BuyDetailContentItemDetail">
              <div className="BuyDetailContentItemDetailText">
                <div className="BuyDetailContentItemDetailTextLeft">
                  <div className="BuyDetailContentItemDetailBrand">코이</div>
                  <div className="BuyDetailContentItemDetailName">코이 6단 이동식 책상세트</div>
                  <div className="BuyDetailContentItemDetailInfo">사이즈: 1200 / 색상: 화이트</div>
                </div>
                <div className="BuyDetailContentItemDetailPoint">포토 500P | 일반 100P</div>
              </div>
              <button onClick={onClickModalOn} className="BuyDetailContentItemDetailBtn" title="리뷰쓰기">리뷰쓰기</button>
              <ModalBase active={isActive} closeEvent={onClickModalOff}>
                <CardModal closeEvent={onClickModalOff} title="리뷰작성" actionMsg="확인" actionEvent={onClickCardConfirm}>
                  <div className="BuyDetailModal">
                    {/* 별점 평가 */}
                    <div className="BuyDetailGrade">
                      <div className="BuyDetailGradeTitle">별점 평가</div>
                      <div className="BuyDetailGradeStar mx-5 flex flex-row-reverse justify-end text-5xl">
                        <label htmlFor="score"></label>
                        <input type="radio" className="peer hidden" id="value5" value="5" name="score" />
                        <label htmlFor="value5"
                          className="cursor-pointer mr-3 text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600">★</label>
                        <input type="radio" className="peer hidden" id="value4" value="4" name="score" />
                        <label htmlFor="value4"
                          className="cursor-pointer mr-3 text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600">★</label>
                        <input type="radio" className="peer hidden" id="value3" value="3" name="score" />
                        <label htmlFor="value3"
                          className="cursor-pointer mr-3 text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600">★</label>
                        <input type="radio" className="peer hidden" id="value2" value="2" name="score" />
                        <label htmlFor="value2"
                          className="cursor-pointer mr-3 text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600">★</label>
                        <input type="radio" className="peer hidden" id="value1" value="1" name="score" />
                        <label htmlFor="value1"
                          className="cursor-pointer peer mr-3 text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600">★</label>
                      </div>
                    </div>

                    {/* 사진 첨부 */}
                    <div className="BuyDetailModalPic">
                      <div className="BuyDetailModalPicTitle">상품사진</div>
                      <div className="BuyDetailModalPicContent">
                        <div className="BuyDetailModalPicContentText">사진을 첨부해주세요.</div>
                        <div className="BuyDetailModalPicContentButton">
                          <label htmlFor="photo">
                            <img
                              //사용자가 이미지 파일을 업로드하면 해당 이미지를 보여주고, 없으면 기본 이미지를 보여준다.
                              className="BuyDetailModalPicUploadPreviewLImg"
                              src={imgPath ? imgPath : image("upload.png")}
                              alt="이미지 업로드"
                            />
                          </label>
                          <label className="BuyDetailModalPicUploadInputLabel" htmlFor="photo">
                            사진 첨부하기
                            <input
                              className="BuyDetailModalPicUploadInput"
                              type="file"
                              id="photo"
                              name="photo"
                              accept=".png, .jpeg, .jpg"
                              onChange={previewImage}
                              ref={imgRef}
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* 상품설명 */}
                    <div className="BuyDetailModalDescription">
                      <div className="BuyDetailModalDescriptionTitle">상품설명</div>
                      <textarea className="BuyDetailModalDescriptionContent" placeholder="상품상태를 간략하게 설명해주세요." title="상품설명"/>
                    </div>
                  </div>
                </CardModal>
              </ModalBase>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyDetail;