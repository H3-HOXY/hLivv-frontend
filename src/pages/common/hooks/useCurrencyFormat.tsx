/**
 * @since 
 * @author 이호연
 */

export enum CurrencyFormat {
    KRW = "KRW",
    USD = "USD"
}

// 다국어를 지원하는 화폐 포메팅
export const useCurrencyFormat = (format: CurrencyFormat = CurrencyFormat.KRW) => {
    return (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}