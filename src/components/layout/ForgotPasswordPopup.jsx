import '../../styles/popups.css';
import Button from './Button';
import { FaRegEnvelope } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useState } from 'react';


function ForgotPasswordPopup ({showForgotPassPopup}) {

    const [emailValid, setEmailValid] = useState(false);

    const [emailError, setEmailError] = useState('error');

    const emailValidation = (e) => {
    
        let email = e.target.value;
    
        const checkEmail = (email) => {
          let emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
          return emailPattern.test(email); 
        }
    
        if(!checkEmail(email) && email !== '') {
          setEmailValid(false);
          setEmailError('error show');
        } else {
          setEmailValid(true);
          setEmailError('error');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(emailValid) {
            showForgotPassPopup();
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='popup_container'>
            <h1>Esqueci minha senha</h1>
            <p>Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>
            <div className='input_text_container popup_input_text_container'>
                <label htmlFor='email_forgot_pass'>E-mail</label>
                <FaRegEnvelope className='input_svg' />
                <input onChange={emailValidation} className="input_text" id="email_forgot_pass" type="text" placeholder="Insira seu e-mail"></input>
            </div>
            <span className={emailError}>Esse e-mail é inválido</span>
            <Button value="Enviar" id="forgot_pass_btn" />
            <div className='cancel_btn_container'>
                <button type='button' onClick={() => showForgotPassPopup()}>Cancelar</button>
            </div>
        </form>
    )
}

export default ForgotPasswordPopup;

ForgotPasswordPopup.propTypes = {
    showForgotPassPopup: PropTypes.any,
};