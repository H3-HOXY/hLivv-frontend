import "../styles/Cart.scss"
import {CartItem} from "./CartItem";
import {useEffect, useState} from "react";
import {Api, getApi} from "../../../api/ApiWrapper";
import {CartDto, ProductDto} from "../../../api/Api";
import {useCurrencyFormat} from "../../common/hooks/useCurrencyFormat";
import {useNavigate} from "react-router-dom";

/**
 * @since 
 * @author 최정윤, 이호연
 */

const Cart = () => {
    const [cartItem, setCartItem] = useState<CartDto[]>([])
    const priceTotal = cartItem.map((item) => item.totalPrice).reduce((acc, cur) => acc!! + cur!!, 0)
    const [selectedProducts, setSelectedProducts] = useState<string[]>([])
    const formatter = useCurrencyFormat()

    useEffect(() => {
        fetchCart().then().catch()
    }, []);

    async function fetchCart() {
        try {
            const api = await getApi()
            const cart = await api.getCarts({page: 0, pageSize: 20}, {})
            setCartItem(cart.data.content ?? [])
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    const [products, setProducts] = useState<ProductDto[]>([])

    useEffect(() => {
        getProducts().then().catch()
    }, [cartItem])

    async function getProducts() {
        const products: ProductDto[] = []
        for (let item of cartItem) {
            try {
                const product = await Api.getProduct1(item.productId!!)
                products.push(product.data as ProductDto)
            } catch (e) {
            }
        }
        setProducts(products)
    }

    async function onCartUpdate(productId: number, qty: number) {
        try {
            const api = await getApi()
            await api.updateCart(productId, {qty: qty})
            const cart = await api.getCarts({page: 0, pageSize: 20}, {})
            setCartItem(cart.data.content ?? [])
        } catch (e) {
            console.error(e)
        }
    }

    async function removeSelectedItems() {
        try {
            const api = await getApi()
            for (let i = 0; i < selectedProducts.length; i++) {
                try {
                    await api.updateCart(Number(selectedProducts[i]), {qty: 0})
                } catch (e) {
                    console.error(e)
                }
            }
            const cart = await api.getCarts({page: 0, pageSize: 20}, {})
            setCartItem(cart.data.content ?? [])
        } catch (e) {
            console.error(e)
        }
    }

    function checkAll() {
        setSelectedProducts(cartItem.map((item) => item.productId!!.toString()))
    }

    function whenProductChecked(productId: number, checked: boolean) {
        if (checked) {
            setSelectedProducts([...selectedProducts, productId.toString()])
        } else {
            setSelectedProducts(selectedProducts.filter((id) => id !== productId.toString()))
        }
    }

    const navigate = useNavigate()

    async function onBuyNowClicked() {
        const data = await convertToCheckoutData(cartItem)
        navigate("/order", data)
    }

    const discount = cartItem.map((item) => {
        const discountRate = products.filter((product) => product.id === item.productId).map((product) => product.discountPercent!!)

        return item.totalPrice!! * (discountRate.length === 0 ? 0 : discountRate[0] / 100)
    }).reduce((acc, cur) => acc!! + cur!!, 0)


    return (
        <div className="Cart">
            <div className="CartWrapper">
                {/* 상품 아이템 섹션 */}
                <div className="CartTitle">장바구니</div>
                <div className="CartContainSelection">
                    <div className="CartContainSelectionAllCheck">
                        <div className="CartContainSelectionAllCheckText cursor-pointer"
                             onClick={checkAll}>모두선택
                        </div>
                    </div>
                    <div className="CartContainSelectionDel cursor-pointer"
                         onClick={removeSelectedItems}>
                        선택삭제
                    </div>
                </div>
                {/* 같은 브랜드 상품 담을 컨테이너 */}
                <div className="CartContain">
                    <div className="CartContainHeader">장바구니 상품</div>
                    {/* 같은 브랜드 내에서 세부 상품 (여러개) */}
                    <div className="CartContent">
                        {/* 상품 하나 */}
                        {
                            cartItem
                                .sort((item1, item2) => (item1.productId!! > item2.productId!!) ? 1 : -1)
                                .map((item, idx) => {
                                        return (<CartItem key={idx}
                                                          checked={selectedProducts.filter((id) => id === item.productId!!.toString()).length !== 0}
                                                          onChange={whenProductChecked}
                                                          item={item}
                                                          onCartUpdate={onCartUpdate}/>)
                                    }
                                )
                        }
                    </div>
                    <div className="CartContainBottom">
                        <div className="">배송비 무료</div>
                    </div>
                </div>

                {/* 결제 섹션 */}
                <div className="CartPayTitle">결제금액</div>
                <div className="CartPayContain">
                    <div className="CartPayContainLeft">
                        <div className="CartPayContainLeftPay">
                            <div className="CartPayContainLeftText">총 상품 금액</div>
                            <div className="CartPayContainLeftPayNumber">
                                {formatter(priceTotal ?? 0)}원
                            </div>
                        </div>
                        <div className="CartPayContainLeftPay">
                            <div className="CartPayContainLeftText">총 배송비</div>
                            <div className="CartPayContainLeftPayNumber">0원</div>
                        </div>
                        <div className="CartPayContainLeftPay">
                            <div className="CartPayContainLeftText">총 할인 금액</div>
                            <div className="CartPayContainLeftPayNumber">{formatter(discount)}원</div>
                        </div>
                        <hr className="CartPayContainLine"/>
                        <div className="CartPayContainLeftTotalPay">
                            <div className="CartPayContainLeftText">최종 결제 금액</div>
                            <div
                                className="CartPayContainLeftTotalPayNumber">{formatter((priceTotal ?? 0) - discount)}원
                            </div>
                        </div>
                    </div>
                    <div className="CartPayContainRight">
                        <div>
                            <div className="CartPayContainRightAgree">
                                <div className="">아래 내용에 모두 동의합니다. (필수)</div>
                                <div className="">개인정보 수집 이용 및 제3자 제공 동의 (필수)</div>
                            </div>
                            <div className="CartPayContainRightDescription">본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.</div>
                            <div className="CartPayContainRightDescription">(주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한
                                상품정보
                                및 거래 등에 대해 책임을 지지 않습니다.
                            </div>
                        </div>
                        <div>(단, (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다)</div>
                        <div className="CartPayContainRightBtn"
                             onClick={onBuyNowClicked}>{cartItem.length}개 상품 구매하기
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Cart;

async function convertToCheckoutData(cartItem: CartDto[]) {
    const products = []
    for (const item of cartItem) {
        const dto = (await Api.getProduct1(item.productId!!)).data as ProductDto
        const qty = item.cartQty!!
        products.push({product: dto, qty: qty})
    }
    return ({
        state: {
            products: [...products],
        }
    })
}