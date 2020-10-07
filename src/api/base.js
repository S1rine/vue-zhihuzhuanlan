import qs from 'qs';
import request from '@/utils/request';

const getAction = (url, params) => {
  return request({
    type: 'GET',
    url: url + '?' + qs.stringify(params)
  });
};

const postAction = (url, params) => {
  return request({
    type: 'POST',
    url,
    data: qs.stringify(params)
  });
};

export { getAction, postAction };
