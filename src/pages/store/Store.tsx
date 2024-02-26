import {StoreList} from "./components/StoreList";
import {GetMore} from "./components/GetMore";
import {useImage} from "../common/hooks/useImage";
import {StoreBanner} from "./components/StoreBanner";
import {CategoryMenu} from "./components/CategoryMenu";
import {SortingMenu} from "./SortingMenu";
import {RoundedButton} from "./components/RoundedButton";

export const Store = () => {
    const image = useImage()

    const storeItemList = Array(10).fill(
        {
            image: "https://static.hyundailivart.co.kr/upload_mall/goods/P200100765/GM42042260_img.jpg/dims/resize/x610/optimize",
            title: "오브니 패브릭 4인 소파 와이드", price: "21000"
        }
    )
    const categoryList = ["전체", "가구", "거실", "서재", "주방", "자녀방", "침실"]
    return (
        <>
            <div className="container mx-auto p-12">
                <h1 className="font-light text-5xl">STORE</h1>
                <StoreBanner image={image("ARKA.png")} alt={"ARKA"}/>

                {/*{카테고리 메뉴}*/}
                <CategoryMenu categoryList={categoryList}/>

                <div className="flex py-4">
                    <RoundedButton title={"전체"}/>
                    <RoundedButton title={"컬러"} arrow={true}/>
                    <RoundedButton title={"가격"} arrow={true}/>
                    <RoundedButton title={"브랜드"} arrow={true}/>
                </div>

                <SortingMenu/>

                {/*{상품목록}*/}
                <StoreList itemProps={storeItemList}/>
                {/*{ 페이지네이션 버튼}*/}
                <GetMore/>
            </div>
        </>
    )
}

