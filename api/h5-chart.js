import axios from '../libs/api.request';

export const getDataByTabName = (params, cb, err) => {
  axios.request({
    url: `h5/tab`,
    method: 'get',
    params
  }).then(cb)
    .catch(err)
};

// 大屏接口
export const getDataByTabName2 = (params, cb, err) => {
  axios.request({
    url: `situation-aware/map/` + params.id +'/charts',
    method: 'get',
    params
  }).then(cb)
    .catch(err)
};

export const getDataPoor = (data, cb, err) => {
  axios.request({
    url: `h5/poor `,
    method: 'post',
    data
  }).then(cb)
    .catch(err)
};

export const getDataScenic = (params, cb, err) => {
  axios.request({
    url: `/h5/scenic`,
    method: 'get',
    params
  }).then(cb)
    .catch(err)
};