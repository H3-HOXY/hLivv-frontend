/**
 * @since 
 * @author 이호연, 최정윤
 */

export type ConditionOfUserCheckBoxProps = {
    conditionOfUse: boolean,
    setConditionOfUse: (value: (((prevState: boolean) => boolean) | boolean)) => void

}

export function ConditionOfUserCheckBox(props: ConditionOfUserCheckBoxProps) {
    return <div className="flex items-start mt-3 mb-5">
        <div className="flex items-center h-5">
            <input
                id="conditionOfUse"
                name="conditionOfUse"
                type="checkbox"
                value={props.conditionOfUse.toString()}
                onChange={() => props.setConditionOfUse(!props.conditionOfUse)}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
            />
        </div>

        <label htmlFor="conditionOfUse" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">[필수]
            이용약관 동의</label>
    </div>;
}