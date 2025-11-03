import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:7073/api/auth/login",
        formData
      );

      const { token, role } = response.data;

     
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      setMessage("Login successful!");

      
      if (role === "ADMIN") {
        navigate("/AdminDashboard");
      }else if(role === "CUSTOMER"){
        navigate("/CustomerDashboard");
      }else if(role === "STAFF"){
        navigate("/StaffDashboard");
      } else {
        setMessage("Unknown role. Cannot navigate.");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.status === 401) {
        setMessage("Invalid email or password.");
      } else {
        setMessage("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="login-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          className="login-input"
        />

        <button type="submit" className="login-button">
          Login
        </button>

        {message && (
          <p
            className={`login-message ${
              message.includes("success") ? "success" : "error"
            }`}
          >
            {message}
          </p>
        )}

        
        <p className="login-register-text">
          Don’t have an account?{" "}
          <Link to="/register" className="login-register-link">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
