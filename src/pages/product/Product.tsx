import "./styles/Product.scss"
import React, {useState} from "react";
import {IFrameSize, ProductDetail} from "./components/ProductDetail";
import {useLoaderData} from "react-router-dom";
import {ProductDto, ProductImageDto} from "../../api/Api";
import {ProductImageContainer} from "./components/ProductImageContainer";
import {SelectableOption} from "./components/SelectableOption";
import {SelectedOption} from "./components/SelectedOption";
import {SelectedOptions} from "./components/SelectedOptions";
import {useDescriptionPage} from "../common/hooks/useDescriptionPage";

export const Product = () => {
    const productData = useLoaderData() as ProductDto
    const [iframeSize, setIframeSize] = useState<IFrameSize>({width: 500, height: 1000})
    const [selectedOption, setSelectedOption] = useState<SelectedOption[]>([])
    const descriptionPage = useDescriptionPage()

    return (
        <div className="Product">
            <div className="ProductInfo container mx-auto mt-8 p-4 flex flex-col md:flex-row">
                <ProductImageContainer
                    productImages={productData.productImages ?? [] as ProductImageDto[]}
                    altText={productData.name ?? ""}/>

                <div className="md:flex-1 md:ml-8 mt-4 md:mt-0">
                    {/* 상품이름 */}
                    <h1 className="text-2xl font-bold mb-3">{productData.name}</h1>

                    {/* 상품가격 */}
                    <h2 className="text-xl mb-2">{productData.price}원</h2>

                    {/* QR코드  */}

                    {/* 배송정보 */}

                    {/* 주문옵션 */}
                    <SelectableOption selectedOption={selectedOption}
                                      setSelectedOption={setSelectedOption}/>

                    {/* 선택된 옵션 */}
                    <SelectedOptions selectedOptions={selectedOption}
                                     whenQuantityChanged={
                                         whenOptionQuantityChanged(selectedOption, setSelectedOption)
                                     }/>

                    {/* 주문금액 */}
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <h3>주문금액</h3>
                        <h4>{getTotalPrice(selectedOption)}</h4>
                    </div>

                    {/* 버튼 그룹  */}
                </div>
            </div>
            {/* 제품 설명 */}
            <ProductDetail productLink={descriptionPage("P100001204.html")}
                           iframeSize={iframeSize}
                           setIFrameHeight={setIframeSize}/>
            <div>
                {/* 리뷰 */}
                <div style={{alignItems: "center", background: "cyan", height: "100px"}}>
                    <h1>리뷰 섹션</h1>
                </div>

            </div>
        </div>
    )
}

export const whenOptionQuantityChanged = (selectedOptions: SelectedOption[], setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOption[]>>) => {
    return (changedOption: SelectedOption) => {
        const removed = selectedOptions.filter((value) => value.label !== changedOption.label)
        if (changedOption.quantity > 0) {
            // 수량이 남아있으면 변경
            setSelectedOptions([...removed, changedOption])
        } else {
            // 수량이 0개 이하면 제거
            setSelectedOptions(removed)
        }
    }
}

function getTotalPrice(selectedOptions: SelectedOption[]) {
    return selectedOptions.map((value) => value.price * value.quantity).reduce((prev, curr) => prev + curr, 0)
}


