import { React,  useState } from "react"
import "./authorization.css"
import Logout from "../../components/logout/logout"
import Unconnected from "../../components/Unconnect/unconnect"



const errorBrand = () => {
  if (document.getElementsByClassName("errorBrand")[0] !== undefined) {
    document.getElementsByClassName("errorBrand")[0].style.display = "block"
  }
    return (
        <div class="errorBrand">
            <p>You got something empty</p>
        </div>
    )
}

const newBrandinfo = (e) => {
  if (document.getElementById("Nbrandino") != undefined){
    document.getElementById("Nbrandino").style.display="block"
  }
    return (
      <div id="Nbrandino">
        <p>You have add a new brand</p>
        <div>
          <p>Name: {e.name}</p>
          <p>Authorization: {e.autho}</p>
        </div>
      </div>
    );
}


function Authorization() {
  const [nameBrand, setnamebrand] = useState([])
  const [authoBrand, setauthobrand] = useState([])
  const [errBrand, seterrbrand] = useState([])
  const [newinfobrand, setnewinfobrand] = useState([])

  if (sessionStorage.getItem("user") === null) {
    return (<Unconnected />)
  } else {
    class ObjBrand {
      constructor(name, autho) {
        this.name = name
        this.autho = autho
      }
    }

    let x = localStorage.getItem("brand")
    const results = [];

    if (x != null) {
      JSON.parse(x).forEach((element) => {
        results.push(element)
      });
    }

    let listAuthor = results.map((e) => {
      if (e != null) {
        if (e.autho === "authorized") {
          return (
            <div key={results.indexOf(e)}>
              <p>Name: {e.name}</p>
            </div>
          );
        }
      }
    });

    let listProhi = results.map((e) => {
      if (e != null) {
        if (e.autho === "prohibited") {
          return (
            <div key={results.indexOf(e)}>
              <p>Name: {e.name}</p>
            </div>
          )
        }
      }
    })

    const showbrand = () => {
      if (document.getElementById("Nbrandino") != undefined) {
        document.getElementById("Nbrandino").style.display = "none"
      }
      document.getElementById("newbrand").style.display = "flex"
    }

    function newBrand(name, autho) {
      if ( name === "" || autho === "" || Array.isArray(name) === true || Array.isArray(autho) === true ) {
        seterrbrand(errorBrand)
      } else {
        const brand = new ObjBrand(name, autho)
        let x = []
        x.push(brand)
        if (localStorage.getItem("brand") != null) {
          let i = localStorage.getItem("brand")
          x.push.apply(x, JSON.parse(i))
        } else {
          x.push(localStorage.getItem("brand"))
        }
        localStorage.setItem("brand", JSON.stringify(x))
        setnewinfobrand(newBrandinfo(brand))
        document.getElementById("newbrand").style.display = "none"
        if (document.getElementsByClassName("errorbrand")[0] != undefined) {
          document.getElementsByClassName("errorbrand")[0].style.display = "none"
        }
      }
    }

    return (
      <div>
        <Logout />
        <div>
          <h1>Authorization of Brand</h1>
        </div>
        <div>
          <button onClick={showbrand}>Add new brand</button>
          {newinfobrand}
          <div id="newbrand">
            <div>
              <h3>New Brand</h3>
            </div>
            <div>
              <h5>Name of the Brand</h5>
              <input onChange={(e) => setnamebrand(e.target.value)}></input>
            </div>
            <div>
              <h5>Authorization</h5>
              <select
                name="Authorization"
                id=""
                onChange={(e) => setauthobrand(e.target.value)}
              >
                <option defaultValue hidden>
                  --Choose authorization--
                </option>
                <option value="authorized">Authorized</option>
                <option value="prohibited">Prohibited</option>
              </select>
            </div>
            <div>
              <button onClick={() => newBrand(nameBrand, authoBrand)}>
                Valid
              </button>
            </div>
            {errBrand}
          </div>
        </div>
        <div>
          <h3>List of authorized brand</h3>
          <div>{listAuthor}</div>
        </div>
        <div>
          <h3>List of prohibited brand</h3>
          <div>{listProhi}</div>
        </div>
      </div>
    )
  }

  }



export default Authorization;
