import {setAuthToken} from "../../api/auth/Token";
import {FormMessage} from "../../common/FormMessage";
import {saveUserEmailToLocalStorage} from "../../api/auth/UserInfo";
import {Api} from "../../api/ApiWrapper";

/**
 * @since
 * @author 이호연
 */

export async function loginLoader() {

}

// @ts-ignore
export async function loginAction({request, params}) {
    const formData = await request.formData()
    const formDataObj = Object.fromEntries(formData.entries());
    const {email, password} = formDataObj

    if (email === null) return FormMessage.createFormMessage("이메일을 입력해주세요", 400)
    if (password === null) return FormMessage.createFormMessage("비밀번호를 입력해주세요", 400)

    try {
        const api = Api
        const result = await api.authorize({loginId: email!!.toString(), loginPw: password!!.toString()})
        const token = result.data.token
        if (token === undefined) return FormMessage.createFormMessage("알 수 없는 토큰 오류입니다.", 500)
        setAuthToken(token)

        if (formData.get("remember") === "true") {
            saveUserEmailToLocalStorage(email!!.toString())
        }

        return FormMessage.createFormMessage("로그인 성공", 200)

    } catch (e) {
        //@ts-ignore
        if (e.response && e.response && e.response.status) return FormMessage.createFormMessage("이메일 또는 비밀번호가 일치하지 않습니다.", 401)
        // return FormMessage.createFormMessage(`${e}`, 500)
    }
}
