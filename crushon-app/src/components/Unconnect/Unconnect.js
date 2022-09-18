import { React } from "react"
import { useNavigate } from "react-router-dom"
import "./unconnect.css"

function Unconnected() {
    const navigate = useNavigate()
    const navigatetoLogin = () => {
    navigate("/")
    }

    return (
    <div id="unconnect">
        <h1>Your are not connected</h1>
        <h2>Please go login</h2>
        <h3 onClick={navigatetoLogin}>Login</h3>
    </div>
    )
    
}

export default Unconnected