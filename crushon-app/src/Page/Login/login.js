import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"

const errorEmail = () => {
  if (document.getElementById("FalsePassword") != null) {
    document.getElementById("FalsePassword").style.display = "none"
  }
  if (document.getElementById("FalseEmail") != null) {
    document.getElementById("FalseEmail").style.display = "block"
  }
  return (
      <p class="error" id="FalseEmail">
        Your email is false
      </p>
  );
};

const errorPassword = () => {
  if ((document.getElementById("FalseName")) != null){
    document.getElementById("FalseName").style.display = "none"
  }
  if ((document.getElementById("FalsePassword")) != null) {
    document.getElementById("FalsePassword").style.display = "block"
  }
    
  return (
    <p class="error" id="FalsePassword">
      Your Password is false
    </p>
  );
};


function Login() {

    const navigate = useNavigate()
    const [email, setemail] = useState([])
    const [password, setpassword] = useState([])

    const [errEmail, seterrEmail] = useState([])
    const [errPassword, seterrPassword] = useState([])

    function connect(email, password) {
      let listSeller = localStorage.getItem("seller")
      var admin = sessionStorage.getItem("email")
      var adminPassword = sessionStorage.getItem("password")

      if ((admin === email, adminPassword === password)) {
        sessionStorage.setItem("user","admin")
        navigate('/mainpage')
      }else if (listSeller != null) {

        listSeller =  JSON.parse(listSeller)
        const exist = listSeller.findIndex((e) => e?.email === email)
        if (exist != -1){
          if((listSeller[exist])?.password === password){
            sessionStorage.setItem("user", exist)
            navigate("/mainpage")
          }else {
            seterrPassword(errorPassword)
          }
        }else {
          seterrEmail(errorEmail)
        }
      }
    }

  return (
    <div className="countainer" id="login">
      <h1>Login</h1>
      <div>
        <h2>Email</h2>
        <input
          type="text"
          onChange={(e) => setemail(e.target.value)}
        ></input>
      </div>
      <div>
        <h2>Password</h2>
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
      </div>
      <button class="button" onClick={() => connect(email, password)}>
        Sign In
      </button>
      <div id="error">
        {errEmail}
        {errPassword}
      </div>
    </div>
  );
}

export default Login;
