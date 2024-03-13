import React from "react";

/**
 * @since 
 * @author 이호연
 */

export type SelectedOption = {
    index: number
    label: string
    quantity: number
    price: number
}

export type SelectedOptionItemProps = {
    selectedOption: SelectedOption
    whenQuantityChanged: (changedOption: SelectedOption) => void
}

export const SelectedOptionItem = (props: SelectedOptionItemProps) => {
    const onIncrement = () => {
        const changedOption = props.selectedOption
        changedOption.quantity += 1
        props.whenQuantityChanged(changedOption)
    }

    const onDecrement = () => {
        const changedOption = props.selectedOption
        changedOption.quantity -= 1
        props.whenQuantityChanged(changedOption)
    }

    const onRemove = () => {
        const changedOption = props.selectedOption
        changedOption.quantity = 0
        props.whenQuantityChanged(changedOption)
    }

    return (
        <div className="flex flex-col mb-8 mx-8 px-8 py-8 bg-gray-50 rounded-xl ">
            <div className="flex flex-row justify-between pr-8">
                <span className="text-xl overflow-x-hidden">{props.selectedOption.label}</span>
                <button onClick={onRemove}>x</button>
            </div>
            <div className="flex flex-row mt-2 justify-between">
                <span>
                    <button onClick={onDecrement}>-</button>
                    <span className="text-xl mx-4">{props.selectedOption.quantity}</span>
                    <button onClick={onIncrement}>+</button>
                </span>
                <h3 className="pr-8"> {props.selectedOption.price * props.selectedOption.quantity}원</h3>
            </div>

        </div>
    )
}