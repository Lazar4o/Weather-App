import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback } from "react";

type CustomHeaders = AxiosRequestConfig["headers"];

interface ApiHooks {
  get: (
    url: string,
    customHeaders?: CustomHeaders
  ) => Promise<AxiosResponse<any>>;
}

const useApi = (): ApiHooks => {
  const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 3000
  });

  const request = useCallback(
    async <T>(fetchFunc: () => Promise<AxiosResponse<T>>) => {
      try {
        const funcResponse = await fetchFunc();
        return funcResponse;
      } catch (error) {
        console.log("error response", error.response);
        // return handleResponseError(error); //TODO: handle
        return Promise.reject(error);
      }
    },
    []
  );

  const get = useCallback(
    (url: string, customHeaders?: CustomHeaders) =>
      request(() => api.get(url, { headers: customHeaders })),
    [request, api]
  );

  return {
    get
  };
};

export { useApi };
