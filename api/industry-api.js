import axios from "@/libs/api.request";

export const getIndustryInfo = (params) => {
  return axios.request({
    url: '/access/getIndustryAndInformationTechnologyInfo',
    method: 'get',
    params
  })
};
export const getFGW = (params) => {
  return axios.request({
    url: 'access/getFGW',
    method: 'get',
    params
  })
};
