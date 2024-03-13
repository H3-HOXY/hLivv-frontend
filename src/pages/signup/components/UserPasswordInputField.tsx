/**
 * @since 
 * @author 이호연, 최정윤
 */

export type UserPasswordInputFieldProps = {
    name: string,
    title: string,
    userPassword: string | undefined,
    setUserPassword: (value: (((prevState: (string | undefined)) => (string | undefined)) | string | undefined)) => void
}

export function UserPasswordInputField(props: UserPasswordInputFieldProps) {
    return <div className="SignupFormItem mb-5">
        <label htmlFor="password"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.title}</label>
        <input
            title="비밀번호"
            type="password"
            id={props.name}
            name={props.name}
            value={props.userPassword}
            onChange={(e) => props.setUserPassword(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
        />
    </div>;
}