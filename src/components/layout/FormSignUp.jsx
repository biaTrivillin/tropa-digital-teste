// import '../../styles/Form.css'
import { FaRegEye } from "react-icons/fa";
import Button from './Button';

function FormSignUp() {

    return (
      <div className='form_container'>
        <fieldset className="inputs_container">
          <div className='input_text_container'>
            <label htmlFor='name_signup'>Nome</label>
            <input className="input_text" id="name_signup" required='required' type="text" placeholder="Insira seu nome"></input>
          </div>
          <div className='input_text_container'>
            <label htmlFor='email_signup'>E-mail</label>
            <input className="input_text" id="email_signup" required='required' type="text" placeholder="Insira seu e-mail"></input>
          </div>
          <div className='input_text_container'>
            <label htmlFor='password_signup'>Senha</label>
            <button><FaRegEye className='input_svg' /></button>
            <input className="input_text" id="password_signup" required='required' type="password" placeholder="Insira sua senha utilizando apenas números"></input>
          </div>
          <div className='input_text_container'>
            <label htmlFor='password_confirm_signup'>Confirmar senha</label>
            <button><FaRegEye className='input_svg' /></button>
            <input className="input_text" id="password_confirm_signup" required='required' type="password" placeholder="Repita a senha criada anteriormente"></input>
          </div>
          <div className='input_radio_container'>
            <input id="radio_terms" type="radio"></input>
            <label htmlFor="radio_terms">Li e Concordo com os <a>Termos e Condições</a></label>
          </div>
          <div className='input_radio_container'>
            <input id="radio_remember_information" type="radio"></input>
            <label htmlFor="radio_remember_information">Lembrar e-mail e senha</label>
          </div>
        </fieldset>
        <Button value="Cadastrar" id="signup_btn" />
      </div>
    )
  
}
  
export default FormSignUp