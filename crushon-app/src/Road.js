import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/Page/MainPage"
import Login from "./components/Login/login"

function Road() {
  return (
    <div>
      <div>test</div>
      <BrowserRouter>
        <Routes>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/MainPage" element={<MainPage />} />
          </Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Road;
