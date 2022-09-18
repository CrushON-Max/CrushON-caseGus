import React from "react"
import "./mainpage.css"
import { useNavigate } from "react-router-dom"
import Logout from "../../components/logout/logout"
import Unconnected from "../../components/Unconnect/unconnect"


function MainPage(){
  const navigate = useNavigate()
  const navigatetoSeller = () => {
    navigate('/Seller')
  }
  const navigatetoTrademark = () => {
    navigate('/Trademark')
  }
  const navigatetoAuthorization = () => {
    navigate('/Authorization')
  }
  const navigatetotrademarkseller = () => {
    navigate('/trademarkseller')
  }
    if (sessionStorage.getItem("user") === null) {
      return (<Unconnected/>)
    } else if (sessionStorage.getItem("user") === "admin") {
      return (
        <div class="countainer" id="mainpage">
          <Logout />
          <nav class="Nav">
            <h2 onClick={navigatetoSeller}>Seller</h2>
            <h2 onClick={navigatetoAuthorization}>Trademark Authorization</h2>
            {/* <h2 onClick={navigatetoTrademark}>Trademark</h2> */}
          </nav>
        </div>
      );
    } else {
      return (
        <div class="countainer" id="mainpage">
          <Logout />
          <nav class="Nav">
            {/* <h2 onClick={navigatetoTrademark}>Trademark</h2> */}
            <h2 onClick={navigatetotrademarkseller}>Your market</h2>
          </nav>
        </div>
      );
    }
}


export default MainPage;


