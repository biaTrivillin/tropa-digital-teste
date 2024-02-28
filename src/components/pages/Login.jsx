import FormLogin from "../layout/FormLogin";
import PresentationSection from "../layout/PresentationSection";
import ForgotPasswordPopup from "../layout/ForgotPasswordPopup";
import '../../styles/Login-SignUp.css'
import { useState } from "react";

function Login() {

  const [showPopup, setShowPopup] = useState(false)


  const showForgotPassPopup = () => {
    if(showPopup !== true) setShowPopup(true)
    else setShowPopup(false)

  }

    return (
      <div className="content">
        {showPopup && <ForgotPasswordPopup showForgotPassPopup={showForgotPassPopup}/>}  
        <PresentationSection/>
        <div className="form_content">
          <h1>Login</h1>
          <FormLogin/>
          <div className='forgot_pass_btn_container'>
            <button onClick={showForgotPassPopup}>Esqueceu a senha?</button>
          </div>
          <p>Novo por aqui? <a href="/cadastro" className="signup_link">Cadastre-se</a></p>
        </div>
      </div>
    )
  
}
  
export default Login