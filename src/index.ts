import axios, { AxiosResponse } from 'axios';

/**
 * HTTP GET Request
 * @param baseUrl
 * @param path
 * @param query Optional
 * @returns AxiosResponse
 */
export function getRequest<T = any>(baseUrl: string, path: string, query?: any): Promise<AxiosResponse<T>> {
  return axios.get<T>(`${baseUrl}${path}${query ? `?${String(new URLSearchParams(query))}` : ''}`);
}

/**
 * HTTP POST Request
 * @param baseUrl
 * @param path
 * @param body Optional
 * @returns AxiosResponse
 */
export function postRequest<T>(baseUrl: string, path: string, body?: any): Promise<AxiosResponse<T>> {
  return axios.post<T>(`${baseUrl}${path}`, body);
}

/**
 * HTTP PUT Request
 * @param baseUrl
 * @param path
 * @param body Optional
 * @returns AxiosResponse
 */
export function putRequest<T>(baseUrl: string, path: string, body?: any): Promise<AxiosResponse<T>> {
  return axios.put<T>(`${baseUrl}${path}`, body));
}

/**
 * HTTP DELETE Request
 * @param baseUrl
 * @param path
 * @param query Optional
 * @returns AxiosResponse
 */
export function deleteRequest<T = any>(baseUrl: string, path: string, query?: any): Promise<AxiosResponse<T>> {
  return axios.delete<T>(`${baseUrl}${path}${query ? `?${String(new URLSearchParams(query))}` : ''}`);
}