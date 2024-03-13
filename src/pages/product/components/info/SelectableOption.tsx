import React from "react";

import {SelectedOption} from "./SelectedOptionItem";

/**
 * @since 
 * @author 이호연
 */

export type SelectableOptionProps = {
    selectedOption: SelectedOption[]
    setSelectedOption: React.Dispatch<React.SetStateAction<SelectedOption[]>>
}

export const SelectableOption = (props: SelectableOptionProps) => {
    return (
        <select className="w-full h-16 my-4  pl-6 rounded-md border-2 border-gray" title={"옵션"}
                onChange={whenSelectionChanged(props.selectedOption, props.setSelectedOption)}>
            <option value={-1} disabled={true} selected={true} hidden={true}>상품을 선택하세요</option>
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
            const found = selectedOptions.find(item => item.index === Number(event.target.value) - 1)
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
