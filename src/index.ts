import axios from 'axios';

/**
 * HTTP GET Request
 * @param path
 * @returns Resolved Data
 */
export async function getRequest<T = any>(baseUrl: string, path: string, query?: any): Promise<T> {
  return (await axios.get<T>(`${baseUrl}${path}${query ? `?${String(new URLSearchParams(query))}` : ''}`))
    .data;
}

/**
 * HTTP POST Request
 * @param path
 * @returns Resolved Data
 */
export async function postRequest<T>(baseUrl: string, path: string, body?: any): Promise<T> {
  return (await axios.post<T>(`${baseUrl}${path}`, body)).data;
}

/**
 * HTTP PUT Request
 * @param path
 * @returns Resolved Data
 */
export async function putRequest<T>(baseUrl: string, path: string, body?: any): Promise<T> {
  return (await axios.put<T>(`${baseUrl}${path}`, body)).data;
}

/**
 * HTTP DELETE Request
 * @param path
 * @returns Resolved Data
 */
export async function deleteRequest<T = any>(baseUrl: string, path: string, query?: any): Promise<T> {
  return (await axios.delete<T>(`${baseUrl}${path}${query ? `?${String(new URLSearchParams(query))}` : ''}`))
    .data;
}