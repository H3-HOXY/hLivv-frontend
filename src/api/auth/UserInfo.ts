import {getApi} from "../ApiWrapper";

/**
 * 사용자 인증 토큰을 저장 및 불러오는 함수들을 제공합니다.
 * @author 이호연
 */

export const loadUserEmailFromLocalStorage = () => {
    return localStorage.getItem("email")
}

// 현재 로그인한 사용자 정보 가져오는 비동기 함수
export async function getUserData(whenNotLoggedIn: (e: Error) => void) {
    try {
        const api = await getApi()
        const myInfo = await api.getMyUserInfo()
        localStorage.setItem('myInfo', JSON.stringify(myInfo.data))
        console.log("로그인 되어있음");
    } catch (e) {
        if (e instanceof Error) {
            whenNotLoggedIn(e)
        }
        throw e
    }
}

export const saveUserEmailToLocalStorage = (email: string) => {
    localStorage.setItem("email", email)
}