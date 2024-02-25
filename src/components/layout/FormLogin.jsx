import '../../styles/forms.css'
import { FaRegEye } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import Button from './Button';


function FormLogin() {

    return (
      <div className='form_container'>
        <fieldset className="inputs_container">
          <div className='input_text_container'>
            <label htmlFor='email_login'>E-mail</label>
            <button><FaRegEnvelope className='input_svg' /></button>
            <input className="input_text" id="email_login" required='required' type="text" placeholder="Insira seu e-mail"></input>
          </div>
          <div className='input_text_container'>
            <label htmlFor='password_login'>Senha</label>
            <button><FaRegEye className='input_svg' id='show_pass_btn' /></button>
            <input className="input_text" id="password_login" required='required' type="password" placeholder="Insira sua senha utilizando apenas números"></input>
          </div>
          <div className='input_radio_container'>
            <input id="radio_login" type="radio"></input>
            <label htmlFor="radio_login">Lembrar e-mail e senha</label>
          </div>
          <span>Login ou senha incorretos</span>
        </fieldset>
        <Button value="Entrar" id="login_btn" />
        <div className='forgot_pass_btn_container'>
          <button>Esqueceu a senha?</button>
        </div>
      </div>
    )
  
}
  
export default FormLogin