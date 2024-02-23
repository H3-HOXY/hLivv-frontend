import React from "react";
import {SelectedOption} from "./SelectedOption";

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
        <div style={{display: "flex", flexDirection: "row"}}>
            <h3>{props.selectedOption.label} {props.selectedOption.quantity}개 {props.selectedOption.price * props.selectedOption.quantity}원</h3>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onRemove}>x</button>
        </div>
    )
}