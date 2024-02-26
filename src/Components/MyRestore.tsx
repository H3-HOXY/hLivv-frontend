import "../Components_scss/MyRestore.scss"
import { useImage } from "../pages/common/hooks/useImage";
  
const MyRestore = () => {
  const image = useImage()
  return (
    <div className="MyRestore">
      <div className="MyRestoreWrapper mb-3">
        <div className="MyRestoreWrapperTitle">리스토어 신청</div>
        <div className="MyRestoreSearchWrapper">
          <div className="MyRestoreSearch relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="MyRestoreSearchInput relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="검색어를 입력하세요."
              aria-label="Search"
              aria-describedby="button-addon3" />
            <button
              className="MyRestoreSearchBtn relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              type="button"
              id="button-addon3"
              data-te-ripple-init>
              검색
            </button>
          </div>
        </div>
        <div className="MyRestoreContent">
          <div className="MyRestoreContentItem">
            <img className="MyRestoreContentItemImg" src={image("베스트1.jpeg")} title="pic"></img>
            <div className="MyRestoreContentItemText">
              <div className="MyRestoreContentItemBrand">코이</div>
              <div className="MyRestoreContentItemName">코이 6단 이동식 책상세트</div>
              <div className="MyRestoreContentItemInfo">사이즈: 1200 / 색상: 화이트</div>
            </div>
            <button className="MyRestoreContentItemBtn" title="신청하기">신청하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyRestore;