import '../../styles/forms.css'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import Button from './Button';
import { useState } from 'react';


function FormLogin() {

  const [showPasswordType, setShowPasswordType] = useState('password')

  const [showPasswordSvg, setShowPasswordSvg] = useState('input_svg')
  
  const [hidePasswordSvg, setHidePasswordSvg] = useState('input_svg show')


  const showPassword = () => {
    if(showPasswordType !== 'text') setShowPasswordType('text')
    else setShowPasswordType('password')

    if(showPasswordSvg !== 'input_svg show') setShowPasswordSvg('input_svg show')
    else setShowPasswordSvg('input_svg')

    if(hidePasswordSvg !== 'input_svg') setHidePasswordSvg('input_svg')
    else setHidePasswordSvg('input_svg show')
  }

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
            <button onClick={showPassword} id='show_pass_btn'><FaRegEye className={showPasswordSvg} /><FaRegEyeSlash className={hidePasswordSvg} /></button>
            <input className="input_text" id="password_login" required='required' type={showPasswordType} placeholder="Insira sua senha utilizando apenas números"></input>
          </div>
          <div className='input_radio_container'>
            <input id="radio_login" type="radio"></input>
            <label htmlFor="radio_login">Lembrar e-mail e senha</label>
          </div>
          <span>Login ou senha incorretos</span>
        </fieldset>
        <Button value="Entrar" id="login_btn" />
      </div>
    )
  
}
  
export default FormLogin