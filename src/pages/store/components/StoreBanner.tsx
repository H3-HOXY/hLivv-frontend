export type StoreBannerProps = {
    image: string
    alt: string
}

export const StoreBanner = (props: StoreBannerProps) => {
    return (
        <div className="py-5 flex justify-center ">
            <img className="w-full h-auto object-cover w-11/12" src={props.image} alt={props.alt}/>
        </div>
    )
}