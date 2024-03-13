import {ProductDto} from "../../../../api/Api";
import {useRef, useState} from "react";
import {useImage} from "../../../common/hooks/useImage";
import ModalBase from "../../ModalBase";
import CardModal from "../../CardModal";

/**
 * @since 
 * @author 최정윤
 */

interface State {
  id: string;
  value: string;
  label: string;
  desc: string;
}

const stateList: State[] = [
  { id: '1', value: 'S', label: 'S - 가장 낮았던 판매가격의 50%', desc: '흠집이 없으며 새 것과 동일한 상태'},
  { id: '2', value: 'A', label: 'A - 가장 낮았던 판매가격의 40%', desc: '경미한 흠집이 있으나 전반적으로 양호한 상태'},
  { id: '3', value: 'B', label: 'B - 가장 낮았던 판매가격의 30%', desc: '흠집 다소 있으며 사용감이 있는 상태'},
];

export function MyRestoreModal({productDto, isActive, onClickModalOff}: {
  productDto: ProductDto,
  isActive: boolean,
  onClickModalOff: () => void
}) {
  const image = useImage()

  const onClickCardConfirm = () => {
    // 모달을 닫고 캐시 비우기
    onClickModalOff();
    setImgFile(undefined);
    setRestoreImgPath("");
    if (imgRef.current) {
      imgRef.current.value = "";
    }
    alert('리스토어가 신청되었습니다.');
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Restoration Data:");
    console.log("Selected State:", restoreGrade);
    console.log("Image File:", imgFile);
    console.log("Restore Description:", restoreDesc);
    console.log("리스토어 이미지 경로:", restoreImgPath);
  };


  // 상태 선택 기능
  const [restoreGrade, setRestoreGrade] = useState<string>();
  // console.log(`Selected state: ${restoreGrade}`);

  // 사진 첨부 기능
  const [imgFile, setImgFile] = useState<File>();
  const [restoreImgPath, setRestoreImgPath] = useState<string>();
  const imgRef = useRef<HTMLInputElement>(null);
  const MAX_IMAGE_SIZE_BYTES = 1024 * 1024 * 2;
  // console.log(restoreImgPath);

  const previewImage = () => {
    if (imgRef.current && imgRef.current.files) {
      const img = imgRef.current.files[0];
      setImgFile(img);

      //이미지 미리보기 기능
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        setRestoreImgPath(reader.result as string);
      };
    }
  };

  // 상품 설명
  const [restoreDesc, setRestoreDesc] = useState<String>();
  // console.log(restoreDesc);

  return (
      <ModalBase active={isActive} closeEvent={onClickModalOff}>
        <CardModal closeEvent={onClickModalOff} title="리스토어 신청하기" actionMsg="확인" actionEvent={onClickCardConfirm}>
          <div className="RestoreModal">
            {/* 상품상태 */}
            <div className="RestoreModalState">
              <div className="RestoreModalStateTitle">제품상태</div>
              <div className="RestoreModalStateContent">
                <ul className="PreferenceTestRightAnswer space-y-4 mb-4">
                  {stateList.map((state) => (
                      <li key={state.id}>
                        <input
                            type="radio"
                            id={state.id}
                            name="state"
                            value={state.value}
                            className="hidden peer"
                            onClick={() => setRestoreGrade(state.value)}
                            required
                        />
                        <label
                            htmlFor={state.id}
                            className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                            onClick={() => setRestoreGrade(state.value)}
                        >
                          <div className="block">
                            <div className="w-full text-lg font-semibold">{state.label}</div>
                            <div className="w-full text-lg font-semibold">{state.desc}</div>
                          </div>
                        </label>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* 상품사진 */}
            <div className="RestoreModalPic">
              <div className="RestoreModalPicTitle">상품사진</div>
              <div className="RestoreModalPicContent">
                <div className="RestoreModalPicContentText">사진을 첨부해주세요.</div>
                <div className="RestoreModalPicContentButton">
                  <label className="RestoreModalPicUploadPreviewLabel" htmlFor="photo">
                    <img
                        //사용자가 이미지 파일을 업로드하면 해당 이미지를 보여주고, 없으면 기본 이미지를 보여준다.
                        className="RestoreModalPicUploadPreviewLImg"
                        src={restoreImgPath ? restoreImgPath : image("upload.png")}
                        alt="사진 첨부하기"
                    />
                  </label>
                  <label className="RestoreModalPicUploadInputLabel" htmlFor="photo">
                    사진 첨부하기
                    <input
                        className="RestoreModalPicUploadInput"
                        type="file"
                        id="photo"
                        name="photo"
                        accept=".png, .jpeg, .jpg"
                        onChange={previewImage}
                        ref={imgRef}
                    />
                    <input type="hidden" name="restoreImgPath"
                           onChange={() => setRestoreGrade(restoreImgPath)}/>
                  </label>
                </div>
              </div>
            </div>
            {/* 상품설명 */}
            <div className="RestoreModalDescription">
              <div className="RestoreModalDescriptionTitle">상품설명</div>
              <textarea
                  className="RestoreModalDescriptionContent"
                  placeholder="상품상태를 간략하게 설명해주세요."
                  title="상품설명"
                  onChange={(e) => setRestoreDesc(e.target.value)}
              />
            </div>
            {/* 안내사항 */}
            <div className="RestoreModalInfo">
              <div className="RestoreModalInfoTitle">위의 조건을 충족하지 못하나요?</div>
              <div className="RestoreModalInfoContent">조건에 맞지 않는 제품은 리스토어 판매가 어렵습니다.
                <br/>H.Livv 리스토어 서비스는 가구에 제2의 삶을 불어 넣을 수 있는 선택 중 하나일 뿐입니다. 가구를 폐기할 때가 되었다면 다른 재활용 방법을 고려해보세요.
              </div>
            </div>
          </div>
        </CardModal>
      </ModalBase>
  )
}