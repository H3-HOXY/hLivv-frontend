/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ErrorDto {
  /** @format int32 */
  status?: number;
  message?: string;
  fieldErrors?: FieldError[];
}

export interface FieldError {
  codes?: string[];
  arguments?: object[];
  defaultMessage?: string;
  objectName?: string;
  field?: string;
  rejectedValue?: object;
  bindingFailure?: boolean;
  code?: string;
}

export interface MemberDto {
  /**
   * @minLength 3
   * @maxLength 50
   */
  loginId: string;
  /**
   * @minLength 3
   * @maxLength 100
   */
  loginPw: string;
  /**
   * @minLength 3
   * @maxLength 50
   */
  name: string;
  phone?: string;
  email?: string;
  /** @format date-time */
  signupDate?: string;
  interiorType?: string;
  /** @format int64 */
  points?: number;
  grade?: "FLOWER" | "TREE" | "FOREST";
}

export interface RestoreDto {
  /** @format int64 */
  restoreId?: number;
  /** @format int64 */
  memberId?: number;
  /** @format int64 */
  productId?: number;
  /** @format date-time */
  regDate?: string;
  /** @format date-time */
  pickUpDate?: string;
  requestGrade?: "S" | "A" | "B" | "C";
  inspectedGrade?: "S" | "A" | "B" | "C";
  restoreDesc?: string;
  requestMsg?: string;
  rejectMsg?: string;
  /** @format int64 */
  payback?: number;
  whenRejected: boolean;
  restoreStatus?:
    | "접수완료"
    | "배송받는중"
    | "검수중"
    | "검수완료"
    | "반송중"
    | "리스토어완료"
    | "접수취소"
    | "폐기완료"
    | "폐기대기"
    | "반송완료";
  restoreImageUrls?: string[];
}

export interface CategoryDto {
  id?: string;
  name?: string;
}

export interface ProductDto {
  /** @format int64 */
  id?: number;
  name?: string;
  productDesc?: string;
  productType?: "PRODUCT" | "COLLABO";
  /** @format int32 */
  price?: number;
  /** @format int32 */
  stockQuantity?: number;
  /** @format int32 */
  discountPercent?: number;
  productBrand?: string;
  category?: CategoryDto;
  productImages?: ProductImageDto[];
  productOptions?: ProductOptionDto[];
  restore?: boolean;
  arSupported?: boolean;
  qrSupported?: boolean;
  eco?: boolean;
}

export interface ProductImageDto {
  imageUrl?: string;
}

export interface ProductOptionDto {
  optionName?: string;
  /** @format int64 */
  originalPrice?: number;
  /** @format int64 */
  discountPrice?: number;
}

export interface AddressDto {
  streetAddress?: string;
  detailedAddress?: string;
  zipCode?: string;
  telephoneNumber?: string;
  mobilePhoneNumber?: string;
  requestMsg?: string;
  defaultYn?: boolean;
}

export interface OrderProductResDto {
  productName?: string;
  /** @format int32 */
  productQty?: number;
  /** @format int64 */
  productPrice?: number;
}

export interface OrderRequesterDto {
  name?: string;
  phone?: string;
  email?: string;
  /** @format int64 */
  expectedPoints?: number;
  grade?: "FLOWER" | "TREE" | "FOREST";
}

export interface OrderResDto {
  /** @format int64 */
  orderId?: number;
  orderRequesterDto?: OrderRequesterDto;
  addressDto?: AddressDto;
  /** @format date-time */
  orderDate?: string;
  requestMsg?: string;
  /** @format int64 */
  subTotal?: number;
  /** @format int64 */
  orderTotal?: number;
  /** @format int64 */
  orderCash?: number;
  /** @format int64 */
  orderPoint?: number;
  couponName?: string;
  /** @format date */
  requestDate?: string;
  products?: OrderProductResDto[];
}

export interface CouponDto {
  /** @format int32 */
  couponDuration?: number;
  couponDesc?: string;
  /** @format int32 */
  discountRate?: number;
}

