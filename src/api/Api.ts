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
  rewarded?: boolean;
  rejectMsg?: string;
  /** @format int64 */
  payback?: number;
  whenRejected?: boolean;
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
  /** @format int64 */
  addressId?: number;
  /** @format int64 */
  memberId?: number;
  streetAddress?: string;
  detailedAddress?: string;
  zipCode?: string;
  telephoneNumber?: string;
  mobilePhoneNumber?: string;
  requestMsg?: string;
  order_id?: string;
  defaultYn?: boolean;
}

export interface OrderProductResDto {
  /** @format int64 */
  productId?: number;
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
   * @minLength 1
   * @maxLength 20
   */
  name: string;
  phone?: string;
  email?: string;
}

export interface SignupDataGenDto {
  loginId: string;
  loginPw: string;
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
  whenRejected: boolean;
  restoreImageUrls?: string[];
}

export interface RestoreEmailDto {
  rejectMsg?: string;
  productName?: string;
  requestGrade?: "S" | "A" | "B" | "C";
  /** @format int64 */
  payback?: number;
  inspectedGrade?: "S" | "A" | "B" | "C";
  subject?: string;
  toEmail?: string;
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
  streetAddress?: string;
  detailedAddress?: string;
  zipCode?: string;
  telephoneNumber?: string;
  mobilePhoneNumber?: string;
  requestMsg?: string;
  order_id?: string;
  /** @format int64 */
  orderPoint?: number;
  /** @format date */
  requestDate?: string;
  productList?: OrderProductReqDto[];
  /** @format int64 */
  couponId?: number;
}

