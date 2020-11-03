import request , { JSON_HEADER , axiosPost }from 'utils/axios';


// 新增岗位
export function addPosition(data) {
  return request({
    url: '/job/create',
    data: data,
    method:'post',
  });
}
