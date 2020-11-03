import request , { JSON_HEADER , axiosPost }from 'utils/axios';


// 新增岗位
export function addPosition(data) {
  return request({
    url: '/job/create',
    data,
    method:'post',
  });
}

export function queryPosition(data) {
    return request({
      url: '/job/getPage',
      params:data,
      method:'get',
    });
  }
  