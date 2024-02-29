import PresentationSection from "../layout/PresentationSection";
import FormSignUp from "../layout/FormSignUp";
import { FaAngleLeft } from "react-icons/fa";
import ConfirmEmailPopup from "../layout/ConfirmEmailPopup";
import { useState } from "react";
import '../../styles/Login-SignUp.css';


function SignUp() {

  const [showPopup, setShowPopup] = useState(false);

  const showConfirmEmailPopup = () => {
    if(showPopup !== true) setShowPopup(true);
    else setShowPopup(false);
  
  }

  const backToLogin = () => {
    window.location.href = '/';
  }

    return (
      <div className="content">
        {showPopup && <ConfirmEmailPopup showConfirmEmailPopup={showConfirmEmailPopup}/>}
        <PresentationSection/>
        <div className="form_content">
          <button onClick={backToLogin} className="back_btn"><FaAngleLeft />Voltar</button>
          <h1>Cadastro</h1>
          <FormSignUp showConfirmEmailPopup={showConfirmEmailPopup}/>
        </div>
      </div>
    )
  
}
  
export default SignUp;