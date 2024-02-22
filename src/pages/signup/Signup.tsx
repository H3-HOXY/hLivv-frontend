import "./styles/Signup.scss"
import {useState} from "react";
import {Form, useActionData} from "react-router-dom";
import {UserEmailInputField} from "./components/UserEmailInputField";
import {UserPasswordInputField} from "./components/UserPasswordInputField";
import {UserNameInputField} from "./components/UserNameInputField";
import {UserPhoneInputField} from "./components/UserPhoneInputField";
import {ConditionOfUserCheckBox} from "./components/ConditionOfUserCheckBox";
import {PersonalInfoCheckBox} from "./components/PersonalInfoCheckBox";
import {SignUpSubmitButton} from "./components/SignUpSubmitButton";
import {FormMessage} from "../../common/FormMessage";

const Signup = () => {
    const [userEmail, setUserEmail] = useState<string>()
    const [userPassword, setUserPassword] = useState<string>()
    const [userPasswordCheck, setUserPasswordCheck] = useState<string>()
    const [userName, setUserName] = useState<string>()
    const [userPhone, setUserPhone] = useState<string>()
    const [conditionOfUse, setConditionOfUse] = useState<boolean>(false)
    const [personalInfo, setPersonalInfo] = useState<boolean>(false)

    const error = useActionData() as FormMessage

    return (
        <div className="Signup">
            <div className="SignupTitle">회원가입</div>
            <SignUpErrorMessage error={error}/>
            <Form className="SignupForm max-w-sm mx-auto" method={"post"}>
                <UserEmailInputField userEmail={userEmail} setUserEmail={setUserEmail}/>
                <UserPasswordInputField title={"비밀번호 입력"} name={"password"} userPassword={userPassword}
                                        setUserPassword={setUserPassword}/>
                <UserPasswordInputField title={"비밀번호 확인"} name={"passwordCheck"} userPassword={userPasswordCheck}
                                        setUserPassword={setUserPasswordCheck}/>
                <UserNameInputField userName={userName} setUserName={setUserName}/>
                <UserPhoneInputField userPhone={userPhone} setUserPhone={setUserPhone}/>
                <ConditionOfUserCheckBox conditionOfUse={conditionOfUse}
                                         setConditionOfUse={setConditionOfUse}/>
                <PersonalInfoCheckBox personalInfo={personalInfo}
                                      setPersonalInfo={setPersonalInfo}/>
                <SignUpSubmitButton/>
            </Form>
        </div>
    );
}

type SignUpErrorMessageProps = {
    error: FormMessage
}

export function SignUpErrorMessage(props: SignUpErrorMessageProps) {
    return (
        <>
            {
                // @ts-ignore
                (props.error != null && props.error.message != null) ?
                    <div className="SignupError">{props.error.message}</div> : <></>
            }
        </>
    )
}

export default Signup;