import React from "react";

export type EmailInputFieldProps = {
    userEmail: string,
    setUserEmail: (value: (((prevState: string) => string) | string)) => void
}

export function EmailInputField(props: EmailInputFieldProps) {
    return (
        <div className="LoginEmail mb-5">
            <label htmlFor="email"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
            <input
                type="text"
                name="email"
                id="email"
                value={props.userEmail}
                onChange={(e) => props.setUserEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
            />
        </div>
    )
}