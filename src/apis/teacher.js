export function getTeacherInfo() {
  const teacherInfo = {
    name: '陈凯琳',
    nickName: 'Kaelin',
    id: '12309',
    card: '教师'
  };
   
  return new Promise((resolve, reject) => {
    const res = { teacherInfo };
    resolve(res);
  });
}
