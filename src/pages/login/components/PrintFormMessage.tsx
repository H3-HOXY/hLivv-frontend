import React from "react";

/**
 * @since 
 * @author 이호연, 최정윤
 */

export const PrintFormMessage = (props: { formMessage: string }) => {
    if (props.formMessage === "") return (<></>)
    return (
        <div>{props.formMessage}</div>
    )
}