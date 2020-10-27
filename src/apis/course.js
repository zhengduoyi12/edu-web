import request from 'utils/axios';

// 课程分类option
export function getCourseTag(params) {
  return request({
    url: '/edu.course/tagInfo',
    method: 'get',
    params,
  });
}
// 新增课程基本信息
export function addBasicInfo(params) {
  return request({
    url: '/edu.course/basicInfo',
    method: 'post',
    params,
  });
}
// 获取文件临时url
export function getUploadUrl(params) {
  return request({
    url: '/edu.course/upload',
    method: 'get',
    params
  });
}
// 文件上传
export function uploadFile(params) {
  return request({
    url: '/edu.course/saveFilePath',
    method: 'put',
    params
  });
}
// 新增个人介绍
export function addPersonIntro(params) {
  return request({
    url: '/edu.course/personalIntroduction',
    method: 'put',
    params,
  });
}
// 新增章节
export function addChapter(params) {
  return request({
    url: '/edu.course/chapterInfo',
    method: 'put',
    params,
  });
}
// 新增课程价格
export function addCoursePrice(params) {
  return request({
    url: '/edu.course/coursePrice',
    method: 'put',
    params,
  });
}
// 新增课程权限
export function addCourseAuth(params) {
  return request({
    url: '/edu.course/courseAuth',
    method: 'post',
    params,
  });
}

