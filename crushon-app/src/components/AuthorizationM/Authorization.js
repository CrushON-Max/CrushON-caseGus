import { React,  useState } from "react"
import "./Authorization.css"



// const Authorizationbrand = () => {
//   return(
//     <div>

//     </div>
//   )
// }


function Authorization() {

  const [] = useState([])
  const [] = useState([]);

  const showbrand = () => {
    document.getElementById("newbrand").style.display="flex"
  }

  return (
    <div>
      <div>
        <h1>Authorization of Brand</h1>
      </div>
      <div>
        <button onClick={showbrand}>Add new brand</button>
        <div id="newbrand">
          <div>
            <h3>New Brand</h3>
          </div>
          <div>
            <h5>Name of the Brand</h5>
            <input></input>
          </div>
          <div>
            <h5>Authorization</h5>
            <select name="Authorization" id="">
              <option defaultValue hidden>
                --Choose authorization--
              </option>
              <option value="authorized">Authorized</option>
              <option value="prohibited">Prohibited</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <h3>List of authorized brand</h3>
      </div>
      <div>
        <h3>List of prohibited brand</h3>
      </div>
    </div>
  );
}

export default Authorization;
