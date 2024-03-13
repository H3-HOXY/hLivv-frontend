/**
 * @since 
 * @author 이호연, 최정윤
 */

export type UserNameInputFieldProps = {
    userName: string | undefined,
    setUserName: (value: (((prevState: (string | undefined)) => (string | undefined)) | string | undefined)) => void
}

export function UserNameInputField(props: UserNameInputFieldProps) {
    return <div className="SignupFormItem mb-5">
        <label htmlFor="name"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이름</label>
        <input
            type="text"
            id="name"
            name="name"
            value={props.userName}
            onChange={(e) => props.setUserName(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
        />
    </div>;
}