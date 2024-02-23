import React, {ReactEventHandler, useRef} from "react";

export type IFrameSize = {
    width: number,
    height: number
}

export type ProductDetailProps = {
    productLink: string, // 상품 상세 페이지 링크
    iframeSize: IFrameSize, // iframe의 높이
    setIFrameHeight: React.Dispatch<React.SetStateAction<IFrameSize>> // iframe의 높이를 변경하는 함수
}

export const ProductDetail = (props: ProductDetailProps) => {
    const descriptionRef = useRef<HTMLIFrameElement>(null);

    const whenIFrameLoaded: ReactEventHandler<HTMLIFrameElement> = (e) => {
        if (descriptionRef.current === null) return
        const iframeHeight = descriptionRef.current.contentWindow!!.document.body.scrollHeight;
        const iframeWidth = descriptionRef.current.contentWindow!!.document.body.scrollWidth;
        props.setIFrameHeight({width: iframeWidth, height: iframeHeight})
    };

    return (
        <div className="ProductDetail">
            <iframe ref={descriptionRef} src={props.productLink}
                    height={props.iframeSize.height + 100}
                    width={props.iframeSize.width + 50}
                    onLoad={whenIFrameLoaded}/>
        </div>
    )
}