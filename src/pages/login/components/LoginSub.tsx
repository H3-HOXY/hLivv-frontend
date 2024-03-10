import {NavigateFunction, useNavigate} from "react-router-dom";

const loginSubContents = [{title: "회원가입", href: "/signup"}, {title: "이메일 찾기", href: ""}, {title: "비밀번호 찾기", href: ""},]

export type LoginSubItemProps = {
    title: string;
    href: string;
    navigateFunc: NavigateFunction;
    shouldHideBar: boolean;
}

export function LoginSub() {
    const navigate = useNavigate()
    return (
        <div className="LoginSub flex items-center mb-5">
            {
                loginSubContents.map((content, idx) => {
                        return (
                            <LoginSubItem key={idx} title={content.title} href={content.href} navigateFunc={navigate}
                                          shouldHideBar={idx === loginSubContents.length - 1}/>
                        )
                    }
                )
            }
        </div>)
}

export const LoginSubItem = (props: LoginSubItemProps) => {
    return (
        <>
            <div className="LoginSubContent cursor-pointer" onClick={() => {
                props.navigateFunc(props.href)
            }}> {props.title} </div>
            <div
                style={{visibility: !props.shouldHideBar ? "visible" : "hidden"}}> |
            </div>
        </>
    )
}