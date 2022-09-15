import { React, useState } from "react";
import "./selleradmin.css"


const infomrationSeller = (e) => {
    return (
    <div>
        <p>
        You have creat a new seller account, don't forget to send the setting to the seller.
        </p>
        <p>Name: {e.name}</p>
        <p>Email: {e.email}</p>
        <p>Password: {e.password}</p>
    </div>
    );
};

function AdminSeller() {
    const [infoSel, setinfoSel] = useState([])

    class ObjSeller{
        constructor(name,email,password){
            this.name = name
            this.email = email
            this.password = password
        }
    }

    const showseller = () => {
        document.getElementsByClassName("creatSeller")[0].style.display="flex"
    }



    const creatseller = () => {
        let name = document.getElementById("name").value
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        let seller = new ObjSeller(name,email,password)
        setinfoSel(infomrationSeller(seller))
        document.getElementsByClassName("creatSeller")[0].style.display ="none"
    }


    return (
      <div class="container" id="Seller">
        <div>
          <h3>List of Seller</h3>
        </div>
        <div>
          <button onClick={showseller}>Creat Seller</button>
        </div>
        <div class="creatSeller">
          <div>
            <h2>Name of the market</h2>
            <input
              id="name"
              type="text"
              // onChange={(e) => setusername(e.target.value)}
            ></input>
          </div>
          <div>
            <h2>Email</h2>
            <input
              id="email"
              type="text"
              // onChange={(e) => setusername(e.target.value)}
            ></input>
          </div>
          <div>
            <h2>Password</h2>
            <input
              id="password"
              type="text"
              // onChange={(e) => setusername(e.target.value)}
            ></input>
          </div>
          <div>
            <button onClick={creatseller}>Validation Seller</button>
          </div>
        </div>
        {infoSel}
      </div>
    );
}


export default AdminSeller;
