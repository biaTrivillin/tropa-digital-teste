import PresentationSection from "../layout/PresentationSection";
import FormSignUp from "../layout/FormSignUp";
import { FaAngleLeft } from "react-icons/fa";

import '../../styles/Login-SignUp.css'


function SignUp() {

    return (
      <div className="content">
        <PresentationSection/>
        <div className="form_content">
          <button className="back_btn"><FaAngleLeft />Voltar</button>
          <h1>Cadastro</h1>
          <FormSignUp/>
        </div>
      </div>
    )
  
}
  
export default SignUp