export interface CollaboDto {
  /** @format int64 */
  id?: number;
  name?: string;
  productDesc?: string;
  productType?: "PRODUCT" | "COLLABO";
  /** @format int32 */
  price?: number;
  /** @format int32 */
  stockQuantity?: number;
  /** @format int32 */
  discountPercent?: number;
  productBrand?: string;
  category?: CategoryDto;
  productImages?: ProductImageDto[];
  productOptions?: ProductOptionDto[];
  collaboProduct?: ProductCollaboDto[];
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  restore?: boolean;
  arSupported?: boolean;
  qrSupported?: boolean;
  eco?: boolean;
}

export interface ProductCollaboDto {
  /** @format int64 */
  productId?: number;
  /** @format int32 */
  quantity?: number;
}

export interface CartDto {
  /** @format int64 */
  productId?: number;
  productName?: string;
  /** @format int64 */
  unitPrice?: number;
  /** @format int64 */
  totalPrice?: number;
  /** @format int32 */
  cartQty?: number;
  /** @format int32 */
  stockQuantity?: number;
}

export interface IamportResponsePayment {
  /** @format int32 */
  code?: number;
  message?: string;
  response?: Payment;
}

export interface Payment {
  channel?: string;
  escrow?: boolean;
  name?: string;
  amount?: number;
  currency?: string;
  status?: string;
  impUid?: string;
  merchantUid?: string;
  buyerName?: string;
  buyerEmail?: string;
  buyerTel?: string;
  buyerAddr?: string;
  customData?: string;
  buyerPostcode?: string;
  customerUid?: string;
  /** @format int32 */
  cardQuota?: number;
  cardNumber?: string;
  /** @format date-time */
  vbankDate?: string;
  cardName?: string;
  bankName?: string;
  vbankNum?: string;
  cancelHistory?: PaymentCancelDetail[];
  failReason?: string;
  pgProvider?: string;
  embPgProvider?: string;
  /** @format int64 */
  startedAt?: number;
  vbankName?: string;
  /** @format date-time */
  failedAt?: string;
  cardCode?: string;
  receiptUrl?: string;
  vbankCode?: string;
  /** @format int64 */
  vbankIssuedAt?: number;
  cancelReason?: string;
  pgTid?: string;
  /** @format int32 */
  cardType?: number;
  applyNum?: string;
  vbankHolder?: string;
  cancelAmount?: number;
  bankCode?: string;
  /** @format date-time */
  paidAt?: string;
  /** @format date-time */
  cancelledAt?: string;
  payMethod?: string;
  cashReceiptIssued?: boolean;
  customerUidUsage?: string;
}

export interface PaymentCancelDetail {
  amount?: number;
  reason?: string;
  receiptUrl?: string;
  pgTid?: string;
  /** @format int64 */
  cancelledAt?: number;
}

export interface SignupDto {
  /**
   * @minLength 5
   * @maxLength 20
   */
  loginId: string;
  /**
   * @minLength 5
   * @maxLength 100
   */
  loginPw: string;
  /**
   * @minLength 3
   * @maxLength 20
   */
  name: string;
  phone?: string;
  email?: string;
}

export interface SignupDataGenDto {
  /**
   * @minLength 5
   * @maxLength 20
   */
  loginId: string;
  /**
   * @minLength 5
   * @maxLength 100
   */
  loginPw: string;
  /**
   * @minLength 3
   * @maxLength 20
   */
  name: string;
  phone?: string;
  email?: string;
  /** @format date-time */
  signupDate?: string;
}

export interface RestoreRegisterDto {
  /** @format int64 */
  productId: number;
  /** @format date-time */
  pickUpDate?: string;
  requestGrade: "S" | "A" | "B" | "C";
  restoreDesc?: string;
  requestMsg?: string;
  whenRejected: boolean;
  restoreImageUrls?: string[];
}

