import {useImage} from "../common/hooks/useImage";

/**
 * 상당수의 컴포넌트는 /pages/store의 컴포넌트를 재활용하고 있습니다.
 */
import {StoreBanner} from "../store/components/StoreBanner";
import {CategoryMenu} from "../store/components/CategoryMenu";
import {RoundedButton} from "../store/components/RoundedButton";
import {SortingMenu} from "../store/SortingMenu";
import {StoreList} from "../store/components/StoreList";
import {GetMore} from "../store/components/GetMore";

export const Collabo = () => {
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
                <h1 className="font-light text-5xl">COLLABO</h1>
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