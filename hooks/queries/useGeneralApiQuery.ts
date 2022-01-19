import { AxiosResponse } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { request } from "services";

export const useGeneralApiQuery = <Data = any, Error = any>(
  url: string,
  params: object = {},
  options: UseQueryOptions<AxiosResponse<Data>, Error> = {}
) =>
  // @ts-ignore
  useQuery([url, params], async () => request.get<Data>(url, { params }), {
    ...options,
  });
