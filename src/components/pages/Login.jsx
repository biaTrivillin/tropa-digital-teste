import FormLogin from "../layout/FormLogin";
import { Link } from "react-router-dom";
import PresentationSection from "../layout/PresentationSection";
// import ForgotPasswordPopup from "../layout/ForgotPasswordPopup";
import '../../styles/Login-SignUp.css'

function Login() {

    return (
      <div className="content">
        {/* <ForgotPasswordPopup/> */}
        <PresentationSection/>
        <div className="form_content">
          <h1>Login</h1>
          <FormLogin/>
          <p>Novo por aqui? <Link className="signup_link" to='/cadastro'>Cadastre-se</Link></p>
        </div>
      </div>
    )
  
}
  
export default Login