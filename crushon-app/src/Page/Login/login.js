import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"

const errorName = () => {
  if (document.getElementById("FalsePassword") != null) {
    document.getElementById("FalsePassword").style.display = "none"
  }
  if (document.getElementById("FalseName") != null) {
    document.getElementById("FalseName").style.display = "block";
  }
  return (
      <p id="FalseName">
        Your username is false
      </p>

  );
};

const errorPassword = () => {
  if ((document.getElementById("FalseName")) != null){
    document.getElementById("FalseName").style.display = "none"
  }
  if ((document.getElementById("FalsePassword")) != null) {
    document.getElementById("FalsePassword").style.display = "block";
  }
    
  return (<p id="FalsePassword">Your Password is false</p>)
};




function Login() {

    const navigate = useNavigate()
    const [username, setusername] = useState([])
    const [password, setpassword] = useState([])

    const [errUsername, seterrUsername] = useState([])
    const [errPassword, seterrPassword] = useState([])

    function connect(username, password) {
      let listSeller = localStorage.getItem("seller")
      var admin = sessionStorage.getItem("username");
      var adminPassword = sessionStorage.getItem("password");

      if ((admin === username, adminPassword === password)) {
        sessionStorage.setItem("user","admin")
        navigate('/mainpage')
      }else if (listSeller != null) {

        listSeller =  JSON.parse(listSeller)
        const exist = listSeller.findIndex((e) => e?.name === username);
        if (exist != -1){
          if((listSeller[exist])?.password === password){
            sessionStorage.setItem("user", exist)
            navigate("/mainpage")
          }else {
            seterrPassword(errorPassword)
          }
        }else {
          seterrUsername(errorName)
        }
      }
    }

  return (
    <div className="countainer" id="login">
      <h1>Login</h1>
      <div>
        <h2>UserName</h2>
        <input
          type="text"
          onChange={(e) => setusername(e.target.value)}
        ></input>
      </div>
      <div>
        <h2>Password</h2>
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
        ></input>
      </div>
      <button class="button" onClick={() => connect(username, password)}>
        Sign In
      </button>
      <div id="error">
        {errUsername}
        {errPassword}
      </div>
    </div>
  );
}

export default Login;
