import request from 'utils/axios';

// 课程分类option
export function getCourseTag(params) {
  return request({
    url: '/course/tagInfo',
    method: 'get',
    params,
  });
}
// 新增课程基本信息
export function addBasicInfo(params) {
  return request({
    url: '/course/basicInfo',
    method: 'post',
    params,
  });
}
// 获取文件上传url
export function getUploadUrl(params) {
  return request({
    url: '/course/uploadUrl',
    method: 'get',
    params
  });
}
// 保存上传资源
export function savaFile(params) {
  return request({
    url: '/course/saveFilePath',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    params
  });
}
// 新增个人介绍
export function addPersonIntro(params) {
  return request({
    url: '/course/personalIntroduction',
    method: 'put',
    params,
  });
}
// 新增课程价格
export function addCoursePrice(params) {
  return request({
    url: '/course/coursePrice',
    method: 'put',
    params,
  });
}
// 新增课程权限
export function addCourseAuth(params) {
  return request({
    url: '/course/courseAuth',
    method: 'put',
    params,
  });
}
// 获取章节列表
export function getChapterList(params) {
  return request({
    url: '/course/chapterInfoDetail',
    method: 'get',
    params,
  });
}
// 新增章节
export function addChapter(params) {
  return request({
    url: '/course/chapterDirectory',
    method: 'post',
    params,
  });
}
// 新增课时
export function addLesson(params) {
  return request({
    url: '/course/lessonInfo',
    method: 'post',
    params,
  });
}
