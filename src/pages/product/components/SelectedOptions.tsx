import {SelectedOption} from "./SelectedOption";
import {SelectedOptionItem} from "./SelectedOptionItem";
import React from "react";

export type SelectedOptionsProps = {
    selectedOptions: SelectedOption[]
    whenQuantityChanged: (changedOption: SelectedOption) => void
}
export const SelectedOptions = (props: SelectedOptionsProps) => {
    return (
        <div>
            {
                props.selectedOptions.map((option, index) =>
                    <SelectedOptionItem selectedOption={option}
                                        whenQuantityChanged={props.whenQuantityChanged}/>)
            }
        </div>
    )
}