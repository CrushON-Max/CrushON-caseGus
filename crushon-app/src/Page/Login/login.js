import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"

const errorName = () => {
  //Lors de la creation d'un nouveau vendeur
  return (
      <p>
        Your username is false
      </p>

  );
};

const errorPassword = () => {
  //Lors de la creation d'un nouveau vendeur
  return <p>Your Password is false</p>;
};




function Login() {

    const navigate = useNavigate();
    const [username, setusername] = useState([]);
    const [password, setpassword] = useState([]);

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
            console.log("Mauvais mot de passe")
          }
        }else {
          console.log("Mauvais identifiant")
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

      </div>
    </div>
  );
}

export default Login;
