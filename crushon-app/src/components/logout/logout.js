import { React } from "react"
import { useNavigate } from "react-router-dom"
import "./logout.css"

function Logout() {
  const navigate = useNavigate()
  const navigatetoLogin = () => {
    sessionStorage.removeItem("user")
    navigate("/")
  }
  return (
    <div id="logout">
      <h2 onClick={navigatetoLogin}>Logout</h2>
    </div>
  )
}

export default Logout


