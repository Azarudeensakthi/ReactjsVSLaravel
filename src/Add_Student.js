import React, { useState, useEffect } from "react";
import axios from "axios";  // Ensure this path is correct
import "./Add_Student.css";

const AddStudent = () => {
    const [formData, setFormData] = useState({
        regId: '',
        name: '',
        pno: '',
        email: '',
        education: '',
        address: '',
        aadharno: '',
        joiningDate: '',
        courses: '',
        fees: ''
    });

    // Generate the Registration ID when the component mounts
    useEffect(() => {
        const generateRegId = () => {
            const randomId = 'AZ' + Math.floor(Math.random() * 900 + 100);
            setFormData((prevState) => ({
                ...prevState,
                regId: randomId
            }));
        };
        generateRegId();
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
          const token = localStorage.getItem('token'); 
          
          const response = await axios.post(
              'http://127.0.0.1:8000/api/students',
              formData,
              {
                  headers: {
                      Authorization: `Bearer ${token}`, 
                  },
              }
          );
  
          if (response.status === 200) {
              alert('Student added successfully!');
              setFormData({
                  regId: '',
                  name: '',
                  pno: '',
                  email: '',
                  education: '',
                  address: '',
                  aadharno: '',
                  joiningDate: '',
                  courses: '',
                  fees: ''
              });
          }
      } catch (error) {
          console.error("There was an error submitting the data!", error);
          if (error.response && error.response.status === 401) {
              alert("Unauthorized! Please log in again.");
          } else {
              alert("An error occurred while submitting the form.");
          }
      }
  };
  
    

    return (
        <div className="form-container">
            <h1 className="form-title">Add Student</h1>
            <form onSubmit={handleSubmit} className="form-grid">
                {/* Left Side Fields */}
                <div className="form-left">
                    <div className="form-field">
                        <label>Registration ID</label>
                        <input
                            type="text"
                            name="regId"
                            value={formData.regId}
                            disabled
                            className="form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="pno"
                            value={formData.pno}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label>Education</label>
                        <input
                            type="text"
                            name="education"
                            value={formData.education}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                </div>

                {/* Right Side Fields */}
                <div className="form-right">
                    <div className="form-field">
                        <label>Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label>Aadhar Number</label>
                        <input
                            type="text"
                            name="aadharno"
                            value={formData.aadharno}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label>Joining Date</label>
                        <input
                            type="date"
                            name="joiningDate"
                            value={formData.joiningDate}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label>Courses</label>
                        <input
                            type="text"
                            name="courses"
                            value={formData.courses}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-field">
                        <label>Fees</label>
                        <input
                            type="text"
                            name="fees"
                            value={formData.fees}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="form-submit">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;
