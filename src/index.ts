import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * HTTP GET Request
 * @param url
 * @param query Optional
 * @param config Optional
 * @returns AxiosResponse
 */
export function getRequest<T = any>(
  url: string,
  query?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return axios.get<T>(`${url}${query ? `?${String(new URLSearchParams(query))}` : ''}`, config);
}

/**
 * HTTP POST Request
 * @param url
 * @param body Optional
 * @param config Optional
 * @returns AxiosResponse
 */
export function postRequest<T>(
  url: string,
  body?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return axios.post<T>(`${url}`, body, config);
}

/**
 * HTTP PATCH Request
 * @param url
 * @param body Optional
 * @param config Optional
 * @returns AxiosResponse
 */
export function patchRequest<T>(
  url: string,
  body?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return axios.patch<T>(`${url}`, body, config);
}

/**
 * HTTP PUT Request
 * @param url
 * @param body Optional
 * @param config Optional
 * @returns AxiosResponse
 */
export function putRequest<T>(
  url: string,
  body?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return axios.put<T>(`${url}`, body, config);
}

/**
 * HTTP DELETE Request
 * @param url
 * @param query Optional
 * @param config Optional
 * @returns AxiosResponse
 */
export function deleteRequest<T = any>(
  url: string,
  query?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return axios.delete<T>(`${url}${query ? `?${String(new URLSearchParams(query))}` : ''}`, config);
}
