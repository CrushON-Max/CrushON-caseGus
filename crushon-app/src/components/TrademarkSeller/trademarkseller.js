import { React, useState } from "react";

function TrademarkSeller() {
    const iduser = sessionStorage.getItem("user")
    let listSeller = localStorage.getItem("seller")
    listSeller = JSON.parse(listSeller)
    const UserConnect = listSeller[iduser]
    console.log(listSeller[iduser])

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

    function creatnewproduct(name, price, stock, brand){
        let newProduct = new ObjProduct(name,price,stock,brand)
    }

  return (
    <div>
      <div>
        <h1>Your market {UserConnect.name}</h1>
      </div>
      <div>
        <h3>Creat a new product</h3>
        <div>
          <h5>Name Product</h5>
          <input
            type="text"
            onChange={(e) => setnamePro(e.target.value)}
          ></input>
        </div>
        <div>
          <h5>Price Product</h5>
          <input
            type="text"
            onChange={(e) => setpricePro(e.target.value)}
          ></input>
        </div>
        <div>
          <h5>Stock Product</h5>
          <input
            type="text"
            onChange={(e) => setstockPro(e.target.value)}
          ></input>
        </div>
        <div>
          <h5>Brand Product</h5>
          <input
            type="text"
            onChange={(e) => setbrandPro(e.target.value)}
          ></input>
        </div>
        <button class="button" onClick={() => creatnewproduct(namepro, pricepro, stockpro, brandpro)}>
          Valid
        </button>
      </div>
      <div>
        <h3>List of your product</h3>
      </div>
    </div>
  );
}

export default TrademarkSeller;
