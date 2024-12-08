import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Students_List.css";

const StudentsList = () => {
  const [students, setStudents] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [showPopup, setShowPopup] = useState(true); 
  const [inputRegId, setInputRegId] = useState(""); 
  const [inputName, setInputName] = useState(""); 

  useEffect(() => {
    if (!showPopup) {
      
      axios
        .get("http://127.0.0.1:8000/api/students") 
        .then((response) => {
          setStudents(response.data); 
          setLoading(false); 
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
          setLoading(false); 
        });
    }
  }, [showPopup]);

  // Handle popup submission
  const handlePopupSubmit = () => {
    if (inputRegId.trim() === "admin" && inputName.trim() === "123") {
      setShowPopup(false); 
    } else {
      alert("Invalid credentials. Only admins can access!"); 
    }
  };

  // Handle relieving a student
  const handleRelieve = (regId) => {
    // Call DELETE API
    axios
      .delete(`http://127.0.0.1:8000/api/students/${regId}`) 
      .then((response) => {
        if (response.status === 200) {
       
          setStudents((prevStudents) =>
            prevStudents.filter((student) => student.regId !== regId)
          );
          alert("Student permanently deleted.");
        }
      })
      .catch((error) => {
        console.error("Error deleting student:", error);
        alert("Failed to delete the student.");
      });
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Admin Permission Required</h2>
            <div className="popup-inputs">
              <label>
                Reg. Id:
                <input
                  type="text"
                  value={inputRegId}
                  onChange={(e) => setInputRegId(e.target.value)}
                  placeholder="Enter Reg Id"
                />
              </label>
              <label>
                Name:
                <input
                  type="text"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  placeholder="Enter Name"
                />
              </label>
            </div>
            <button className="popup-button" onClick={handlePopupSubmit}>
              OK
            </button>
          </div>
        </div>
      )}
      {!showPopup && (
        <div className="students-list-container">
          <h1 className="title">Students List</h1>
          <table className="students-table">
            <thead>
              <tr>
                <th>Reg. Id</th>
                <th>Name</th>
                <th>Phone No</th>
                <th>Email</th>
                <th>Education</th>
                <th>Address</th>
                <th>Aadhar No</th>
                <th>Courses</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="9" className="loading">
                    Loading...
                  </td>
                </tr>
              ) : students.length > 0 ? (
                students.map((student) => (
                  <tr key={student.regId}>
                    <td>{student.regId}</td>
                    <td>{student.name}</td>
                    <td>{student.pno}</td>
                    <td>{student.email}</td>
                    <td>{student.education}</td>
                    <td>{student.address}</td>
                    <td>{student.aadharno}</td>
                    <td>{student.courses}</td>
                    <td>
                      <button
                        className="relieve-button"
                        onClick={() => handleRelieve(student.regId)}
                      >
                        Relieve
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="no-data">
                    No Students available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default StudentsList;
