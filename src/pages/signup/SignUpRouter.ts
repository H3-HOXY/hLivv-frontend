import {FormMessage} from "../../common/FormMessage";
import {Api} from "../../api/ApiWrapper";

/**
 * @since 
 * @author 이호연
 */

//@ts-ignore
export async function signUpAction({request, params}) {
    const formData = await request.formData()
    const formDataObj = Object.fromEntries(formData.entries());

    const {
        email,
        password,
        passwordCheck,
        name,
        phone,
        conditionOfUse,
        personalInfo
    } = formDataObj;

    const validationResult = validateUserInput(email, name, password, passwordCheck, phone, conditionOfUse, personalInfo)

    if (validationResult !== null) {
        return validationResult
    }

    try {
        const api = Api
        const result = await api.signup({
            email: email!!.toString(),
            loginPw: password!!.toString(),
            name: name!!.toString(),
            phone: phone!!.toString().replace(/-/g, ""),
            loginId: email!!.toString()
        })
        //validate the result
        return Response.redirect("/login", 303)
    } catch (e) {
        //@ts-ignore
        if (e.response && e.response && e.response.status === 401) return createFormMessage("이메일 또는 비밀번호가 일치하지 않습니다.", 401)
        return FormMessage.createFormMessage(`${e}`, 500)
    }

    return Response.redirect("/", 303)
}


const validateUserInput = (email: string, name: string, password: string, passwordCheck: string, phone: string, conditionOfUse: string, personalInfo: string) => {
    if (email === null) return FormMessage.createFormMessage("이메일을 입력해주세요", 400)
    if (password === null) return FormMessage.createFormMessage("비밀번호를 입력해주세요", 400)
    if (passwordCheck === null) return FormMessage.createFormMessage("비밀번호 확인을 입력해주세요", 400)
    if (name === null) return FormMessage.createFormMessage("이름을 입력해주세요", 400)
    if (phone === null) return FormMessage.createFormMessage("전화번호를 입력해주세요", 400)
    if (conditionOfUse === null) return FormMessage.createFormMessage("이용약관에 동의해주세요", 400)
    if (personalInfo === null) return FormMessage.createFormMessage("개인정보 처리방침에 동의해주세요", 400)
    if (password !== passwordCheck) return FormMessage.createFormMessage("비밀번호가 일치하지 않습니다", 400)
    if (conditionOfUse === "false") return FormMessage.createFormMessage("이용약관에 동의해주세요", 400)
    if (personalInfo === "false") return FormMessage.createFormMessage("개인정보 처리방침에 동의해주세요", 400)
    return null
}