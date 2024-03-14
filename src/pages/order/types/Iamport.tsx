import {RequestPayParams} from "./RequestPayParams";
import {RequestPayResponseCallback} from "./RequestPayResponseCallback";

/**
 * @author 반정현
 */
export interface Iamport {
    init: (accountID: string) => void
    request_pay: (
        params: RequestPayParams,
        callback?: RequestPayResponseCallback,
    ) => void
}