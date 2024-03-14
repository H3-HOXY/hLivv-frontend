import "../styles/Review.scss"
import {useImage} from "../../common/hooks/useImage";
import {useRef, useState} from "react"
import ModalBase from '../ModalBase';
import CardModal from '../CardModal';

/**
 * @since
 * @author 최정윤, 이호연(API 연결)
 */

const Review = () => {
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
      alert('신청되었습니다.');
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
    <div className="Review">
      <div className="ReviewWrapper">
        <div className="ReviewTitle">리뷰쓰기</div>
        <div className="ReviewContent">
          {/* 리뷰 아이템 */}
          <div className="ReviewContentItem">
            <img className="ReviewContentItemImg" src={image("베스트1.jpeg")} title="pic"></img>
            <div className="ReviewContentItemDetail">
              <div className="ReviewContentItemDetailText">
                <div className="ReviewContentItemDetailBrand">코이</div>
                <div className="ReviewContentItemDetailName">코이 6단 이동식 책상세트</div>
                <div className="ReviewContentItemDetailInfo">사이즈: 1200 / 색상: 화이트</div>
                <div className="ReviewContentItemDetailPoint">포토 500P | 일반 100P</div>
              </div>
              <button onClick={onClickModalOn} className="ReviewContentItemDetailBtn" title="리뷰쓰기">리뷰쓰기</button>
              <ModalBase active={isActive} closeEvent={onClickModalOff}>
              <CardModal closeEvent={onClickModalOff} title="리뷰작성" actionMsg="확인" actionEvent={onClickCardConfirm}>
                <div className="ReviewModal">
                  
                  {/* 별점 평가 */}
                  <div className="ReviewGrade">
                    <div className="ReviewGradeTitle">별점 평가</div>
                    <div className="ReviewGradeStar mx-5 flex flex-row-reverse justify-end text-2xl">
                      <label htmlFor="score"></label>
                      <input type="radio" className="peer hidden" id="value5" value="5" name="score" />
                      <label htmlFor="value5"
                        className="cursor-pointer text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600">★</label>
                      <input type="radio" className="peer hidden" id="value4" value="4" name="score" />
                      <label htmlFor="value4"
                        className="cursor-pointer text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600">★</label>
                      <input type="radio" className="peer hidden" id="value3" value="3" name="score" />
                      <label htmlFor="value3"
                        className="cursor-pointer text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600">★</label>
                      <input type="radio" className="peer hidden" id="value2" value="2" name="score" />
                      <label htmlFor="value2"
                        className="cursor-pointer text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600">★</label>
                      <input type="radio" className="peer hidden" id="value1" value="1" name="score" />
                      <label htmlFor="value1"
                        className="cursor-pointer peer text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600">★</label>
                    </div>
                  </div>

                  {/* 사진 첨부 */}
                  <div className="ReviewModalPic">
                    <div className="ReviewModalPicTitle">상품사진</div>
                    <div className="ReviewModalPicContent">
                      <div className="ReviewModalPicContentText">사진을 첨부해주세요.</div>
                      <div className="ReviewModalPicContentButton">
                        <label htmlFor="photo">
                          <img
                            //사용자가 이미지 파일을 업로드하면 해당 이미지를 보여주고, 없으면 기본 이미지를 보여준다.
                            src={imgPath ? imgPath : image(`/images/upload.png`)}
                            alt="이미지 업로드"
                          />
                        </label>
                        <input
                          type="file"
                          id="photo"
                          name="photo"
                          accept=".png, .jpeg, .jpg"
                          onChange={previewImage}
                          ref={imgRef}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 상품설명 */}
                  <div className="ReviewModalDescription">
                    <div className="ReviewModalDescriptionTitle">상품설명</div>
                    <textarea className="ReviewModalDescriptionContent" title="상품설명"/>
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

export default Review;