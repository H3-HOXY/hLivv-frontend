import "../../Components_scss/Order.scss"
import {initTE, Select} from "tw-elements";
import React, {useEffect, useState} from "react"
import {useActionData, useLocation, useSubmit} from "react-router-dom";
import {RequestPayParams} from "./types/RequestPayParams";
import {AddressDto, OrderReqDto, ProductDto} from "../../api/Api";
import {Iamport} from "./types/Iamport";
import {BuyerInfo, EditBuyerInfo} from "./components/EditBuyerInfo";
import {AddressInfo, EditShippingAddress} from "./components/EditShippingAddress";
import {getApi} from "../../api/ApiWrapper";
import {OrderProductContainerContent} from "./components/OrderProductContainerContent";
import {MyPoint} from "./components/MyPoint";
import {FormMessage} from "../../common/FormMessage";
import {useCurrencyFormat} from "../common/hooks/useCurrencyFormat";

declare global {
    export interface Window {
        IMP?: Iamport
    }
}

initTE({Select});

// const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq"
// const customerKey = "YbX2HuSlsC9uVJW6NMRMj"

const emptyAddressInfo = {
    name: "",
    addressId: 0,
    zipCode: "",
    streetAddress: "",
    detailedAddress: "",
    telephoneNumber: "",
    mobilePhoneNumber: "",
    requestMsg: "",
}

function didAddressChanged(initialAddress: AddressInfo, address: AddressInfo) {
    return initialAddress.zipCode !== address.zipCode || initialAddress.streetAddress !== address.streetAddress || initialAddress.detailedAddress !== address.detailedAddress || initialAddress.telephoneNumber !== address.telephoneNumber || initialAddress.mobilePhoneNumber !== address.mobilePhoneNumber;
}

type OrderProduct = {
    product: ProductDto;
    qty: number;
}

