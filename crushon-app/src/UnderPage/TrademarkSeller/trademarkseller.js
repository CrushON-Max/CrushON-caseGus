import { React, useState } from "react"
import "./trademarkseller.css"
import Logout from "../../components/logout/logout"
import Unconnected from "../../components/Unconnect/Unconnect"


const errproduct = () => {
    return (
        <div class="error">
            <p>You got something empty</p>
        </div>
    )
}

const infomrationProduct = (e) => {
  //Lors de la creation d'un nouveau produit
    if (document.getElementById("newproductadd") != undefined) {
    document.getElementById("newproductadd").style.display = "block"
    }
  return (
    <div id="newproductadd">
      <p>
        You have add a new product to your list market
      </p>
      <p>Name: {e.name}</p>
      <p>Price: {e.price}$</p>
      <p>Stock: {e.stock}</p>
    </div>
  )
}

function TrademarkSeller() {
  const [namepro, setnamePro] = useState([])
  const [pricepro, setpricePro] = useState([])
  const [stockpro, setstockPro] = useState([])

  const [errorpro, seterrorPro] = useState([])
  const [newpro, setnewPro] = useState([])

  if (sessionStorage.getItem("user") === null ) {
    return <Unconnected />
  }else {
      const iduser = sessionStorage.getItem("user")
      let listSeller = localStorage.getItem("seller")
      listSeller = JSON.parse(listSeller)
      const UserConnect = listSeller[iduser]
      
      class ObjProduct {
        constructor(Name, Price, Stock, Brand) {
          this.name = Name
          this.price = Price
          this.stock = Stock
          this.brand = Brand
        }
      }
      const showproduct = () => {
        if (document.getElementById("newproductadd") != undefined) {
          document.getElementById("newproductadd").style.display = "none"
        }

        document.getElementById("buttonC").style.display = "none"
        document.getElementsByClassName("creatproduct")[0].style.display = "flex"
      }

      let results = []
      let listproductUser = UserConnect.product

      let liststockage = JSON.parse(localStorage.getItem("brand"))
      let resultsBrand = []

      //Permet de  verifier si la liste des produits/marque est vide ou non
      if (listproductUser != null) {
        listproductUser.forEach((element) => {
          results.push(element)
        })
      }

      if (liststockage != null) {
        liststockage.forEach((element) => {
          resultsBrand.push(element)
        })
      }

      //marque autorisé ou non + code couleur rouge/vert en css
      let listBrand = resultsBrand.map((e) => {
        if (e != null ){
          if(e.autho === "authorized"){
            return <option value={resultsBrand.indexOf(e)}>{e.name}</option>;
          }
          else if (e.autho === "prohibited"){
            return (
              <option value={e.name} disabled>
                {e.name}
              </option>
            )
          }}
      })

      let list = results.map((e) => {

        if (e != null) {
          if (e.brand != ""){
            let brandinfo = e.brand
          return (
            <div class="boxProduct" key={results.indexOf(e)}>
              <p>Name: {e.name}</p>
              <p>Price: {e.price}$</p>
              <p>Stock: {e.stock}</p>
              <p>Brand: {brandinfo.name}</p>
            </div>
          )
        }else {
          return (
            <div class="boxProduct" key={results.indexOf(e)}>
              <p>Name: {e.name}</p>
              <p>Price: {e.price}$</p>
              <p>Stock: {e.stock}</p>
              <select
                id={results.indexOf(e)}
                onChange={(e) => BrandSelect(e.target.value, e.target.id)}
                name="brand"
              >
                <option defaultValue hidden>
                  --Choose Brand--
                </option>
                {listBrand}
              </select>
            </div>
          );}
        }
      })

      function creatnewproduct(name, price, stock) {
        if ( name === "" || price === "" || stock === "" || Array.isArray(name) == true || Array.isArray(price) == true || Array.isArray(stock) == true ) {
          seterrorPro(errproduct)
        } else {
          let brandNull = ""
          let newProduct = new ObjProduct(name, price, stock, brandNull);
          let x = []
          x.push(newProduct)

          if (UserConnect.product == undefined) {
            listSeller[iduser].product = x
            localStorage.setItem("seller", JSON.stringify(listSeller))
          } else {
            const listUserproduct = UserConnect.product
            x.push.apply(x, listUserproduct)
            listSeller[iduser].product = x
            localStorage.setItem("seller", JSON.stringify(listSeller))
          }
          document.getElementsByClassName("creatproduct")[0].style.display = "none"
          document.getElementById("buttonC").style.display = "block"
          setnewPro(infomrationProduct(newProduct))
        }
      }
      
      function BrandSelect(value,index){
        let brand = resultsBrand[value]
        let objPro = UserConnect.product[index]
        objPro.brand = brand
        UserConnect.product[index] = objPro  
        listSeller[iduser] = UserConnect
        localStorage.setItem("seller", JSON.stringify(listSeller));
      }

      return (
        <div>
          <Logout />
          <div>
            <h1>Your market {UserConnect.name}</h1>
          </div>
          <button id="buttonC" onClick={showproduct}>
            Creat product
          </button>
          {newpro}
          <div class="creatproduct">
            <h3>Creat a new product</h3>
            <div>
              <h5>Name Product:</h5>
              <input
                type="text"
                onChange={(e) => setnamePro(e.target.value)}
              ></input>
            </div>
            <div>
              <h5>Price Product:</h5>
              <input
                type="number"
                onChange={(e) => setpricePro(e.target.value)}
              ></input>
            </div>
            <div>
              <h5>Stock Product:</h5>
              <input
                type="number"
                onChange={(e) => setstockPro(e.target.value)}
              ></input>
            </div>
            <button
              class="button"
              onClick={() => creatnewproduct(namepro, pricepro, stockpro)}
            >
              Valid
            </button>
            {errorpro}
          </div>
          <div>
            <h3>List of your product</h3>
            {list}
          </div>
        </div>
      )
  } 
}

export default TrademarkSeller;
