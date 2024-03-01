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
  restore?: boolean;
  eco?: boolean;
  arSupported?: boolean;
  qrSupported?: boolean;
}

export interface ProductImageDto {
  imageUrl?: string;
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

export interface CouponDto {
  /** @format int32 */
  couponDuration?: number;
  couponDesc?: string;
  /** @format double */
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
  collaboProduct?: ProductCollaboDto[];
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  restore?: boolean;
  eco?: boolean;
  arSupported?: boolean;
  qrSupported?: boolean;
}

export interface ProductCollaboDto {
  /** @format int64 */
  productId?: number;
  /** @format int32 */
  quantity?: number;
}

export interface CartDto {
  productName?: string;
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
   * @minLength 3
   * @maxLength 20
   */
  name: string;
  phone?: string;
  email?: string;
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
  /** @format date-time */
  expireDate?: string;
  couponDesc?: string;
  /** @format double */
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

export interface Pageable {
  /**
   * @format int32
   * @min 0
   */
  page?: number;
  /**
   * @format int32
   * @min 1
   */
  size?: number;
  sort?: string[];
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

export interface PageableObject {
  /** @format int64 */
  offset?: number;
  sort?: SortObject;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  pageNumber?: number;
  paged?: boolean;
  unpaged?: boolean;
}

export interface SortObject {
  empty?: boolean;
  sorted?: boolean;
  unsorted?: boolean;
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
     * @request PUT:/api/{memberId}
     * @secure
     */
    updateMember: (memberId: number, data: MemberDto, params: RequestParams = {}) =>
      this.request<MemberDto, ErrorDto>({
        path: `/api/${memberId}`,
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
     * @name UpdateProductReview
     * @request PUT:/api/product/{productId}/review
     * @secure
     */
    updateProductReview: (productId: number, data: Request, params: RequestParams = {}) =>
      this.request<Response, ErrorDto>({
        path: `/api/product/${productId}/review`,
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
     * @name WriteReviewToProduct
     * @request POST:/api/product/{productId}/review
     * @secure
     */
    writeReviewToProduct: (productId: number, data: Request, params: RequestParams = {}) =>
      this.request<Response, ErrorDto>({
        path: `/api/product/${productId}/review`,
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
    getCollaboProducts: (params: RequestParams = {}) =>
      this.request<CollaboDto[], ErrorDto>({
        path: `/api/collabo`,
        method: "GET",
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
     * @tags member-controller
     * @name TestRedirect
     * @request POST:/api/test-redirect
     * @secure
     */
    testRedirect: (params: RequestParams = {}) =>
      this.request<void, ErrorDto>({
        path: `/api/test-redirect`,
        method: "POST",
        secure: true,
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
     * @tags product-controller
     * @name GetProduct
     * @request GET:/api/product
     * @secure
     */
    getProduct: (
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
     * @tags coupon-controller
     * @name IssueCoupon
     * @request POST:/api/coupons/{couponId}/issue
     * @secure
     */
    issueCoupon: (couponId: number, params: RequestParams = {}) =>
      this.request<MemberCouponDto, ErrorDto>({
        path: `/api/coupons/${couponId}/issue`,
        method: "POST",
        secure: true,
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
     * @name GetUnusedCoupons
     * @request GET:/api/member/coupons
     * @secure
     */
    getUnusedCoupons: (
      query: {
        pageable: Pageable;
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
        pageable: Pageable;
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
     * @tags member-controller
     * @name Hello
     * @request GET:/api/hello
     * @secure
     */
    hello: (params: RequestParams = {}) =>
      this.request<string, ErrorDto>({
        path: `/api/hello`,
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
     * @tags category-controller
     * @name GetProductsWithCategory
     * @request GET:/api/category/{categoryId}
     * @secure
     */
    getProductsWithCategory: (
      categoryId: string,
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
      this.request<ProductDto[], ErrorDto>({
        path: `/api/category/${categoryId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
