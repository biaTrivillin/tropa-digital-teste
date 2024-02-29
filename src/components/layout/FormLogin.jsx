import '../../styles/forms.css';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import Button from './Button';
import { useState } from 'react';


function FormLogin() {

  const [showPasswordType, setShowPasswordType] = useState('password');
  const [showPasswordSvg, setShowPasswordSvg] = useState(false);

  const showPassword = () => {
    if(showPasswordType !== 'text') setShowPasswordType('text');
    else setShowPasswordType('password');

    if(showPasswordSvg !== true) setShowPasswordSvg(true);
    else setShowPasswordSvg(false);
  }

  const [emailLoginInformation, setEmailLoginInformation] = useState('');

  const [emailLoginValid, setEmailLoginValid] = useState('');
  const [passwordLoginValid, setPasswordLoginValid] = useState('');

  const [errorMessageStyle, setErrorMessageStyle] = useState('error');
  const [errorMessage, setErrorMessage] = useState('Você deve preencher todos os campos para continuar');

  let userList = JSON.parse(localStorage.getItem('userList') || '[]');

  const emailLoginValidation = (e) => {
    setEmailLoginInformation(e.target.value);

    let emailLogin = e.target.value;

    let isRegistred = userList.some((item) => item.email === emailLogin);

    if (isRegistred) {
      setEmailLoginValid(true);
    }
    else{
      setEmailLoginValid(false);
    } 
  }

  const passwordLoginValidation = (e) => {

    let passwordLogin = e.target.value;

    let userValid = {
      nameValid: 'name',
      emailValid: 'email',
      passwordValid: 'password',
    }

    let token = Math.random().toString(10);

    userList.forEach((item) => {
        if((emailLoginInformation == item.email) && (passwordLogin == item.password)) {
            
            userValid = {
                nameValid: item.name,
                emailValid: item.email,
                passwordValid: item.password,  
            }

        }
    });

    if(passwordLogin == userValid.passwordValid) {
      setPasswordLoginValid(true)
      localStorage.setItem('token', token);
      localStorage.setItem('userValid', JSON.stringify(userValid));
    } else {
      setPasswordLoginValid(false)
    }

    userList.forEach(() => {
      if((emailLoginInformation == '' ) || (passwordLogin == '')) {
        setErrorMessage('Você deve preencher todos os campos para continuar');
      } else {
        setErrorMessage('Email ou senha incorretos');
      }
    });
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if( emailLoginValid && passwordLoginValid){
      setErrorMessageStyle('error');
      window.location.href = '/dashboard';
    } else {
      setErrorMessageStyle('error show');
    }
  }

    return (
      <form onSubmit={(e) => {handleSubmit(e)}} className='form_container'>
        <fieldset className="inputs_container">
          <div className='input_text_container'>
            <label htmlFor='email_login'>E-mail</label>
            <FaRegEnvelope className='input_svg mail_svg' />
            <input onBlur={(e) => {emailLoginValidation(e)}} className="input_text" id="email_login" type="text" placeholder="Insira seu e-mail"></input>
          </div>
          <div className='input_text_container'>
            <label htmlFor='password_login'>Senha</label>
            <button type='button' onClick={showPassword} id='show_pass_btn'>{showPasswordSvg ? <FaRegEye className='input_svg' /> : <FaRegEyeSlash className="input_svg" />}</button>
            <input onBlur={(e) => {passwordLoginValidation(e)}} className="input_text" id="password_login" type={showPasswordType} placeholder="Insira sua senha utilizando apenas números"></input>
          </div>
          <div className='input_radio_container'>
            <input id="radio_login" type="checkbox"></input>
            <label htmlFor="radio_login">Lembrar e-mail e senha</label>
          </div>
          <span className={errorMessageStyle}>{errorMessage}</span>
        </fieldset>
        <Button value="Entrar" id="login_btn" />
      </form>
    )
  
}
  
export default FormLogin;