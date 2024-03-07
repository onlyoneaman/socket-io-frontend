import {helpers} from "../helpers/index.js";

const fileApis = {
  getAllFiles: async (params: any, headers: any = {}) => {
    return helpers.api.get({
      url: '/files',
      params: params,
      headers: headers
    })
  },
  addFile: async (params: any, headers: any = {}) => {
    return helpers.api.post({
      url: '/files',
      data: params,
      headers: headers
    })
  },
  getSingleFile: async (id: string, headers: any = {}) => {
    return helpers.api.get({
      url: `/files/${id}`,
      headers: headers
    })
  },
}

export default fileApis
