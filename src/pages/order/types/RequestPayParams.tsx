import {RequestPayAdditionalParams} from "./RequestPayAdditionalParams";
import {Display} from "./Display";


/**
 * @author 반정현
 */
export interface RequestPayParams extends RequestPayAdditionalParams {
    pg?: string
    pay_method: string
    escrow?: boolean
    merchant_uid: string
    name?: string
    amount: number
    custom_data?: any
    tax_free?: number
    currency?: string
    language?: string
    buyer_name?: string
    buyer_tel: string
    buyer_email?: string
    buyer_addr?: string
    buyer_postcode?: string
    notice_url?: string | string[]
    display?: Display
}