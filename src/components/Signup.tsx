import React, { useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";
import ReactDOM from "react-dom";
import { isBuffer } from "util";

interface Signup_validation {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {


  const [isSubmit, setIsSubmit] = useState(false);
  const [checkEmailOnBlur, setCheckEmailOnBlur] = useState(false)
  const [checkNameOnBlur, setCheckNameOnBlur] = useState(false);
  const [checkPasswordOnBlur, setCheckPasswordOnBlur] = useState(false);
  const [checkConfirmPasswordOnBlur, setCheckConfirmPasswordOnBlur] = useState(false);
  const [signup_information, setSignup_information] =
    useState<Signup_validation>({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignup_information((pre_signup_information) => ({
      ...pre_signup_information,
      name: e.target.value,
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignup_information((pre_signup_information) => ({
      ...pre_signup_information,
      email: e.target.value,
    }));
    if(checkEmailOnBlur==true) setCheckEmailOnBlur(false);
    
  };  
  const handleEmailBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
      validationSignupForm();
      console.log("hhihi", signup_information)
      setCheckEmailOnBlur(true);
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignup_information((pre_signup_information) => ({
      ...pre_signup_information,
      password: e.target.value,
    }));
    if (checkPasswordOnBlur == true) setCheckPasswordOnBlur(false);
  };
    const handlePasswordBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
      validationSignupForm();
      console.log("hhihi", signup_information);
      setCheckPasswordOnBlur(true);
    };
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignup_information((pre_signup_information) => ({
      ...pre_signup_information,
      confirmPassword: e.target.value,
    }));
    if (checkConfirmPasswordOnBlur == true) setCheckConfirmPasswordOnBlur(false);
  };
      const handleConfirmPasswordBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        validationSignupForm();
        console.log("hhihi", signup_information);
        setCheckConfirmPasswordOnBlur(true);
      };
   const handleSignupSubmitForm = (e: React.ChangeEvent<any>) => {
     e.preventDefault();
     if(validationSignupForm().error) {        
      setCheckConfirmPasswordOnBlur(true);
      setCheckPasswordOnBlur(true);
      setCheckEmailOnBlur(true);  
     }
     else{

       
       console.log("ahuhuhuhu");
       alert("Đăng ký thành công");
       setIsSubmit(true);
     }
   };
     const validationSignupForm = (): {
       error: boolean;
       nameErrorMsg: string;
       emailErrorMsg: string;
       passwordErrorMsg: string;
       confirmPasswordErrorMsg: string;
     } => {
       let returnData = {
         error: true,
         nameErrorMsg: "",
         emailErrorMsg: "",
         passwordErrorMsg: "",
         confirmPasswordErrorMsg: "",
       };
       const { name, email, password, confirmPassword } = signup_information;

       //Kiểm tra email

       const re =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if (!re.test(String(email).toLowerCase())) {
         returnData.emailErrorMsg = "please enter valid format email";
       } else returnData.emailErrorMsg = "";

       //Kiểm tra password
       if (password.length < 3) {
         returnData.passwordErrorMsg = "please enter more than 3 characters";
       } else returnData.passwordErrorMsg = "";
       if (password != confirmPassword||confirmPassword.length==0) {
         returnData.confirmPasswordErrorMsg =
           "the confirm password is incorrect";
       } else returnData.confirmPasswordErrorMsg = "";

      if (
        re.test(String(email).toLowerCase()) &&
        password.length >=3 &&
        password == confirmPassword
      ) returnData.error=false;
      else returnData.error = true;


        return returnData;
     };
  return (
    <div className="container-fluid  d-block">
      <div id="myModal_login " className="modal d-block">
        {/* Modal content login */}

        <div className="modal-content1 col-md-6">
          {/* login_wrapper */}
          <div className="login_wrapper" id="login_wrapper_id">
            {isSubmit && (
              <div className="signup_information">
                <p>
                  User Name: <strong>{signup_information.name}</strong>
                </p>
                <p>
                  Email: <strong>{signup_information.email}</strong>
                </p>
              </div>
            )}

            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                <a href="#" className="btn btn-primary facebook">
                  {" "}
                  <span>Sign up with Facebook</span>{" "}
                  <i className="fa fa-facebook" />{" "}
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                <a href="#" className="btn btn-primary google-plus">
                  {" "}
                  Sign up with Google <i className="fa fa-google-plus" />{" "}
                </a>
              </div>
            </div>
            <h2>or</h2>
            <form action="" onSubmit={(e) => handleSignupSubmitForm(e)}>
              <div className="formsix-pos">
                <div className="form-group i-userName">
                  <input
                    name="name"
                    type="text"
                    className="form-control "
                    id="name_signup"
                    placeholder="User name *"
                    value={signup_information.name}
                    onChange={(e) => {
                      handleUserNameChange(e);
                    }}
                  />
                  <span id="message_email_login" className="form-message">
                    {}
                  </span>
                </div>
              </div>
              <div className="formsix-pos">
                <div className="form-group i-email">
                  <input
                    autoComplete="off"
                    value={signup_information.email}
                    type="email"
                    name="email"
                    className="form-control "
                    onChange={(e) => {
                      handleEmailChange(e);
                    }}
                    onBlur={(e) => {
                      handleEmailBlur(e);
                    }}
                    id="email_login"
                    placeholder="Email Address *"
                  />
                  <span id="message_email_login" className="form-message">
                    {checkEmailOnBlur && validationSignupForm().emailErrorMsg}
                  </span>
                </div>
              </div>
              <div className="formsix-e">
                <div className="form-group i-password">
                  <input
                    value={signup_information.password}
                    type="password"
                    className="form-control"
                    onChange={(e) => {
                      handlePasswordChange(e);
                    }}
                    onBlur={(e) => {
                      handlePasswordBlur(e);
                    }}
                    id="password_login"
                    placeholder="Password *"
                  />
                  <span className="form-message" id="message_login_password">
                    {checkPasswordOnBlur &&
                      validationSignupForm().passwordErrorMsg}
                  </span>
                </div>
              </div>
              <div className="formsix-e">
                <div className="form-group i-password">
                  <input
                    value={signup_information.confirmPassword}
                    type="password"
                    className="form-control"
                    id="password_login"
                    placeholder="Confirm password *"
                    onChange={(e) => {
                      handleConfirmPasswordChange(e);
                    }}
                    onBlur={(e) => {
                      handleConfirmPasswordBlur(e);
                    }}
                  />
                  <span className="form-message" id="message_login_password">
                    {checkConfirmPasswordOnBlur &&
                      validationSignupForm().confirmPasswordErrorMsg}
                  </span>
                </div>
              </div>
              <div className="login_btn_wrapper" id="login_btn">
                <button className="btn btn-primary login_btn"> Sign up </button>
              </div>
            </form>

            <div className="login_message">
              <p>
                You have an account ?{" "}
                <a id="signup_route" href="#">
                  {" "}
                  <Link to="/login">Login</Link>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
          {/* /.login_wrapper*/}
        </div>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Signup;
