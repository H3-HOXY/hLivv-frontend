import "../../../Components_scss/MyRestore.scss"
import {useImage} from "../../common/hooks/useImage";
import { useEffect, useRef, useState } from "react"
import { useActionData} from "react-router-dom";
import {FormMessage} from "../../../common/FormMessage";
import {getApi} from "../../../api/ApiWrapper";
import {PageOrderResDto, ProductDto} from "../../../api/Api";
import { MyRestoreItem } from "./components/MyRestoreItem";

const MyRestore = () => {
  const image = useImage()
  const [orderHistoryItem, setOrderHistoryItem] = useState<ProductDto[]>([])
  const error = useActionData() as FormMessage
  const formRef = useRef<HTMLFormElement | null>(null);

  // 리스토어 항목 불러오기
  useEffect(() => {
    async function fetchOrderHistory() {
        try {
            const products: ProductDto[] = []
            const api = await getApi()
            const myOrders = (await api.getOrders({page: 0, pageSize: 5}, {})).data as PageOrderResDto
            if (myOrders.content !== undefined) {
                for (let p of myOrders.content) {
                    if (p.products === undefined) continue
                    for (let product of p.products) {
                        try {
                            // @ts-ignore
                            const res = (await api.getProduct1(product.productId)).data as ProductDto
                            products.push(res)

                        } catch (e) {

                        }
                    }
                }
                setOrderHistoryItem(products)
            }
        } catch (e) {
        }
    }

    fetchOrderHistory().then()
  }, []);

  return (
    <div className="MyRestore">
      <div className="MyRestoreWrapper mb-3">
        <div className="MyRestoreWrapperTitle">리스토어 신청</div>
        <div className="MyRestoreSearchWrapper">
          <div className="MyRestoreSearch relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="MyRestoreSearchInput ㅌrelative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
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
            {/* 리스토어 아이템 */}
            {
                orderHistoryItem.map((item, index) => {
                    return (
                        <MyRestoreItem productDto={item}/>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default MyRestore;