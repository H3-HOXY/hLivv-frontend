import React from "react";

export const PrintFormMessage = (props: { formMessage: string }) => {
    if (props.formMessage === "") return (<></>)
    return (
        <div>{props.formMessage}</div>
    )
}