export interface Request {
  reviewText?: string;
  reviewImages?: ReviewImageDto[];
  /** @format int32 */
  star?: number;
}

export interface ReviewImageDto {
  reviewImageUrl?: string;
}

export interface Response {
  writer?: string;
  reviewText?: string;
  /** @format int32 */
  star?: number;
  /** @format date-time */
  reviewDate?: string;
  /** @format date-time */
  updatedDate?: string;
  reviewImages?: ReviewImageDto[];
}

export interface OrderProductReqDto {
  /** @format int64 */
  productId?: number;
  /** @format int32 */
  productQty?: number;
}

export interface OrderReqDto {
  /** @format int64 */
  addressId?: number;
  requestMsg?: string;
  /** @format int64 */
  orderPoint?: number;
  /** @format date */
  requestDate?: string;
  productList?: OrderProductReqDto[];
  /** @format int64 */
  couponId?: number;
}

export interface LoginDto {
  /**
   * @minLength 3
   * @maxLength 50
   */
  loginId: string;
  /**
   * @minLength 3
   * @maxLength 100
   */
  loginPw: string;
}

export interface TokenDto {
  token?: string;
}

export interface MemberCouponDto {
  /** @format date */
  expireDate?: string;
  couponDesc?: string;
  /** @format int32 */
  discountRate?: number;
  used?: boolean;
}

export interface ReviewDto {
  writer?: string;
  /** @format date-time */
  reviewDate?: string;
  /** @format date-time */
  updatedDate?: string;
  reviewImages?: ReviewImageDto[];
  reviewText?: string;
  /** @format int32 */
  star?: number;
}

export interface PageOrderResDto {
  /** @format int64 */
  totalElements?: number;
  /** @format int32 */
  totalPages?: number;
  /** @format int32 */
  size?: number;
  content?: OrderResDto[];
  /** @format int32 */
  number?: number;
  sort?: SortObject;
  first?: boolean;
  last?: boolean;
  /** @format int32 */
  numberOfElements?: number;
  pageable?: PageableObject;
  empty?: boolean;
}

export interface PageableObject {
  /** @format int64 */
  offset?: number;
  sort?: SortObject;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  paged?: boolean;
  unpaged?: boolean;
}

export interface SortObject {
  empty?: boolean;
  sorted?: boolean;
  unsorted?: boolean;
}

export interface MemberResponseDto {
  loginId?: string;
  name?: string;
  phone?: string;
  email?: string;
  /** @format date-time */
  signupDate?: string;
  interiorType?: string;
  /** @format int64 */
  points?: number;
  grade?: "FLOWER" | "TREE" | "FOREST";
}

export interface PageMemberCouponDto {
  /** @format int64 */
  totalElements?: number;
  /** @format int32 */
  totalPages?: number;
  /** @format int32 */
  size?: number;
  content?: MemberCouponDto[];
  /** @format int32 */
  number?: number;
  sort?: SortObject;
  first?: boolean;
  last?: boolean;
  /** @format int32 */
  numberOfElements?: number;
  pageable?: PageableObject;
  empty?: boolean;
}

