import {isAuthenticated} from "../../api/auth/Token";
import {useEffect, useState} from "react";
import {MemberNotLoggedInError} from "../../api/auth/Errors";
import {getUserData} from "../../api/auth/UserInfo";
import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";

export function PageFrame() {
    const [authentication, setAuthentication] = useState(isAuthenticated())

    useEffect(() => {
        const whenUserNotLoggedIn = (e: Error) => {
            if (e instanceof MemberNotLoggedInError) {
                console.log("로그인 안 되어있음")
                setAuthentication(false)
            }
        }

        if (authentication) {
            getUserData(whenUserNotLoggedIn).then(() =>
                console.log("사용자 정보를 업데이트 했습니다.")
            ).catch(e => {
                console.log(`${e}`)
            })
        } else {
            console.log("로그인 안 되어있음");
        }
    }, [authentication]);


    return (
        <div className="App">
            <Navbar authentication={authentication} setAuthentication={setAuthentication}/>
            <Outlet context={[authentication, setAuthentication]}/>
            <Footer/>
        </div>
    )
}