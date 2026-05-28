import React, { useState } from "react";
import "./Login.css";
import Footer from "./Footer";
import video1 from "./assets/Login_bg.mp4";
// Link aur useNavigate ko import kiya 🔽
import { Link, useNavigate } from "react-router-dom";

function Sign_up() {
  const navigate = useNavigate(); // Hook initialize kiya
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [x, setx] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const alt = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password must be same");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Contact number must be 10 digits");
      return;
    }

    alert("Signup Successful 🚀");
    console.log(formData);
    
    // Successful signup ke baad bina reload ke /login route par bhej dega 🔽
    navigate("/login"); 
  };

  return (
    <div>
      <video
        src={video1}
        autoPlay
        muted
        loop
        style={{ height: "1110px", width: "100%" }}
      ></video>
      <div className="bg-light pt-5 pb-1" style={{ minHeight: "75vh" }} id="login">
        <div className="text-center mb-4 pt-5" style={{position:"relative"}}>
          <i class="fa-solid fa-user-plus fs-1 text-primary"></i>
          <h1 className="fw-bold text-white shadow-white ">Create Account</h1>
          <p className="text-white">Join TravelPro and start your journey</p>
        </div>
        <div className="d-flex justify-content-center">
          <div
            className="card shadow p-4 border-1"
            id="login-form"
            style={{ width: "460px" }}
          >
            <form onSubmit={alt}>
              <div className="mb-4">
                <div className="d-flex gap-2">
                  <div>
                    <label className="form-label fw-semibold text-white">
                      First Name:
                    </label>
                    <div>
                      <i className="fa-solid fa-user text-dark" id="input-box"></i>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control d-flex justify-content-flex-start px-5"
                        placeholder="First Name"
                        onChange={handleChange}
                        required
                      />
                      <br />
                    </div>
                  </div>
                  <div>
                    <label className="form-label fw-semibold text-white">
                      Last Name:
                    </label>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control d-flex justify-content-flex-start px-3"
                        placeholder="Last Name"
                        onChange={handleChange}
                        required
                      />
                      <br />
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <label className="form-label fw-semibold text-white">
                      Email Address:
                    </label>
                    <div>
                      <i className="fa-solid fa-envelope text-dark " id="input-box"></i>
                    </div>
                    <input
                      type="text"
                      name="email"
                      className="form-control d-flex justify-content-flex-start px-5"
                      placeholder="Enter your Email"
                      onChange={handleChange}
                      required
                    />
                    <br />
                  </div>
                </div>

                <div>
                  <label className="form-label fw-semibold text-white">
                    Phone Number
                  </label>
                  <div>
                    <i className="fa-solid fa-phone text-dark" id="input-box"></i>
                  </div>
                  <input
                    type="number"
                    name="phone"
                    className="form-control d-flex justify-content-flex-start px-5"
                    placeholder="Enter your Phone number"
                    onChange={handleChange}
                    required
                  />
                  <br />
                </div>

                <div>
                  <label className="form-label fw-semibold text-white">
                    Password
                  </label>
                  <div>
                    <i className="fa-solid fa-lock text-dark" id="input-box"></i>
                  </div>
                  <input 
                    type={showPassword1 ? "text" : "password"}
                    name="password"
                    className="form-control d-flex justify-content-flex-start px-5"
                    placeholder="Create Password"
                    onChange={handleChange}
                    required
                  />
                  <i
                    className={`fa-solid ${showPassword1 ? "fa-eye" : "fa-eye-slash"}`}
                    onClick={() => setShowPassword1(!showPassword1)}
                    style={{
                      position: "absolute",
                      top: "350px",
                      right: "40px",
                      cursor: "pointer",
                    }}
                  ></i>
                  <br />
                </div>

                <div>
                  <label className="form-label fw-semibold text-white">
                    Confirm Password
                  </label>
                  <div>
                    <i className="fa-solid fa-lock text-dark" id="input-box"></i>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="form-control d-flex justify-content-flex-start px-5"
                    placeholder="Confirm Your Password"
                    onChange={handleChange}
                    required
                  />
                  <i
                    className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      top: "440px",
                      right: "40px",
                      cursor: "pointer",
                    }}
                  ></i>
                  <br />
                </div>
              </div>
              <div className="d-flex justify-content-between text-white gap-3">
                <div>
                  <input
                    type="checkbox"
                    onChange={(e) => setx(e.target.checked)}
                  />
                  {" "}I agree to the{" "}
                  <span className="text-primary">Terms of Service</span> and{" "}
                  <span className="text-primary">Privacy Policy</span> <br />
                  <input type="checkbox" />
                  {" "}Subscribe to our newsletter for travel deals and tips
                </div>
              </div>
              <br />
              
              {/* ⚠️ FIX: Subelement se ghatiya <a> tag hataya */}
              <button
                type="submit"
                className="btn btn-info w-100 text-white fw-semibold py-2 mb-4"
                disabled={!x}>
                Sign Up
              </button>
              
              <div className="d-flex align-items-center text-center my-4 text-muted small">
                <div className="border-bottom w-100"></div>
                <span className="px-3 text-nowrap text-white">
                  Or continue with
                </span>
                <div className="border-bottom w-100"></div>
              </div>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-outline-light text-whit border w-100 py-2 d-flex align-items-center justify-content-center gap-2 small fw-medium"
                  >
                    <i className="fa-brands fa-facebook-f text-primary"></i>
                    Facebook
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-outline-light text-whit border w-100 py-2 d-flex align-items-center justify-content-center gap-2 small fw-medium"
                    id="btn1"
                  >
                    <i className="fa-brands fa-google text-primary"></i>
                    Google
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-center text-white">
                <h6>
                  Already have an account?{" "}
                  {/* ⚠️ FIX: Traditional anchor tag replace kiya <Link> se */}
                  <Link to="/login" className="text-decoration-none text-primary fw-semibold">
                    Sign in here
                  </Link>
                </h6>
              </div>
            </form>
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Sign_up;