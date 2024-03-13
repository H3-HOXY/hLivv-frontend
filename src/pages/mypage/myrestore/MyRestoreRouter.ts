import {FormMessage} from "../../../common/FormMessage";
import {Api} from "../../../api/ApiWrapper";
import {getAuthToken} from "../../../api/auth/Token";

/**
 * @since 
 * @author 최정윤
 */

// @ts-ignore
export async function myRestoreAction({request, params}) {
  const formData = await request.formData()
  const formDataObj = Object.fromEntries(formData.entries());
  
  // 프론트에서 입력 받아올 값
  const {
    requestGrade,
    restoreDesc,
    restoreImageUrls
  } = formDataObj;

  // 입력값 유효성 확인
  const validationResult = validateRestoreInput(requestGrade, restoreDesc, restoreImageUrls)

  if (validationResult !== null){
    return validationResult
  }

  // 프론트에서 입력하지 않은 변수들을 임의의 값으로 채워넣기
  const filledProductId = 0;
  const filledPickUpDate = "2024-03-09T10:34:33.145Z";
  const filledWhenRejected = true;

  try {
    const api = Api
    const headers = {
      Authorization: `Bearer ${getAuthToken()}`,
      // 다른 필요한 헤더도 추가할 수 있음
    };
    const result = await api.restoreRegister({
      productId: filledProductId,
      pickUpDate: filledPickUpDate,
      requestGrade: requestGrade ? requestGrade.toString() : '',
      restoreDesc: restoreDesc ? restoreDesc.toString() : '',
      whenRejected: filledWhenRejected,
      restoreImageUrls: restoreImageUrls ? restoreImageUrls.split(',') : []
    }, { headers })
    // 콘솔에 성공적인 응답을 출력
    console.log('Successful response:', result);
    return FormMessage.createFormMessage("리스토어 신청 성공", 200)
  } catch(e) {
    // 실패한 경우 콘솔에 에러 메시지 출력
    console.error('Error:', (e as Error).message);
    return FormMessage.createFormMessage(`${(e as Error).message}`, 500)
  }
}

const validateRestoreInput = (requestGrade: string, restoreDesc: string, restoreImageUrls:string) => {
  if (requestGrade === null) return FormMessage.createFormMessage("등급을 선택해주세요", 400)
  if (restoreDesc === null) return FormMessage.createFormMessage("상풍설명을 입력해주세요", 400)
  if (restoreImageUrls === null) return FormMessage.createFormMessage("상품사진을 등록해주세요", 400)
  return null
}