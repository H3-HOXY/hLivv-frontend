/**
 * Form을 react-router-dom에 제출한 뒤에 받을 응답을 정의합니다.
 * @author 이호연
 */
export class FormMessage {
    status: number;
    headers: {
        "Content-Type": string
    };
    message: string;

    constructor(status: number, message: string) {
        this.status = status;
        this.headers = {"Content-Type": "application/json"};
        this.message = message;
    }

    static createFormMessage(msg: string, code: number) {
        return new FormMessage(code, msg);
    }

}