import {Api} from "./Api";
import {getAuthToken, isAuthenticated} from "./auth/Token";

export function getApi() {
    if (!isAuthenticated()) return Promise.reject(Error("Not authenticated"))
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