const Order = () => {
    const location = useLocation();
    const response = useActionData() as FormMessage
    const [products, setProducts] = useState<OrderProduct[]>([])
    const [orderPoint, setOrderPoint] = useState<number>(0);

    const [agreeAllChecked, setAgreeAllChecked] = useState(false);
    const [personalInfoChecked, setPersonalInfoChecked] = useState(false);
    const [initialAddress, setInitialAddress] = useState<AddressInfo>({...emptyAddressInfo});
    const [address, setAddress] = useState<AddressInfo>({...emptyAddressInfo});
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("신용카드")

    const [buyerInfo, setBuyerInfo] = useState<BuyerInfo>({
        name: "",
        emailId: "",
        emailProvider: "",
        telephoneNumber: "",
        points: 0
    });

    const [price, setPrice] = useState(50_000)
    const submit = useSubmit()
    const format = useCurrencyFormat()

    useEffect(() => {
        const {products} = location.state || {};
        if (products) {
            setProducts(products);
        }
    }, [location.state]);

    const handleResponse = () => {
        //@ts-ignore
        if (response == null) return
        //@ts-ignore
        if (response.status === 200) {
            alert("결제에 성공했습니다.")
        } else {
            alert("결제에 실패했습니다.")
        }
    }
    useEffect(handleResponse, [response])
    //결제모듈 초기화
    useEffect(() => {
        initIamport()
        getMyInfo(buyerInfo, setBuyerInfo).then((name) => {
            getMyAddress(name, address, setInitialAddress, setAddress).then(() => {
            }).catch(() => {
                setAddress({...address, requestMsg: "부재시 경비실에 맡겨주세요."})
            })
        }).catch(() => {
            setBuyerInfo({...buyerInfo, emailProvider: "naver.com"})
        })

    }, []);

    const handleSubmit = async () => {

        if (selectedPaymentMethod !== "카카오페이") {
            alert("현재 카카오페이만 결제하실 수 있습니다..")
            return
        }
        if (!agreeAllChecked) {
            alert("모든 약관에 동의해주세요.")
            return
        }
        if (!personalInfoChecked) {
            alert("개인정보 수집 이용 및 제 3자 제공에 동의해주세요.")
            return
        }
        let addressId = address.addressId

        if (didAddressChanged(initialAddress, address) || initialAddress.zipCode === "") {
            try {
                const api = await getApi()
                const newAddr = await api.createAddress({
                    zipCode: address.zipCode,
                    streetAddress: address.streetAddress,
                    detailedAddress: address.detailedAddress,
                    telephoneNumber: address.telephoneNumber,
                    mobilePhoneNumber: address.mobilePhoneNumber,
                    requestMsg: address.requestMsg,
                    defaultYn: true
                })
                console.log(newAddr)
                addressId = newAddr.data.addressId!!
            } catch (e) {
            }
        }

        const orderReqDto: OrderReqDto = {
            addressId: addressId,
            orderPoint: orderPoint,
            productList: [...products.map((item) => {
                return ({
                    productId: item.product.id!!,
                    productQty: item.qty
                })
            })]
        };

        // RequestPayParams 객체 생성
        const requestPayParams: RequestPayParams = {
            pg: 'kakaopay',
            pay_method: 'card',
            merchant_uid: String(new Date().getTime()),
            name: products.map((item) => item.product.name!!).join(", "),
            amount: 0,
            buyer_email: `${buyerInfo.emailId}@${buyerInfo.emailProvider}`,
            buyer_name: buyerInfo.name,
            buyer_tel: buyerInfo.telephoneNumber,
            buyer_addr: `${address.streetAddress} ${address.detailedAddress}`,
            buyer_postcode: address.zipCode,
        };
        const formData = new FormData();

        formData.append("orderReqDto", JSON.stringify(orderReqDto));
        formData.append("requestPayParams", JSON.stringify(requestPayParams));


        submit(formData, {
            action: "/order", // 실제 요청을 처리할 서버의 엔드포인트 주소
            method: "post",
        });
    };

    const orderTotal = products.reduce((acc, item) => acc + (item.product.price!! * item.qty * (100 - (item.product.discountPercent ?? 0)) / 100), 0);

    return (
        <div className="Order max-w-7xl mx-auto px-4">
            <div className="OrderTitle">주문/결제</div>
            <div className="OrderContent">

                {/* 배송지 */}
                <EditShippingAddress address={address} setAddress={setAddress}/>

                {/* 주문자 */}
                <EditBuyerInfo buyerInfo={buyerInfo} setBuyerInfo={setBuyerInfo}/>


                {/* 주문상품 */}
                <div className="OrderProduct">
                    <div className="OrderProductTitle">주문상품</div>
                    <hr className="OrderLine"/>
                    <div className="OrderProductContainer">
                        {
                            products?.map(({product, qty}, index: number) => {
                                const image = (product.productImages != null && product.productImages.length > 0) ? product.productImages[0].imageUrl!! : ""
                                return (
                                    <OrderProductContainerContent productName={product.name!!}
                                                                  productImage={image}
                                                                  unitPrice={product.price!!}
                                                                  productQty={qty}/>
                                )
                            })
                        }
                    </div>
                </div>

                {/* 쿠폰 */}
                <div className="OrderCoupon">
                    <div className="OrderCouponTitle">
                        <div className="OrderCouponTitleLeft">쿠폰</div>
                        <div className="OrderCouponTitleRight">사용가능한 쿠폰이 없어요.</div>
                    </div>
                    <hr className="OrderLine"/>
                    <select className="OrderCouponOption" title="coupon">
                        <option></option>
                    </select>
                </div>

                {/* 포인트 */}
                <MyPoint myPoint={buyerInfo.points ?? 0} orderPoint={orderPoint} setOrderPoint={setOrderPoint}/>


                {/* 결제수단 */}
                <div className="OrderMethod">
                    <div className="OrderMethodTitle">결제수단</div>
                    <hr className="OrderLine"/>
                    <div className="OrderMethodContainer flex flex-row flex-wrap">
                        {
                            ["신용카드", "무통장 입금", "휴대폰 결제", "카카오페이", "네이버페이", "토스페이"].map((method, idx) => {
                                return (
                                    <button id={method} name={method}
                                            onClick={() => setSelectedPaymentMethod(method)}
                                            className={"OrderMethodContent px-10 py-3 mx-5 border-2 border-gray-300 rounded-xl overflow-visible whitespace-nowrap" + (method === selectedPaymentMethod ? " bg-gray-300" : "")}>
                                        {method}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>

                {/* 결제금액 */
                }
                <div className="OrderAmount">
                    <div className="OrderAmountTitle">결제금액</div>
                    <hr className="OrderLine"/>
                    <div className="OrderAmountContent">
                        <div className="OrderAmountContentLeft">
                            <div className="OrderAmountContentLeftPay">
                                <div className="OrderAmountContentLeftPayText">총 상품 금액</div>
                                {/* 할인 금액을 적용한 것 */}
                                <div className="OrderAmountContentLeftPayNumber">{format(orderTotal)}원</div>
                            </div>
                            <div className="OrderAmountContentLeftPay">
                                <div className="OrderAmountContentLeftPayText">배송비</div>
                                <div className="OrderAmountContentLeftPayNumber">0원</div>
                            </div>
                            <div className="OrderAmountContentLeftPay">
                                <div className="OrderAmountContentLeftPayText">쿠폰 사용</div>
                                <div className="OrderAmountContentLeftPayNumber">0원</div>
                            </div>
                            <div className="OrderAmountContentLeftPay">
                                <div className="OrderAmountContentLeftPayText">포인트 사용</div>
                                <div className="OrderAmountContentLeftPayNumber">0원</div>
                            </div>
                            <hr className="OrderAmountContentLeftLine"/>
                            <div className="OrderAmountContentLeftPay">
                                <div className="OrderAmountContentLeftFinalPayText">최종 결제 금액</div>
                                <div className="OrderAmountContentLeftFinalPayNumber">{format(orderTotal)}원</div>
                            </div>
                        </div>
                        <div className="OrderAmountContentRight">
                            <div className="OrderAmountContentRightWrapper">
                                <div className="flex items-center mb-4">
                                    <input title="agree"
                                           id="default-checkbox"
                                           type="checkbox"
                                           checked={agreeAllChecked}
                                           onChange={(e) => setAgreeAllChecked(e.target.checked)}
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">아래
                                        내용에
                                        모두 동의합니다. (필수)</label>
                                </div>
                                <div className="flex items-center">
                                    <input title="agree"
                                           id="checked-checkbox"
                                           type="checkbox"
                                           checked={personalInfoChecked}
                                           onChange={(e) => setPersonalInfoChecked(e.target.checked)}
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">개인정보
                                        수집
                                        이용 및 제 3자 제공 동의 (필수)</label>
                                </div>
                                <div className="OrderAmountContentRightContent">
                                    (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한
                                    상품정보 및 거래 등에 대해 책임을 지지 않습니다 (단, (주)버킷플레이스가 판매자로
                                    등록 판매한 상품은 판매자로서 책임을 부담합니다)
                                </div>
                                <button
                                    className="OrderAmountBtn"
                                    onClick={
                                        handleSubmit
                                    }>
                                    결제하기
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

async function getMyAddress(name: string, address: AddressInfo, setInitialAddress: React.Dispatch<React.SetStateAction<AddressInfo>>, setAddress: React.Dispatch<React.SetStateAction<AddressInfo>>) {
    const api = await getApi();
    const myInfo = await api.getMyAddress();
    const addresses = myInfo.data as AddressDto[]
    if (addresses.length === 0) {
        return Promise.reject("주소지가 없습니다.")
    }
    const selectedAddress = addresses.filter((address) => address.defaultYn === true)[0]

    setInitialAddress({
        name: name,
        addressId: selectedAddress.addressId!!,
        zipCode: selectedAddress.zipCode!!!!,
        streetAddress: selectedAddress.streetAddress!!,
        detailedAddress: selectedAddress.detailedAddress!!,
        telephoneNumber: selectedAddress.telephoneNumber!!,
        mobilePhoneNumber: selectedAddress.mobilePhoneNumber!!,
        requestMsg: selectedAddress.requestMsg!!
    });
    setAddress({
        name: name,
        addressId: selectedAddress.addressId!!,
        zipCode: selectedAddress.zipCode!!!!,
        streetAddress: selectedAddress.streetAddress!!,
        detailedAddress: selectedAddress.detailedAddress!!,
        telephoneNumber: selectedAddress.telephoneNumber!!,
        mobilePhoneNumber: selectedAddress.mobilePhoneNumber!!,
        requestMsg: selectedAddress.requestMsg!!
    });
}

async function getMyInfo(buyerInfo: BuyerInfo, setBuyerInfo: React.Dispatch<React.SetStateAction<BuyerInfo>>) {
    try {
        const api = await getApi()
        const me = await api.getMyUserInfo()
        setBuyerInfo({
            name: me.data.name,
            emailId: me.data.email!!.split('@')[0],
            emailProvider: me.data.email!!.split('@')[1],
            telephoneNumber: me.data.phone!!,
            points: me.data.points!!
        })
        return me.data.name ?? ""
    } catch (e) {
        return ""
    }
}

function initIamport() {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    document.head.appendChild(jquery);

    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(iamport);
    return () => {
        document.head.removeChild(iamport);
    }
}

export default Order;