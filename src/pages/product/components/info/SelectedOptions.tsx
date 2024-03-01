import {SelectedOption, SelectedOptionItem} from "./SelectedOptionItem";
import React from "react";

export type SelectedOptionsProps = {
    selectedOptions: SelectedOption[]
    whenQuantityChanged: (changedOption: SelectedOption) => void
}
export const SelectedOptions = (props: SelectedOptionsProps) => {
    return (
        <div className="mb-8 max-h-48 overflow-y-scroll">
            {
                props.selectedOptions.map((option, index) => {

                        if (option.quantity > 0)
                            return (<SelectedOptionItem key={index} selectedOption={option}
                                                        whenQuantityChanged={props.whenQuantityChanged}/>)
                        else return (<div key={index}></div>)
                    }
                )
            }
        </div>
    )
}