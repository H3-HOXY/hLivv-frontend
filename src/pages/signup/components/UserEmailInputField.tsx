export type UserEmailInputFieldProps = {
    userEmail: string | undefined,
    setUserEmail: (value: (((prevState: (string | undefined)) => (string | undefined)) | string | undefined)) => void
}

export function UserEmailInputField(props: UserEmailInputFieldProps) {
    return <div className="SignupFormItem mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">아이디 입력</label>
        <input
            type="email"
            name="email"
            id="email"
            value={props.userEmail}
            onChange={(e) => props.setUserEmail(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
        />
    </div>;
}