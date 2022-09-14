import React from "react"
import "./MainPage.css"
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";


function MainPage(){
  const navigate = useNavigate();
  const navigatetoSeller = () => {
    navigate('/Seller');
  };


    if (sessionStorage.getItem("user")==="admin") {

      return (
        <div class="countainer" id="mainpage">
          <nav class="Nav">
            {/* <Link to="/Seller">test</Link> */}
            <h2 onClick={navigatetoSeller}>Seller</h2>
            <h2>Trademark Authorization</h2>
            <h2>Trademark</h2>
          </nav>
        </div>
      );
    } else {
    }
}


export default MainPage;


