import React from "react";
import { Route, Routes, useLocation } from "react-router-dom"; 
import Sidebar from "./Sidebar";
import Header from "./Header";
import Widget from "./Widget";
import CoursesList from "./Courses_List"; 
import AddStudent from "./Add_Student"; 
import StudentsList from "./Students_List"; 
import Logo from "./Logo"; 
import "./App.css";

function App() {
  const location = useLocation();  

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
     
        {location.pathname !== "/Courses_List" && location.pathname !== "/Add_Student" && location.pathname !== "/Students_List" && <Header />}
      
        {location.pathname !== "/Courses_List" && location.pathname !== "/Add_Student" && location.pathname !== "/Students_List" && (
          <div className="widgets">
            <Widget title="Courses" value="10 Courses Available" />
            <Widget title="Students" value="150 Enrolled" />
            <Widget title="Placements" value="95% Placement Rate" />
            <Widget title="Income" value="₹3,00,000" />
          </div>
        )}
                {location.pathname !== "/Add_Student" && location.pathname !== "/Students_List" && <Logo />}

     
        <Routes>
          <Route path="/Courses_List" element={<CoursesList />} />
     
        </Routes>
        <Routes>
          <Route path="/Add_Student" element={<AddStudent />} />
 
        </Routes>
        <Routes>
          <Route path="/Students_List" element={<StudentsList />} />
        
        </Routes>
      </div>
    </div>
  );
}

export default App;
