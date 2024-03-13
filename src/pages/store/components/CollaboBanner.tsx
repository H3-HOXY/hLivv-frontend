import Slider from "react-slick";
import { useImage } from "../../common/hooks/useImage";

/**
 * @since 
 * @author 이호연
 */

export type CollaboBannerProps = {
    image: string
    alt: string
}

export const CollaboBanner = (props: CollaboBannerProps) => {
    return (
        <div className="py-5 flex justify-center ">
            <img className="w-full h-auto object-cover w-11/12" src={props.image} alt={props.alt}/>
        </div>
    )
}