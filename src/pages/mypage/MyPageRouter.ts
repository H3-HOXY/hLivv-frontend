import {FormMessage} from "../../common/FormMessage";
import {getApi} from "../../api/ApiWrapper";

/**
 * @since 
 * @author 이호연
 */

// @ts-ignore
export const editProfileAction = async ({request, params}) => {
    try {
        const formData = await request.formData()
        const api = await getApi()


    } catch (e) {
        return FormMessage.createFormMessage(`${e}`, 500)
    }

    return FormMessage.createFormMessage("프로필 수정 성공", 200)
}