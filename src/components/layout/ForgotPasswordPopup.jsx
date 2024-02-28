import '../../styles/popups.css'
import Button from './Button'
import { FaRegEnvelope } from "react-icons/fa";
// import { useState } from 'react';
import PropTypes from 'prop-types';


function ForgotPasswordPopup ({showForgotPassPopup}) {

    // console.log(showPopup)

    // const [popupStyle, setPopupStyle] = useState('popup_container show')

    // let miap = showPopup;

    // const blabla = () => {
    //     miap = false;

    //     if(miap == true) setPopupStyle('popup_container show')
    //     else setPopupStyle('popup_container hide')
    // }

    
    const handleSubmit = (e) => {
        e.preventDefault()

        showForgotPassPopup()
    }
    

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='popup_container show'>
            <h1>Esqueci minha senha</h1>
            <p>Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>
            <div className='input_text_container popup_input_text_container'>
                <label htmlFor='email_forgot_pass'>E-mail</label>
                <button><FaRegEnvelope className='input_svg' /></button>
                <input className="input_text" id="email_forgot_pass" type="text" placeholder="Insira seu e-mail"></input>
            </div>
            <Button value="Enviar" id="forgot_pass_btn" />
            <div className='cancel_btn_container'>
                <button type='button' onClick={() => showForgotPassPopup()}>Cancelar</button>
            </div>
        </form>
    )
}

export default ForgotPasswordPopup
ForgotPasswordPopup.propTypes = {
    showForgotPassPopup: PropTypes.any,
};