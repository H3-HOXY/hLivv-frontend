import {RequestPayResponse} from "./RequestPayResponse";

export type RequestPayResponseCallback = (response: RequestPayResponse) => void

export function isRequestPayResponse(obj: any): obj is RequestPayResponse {
    return (
        obj !== null &&
        typeof obj === 'object' &&
        'imp_uid' in obj &&
        'merchant_uid' in obj &&
        'paid_amount' in obj &&
        'apply_num' in obj &&
        'vbank_num' in obj &&
        'vbank_name' in obj &&
        'vbank_holder' in obj &&
        'vbank_date' in obj &&
        'vbank_code' in obj &&
        'name' in obj &&
        'pg_tid' in obj &&
        'buyer_name' in obj &&
        'buyer_email' in obj &&
        'buyer_tel' in obj &&
        'buyer_addr' in obj &&
        'buyer_postcode' in obj &&
        'custom_data' in obj &&
        'user_agent' in obj &&
        'status' in obj &&
        'started_at' in obj &&
        'paid_at' in obj &&
        'failed_at' in obj &&
        'cancelled_at' in obj &&
        'fail_reason' in obj &&
        'cancel_reason' in obj &&
        'receipt_url' in obj &&
        'cancel_receipt_urls' in obj
    );
}