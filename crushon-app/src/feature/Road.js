import { Routes, Route, BrowserRouter } from "react-router-dom"
import MainPage from "../Page/MainPage/mainmage"
import Login from "../Page/Login/login"
import Seller from "../UnderPage/Seller/selleradmin"
import Authorization from "../UnderPage/AuthorizationM/authorization"
import Trademark from "../UnderPage/Trademark/trademark"
import TrademarkSeller from "../UnderPage/TrademarkSeller/trademarkseller"

function Road() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/Seller" element={<Seller />} />
        <Route path="/Trademark" element={<Trademark/>}/>
        <Route path="/Authorization" element={<Authorization/>}/>
        <Route path="/trademarkseller" element={<TrademarkSeller/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Road;
