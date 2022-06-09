import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import { Routes, Route, Link} from "react-router-dom";
const Login = () => {
  return (
    <div className="container-fluid  d-block">
  <div id="myModal_login " className="modal d-block" >
    {/* Modal content login */}
    <div className="modal-content1 col-md-6">
      {/* login_wrapper */}
      <div className="login_wrapper" id="login_wrapper_id">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
            <a href="#" className="btn btn-primary facebook">
              {" "}
              <span>
                Login with Facebook
              </span> <i className="fa fa-facebook" />{" "}
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
            <a href="#" className="btn btn-primary google-plus">
              {" "}
              Login with Google <i className="fa fa-google-plus" />{" "}
            </a>
          </div>
        </div>
        <h2>or</h2>
        <div className="formsix-pos">
          <div className="form-group i-email">
            <input
              type="email"
              className="form-control "
             
              id="email_login"
              placeholder="Email Address *"
            />
            <span id="message_email_login" className="form-message">
              {" "}
            </span>
          </div>
        </div>
        <div className="formsix-e">
          <div className="form-group i-password">
            <input
              type="password"
              className="form-control"
             
              id="password_login"
              placeholder="Password *"
            />
            <span className="form-message" id="message_login_password" />
          </div>
        </div>
        
        <div className="login_remember_box">
          <label className="control control--checkbox">
            <input type="checkbox" className="input_checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#" className="forget_password">
            Forgot Password
          </a>
        </div>
        <div className="login_btn_wrapper" id="login_btn">
          <a href="#" className="btn btn-primary login_btn">
            {" "}
            Login{" "}
          </a>
        </div>
        <div className="login_message">
          <p>
            Don’t have an account ?{" "}
            <a id="signup_route" href="#">
              {" "}
              <Link to="/Sign_up">Sign up</Link>{" "}
            </a>{" "}
          </p>
        </div>
      </div>
      {/* /.login_wrapper*/}
    </div>
  </div>
  <Routes>
        <Route path="/Sign_up" element={<Signup />} />
     
      </Routes>
</div>

  )
}

export default Login