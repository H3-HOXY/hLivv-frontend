import {Api as RawApi} from "./Api";
import {getAuthToken, isAuthenticated} from "./auth/Token";
import {MemberNotLoggedInError} from "./auth/Errors";

/**
 * 인증된 사용자가 사용할 수 있는 API를 반환합니다.
 * @throws {MemberNotLoggedInError} 사용자가 로그인하지 않았을 때
 * @returns {Promise<Api>} 인증된 사용자가 사용할 수 있는 API
 */
export function getApi() {
    if (!isAuthenticated()) return Promise.reject(new MemberNotLoggedInError("Not authenticated"))
    const token = getAuthToken()!!
    const header = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const api = new RawApi(
        {
            baseURL: process.env.REACT_APP_API_URL,
            securityWorker: () => header
        }
    );
    return Promise.resolve(api.api);
}

export const Api = new RawApi({baseURL: process.env.REACT_APP_API_URL}).api
