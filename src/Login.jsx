import React, { useState } from 'react'
import './Login.css'
import Footer from './Footer'
import video1 from './assets/Login_bg.mp4'
// Link component import kiya 🔽
import { Link } from 'react-router-dom'

function Login() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Login Successful 🚀");
      console.log(formData);
    };

  return (
    <div>
      <video src={video1} autoPlay muted loop style={{ height:"780px", width:"100%"}} />
      
      <div className="bg-light pt-5" style={{ minHeight: "75vh" }} id='login'>
        <div className="text-center mb-4 pt-5" style={{position:"relative"}}>
          <i className="fa-solid fa-circle-user fs-1 text-primary"></i> 
          <h1 className="fw-bold text-white shadow-white">Welcome Back</h1>
          <p className="text-white">Sign in to your TravelPro account</p>
        </div>

        <div className='d-flex justify-content-center'>
          <div className="card shadow p-4 border-1" id='login-form' style={{ width: "450px", position: "relative" }}>
             
            <form onSubmit={handleSubmit}>
              <div className='mb-4' style={{ position: 'relative' }}>
                <label className="form-label fw-semibold text-white">
                  Email Address: 
                </label>
                <div>
                  <i className="fa-solid fa-envelope text-dark" id='input-box' ></i>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='form-control d-flex justify-content-flex-start px-5' 
                    placeholder='Enter your email' 
                    required
                  />
                </div>
              </div>

              <div className='mb-4' style={{ position: 'relative' }}>
                <label className="form-label fw-semibold text-white">
                  Password: 
                </label>
                <div>
                  <i className="fa-solid fa-lock text-dark    " id='input-box' ></i>
                  <input 
                    type={showPassword1 ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    className="form-control d-flex justify-content-flex-start px-5"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    required
                  />
                  <i
                    className={`fa-solid ${showPassword1 ? "fa-eye" : "fa-eye-slash"}`}
                    onClick={() => setShowPassword1(!showPassword1)}
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      right: "15px", 
                      cursor: "pointer",
                      zIndex: 10
                    }}
                  ></i>              
                </div>
              </div>

              <div className='d-flex justify-content-between text-white'>
                <div>
                  <input type="checkbox" className="me-1" />Remember me
                </div>
                <div>
                  <a href="#" className="text-decoration-none small fw-medium text-primary">Forgot password?</a>
                </div>
              </div>
              <br />
              
              <button type="submit" className="btn btn-info w-100 text-white fw-semibold py-2 mb-4">Sign In</button>
              
              <div className="d-flex align-items-center text-center my-4 text-muted small">
                <div className="border-bottom w-100"></div>
                <span className="px-3 text-nowrap text-white">Or continue with</span>
                <div className="border-bottom w-100"></div>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-6">
                  <button type="button" className="btn btn-outline-light text-whit border w-100 py-2 d-flex align-items-center justify-content-center gap-2 small fw-medium" >
                    <i className="fa-brands fa-facebook-f text-primary"></i>
                    Facebook
                  </button>
                </div>
                <div className="col-6">
                  <button type="button" className="btn btn-outline-light text-whit border w-100 py-2 d-flex align-items-center justify-content-center gap-2 small fw-medium" id='btn1'>
                    <i className="fa-brands fa-google text-primary"></i> 
                    Google
                  </button>
                </div>
              </div>

              <div className='d-flex justify-content-center text-white'>
                {/* ⚠️ FIX: Traditional anchor tag replace kiya <Link> se */}
                <h6>Don't have an account? <Link to="/Sign_up" className='text-decoration-none text-primary fw-semibold'>Sign up here</Link></h6>
              </div>
            </form>
          </div>
        </div>
        <br />
        
        <div className='text-center text-white' style={{position:"relative", marginTop:"-25px"}}>
          <h6>By signing in, you agree to our <span className='text-primary'>Terms of Service</span> and <span className='text-primary'>Privacy Policy</span></h6>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login;