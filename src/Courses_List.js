import React, { useState, useEffect } from "react";
import axios from './Services/http';  // Ensure this path is correct
import "./Courses_List.css";

const CoursesList = () => {
  const [courses, setCourses] = useState([]); // Initialize state to store courses data
  const [loading, setLoading] = useState(true); // To show loading while data is being fetched

 

  useEffect(() => {
    axios.get('/courses')
    .then((response) => {
      setCourses(response.data); // Update the state with fetched data
      setLoading(false); // Set loading to false once data is fetched
    })
    .catch((error) => {
      console.error("There was an error fetching the data!", error);
      setLoading(false); // Set loading to false even if there is an error
    });
  
  }, []);

  return (
    <div>
      <h1>Courses List</h1>
      <table>
        <thead>
          <tr>
            <th>Courses</th>
            <th>Fees Structure</th>
            <th>Placements</th>
            <th>Types</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          ) : (
            courses.length > 0 ? (
              courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.Courses}</td>
                  <td>{course.Fees_Structure}</td>
                  <td>{course.Placements}</td>
                  <td>{course.Types}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No courses available</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesList;
