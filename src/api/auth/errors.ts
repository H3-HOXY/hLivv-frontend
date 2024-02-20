import {types} from "sass";
import Error = types.Error;

export class MemberNotLoggedInError extends Error {
    constructor(message: string) {
        super(message);
    }
}