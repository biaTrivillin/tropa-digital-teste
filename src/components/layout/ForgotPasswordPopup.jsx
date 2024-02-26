import '../../styles/popups.css'
import Button from './Button'
import { FaRegEnvelope } from "react-icons/fa";
import { useState } from 'react';

function ForgotPasswordPopup () {

    const [popupStyle, setPopupStyle] = useState('popup_container show')

    const blabla = () => {
        setPopupStyle('popup_container hide')
    }

    return (
        <div className={popupStyle}>
            <h1>Esqueci minha senha</h1>
            <p>Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>
            <div className='input_text_container popup_input_text_container'>
                <label htmlFor='email_forgot_pass'>E-mail</label>
                <button><FaRegEnvelope className='input_svg' /></button>
                <input className="input_text" id="email_forgot_pass" required='required' type="text" placeholder="Insira seu e-mail"></input>
            </div>
            <Button value="Enviar" id="forgot_pass_btn" />
            <div className='cancel_btn_container'>
                <button onClick={blabla}>Cancelar</button>
            </div>
        </div>
    )
}

export default ForgotPasswordPopup