import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Create_Employee from "pages/Create_Employee/Create_Employee";
import EmployeeCard from "pages/EmployeeCard/EmployeeCard";

// lessons
import Lesson_17 from "lessons/Lesson_17/Lesson_17";

// homeworks
import Homework_17 from "homeworks/Homewrk_17/Homework_17";

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes> 
          <Route path="/" element={<Create_Employee />} />
          <Route path="/EmployeeCard" element= {<EmployeeCard/>} />
      </Routes>
    </Layout>

      {/* Lessons */}
      {/* <Lesson_17 /> */}
    </BrowserRouter>
  );
}

export default App;