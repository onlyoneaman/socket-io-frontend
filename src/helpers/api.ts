import axios from 'axios';
import { config } from '../config/index.ts';
import {
  ApiResponse,
  DeleteApiParams,
  GetApiParams,
  PostApiParams,
  PutApiParams,
} from '../types/apiParams.ts';

export const baseURL =
  process.env.NODE_ENV === 'production'
    ? config.backend.prodBaseURL
    : config.backend.devBaseURL;
const apiPath = config.backend.apiPath;

const errHandler = async (promise: Promise<ApiResponse>) => {
  const { data } = await promise;

  return {data, err: null};
};

const api = {
  delete: ({ url, params = {} }: DeleteApiParams) => {
    return errHandler(
      axios.delete(url, {
        params,
      }),
    );
  },

  get: ({ url, params = {}, headers = {} }: GetApiParams) => {
    return errHandler(
      axios.get(url, {
        headers,
        params,
      }),
    );
  },

  init: async () => {
    axios.defaults.baseURL = baseURL + apiPath;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
  },

  post: ({ url, data = null, headers = {} }: PostApiParams) => {
    return errHandler(
      axios.post(url, data, {
        headers,
      }),
    );
  },

  put: ({ url, data = null }: PutApiParams) => {
    return errHandler(axios.put(url, data));
  },
};

export default api;
