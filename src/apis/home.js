import request from 'utils/axios';

export function getHomeBannerInfo(params) {
  //   return request({
  //     url: 'api/v1/banner',
  //     method: 'get',
  //     params,
  //   });
  return new Promise((resolve, reject) => {
    const res = ['浙江经济职业技术学院', '培训风采', '桐乡首家！试点单位', '浙江经济职业技术学院', '义乌高鸿培训合作对接'];
    resolve(res);
  });
}


export function getHomeInfo(params) {
  //   return request({
  //     url: 'api/v1/banner',
  //     method: 'get',
  //     params,
  //   });
  const compTabs = [
    {
      title: '1. 阿里巴巴',
      color: '#3399CC',
    },
    {
      title: '2. 网易',
      color: '#3399CC',
    },
    {
      title: '3. 海康威视',
      color: '#3399CC',
    },
    {
      title: '4. 浙江大华股份',
      color: '#999',
    },
    {
      title: '5. 恒生电子',
      color: '#999',
    },
    {
      title: '6. 浙江宇视科技有限公司',
      color: '#999',
    },
    {
      title: '7. 华三通信（H3C）',
      color: '#999',
    },
  ];
  const jobTabs = [
    {
      title: 'MyAQL基础入门-数据库概述',
      img: require('assets/images/u161_a.png'),
    },
    {
      title: 'MyAQL基础入门-数据库概述',
      img: require('assets/images/u169_a.png')
    },
    {
      title: '培养专业数据人才-大数据分析基础课第一节',
      img: require('assets/images/u177_a.png')
    },
  ];
  return new Promise((resolve, reject) => {
    const res = {jobTabs, compTabs };
    resolve(res);
  });
}