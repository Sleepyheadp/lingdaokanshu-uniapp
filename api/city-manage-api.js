import axios from "@/libs/api.request";

export const getUrbanManagementInfo = (params) => {
  return axios.request({
    url: '/access/getUrbanManagementInfo',
    method: 'get',
    params
  })
};
