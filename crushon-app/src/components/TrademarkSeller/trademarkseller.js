import { React, useState } from "react";
import "./trademarkseller.css"


const errproduct = () => {
    return (
        <div class="error">
            <p>You got something empty</p>
        </div>
    )
}



function TrademarkSeller() {
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

    const [namepro, setnamePro] = useState([])
    const [pricepro, setpricePro] = useState([])
    const [stockpro, setstockPro] = useState([])
    const [brandpro, setbrandPro] = useState([])

    const [errorpro, seterrorPro] = useState([])

    const showproduct = () => {
        document.getElementById("buttonC").style.display="none"
        document.getElementsByClassName("creatproduct")[0].style.display ="flex"
    };

    function creatnewproduct(name, price, stock, brand){
        if (name == '' || price === '' || stock === '' || brand === '' || (Array.isArray(name)) == true || (Array.isArray(price)) == true || (Array.isArray(stock)) == true || (Array.isArray(brand)) == true ){
            seterrorPro(errproduct)
        }else{
            let newProduct = new ObjProduct(name, price, stock, brand);
            let x = []
            x.push(newProduct)
            
            
            if (UserConnect.product == undefined) {
                listSeller[iduser].product=x
                localStorage.setItem("seller", JSON.stringify(listSeller))
            } else {
                const listUserproduct = UserConnect.product
                x.push.apply(x,listUserproduct)
                listSeller[iduser].product = x
                console.log(listSeller[iduser].product)
                localStorage.setItem("seller", JSON.stringify(listSeller))
            }
            console.log(localStorage.getItem("seller"))
            
        }
    }


  return (
    <div>
      <div>
        <h1>Your market {UserConnect.name}</h1>
      </div>
      <button id="buttonC" onClick={showproduct}>
        Creat product
      </button>
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
            type="text"
            onChange={(e) => setpricePro(e.target.value)}
          ></input>
        </div>
        <div>
          <h5>Stock Product:</h5>
          <input
            type="text"
            onChange={(e) => setstockPro(e.target.value)}
          ></input>
        </div>
        <div>
          <h5>Brand Product:</h5>
          <input
            type="text"
            onChange={(e) => setbrandPro(e.target.value)}
          ></input>
        </div>
        <button
          class="button"
          onClick={() => creatnewproduct(namepro, pricepro, stockpro, brandpro)}
        >
          Valid
        </button>
        {errorpro}
      </div>
      <div>
        <h3>List of your product</h3>
      </div>
    </div>
  );
}

export default TrademarkSeller;
