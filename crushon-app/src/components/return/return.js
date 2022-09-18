import { useNavigate } from "react-router-dom";
import { React} from "react";


function BackPage() {
  const navigate = useNavigate();
  const navigateback = () => {
    navigate("/mainpage");
  };
  return (
    <div id="back">
      <h2 onClick={navigateback}>Back</h2>
    </div>
  );
}

export default BackPage;