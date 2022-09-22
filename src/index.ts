import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * HTTP GET Request
 * @param baseUrl
 * @param path
 * @param query Optional
 * @param config Optional
 * @returns AxiosResponse
 */
export function getRequest<T = any>(baseUrl: string, path: string, query?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  return axios.get<T>(`${baseUrl}${path}${query ? `?${String(new URLSearchParams(query))}` : ''}`, config);
}

/**
 * HTTP POST Request
 * @param baseUrl
 * @param path
 * @param body Optional
 * @param config Optional
 * @returns AxiosResponse
 */
export function postRequest<T>(baseUrl: string, path: string, body?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  return axios.post<T>(`${baseUrl}${path}`, body, config);
}

/**
 * HTTP PUT Request
 * @param baseUrl
 * @param path
 * @param body Optional
 * @param config Optional
 * @returns AxiosResponse
 */
export function putRequest<T>(baseUrl: string, path: string, body?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  return axios.put<T>(`${baseUrl}${path}`, body, config);
}

/**
 * HTTP DELETE Request
 * @param baseUrl
 * @param path
 * @param query Optional
 * @param config Optional
 * @returns AxiosResponse
 */
export function deleteRequest<T = any>(baseUrl: string, path: string, query?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  return axios.delete<T>(`${baseUrl}${path}${query ? `?${String(new URLSearchParams(query))}` : ''}`, config);
}