import {ProductDto} from "../../../../api/Api";
import {useRef, useState} from "react";
import {useImage} from "../../../common/hooks/useImage";
import ModalBase from "../../../../Components/ModalBase";
import CardModal from "../../../../Components/CardModal";
import {getApi} from "../../../../api/ApiWrapper";

export function ReviewModal({productDto, isActive, onClickModalOff}: {
    productDto: ProductDto,
    isActive: boolean,
    onClickModalOff: () => void
}) {
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

    const image = useImage()
    const [score, setScore] = useState<number>(0)
    const [reviewText, setReviewText] = useState("")
    const onClickCardConfirm = async (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e?.preventDefault();
        try {
            const api = await getApi();
            // @ts-ignore
            const response = await api.writeReviewToProduct(productDto.id!!,
                {reviewText: reviewText, star: score, reviewImages: []},
                {imageFiles: imgFile != null ? [imgFile] : []}
            );

            console.log('Review submitted successfully', response);
            // 성공적으로 제출 후 필요한 로직 추가 (예: 폼 초기화, 성공 메시지 표시 등)
            onClickModalOff();
            setImgFile(undefined);
            setImgPath("");
            setReviewText("")
            if (imgRef.current) {
                imgRef.current.value = "";
            }
        } catch (error) {
            console.error('Error submitting review', error);
            // 에러 처리 로직 추가
        } finally {

        }


    };
    return (<ModalBase active={isActive} closeEvent={onClickModalOff}>
        <CardModal closeEvent={onClickModalOff} title="리뷰작성" actionMsg="확인" actionEvent={onClickCardConfirm}>
            <div className="BuyDetailModal">
                {/* 별점 평가 */}
                <div className="BuyDetailGrade">
                    <div className="BuyDetailGradeTitle">별점 평가</div>
                    <div className="BuyDetailGradeStar mx-5 flex flex-row-reverse justify-end text-5xl">
                        <label htmlFor="score"></label>
                        {
                            [5, 4, 3, 2, 1].map((value) => {
                                return (
                                    <>
                                        <input type="radio" className="peer hidden" id={`value${value}`} value={value}
                                               name="score"
                                               onClick={() => setScore(value)}/>
                                        <label htmlFor={`value${value}`}
                                               className="cursor-pointer mr-3 text-gray-400 peer-hover:text-yellow-400 peer-checked:text-yellow-600"
                                               onClick={() => setScore(value)}>
                                            ★</label>
                                    </>
                                )
                            })
                        }
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
                    <textarea className="BuyDetailModalDescriptionContent" placeholder="상품상태를 간략하게 설명해주세요."
                              onChange={(e) => setReviewText(e.target.value)}
                              title="상품설명"/>
                </div>
            </div>
        </CardModal>
    </ModalBase>)
}