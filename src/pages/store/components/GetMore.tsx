import {useImage} from "../../common/hooks/useImage";

/**
 * @since 
 * @author 이호연
 */

export const GetMore = () => {
    const image = useImage()

    return (
        <div className="flex justify-center py-4">
            <button className="flex justify-center align-middle:W
             border rounded-md px-4 py-2">더보기<img alt="" src={image("plus.svg")}/></button>
        </div>
    )
}