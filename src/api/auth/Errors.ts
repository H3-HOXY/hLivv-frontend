import {types} from "sass";
import Error = types.Error;

/**
 * @author 이호연
 */
export class MemberNotLoggedInError extends Error {
    constructor(message: string) {
        super(message);
    }
}