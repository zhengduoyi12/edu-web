import request from 'utils/axios';

// 查 课程分类option
export function getCourseTag(params) {
  return request({
    url: '/course/tagInfo',
    method: 'get',
    params,
  });
}
// 查 所有课程
export function getAllCourse(params) {
  return request({
    url: '/course/allCourseInfo',
    method: 'get',
    params,
  });
}
// 查 课程信息
export function getCourseInfo(params) {
  return request({
    url: '/course/courseInfo',
    method: 'get',
    params,
  });
}
// 增 课程信息
export function addCourseInfo(params) {
  return request({
    url: '/course/courseInfo',
    method: 'post',
    params,
  });
}
// 查 文件上传url
export function getUploadUrl(params) {
  return request({
    url: '/course/uploadUrl',
    method: 'get',
    params
  });
}
// 查 课时信息
export function getLessonInfo(params) {
  return request({
    url: '/course/courseLessonInfo',
    method: 'get',
    params,
  });
}
// 增 课时信息
export function addLesson(params) {
  return request({
    url: '/course/lessonInfo',
    method: 'post',
    params,
  });
}
