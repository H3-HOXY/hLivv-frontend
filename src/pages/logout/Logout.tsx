import {useEffect} from "react";
import {useNavigate, useOutletContext} from "react-router-dom";
import {removeAuthToken} from "../../api/auth/Token";

/**
 * @since 
 * @author 이호연
 */

export const Logout = () => {
    //@ts-ignore
    const [authentication, setAuthentication] = useOutletContext()
    const navigate = useNavigate()
    useEffect(doLogout, [])

    function doLogout() {
        removeAuthToken()
        setAuthentication(false)
        navigate("/")
    }

    return (
        <> </>
    )
}