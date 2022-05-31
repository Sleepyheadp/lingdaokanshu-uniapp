
import axios from "@/libs/api.request";

//
export const macroEconomy = (params) => {
  return axios.request({
    url: '/access/macroEconomy',
    method: 'get',
    params
  })
};
export const getOceanEconomyMapObject = (params) => {
  return axios.request({
    url: '/access/oceanEconomy/getOceanEconomyMapObject',
    method: 'get',
    params
  })
};