export interface PageCartDto {
  /** @format int64 */
  totalElements?: number;
  /** @format int32 */
  totalPages?: number;
  /** @format int32 */
  size?: number;
  content?: CartDto[];
  /** @format int32 */
  number?: number;
  sort?: SortObject;
  first?: boolean;
  last?: boolean;
  /** @format int32 */
  numberOfElements?: number;
  pageable?: PageableObject;
  empty?: boolean;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:8080" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title 현대IT&E 3차 프로젝트 API 명세서
 * @version v1
 * @baseUrl http://localhost:8080
 *
 * 현대IT&E 3차 프로젝트에 사용되는 API 명세서
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags member-controller
     * @name UpdateMember
     * @request PUT:/api/updateMember
     * @secure
     */
    updateMember: (data: MemberDto, params: RequestParams = {}) =>
      this.request<MemberDto, ErrorDto>({
        path: `/api/updateMember`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags restore-controller
     * @name GetOneRestore
     * @request GET:/api/restore/{restoreId}
     * @secure
     */
    getOneRestore: (restoreId: number, params: RequestParams = {}) =>
      this.request<RestoreDto, ErrorDto>({
        path: `/api/restore/${restoreId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags restore-controller
     * @name UpdateRestore
     * @request PUT:/api/restore/{restoreId}
     * @secure
     */
    updateRestore: (restoreId: string, data: RestoreDto, params: RequestParams = {}) =>
      this.request<RestoreDto, ErrorDto>({
        path: `/api/restore/${restoreId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-controller
     * @name GetProduct1
     * @request GET:/api/product/{productId}
     * @secure
     */
    getProduct1: (productId: number, params: RequestParams = {}) =>
      this.request<ProductDto, ErrorDto>({
        path: `/api/product/${productId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-controller
     * @name UpdateProduct
     * @request PUT:/api/product/{productId}
     * @secure
     */
    updateProduct: (productId: number, data: ProductDto, params: RequestParams = {}) =>
      this.request<ProductDto, ErrorDto>({
        path: `/api/product/${productId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-controller
     * @name ValidatePayment
     * @request PUT:/api/order/payment/{orderId}/{impUid}
     * @secure
     */
    validatePayment: (orderId: string, impUid: string, params: RequestParams = {}) =>
      this.request<OrderResDto, ErrorDto>({
        path: `/api/order/payment/${orderId}/${impUid}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-controller
     * @name RequestCancelPaymentByOrder
     * @request PUT:/api/order/payment/cancel/{orderId}
     * @secure
     */
    requestCancelPaymentByOrder: (orderId: string, params: RequestParams = {}) =>
      this.request<OrderResDto, ErrorDto>({
        path: `/api/order/payment/cancel/${orderId}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-controller
     * @name RequestCancelPayment
     * @request PUT:/api/order/payment/cancel/{orderId}/{impUid}
     * @secure
     */
    requestCancelPayment: (orderId: string, impUid: string, params: RequestParams = {}) =>
      this.request<OrderResDto, ErrorDto>({
        path: `/api/order/payment/cancel/${orderId}/${impUid}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags coupon-controller
     * @name GetCouponBy
     * @request GET:/api/coupons/{couponId}
     * @secure
     */
    getCouponBy: (couponId: number, params: RequestParams = {}) =>
      this.request<CouponDto, ErrorDto>({
        path: `/api/coupons/${couponId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags coupon-controller
     * @name UpdateCoupon
     * @request PUT:/api/coupons/{couponId}
     * @secure
     */
    updateCoupon: (couponId: number, data: CouponDto, params: RequestParams = {}) =>
      this.request<CouponDto, ErrorDto>({
        path: `/api/coupons/${couponId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags coupon-controller
     * @name IssueCoupon
     * @request POST:/api/coupons/{couponId}
     * @secure
     */
    issueCoupon: (couponId: number, params: RequestParams = {}) =>
      this.request<MemberCouponDto, ErrorDto>({
        path: `/api/coupons/${couponId}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags coupon-controller
     * @name DeleteCoupon
     * @request DELETE:/api/coupons/{couponId}
     * @secure
     */
    deleteCoupon: (couponId: number, params: RequestParams = {}) =>
      this.request<void, ErrorDto>({
        path: `/api/coupons/${couponId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags collabo-controller
     * @name GetCollaboProducts
     * @request GET:/api/collabo
     * @secure
     */
    getCollaboProducts: (
      query?: {
        /**
         * @format int32
         * @min 0
         * @default 1
         */
        pageNo?: number;
        /**
         * @format int32
         * @min 10
         * @max 20
         * @default 20
         */
        pageSize?: number;
        /** @default "PRICE_DESC" */
        sortCriteria?: "NEWEST" | "POPULAR" | "PRICE_ASC" | "PRICE_DESC" | "REVIEWS";
      },
      params: RequestParams = {},
    ) =>
      this.request<CollaboDto[], ErrorDto>({
        path: `/api/collabo`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags collabo-controller
     * @name UpdateCollaboProduct
     * @request PUT:/api/collabo
     * @secure
     */
    updateCollaboProduct: (data: CollaboDto, params: RequestParams = {}) =>
      this.request<CollaboDto, ErrorDto>({
        path: `/api/collabo`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags collabo-controller
     * @name CreateCollaboProduct
     * @request POST:/api/collabo
     * @secure
     */
    createCollaboProduct: (data: CollaboDto, params: RequestParams = {}) =>
      this.request<CollaboDto, ErrorDto>({
        path: `/api/collabo`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart-controller
     * @name UpdateCart
     * @request PUT:/api/cart/{productId}
     * @secure
     */
    updateCart: (
      productId: number,
      query: {
        /** @format int32 */
        qty: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CartDto, ErrorDto>({
        path: `/api/cart/${productId}`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart-controller
     * @name AddProductToCart
     * @request POST:/api/cart/{productId}
     * @secure
     */
    addProductToCart: (
      productId: number,
      query: {
        /** @format int32 */
        qty: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CartDto, ErrorDto>({
        path: `/api/cart/${productId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart-controller
     * @name DeleteFromCart
     * @request DELETE:/api/cart/{productId}
     * @secure
     */
    deleteFromCart: (productId: number, params: RequestParams = {}) =>
      this.request<void, ErrorDto>({
        path: `/api/cart/${productId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment-controller
     * @name PaymentByImpUid
     * @request POST:/api/verifyIamport/{imp_uid}
     * @secure
     */
    paymentByImpUid: (impUid: string, params: RequestParams = {}) =>
      this.request<IamportResponsePayment, ErrorDto>({
        path: `/api/verifyIamport/${impUid}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags member-controller
     * @name Signup
     * @request POST:/api/signup
     * @secure
     */
    signup: (data: SignupDto, params: RequestParams = {}) =>
      this.request<MemberDto, ErrorDto>({
        path: `/api/signup`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags member-controller
     * @name SignupDataGen
     * @request POST:/api/signup-data-gen
     * @secure
     */
    signupDataGen: (data: SignupDataGenDto[], params: RequestParams = {}) =>
      this.request<string, ErrorDto>({
        path: `/api/signup-data-gen`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags restore-controller
     * @name RestoreRegister
     * @request POST:/api/restore
     * @secure
     */
    restoreRegister: (data: RestoreRegisterDto, params: RequestParams = {}) =>
      this.request<RestoreDto, ErrorDto>({
        path: `/api/restore`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-controller
     * @name GetProduct
     * @request GET:/api/product
     * @secure
     */
    getProduct: (
      query?: {
        /**
         * @format int32
         * @min 0
         * @default 1
         */
        pageNo?: number;
        /**
         * @format int32
         * @min 10
         * @max 20
         * @default 20
         */
        pageSize?: number;
        /** @default "PRICE_DESC" */
        sortCriteria?: "NEWEST" | "POPULAR" | "PRICE_ASC" | "PRICE_DESC" | "REVIEWS";
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductDto[], ErrorDto>({
        path: `/api/product`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-controller
     * @name CreateProduct
     * @request POST:/api/product
     * @secure
     */
    createProduct: (data: ProductDto, params: RequestParams = {}) =>
      this.request<ProductDto, ErrorDto>({
        path: `/api/product`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-controller
     * @name GetReviewsByProductId
     * @request GET:/api/product/{productId}/review
     * @secure
     */
    getReviewsByProductId: (productId: number, params: RequestParams = {}) =>
      this.request<ReviewDto[], ErrorDto>({
        path: `/api/product/${productId}/review`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-controller
     * @name WriteReviewToProduct
     * @request POST:/api/product/{productId}/review
     * @secure
     */
    writeReviewToProduct: (
      productId: number,
      query: {
        writeReviewRequest: Request;
      },
      data: {
        imageFiles: File[];
      },
      params: RequestParams = {},
    ) =>
      this.request<Response, ErrorDto>({
        path: `/api/product/${productId}/review`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-controller
     * @name CreateOrder
     * @request POST:/api/order
     * @secure
     */
    createOrder: (data: OrderReqDto, params: RequestParams = {}) =>
      this.request<OrderResDto, ErrorDto>({
        path: `/api/order`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags member-controller
     * @name GetSelectedItems
     * @request POST:/api/member/cart/order
     * @secure
     */
    getSelectedItems: (data: number[], params: RequestParams = {}) =>
      this.request<CartDto[], ErrorDto>({
        path: `/api/member/cart/order`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth-controller
     * @name Authorize
     * @request POST:/api/login
     * @secure
     */
    authorize: (data: LoginDto, params: RequestParams = {}) =>
      this.request<TokenDto, ErrorDto>({
        path: `/api/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags coupon-controller
     * @name GetAllCoupon
     * @request GET:/api/coupons
     * @secure
     */
    getAllCoupon: (params: RequestParams = {}) =>
      this.request<CouponDto[], ErrorDto>({
        path: `/api/coupons`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags coupon-controller
     * @name SaveCoupon
     * @request POST:/api/coupons
     * @secure
     */
    saveCoupon: (data: CouponDto, params: RequestParams = {}) =>
      this.request<CouponDto, ErrorDto>({
        path: `/api/coupons`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category-controller
     * @name GetCategories
     * @request GET:/api/category
     * @secure
     */
    getCategories: (params: RequestParams = {}) =>
      this.request<CategoryDto[], ErrorDto>({
        path: `/api/category`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category-controller
     * @name AddCategory
     * @request POST:/api/category
     * @secure
     */
    addCategory: (data: CategoryDto, params: RequestParams = {}) =>
      this.request<CategoryDto, ErrorDto>({
        path: `/api/category`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags restore-controller
     * @name GetRestores
     * @request GET:/api/restore/list
     * @secure
     */
    getRestores: (params: RequestParams = {}) =>
      this.request<RestoreDto[], ErrorDto>({
        path: `/api/restore/list`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags message-transfer-controller
     * @name TransferMessage
     * @request GET:/api/messageTransfer
     * @secure
     */
    transferMessage: (
      query: {
        toNumber: string;
        contents: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorDto>({
        path: `/api/messageTransfer`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags member-controller
     * @name GetMyUserInfo
     * @request GET:/api/member
     * @secure
     */
    getMyUserInfo: (params: RequestParams = {}) =>
      this.request<MemberDto, ErrorDto>({
        path: `/api/member`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags member-controller
     * @name GetUserInfo
     * @request GET:/api/member/{loginId}
     * @secure
     */
    getUserInfo: (loginId: string, params: RequestParams = {}) =>
      this.request<MemberDto, ErrorDto>({
        path: `/api/member/${loginId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags member-controller
     * @name GetOrders
     * @request GET:/api/member/order
     * @secure
     */
    getOrders: (
      query: {
        /** @format int32 */
        page: number;
        /** @format int32 */
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageOrderResDto, ErrorDto>({
        path: `/api/member/order`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags member-controller
     * @name GetMyUserInfo1
     * @request GET:/api/member/mypage
     * @secure
     */
    getMyUserInfo1: (params: RequestParams = {}) =>
      this.request<MemberResponseDto, ErrorDto>({
        path: `/api/member/mypage`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags member-controller
     * @name GetUnusedCoupons
     * @request GET:/api/member/coupons
     * @secure
     */
    getUnusedCoupons: (
      query: {
        /** @format int32 */
        page: number;
        /** @format int32 */
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageMemberCouponDto, ErrorDto>({
        path: `/api/member/coupons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags member-controller
     * @name GetCarts
     * @request GET:/api/member/cart
     * @secure
     */
    getCarts: (
      query: {
        /** @format int32 */
        page: number;
        /** @format int32 */
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PageCartDto, ErrorDto>({
        path: `/api/member/cart`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth-controller
     * @name HelloCurr
     * @request GET:/api/curruser
     * @secure
     */
    helloCurr: (params: RequestParams = {}) =>
      this.request<string, ErrorDto>({
        path: `/api/curruser`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags collabo-controller
     * @name GetCollaboProduct
     * @request GET:/api/collabo/{productId}
     * @secure
     */
    getCollaboProduct: (productId: number, params: RequestParams = {}) =>
      this.request<CollaboDto, ErrorDto>({
        path: `/api/collabo/${productId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags collabo-controller
     * @name GetCollaboProductItems
     * @request GET:/api/collabo/{productId}/items
     * @secure
     */
    getCollaboProductItems: (productId: number, params: RequestParams = {}) =>
      this.request<ProductDto[], ErrorDto>({
        path: `/api/collabo/${productId}/items`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category-controller
     * @name GetProductsWithCategory
     * @request GET:/api/category/{categoryId}/products
     * @secure
     */
    getProductsWithCategory: (
      categoryId: string,
      query?: {
        /**
         * @format int32
         * @min 0
         * @default 1
         */
        pageNo?: number;
        /**
         * @format int32
         * @min 10
         * @max 20
         * @default 20
         */
        pageSize?: number;
        /** @default "PRICE_DESC" */
        sortCriteria?: "NEWEST" | "POPULAR" | "PRICE_ASC" | "PRICE_DESC" | "REVIEWS";
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductDto[], ErrorDto>({
        path: `/api/category/${categoryId}/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  backoffice = {
    /**
     * No description
     *
     * @tags backoffice-api-controller
     * @name UpdateRestore1
     * @request POST:/backoffice/api/updateRestore
     * @secure
     */
    updateRestore1: (data: RestoreDto, params: RequestParams = {}) =>
      this.request<RestoreDto, ErrorDto>({
        path: `/backoffice/api/updateRestore`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags backoffice-api-controller
     * @name UpdateProduct1
     * @request POST:/backoffice/api/updateProduct
     * @secure
     */
    updateProduct1: (data: ProductDto, params: RequestParams = {}) =>
      this.request<ProductDto, ErrorDto>({
        path: `/backoffice/api/updateProduct`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags backoffice-api-controller
     * @name UpdateMember1
     * @request POST:/backoffice/api/updateMember
     * @secure
     */
    updateMember1: (data: MemberDto, params: RequestParams = {}) =>
      this.request<MemberDto, ErrorDto>({
        path: `/backoffice/api/updateMember`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags backoffice-api-controller
     * @name GetMemberById
     * @request GET:/backoffice/api/member/{id}
     * @secure
     */
    getMemberById: (id: number, params: RequestParams = {}) =>
      this.request<MemberDto, ErrorDto>({
        path: `/backoffice/api/member/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags backoffice-api-controller
     * @name GetRestoreById
     * @request GET:/backoffice/api/getRestore
     * @secure
     */
    getRestoreById: (
      query: {
        /** @format int64 */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RestoreDto, ErrorDto>({
        path: `/backoffice/api/getRestore`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags backoffice-api-controller
     * @name GetRestoreImages
     * @request GET:/backoffice/api/getRestoreImageUrls
     * @secure
     */
    getRestoreImages: (
      query: {
        /** @format int64 */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<string[], ErrorDto>({
        path: `/backoffice/api/getRestoreImageUrls`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags backoffice-api-controller
     * @name GetProductImages
     * @request GET:/backoffice/api/getProductImageUrls
     * @secure
     */
    getProductImages: (
      query: {
        /** @format int64 */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductImageDto[], ErrorDto>({
        path: `/backoffice/api/getProductImageUrls`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
