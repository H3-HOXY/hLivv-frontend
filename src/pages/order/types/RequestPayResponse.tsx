import {RequestPayAdditionalResponse} from "./RequestPayAdditionalResponse";


/**
 * @author 반정현
 */
export interface RequestPayResponse extends RequestPayAdditionalResponse {
    success: boolean
    error_code: string
    error_msg: string
    imp_uid: string | null
    merchant_uid: string
    pay_method?: string
    paid_amount?: number
    status?: string
    name?: string
    pg_provider?: string
    pg_tid?: string
    buyer_name?: string
    buyer_email?: string
    buyer_tel?: string
    buyer_addr?: string
    buyer_postcode?: string
    custom_data?: any
    paid_at?: number
    receipt_url?: string
}