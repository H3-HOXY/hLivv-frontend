import "./styles/Login.scss"
import React, {useEffect, useState} from "react";
import {Form, useActionData, useNavigate, useOutletContext} from "react-router-dom";
import {LoginSub} from "./components/LoginSub";
import {LoginButton} from "./components/LoginButton";
import {EmailInputField} from "./components/EmailInputField";
import {PasswordInputField} from "./components/PasswordInputField";
import {RememberMeCheckBox} from "./components/RememberMeCheckBox";
import {PrintFormMessage} from "./components/PrintFormMessage";
import {loadUserEmailFromLocalStorage} from "../../api/auth/UserInfo";

/**
 * @since 
 * @author 이호연, 최정윤
 */

const Login = () => {

    //@ts-ignore
    const [authentication, setAuthentication] = useOutletContext()
    const response = useActionData()
    const [formMessage, setFormMessage] = useState<string>("")
    const savedEmail = loadUserEmailFromLocalStorage() ?? ""

    const [userEmail, setUserEmail] = useState<string>(savedEmail)
    const [password, setPassword] = useState<string>()
    const [remember, setRemember] = useState<boolean>(false)

    const navigate = useNavigate()

    //이미 로그인되어 있는 경우 홈으로 리다이렉션
    useEffect(ifAlreadyLoggedIn, [])

    //로그인 폼에 대한 응답 처리
    useEffect(handleFormMessage, [response])

    //<editor-fold desc="userEffect callbacks">
    //이미 로그인되어 있는 경우 홈으로 리다이렉션
    function ifAlreadyLoggedIn() {
        if (authentication) {
            navigate("/")
        }
    }

    //로그인 폼에 대한 응답 처리
    function handleFormMessage() {
        if (response == null) return

        //@ts-ignore
        if (response.status === 200) {
            setAuthentication(true)
            navigate("/")
            //@ts-ignore
        } else if (response.message !== undefined) {
            //@ts-ignore
            setFormMessage(response.message)
        }
    }

    //</editor-fold>

    return (
        <div className="Login">
            <div>
            <div className="LoginTitle">로그인</div>
                {/*@ts-ignore*/}
                <PrintFormMessage formMessage={formMessage}/>
                <Form className="LoginForm max-w-sm mx-auto" method="post" action={"/login"}>
                    <EmailInputField userEmail={userEmail} setUserEmail={setUserEmail}/>
                    <PasswordInputField password={password} setPassword={setPassword}/>
                    <RememberMeCheckBox remember={remember} setRemember={setRemember}/>
                    <LoginSub/>
                    <LoginButton/>
                </Form>
            </div>
        </div>
    );
}


export default Login;