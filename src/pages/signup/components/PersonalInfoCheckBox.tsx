/**
 * @since 
 * @author 이호연, 최정윤
 */

export type PersonalInfoCheckBoxProps = {
    setPersonalInfo: (value: (((prevState: boolean) => boolean) | boolean)) => void, personalInfo: boolean
}

export function PersonalInfoCheckBox(props: PersonalInfoCheckBoxProps) {
    return <div className="flex items-start mb-8">
        <div className="flex items-center h-5">
            <input
                id="personalInfo"
                name="personalInfo"
                type="checkbox"
                onChange={() => props.setPersonalInfo(!props.personalInfo)}
                value={props.personalInfo.toString()}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
            />
        </div>
        <label htmlFor="personalInfo" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">[필수]
            개인정보 수집 및 이용동의</label>
    </div>;
}