import { React, useState } from "react"
import "./selleradmin.css"
import Logout from "../../components/logout/logout"
import Unconnected from "../../components/Unconnect/Unconnect"

const infomrationSeller = (e) => {
    //Lors de la creation d'un nouveau vendeur
    return (
    <div>
        <p>
        You have creat a new seller account, don't forget to send the setting to the seller.
        </p>
        <p>Name: {e.name}</p>
        <p>Email: {e.email}</p>
        <p>Password: {e.password}</p>
    </div>
    )
}

function AdminSeller() {

  const [infoSel, setinfoSel] = useState([])

  if (sessionStorage.getItem("user") === null) {
    return <Unconnected />
  }else{
    class ObjSeller {
      constructor(name, email, password, product) {
        this.name = name
        this.email = email
        this.password = password
        this.product = product
      }
    }

    //Permet de  verifier si la liste des vendeurs est vide ou non
    let x = localStorage.getItem("seller")
    const results = [];

    if (x != null) {
      JSON.parse(x).forEach((element) => {
        results.push(element);
      });
    }

    let list = results.map((e) => {
      if (e != null) {
        return (
          <div key={results.indexOf(e)}>
            <p>Name: {e.name}</p>
            <p>Email: {e.email}</p>
            <p>Password: {e.password}</p>
          </div>
        );
      } else {
        return (
          <div>
            <p>End of the list</p>
          </div>
        );
      }
    });

    const showseller = () => {
      document.getElementsByClassName("creatSeller")[0].style.display = "flex"
    }

    const creatseller = () => {
      //Recupere les inforation du vendeur, les transmets dans le localstorage
      let name = document.getElementById("name").value
      let email = document.getElementById("email").value
      let password = document.getElementById("password").value
      let seller = new ObjSeller(name, email, password)
      let x = []
      x.push(seller)
      if (localStorage.getItem("seller") != null) {
        let i = localStorage.getItem("seller")
        x.push.apply(x, JSON.parse(i))
      } else {
        x.push(localStorage.getItem("seller"))
      }

      localStorage.setItem("seller", JSON.stringify(x))
      setinfoSel(infomrationSeller(seller))
      document.getElementsByClassName("creatSeller")[0].style.display = "none"
    };

    return (
      <div class="container" id="Seller">
        <Logout />
        <div>
          <h3>List of Seller</h3>
          {list}
        </div>
        <div>
          <button onClick={showseller}>Creat Seller</button>
        </div>
        <div class="creatSeller">
          <div>
            <h2>Name of the market</h2>
            <input id="name" type="text"></input>
          </div>
          <div>
            <h2>Email</h2>
            <input id="email" type="text"></input>
          </div>
          <div>
            <h2>Password</h2>
            <input id="password" type="text"></input>
          </div>
          <div>
            <button onClick={creatseller}>Validation Seller</button>
          </div>
        </div>
        {infoSel}
      </div>
    )
  }
}


export default AdminSeller
