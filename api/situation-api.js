import axios from "@/libs/api.request";

// 态势感知
export const getCitySituationInfo = (params) => {
  return axios.request({
    url: '/access/getCitySituationInfo',
    method: 'get',
    params
  })
};

// 生态文明云图
export const getEcologicalCivilizationInfo = (params) => {
  return axios.request({
    url: '/access/getCitySituationInfo',
    method: 'get',
    params
  })
};

// 民生保障云图
export const getLivelihoodSecurityInfo = (params) => {
  return axios.request({
    url: '/access/getLivelihoodSecurity',
    method: 'get',
    params
  })
};

// 民营经济云图
export const getPrivateEconomyInfo = (params) => {
  return axios.request({
    url: '/access/getPrivateEconomy',
    method: 'get',
    params
  })
};
