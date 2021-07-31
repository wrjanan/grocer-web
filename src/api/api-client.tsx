// eslint-disable-next-line max-classes-per-file
import axios, { AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { StatusCodes } from "http-status-codes";
import _ from "lodash";
import EnvConfig from "../config";

export type ApiService<P, R> = (payload?: P) => Promise<ApiResponse<R>>;

export const headersForBulkOperation = { "pph-action": "bulk" };

export const validateStatus = (status: number): boolean => {
  return status >= 200 && status < 300;
};

export interface ApiResponse<T> {
  data?: T;
}

export type RequestParam = {
  [key: string]: any;
};

export class HttpClient {
  protected axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: EnvConfig.apiBaseUrl,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      validateStatus,
      timeout: 20000
    });
  }

  public get axios(): AxiosInstance {
    return this.axiosInstance;
  }

  public async get<T>(path: string, params?: RequestParam): Promise<ApiResponse<T>> {
    try {
      const result = await this.axiosInstance.get<T>(path, { params });
      return HttpClient.handleResponse(result);
    } catch (e) {
      throw HttpClient.translateAxiosError(e);
    }
  }

  // eslint-disable-next-line no-shadow
  public async post<T, P>(path: string, payload: P, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const result = await this.axiosInstance.post<P>(path, payload, config);
      return HttpClient.handleResponse(result);
    } catch (e) {
      throw HttpClient.translateAxiosError(e);
    }
  }

  public async delete(path: string): Promise<void> {
    try {
      await this.axiosInstance.delete<void>(path);
    } catch (e) {
      throw HttpClient.translateAxiosError(e);
    }
  }

  // eslint-disable-next-line no-shadow
  public async put<T, P>(path: string, payload: P, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const result = await this.axiosInstance.put<T>(path, payload, config);
      return HttpClient.handleResponse(result);
    } catch (e) {
      throw HttpClient.translateAxiosError(e);
    }
  }

  public async patch<T, P>(path: string, payload: P): Promise<ApiResponse<T>> {
    try {
      const result = await this.axiosInstance.patch<T>(path, payload);
      return HttpClient.handleResponse(result);
    } catch (e) {
      throw HttpClient.translateAxiosError(e);
    }
  }

  private static handleResponse<T>(response: AxiosResponse): ApiResponse<T> {
    return { data: response.data as T };
  }

  private static translateAxiosError(e: AxiosError): Error {
    const { response } = e;
    if (e.code === "ECONNABORTED") {
      return new Error(e.message);
    }
    if (response != null) {
      return new Error(response.data);
    }
    return new Error("Unable to contact the server at this time. Please try again later");
  }
}

export const authorizedHttpClient = new HttpClient();