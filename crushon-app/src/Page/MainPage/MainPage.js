import React from "react"
import "./MainPage.css"
import { useNavigate } from "react-router-dom";


function MainPage(){
  const navigate = useNavigate();
  const navigatetoSeller = () => {
    navigate('/Seller');
  };
  const navigatetoTrademark = () => {
    navigate('/Trademark')
  }
  const navigatetoAuthorization = () => {
    navigate('Authorization')
  }


    if (sessionStorage.getItem("user")==="admin") {

      return (
        <div class="countainer" id="mainpage">
          <nav class="Nav">
            <h2 onClick={navigatetoSeller}>Seller</h2>
            <h2 onClick={navigatetoAuthorization}>Trademark Authorization</h2>
            <h2 onClick={navigatetoTrademark}>Trademark</h2>
          </nav>
        </div>
      );
    } else {
    }
}


export default MainPage;


