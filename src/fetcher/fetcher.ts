import { AxiosResponse } from "axios";
import ApiUrl from "src/services/api";

export const fetcher = async <T>(url: string): Promise<AxiosResponse<T>> => {
  const response = await ApiUrl.get<T>(url);
  return response;
};
