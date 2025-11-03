import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; 

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7072/api/auth/register", formData); 
      setMessage("Registration successful!");
      console.log(response.data);
      navigate("/Login"); 
    }catch (error) {
      console.error("Error during registration:", error);
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="ADMIN">ADMIN</option>
          <option value="CUSTOMER">CUSTOMER</option>
          <option value="STAFF">STAFF</option>
        </select>

        <button type="submit">Register</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Register;
