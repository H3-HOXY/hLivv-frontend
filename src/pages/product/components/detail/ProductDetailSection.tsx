import React, {ReactEventHandler, useRef} from "react";

export type IFrameSize = {
    width: number,
    height: number
}

export type ProductDetailSectionProps = {
    productLink: string, // 상품 상세 페이지 링크
    iframeSize: IFrameSize, // iframe의 높이
    setIFrameHeight: React.Dispatch<React.SetStateAction<IFrameSize>> // iframe의 높이를 변경하는 함수
}

export const ProductDetailSection = (props: ProductDetailSectionProps) => {
    const descriptionRef = useRef<HTMLIFrameElement>(null);

    const whenIFrameLoaded: ReactEventHandler<HTMLIFrameElement> = (e) => {
        if (descriptionRef.current === null) return
        const document = descriptionRef.current.contentWindow!!.document;

        const contentElements = document.querySelectorAll('body > *'); // body 태그의 모든 직계 자식 요소를 선택합니다.
        let totalHeight = 0;

        // 각 컨텐츠 요소의 높이를 합산합니다.
        contentElements.forEach(element => {
            console.log(element.clientHeight)
            totalHeight += element.clientHeight; // 요소의 높이를 가져와서 합산합니다.
        });
        console.log(totalHeight);

        // const iframeHeight = document.documentElement.scrollHeight;
        const iframeHeight = totalHeight
        const iframeWidth = document.body.scrollWidth;

        // document.body.style.height = iframeHeight + "px";
        props.setIFrameHeight({width: iframeWidth, height: iframeHeight})
    };

    return (
        <iframe ref={descriptionRef} src={props.productLink}
                height={props.iframeSize.height}
                width={props.iframeSize.width + 50}
                onLoad={whenIFrameLoaded}/>
    )
}