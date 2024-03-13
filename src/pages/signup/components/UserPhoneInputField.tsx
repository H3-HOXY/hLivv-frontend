/**
 * @since 
 * @author 이호연, 최정윤
 */

export type UserPhoneInputFieldProps = {
    userPhone: string | undefined,
    setUserPhone: (value: (((prevState: (string | undefined)) => (string | undefined)) | string | undefined)) => void
}

export function UserPhoneInputField(props: UserPhoneInputFieldProps) {
    return <div className="SignupFormItem mb-5">
        <label htmlFor="phone"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
        <input
            type="text"
            id="phone"
            name="phone"
            value={props.userPhone}
            onChange={(e) => props.setUserPhone(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
        />
    </div>;
}