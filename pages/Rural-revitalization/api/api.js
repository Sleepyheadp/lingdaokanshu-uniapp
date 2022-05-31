import axios from '@/libs/api.request'

export const ruralRevitalization = (params) => {
  return axios.request({
    url: 'access/ruralRevitalization',
    method: 'get',
    params
  })
};
