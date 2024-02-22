import React from "react";

export type RememberMeCheckBoxProps = {
    remember: boolean,
    setRemember: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export function RememberMeCheckBox(props: RememberMeCheckBoxProps) {
    return <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
            <input
                id="remember"
                name="remember"
                type="checkbox"
                value={props.remember.toString()}
                onChange={(e) => {
                    props.setRemember(e.target.checked)
                }}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:black dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">아이디
            저장</label>
    </div>;
}