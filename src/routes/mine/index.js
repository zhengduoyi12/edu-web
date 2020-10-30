// import TeacherHome from "./teacher/index";

// export default TeacherHome;

import React from "react";
import PersonHome from "./person";
import StudentHome from "./student";
import TeacherHome from "./teacher";
import CompanyHome from './company';
import Not from "routes/404";

const Mine = () => {
  const role = 0;
  let typeModule;
  if (role === 0) {
    typeModule = <PersonHome />;
  } else if (role === 1) {
    typeModule = <StudentHome />;
  } else if (role === 2) {
    typeModule = <TeacherHome />;
  } else if (role === 3) {
    typeModule = <CompanyHome />;
  } else {
    typeModule = <Not />;
  }

  return (
    <div>
      {typeModule}
    </div>
  );
};

export default Mine;