import axios from "@/libs/api.request";

export const getSciTechInfo = (params) => {
	return axios.request({
		url: '/access/getScienceAndTechnology',
		method: 'get',
		params
	})
};