/** 사용자의 인테리어 취향에 해당하는 계절 */
export interface SeasonDto {
  season?: "SPRING" | "SUMMER" | "FALL" | "WINTER";
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

export interface AddressReqDto {
  streetAddress?: string;
  detailedAddress?: string;
  zipCode?: string;
  telephoneNumber?: string;
  mobilePhoneNumber?: string;
  requestMsg?: string;
  defaultYn?: boolean;
}

export interface RestoreStatusDto {
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
  /** @format int64 */
  cnt?: number;
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

export interface MonthlyOrderSummaryDto {
  /** @format int32 */
  year?: number;
  /** @format int32 */
  month?: number;
  /** @format int32 */
  day?: number;
  /** @format int64 */
  orderTotal?: number;
  /** @format int64 */
  cnt?: number;
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
  unpaged?: boolean;
  paged?: boolean;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
}

export interface SortObject {
  empty?: boolean;
  unsorted?: boolean;
  sorted?: boolean;
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

export interface MonthlyMemberRegisterDto {
  /** @format int32 */
  year?: number;
  /** @format int32 */
  month?: number;
  /** @format int64 */
  cnt?: number;
}

export interface MemberGradeDto {
  grade?: "FLOWER" | "TREE" | "FOREST";
  /** @format int64 */
  cnt?: number;
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

import type {AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType} from "axios";
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
     * @tags 회원 API
     * @name UpdateMember
     * @summary 회원 정보 업데이트
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
     * @tags 리스토어 API
     * @name GetOneRestore
     * @summary 리스토어 1개 상세 불러오기
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
     * @tags 리스토어 API
     * @name UpdateRestore
     * @summary 리스토어 업데이트
     * @request PUT:/api/restore/{restoreId}
     * @secure
     */
    updateRestore: (restoreId: number, data: RestoreDto, params: RequestParams = {}) =>
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
     * @tags 상품 API
     * @name GetProduct1
     * @summary 상품 조회
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
     * @tags 상품 API
     * @name UpdateProduct
     * @summary 상품 업데이트
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
     * @tags 주문 API
     * @name ValidatePayment
     * @summary 결제 요청
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
     * @tags 주문 API
     * @name RequestCancelPaymentByOrder
     * @summary 주문의 결제 취소 요청
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
     * @tags 주문 API
     * @name RequestCancelPayment
     * @summary 결제 취소 요청
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
     * @tags 쿠폰 API
     * @name GetCouponBy
     * @summary couponId로 쿠폰 조회
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
     * @tags 쿠폰 API
     * @name UpdateCoupon
     * @summary couponId로 쿠폰 수정
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
     * @tags 쿠폰 API
     * @name IssueCoupon
     * @summary couponId로 쿠폰 발급
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
     * @tags 쿠폰 API
     * @name DeleteCoupon
     * @summary couponId로 쿠폰 삭제
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
     * @tags 콜라보 API
     * @name GetCollaboProducts
     * @request GET:/api/collabo
     * @secure
     */
    getCollaboProducts: (
      query?: {
        /**
         * 몇번째 페이지
         * @format int32
         * @min 0
         * @default 1
         * @example 1
         */
        pageNo?: number;
        /**
         * 한번에 조회할 항목의 개수
         * @format int32
         * @min 10
         * @max 20
         * @default 20
         * @example 20
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
     * @tags 콜라보 API
     * @name UpdateCollaboProduct
     * @summary 콜라보 상품 수정
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
     * @tags 콜라보 API
     * @name CreateCollaboProduct
     * @summary 콜라보 상품 등록
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
     * @tags 장바구니 API
     * @name UpdateCart
     * @summary 장바구니 상품 수량 변경
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
     * @tags 장바구니 API
     * @name AddProductToCart
     * @summary 장바구니에 상품 추가
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
     * @tags 장바구니 API
     * @name DeleteFromCart
     * @summary 장바구니 상품 삭제
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
     * @tags 회원 API
     * @name Signup
     * @summary 회원 가입
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
     * @tags 회원 API
     * @name SignupDataGen
     * @summary 회원 가입 데이터 생성
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
     * @tags 리스토어 API
     * @name RestoreRegister
     * @summary 리스토어 등록
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
     * @tags 리스토어 API
     * @name UpdateRestore2
     * @summary 리스토어 포인트 지급 상태 업데이트
     * @request POST:/api/restore/rewarded/{restoreId}
     * @secure
     */
    updateRestore2: (
        restoreId: number,
        query: {
          rewarded: boolean;
        },
        params: RequestParams = {},
    ) =>
        this.request<RestoreDto, ErrorDto>({
          path: `/api/restore/rewarded/${restoreId}`,
          method: "POST",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),

    /**
     * No description
     *
     * @tags 리스토어 API
     * @name TransferRestoreEmail
     * @summary 리스토어 완료 처리 이메일 전송
     * @request POST:/api/restore/email
     * @secure
     */
    transferRestoreEmail: (data: RestoreEmailDto, params: RequestParams = {}) =>
        this.request<void, ErrorDto>({
          path: `/api/restore/email`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          ...params,
        }),

    /**
     * No description
     *
     * @tags 상품 API
     * @name GetProduct
     * @summary 전체 상품 조회
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
     * @tags 상품 API
     * @name CreateProduct
     * @summary 상품 생성
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
     * @tags 상품 API
     * @name GetReviewsByProductId
     * @summary 상품 리뷰 조회
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
     * @tags 상품 API
     * @name WriteReviewToProduct
     * @summary 상품에 리뷰 작성
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
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 주문 API
     * @name CreateOrder
     * @summary 주문 생성
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
     * @tags 메시지 전송 API
     * @name TransferRestoreMessage
     * @summary 문자 메시지 전송
     * @request POST:/api/messageTransfer
     * @secure
     */
    transferRestoreMessage: (
        query: {
          toNumber: string;
          contents: string;
        },
        params: RequestParams = {},
    ) =>
        this.request<void, ErrorDto>({
          path: `/api/messageTransfer`,
          method: "POST",
          query: query,
          secure: true,
          ...params,
        }),

    /**
     * @description 로그인된 회원의 인테리어 취향을 업데이트합니다.
     *
     * @tags 회원 API
     * @name UpdateSeason
     * @summary 회원의 인테리어 취향 업데이트
     * @request POST:/api/member/season
     * @secure
     */
    updateSeason: (data: SeasonDto, params: RequestParams = {}) =>
        this.request<SeasonDto, ErrorDto>({
          path: `/api/member/season`,
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
     * @tags 회원 API
     * @name GetSelectedItems
     * @summary 선택된 상품 목록 조회
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
     * @tags 인증 API
     * @name Authorize
     * @summary LoginDto로 Login 처리
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
     * @tags 쿠폰 API
     * @name GetAllCoupon
     * @summary 모든 쿠폰 조회
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
     * @tags 쿠폰 API
     * @name SaveCoupon
     * @summary 쿠폰 저장
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
     * @tags 카테고리 API
     * @name GetCategories
     * @summary 모든 카테고리 조회
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
     * @tags 카테고리 API
     * @name AddCategory
     * @summary 카테고리 항목 추가
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
     * @tags 주소록 API
     * @name GetAddress
     * @summary 전체 주소록 조회
     * @request GET:/api/address
     * @secure
     */
    getAddress: (
        query?: {
          /**
           * @format int32
           * @default 0
           */
          page?: number;
          /**
           * @format int32
           * @default 20
           */
          pageSize?: number;
        },
        params: RequestParams = {},
    ) =>
        this.request<AddressDto[], ErrorDto>({
          path: `/api/address`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),

    /**
     * No description
     *
     * @tags 주소록 API
     * @name CreateAddress
     * @summary 주소록 생성
     * @request POST:/api/address
     * @secure
     */
    createAddress: (data: AddressReqDto, params: RequestParams = {}) =>
        this.request<AddressDto, ErrorDto>({
          path: `/api/address`,
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
     * @tags 리스토어 API
     * @name GetRestoreStatusInfo
     * @summary 리스토어 상태 정보 조회
     * @request GET:/api/restore/status
     * @secure
     */
    getRestoreStatusInfo: (params: RequestParams = {}) =>
        this.request<RestoreStatusDto[], ErrorDto>({
          path: `/api/restore/status`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),

    /**
     * No description
     *
     * @tags 리스토어 API
     * @name GetMyRestores
     * @summary 신청한 리스토어 목록 조회
     * @request GET:/api/restore/list/{memberId}
     * @secure
     */
    getMyRestores: (memberId: number, params: RequestParams = {}) =>
      this.request<RestoreDto[], ErrorDto>({
        path: `/api/restore/list/${memberId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 주문 API
     * @name GetTodayOrder
     * @summary 오늘의 주문 통계 조회
     * @request GET:/api/order/total/today
     * @secure
     */
    getTodayOrder: (params: RequestParams = {}) =>
        this.request<MonthlyOrderSummaryDto, ErrorDto>({
          path: `/api/order/total/today`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 주문 API
     * @name GetMonthlyOrder
     * @summary 월별 주문 통계 조회
     * @request GET:/api/order/total/month
     * @secure
     */
    getMonthlyOrder: (params: RequestParams = {}) =>
        this.request<MonthlyOrderSummaryDto[], ErrorDto>({
          path: `/api/order/total/month`,
        method: "GET",
        secure: true,
          format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 회원 API
     * @name GetMyUserInfo
     * @summary 로그인 된 멤버 정보 조회
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
     * @tags 회원 API
     * @name GetUserInfo
     * @summary 특정 회원 정보 조회
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
     * @tags 회원 API
     * @name GetOrders
     * @summary 로그인 된 멤버 주문 목록 조회
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
     * @tags 회원 API
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
     * @tags 회원 API
     * @name GetMemberCntMonthly
     * @summary 월별 회원 가입 수 조회
     * @request GET:/api/member/month/signup
     * @secure
     */
    getMemberCntMonthly: (params: RequestParams = {}) =>
        this.request<MonthlyMemberRegisterDto[], ErrorDto>({
          path: `/api/member/month/signup`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),

    /**
     * No description
     *
     * @tags 회원 API
     * @name GetMemberGradeCnt
     * @summary 멤버 등급별 멤버 수 조회
     * @request GET:/api/member/grade
     * @secure
     */
    getMemberGradeCnt: (params: RequestParams = {}) =>
        this.request<MemberGradeDto[], ErrorDto>({
          path: `/api/member/grade`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),

    /**
     * No description
     *
     * @tags 회원 API
     * @name GetUnusedCoupons
     * @summary 로그인 된 멤버 미사용 쿠폰 조회
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
     * @tags 회원 API
     * @name GetCarts
     * @summary 로그인 된 멤버 장바구니 목록 조회
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
     * @tags 인증 API
     * @name HelloCurr
     * @summary 현재 로그인 된 유저 ID 조회
     * @request GET:/api/login/member
     * @secure
     */
    helloCurr: (params: RequestParams = {}) =>
      this.request<string, ErrorDto>({
        path: `/api/login/member`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 콜라보 API
     * @name GetCollaboProduct
     * @summary productId로 콜라보 상품 조회
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
     * @tags 콜라보 API
     * @name GetCollaboProductItems
     * @summary 모든 콜라보 상품 조회
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
     * @tags 카테고리 API
     * @name GetProductsWithCategory
     * @summary categoryId로 카테고리 조회
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

    /**
     * No description
     *
     * @tags 주소록 API
     * @name GetAddress1
     * @summary 상세 주소록 조회
     * @request GET:/api/address/{addressId}
     * @secure
     */
    getAddress1: (addressId: number, params: RequestParams = {}) =>
        this.request<AddressDto, ErrorDto>({
          path: `/api/address/${addressId}`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),

    /**
     * No description
     *
     * @tags 주소록 API
     * @name GetMyAddress
     * @summary 내 주소록 조회
     * @request GET:/api/address/my
     * @secure
     */
    getMyAddress: (params: RequestParams = {}) =>
        this.request<AddressDto[], ErrorDto>({
          path: `/api/address/my`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  };
  backoffice = {
    /**
     * No description
     *
     * @tags 백오피스 API
     * @name UpdateRestore1
     * @summary 리스토어 정보 수정
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
     * @tags 백오피스 API
     * @name UpdateProduct1
     * @summary 상품 정보 업데이트
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
     * @tags 백오피스 API
     * @name UpdateMember1
     * @summary 회원 정보 업데이트
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
     * @tags 백오피스 API
     * @name RestoreRewarded
     * @summary 검수완료 된 모든 리스토어 완료 처리, 멤버에게 포인트 지급
     * @request POST:/backoffice/api/restore/rewarded
     * @secure
     */
    restoreRewarded: (params: RequestParams = {}) =>
        this.request<string, ErrorDto>({
          path: `/backoffice/api/restore/rewarded`,
          method: "POST",
          secure: true,
          format: "json",
          ...params,
        }),

    /**
     * No description
     *
     * @tags 백오피스 API
     * @name RestoreRewarded1
     * @summary restoreId로 리스토어 완료 처리, 멤버에게 포인트 지급
     * @request POST:/backoffice/api/restore/rewarded/{restoreId}
     * @secure
     */
    restoreRewarded1: (restoreId: number, params: RequestParams = {}) =>
        this.request<string, ErrorDto>({
          path: `/backoffice/api/restore/rewarded/${restoreId}`,
          method: "POST",
          secure: true,
          format: "json",
          ...params,
        }),

    /**
     * No description
     *
     * @tags 백오피스 API
     * @name GetMemberById
     * @summary memberId로 멤버 조회
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
     * @tags 백오피스 API
     * @name GetRestoreById
     * @summary restoreId로 리스토어 조회
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
     * @tags 백오피스 API
     * @name GetRestoreImages
     * @summary restoreId로 리스토어 이미지 조회
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
     * @tags 백오피스 API
     * @name GetProductImages
     * @summary 상품 이미지 URL 가져오기
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
