import {React, useState} from 'react'
import "./login.css"

function Login() {
    
    const [username, setusername] = useState([])
    const [password, setpassword] = useState([])

    function connect(username, password) {
      var admin = sessionStorage.getItem("username");
      var adminPassword = sessionStorage.getItem("password");
      if ((admin === username, adminPassword === password)) {
        console.log("sucess");
        window.location.href = "/MainPage";
      }else{
        console.log("error")
      }
    }

    // const connect = identification(username, password)


  return (
    <div className="login">
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
    </div>
  );
}

export default Login;
