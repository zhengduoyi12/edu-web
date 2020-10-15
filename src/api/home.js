import request from 'utils/axios';

export function getHomeBannerInfo(params) {
    //   return request({
    //     url: 'api/v1/banner',
    //     method: 'get',
    //     params,
    //   });
    return new Promise((resolve, reject) => {
        const res = ['浙江经济职业技术学院', '培训风采', '桐乡首家！试点单位', '浙江经济职业技术学院', '义乌高鸿培训合作对接']
        resolve(res);
    })
}