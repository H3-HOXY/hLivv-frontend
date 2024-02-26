import React from "react";
import {SelectedOption} from "./SelectedOption";

export type SelectableOptionProps = {
    selectedOption: SelectedOption[]
    setSelectedOption: React.Dispatch<React.SetStateAction<SelectedOption[]>>
}

export const SelectableOption = (props: SelectableOptionProps) => {
    return (
        <select title="옵션" onChange={whenSelectionChanged(props.selectedOption, props.setSelectedOption)}>
            {
                [0, 1, 2, 3, 4].map((value, index) => {
                    return (
                        <option value={value}
                                key={index}>
                            {index !== 0 ? `옵션 ${value}` : ""}
                        </option>
                    )
                })
            }
        </select>

    )
}

function whenSelectionChanged(selectedOptions: SelectedOption[], setSelectedOption: React.Dispatch<React.SetStateAction<SelectedOption[]>>): React.ChangeEventHandler<HTMLSelectElement> {
    return (
        (event) => {
            const found = selectedOptions.find(item => item.index === Number(event.target.value))
            if (found) {
                found.quantity += 1
            } else {
                selectedOptions.push(
                    {
                        index: Number(event.target.value),
                        label: `옵션 ${event.target.value}`,
                        quantity: 1,
                        price: 1000
                    }
                )
            }
            setSelectedOption([...selectedOptions])
            event.currentTarget.selectedIndex = 0
        }
    )
}
