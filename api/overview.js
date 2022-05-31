/**
 * 首页
 */
import axios from '@/libs/api.request'

const MODULE_URL = '/dataOverView';

/**
 * 设备
 */
export const getDeviceInfo = () =>
  axios.request({
    url: `${MODULE_URL}/getDeviceInfo`,
    method: 'get'
  });

/**
 * 断面
 */
export const getSectionInfo = () =>
  axios.request({
    url: `${MODULE_URL}/getSectionInfo`,
    method: 'get'
  });

/**
 * 路段
 */
export const getRoadSectionInfo = () =>
  axios.request({
    url: `${MODULE_URL}/getRoadSectionInfo`,
    method: 'get'
  });

/**
 * 路口
 */
export const getCrossingInfo = () =>
  axios.request({
    url: `${MODULE_URL}/getCrossingInfo`,
    method: 'get'
  });

/**
 * 区域
 */
export const getReginInfo = () =>
  axios.request({
    url: `${MODULE_URL}/getReginInfo`,
    method: 'get'
  });
