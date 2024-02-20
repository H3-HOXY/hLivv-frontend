import "../Components_scss/Login.scss"
import {useState} from "react";
import {Api} from "../api/Api";
import {setAuthToken} from "../api/auth/Token";

const Login = () => {
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    return (
        <div className="Login">
            <div className="LoginTitle">로그인</div>
            <form className="LoginForm max-w-sm mx-auto"
                  onSubmit={(e) => {
                      e.preventDefault();
                      const api = new Api().api;
                      if (username === undefined || password === undefined) return;
                      api.authorize({loginId: username, loginPw: password}).then((res) => {
                          const token = res.data.token;
                          if (token === undefined) throw new Error("Token is undefined")
                          setAuthToken(token)
                      }).catch((err) => {
                          console.log(err)
                      })
                  }}
            >
                <div className="LoginEmail mb-5">
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
                    <input
                        type="text"
                        id="email"
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                        required
                    />
                </div>
                <div className="LoginPassword mb-5">
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) =>
                            setPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:black dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                        />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">아이디
                        저장</label>
                </div>
                <div className="LoginSub flex items-center mb-5">
                    <div className="">회원가입</div>
                    <div> |</div>
                    <div className="">이메일 찾기</div>
                    <div> |</div>
                    <div className="">비밀번호 찾기</div>
                </div>
                <button
                    type="submit"
                    className="LoginBtn text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    로그인
                </button>
            </form>
        </div>
    );
}

export default Login;