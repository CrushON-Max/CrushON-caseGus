import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "../Page/MainPage/MainPage"
import Login from "../Page/Login/login"
import Seller from "../components/Seller/selleradmin"
import Authorization from "../components/AuthorizationM/Authorization";
import Trademark from "../components/Trademark/Trademark";


function Road() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/Seller" element={<Seller />} />
        <Route path="/Trademark" element={<Trademark/>}/>
        <Route path="/Authorization" element={<Authorization/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Road;
