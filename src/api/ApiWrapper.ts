import {Api} from "./Api";
import {getAuthToken, isAuthenticated} from "./auth/Token";
import {MemberNotLoggedInError} from "./auth/errors";

export function getApi() {
    if (!isAuthenticated()) return Promise.reject(new MemberNotLoggedInError("Not authenticated"))
    const token = getAuthToken()!!
    const header = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const api = new Api(
        {
            securityWorker: () => header
        }
    );
    return Promise.resolve(api.api);
}
