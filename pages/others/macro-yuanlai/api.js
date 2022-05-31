
import axios from "@/libs/api.request";

//
export const macroEconomy = (params) => {
  return axios.request({
    url: '/access/macroEconomy',
	// url:'/situation-aware/map/'+params.id+'/charts',
    method: 'get',
    params
  })
};

// 大屏接口
// export const macroEconomy = (params, cb, err) => {
//   axios.request({
//     url: `situation-aware/map/` + params.id +'/charts',
//     method: 'get',
//     params
//   }).then(cb)
//     .catch(err)
// };

export const getOceanEconomyMapObject = (params) => {
  return axios.request({
    url: '/access/oceanEconomy/getOceanEconomyMapObject',
    method: 'get',
    params
  })
};
