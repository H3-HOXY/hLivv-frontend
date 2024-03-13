import {useImage} from "../../common/hooks/useImage";

/**
 * @since 
 * @author 이호연
 */

export const RoundedButton = (props: { title: string, arrow?: boolean }) => {
    const image = useImage()
    return (
        <button
            className="bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 mr-3 border border-gray-400 rounded-[2rem]">
            {props.title}
            {props.arrow == null ? <></> :
                <img src={image("arrow-down.svg")} alt="arrow-down" className="inline-block w-3 h-3 ml-2"/>}
        </button>
    )

}