import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";



interface Account{
  name: string;
  email: string;
}
const Signup = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const[dataUser,setDataUser] = useState<Account>()
  
  const handleSignupBtnClick = () => {
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setIsSubmit(true);
       
        setDataUser({
          name: name,
          email: email
        })
      }
    }
  };
  const handleUserNameChange = (e: React.ChangeEvent<any>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<any>) => {
    setEmail(e.target.value);
  };
  const handlePasswordlChange = (e: React.ChangeEvent<any>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordlChange = (e: React.ChangeEvent<any>) => {
    setConfirmPassword(e.target.value);
  };

  const handleUserNameBlur = (e: React.ChangeEvent<any>) => {
    // if(name.split("").length==0) {
    //   alert("nhập tên")
    //   let message: any = document.getElementById("message_email_login");
    //   message.innerHTML="enter name"
    // }
  };
  const handleSignupSubmitForm = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
  }

  function validationForm (email: string,password: string):object {
    let returnData = {
      error : false,
      msg: ''
    }
    
    //Kiểm tra email
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      returnData = {
        error: true,
        msg: 'Không đúng định dạng email'
      }
    }
    //Kiểm tra password
    if(password.length < 8) {
      returnData = {
        error: true,
        msg: 'Mật khẩu phải lớn hơn 8 ký tự'
      }
    }
    return returnData;
  }
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
                  User Name: <strong>{dataUser?.name}</strong>
                </p>
                <p>
                  Email: <strong>{dataUser?.email}</strong>
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
            <form action=""
              onSubmit={e=>handleSignupSubmitForm(e)}
            >
               <div className="formsix-pos">
              <div className="form-group i-userName">
                <input
                  type="text"
                  className="form-control "
                  value={name}
                  id="email_login"
                  placeholder="User name *"
                  onChange={(e) => {
                    handleUserNameChange(e);
                  }}
                  onBlur={(e) => {
                    handleUserNameBlur(e);
                  }}
                />
                <span id="message_email_login" className="form-message">
                  {" "}
                </span>
              </div>
            </div>
            <div className="formsix-pos">
              <div className="form-group i-email">
                <input
                  type="email"
                  className="form-control "
                  onChange={(e) => {
                    handleEmailChange(e);
                  }}
                  value={email}
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
                  value={password}
                  id="password_login"
                  placeholder="Password *"
                  onChange={(e) => {
                    handlePasswordlChange(e);
                  }}
                />
                <span className="form-message" id="message_login_password" />
              </div>
            </div>
            <div className="formsix-e">
              <div className="form-group i-password">
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  id="password_login"
                  placeholder="Confirm password *"
                  onChange={(e) => {
                    handleConfirmPasswordlChange(e);
                  }}
                />
                <span className="form-message" id="message_login_password" />
              </div>
            </div>

            <div className="login_remember_box"></div>
            <div
              onClick={() => handleSignupBtnClick()}
              className="login_btn_wrapper"
              id="login_btn"
            >
              <button className="btn btn-primary login_btn">
                {" "}
                Sign up{" "}
              </button>
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
