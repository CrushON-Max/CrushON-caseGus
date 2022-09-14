import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "../Page/MainPage/MainPage"
import Login from "../Page/Login/login"
import Seller from "../components/Seller/selleradmin"


function Road() {
  // document.getElementById("none").style.display="none"

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/Seller" element={<Seller />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Road;
