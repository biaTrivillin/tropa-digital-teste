import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Button from './Button';
import { useState } from 'react';
import '../../styles/forms.css'

function FormSignUp() {

  const [showPasswordTypePass, setShowPasswordTypePass] = useState('password')
  const [showPasswordTypeConfirm, setShowPasswordTypeConfirm] = useState('password')

  const [showPasswordSvg, setShowPasswordSvg] = useState('input_svg')
  const [showPasswordConfirmSvg, setShowPasswordConfirmSvg] = useState('input_svg')
  
  const [hidePasswordSvg, setHidePasswordSvg] = useState('input_svg show')
  const [hidePasswordConfirmSvg, setHidePasswordConfirmSvg] = useState('input_svg show')

  const passwordArrays = { 
    'passwordType': [ showPasswordTypePass, showPasswordTypeConfirm],
    'setPasswordType': [ setShowPasswordTypePass, setShowPasswordTypeConfirm],
    'showPasswordSvg': [ showPasswordSvg, showPasswordConfirmSvg],
    'setShowPasswordSvg': [ setShowPasswordSvg, setShowPasswordConfirmSvg],
    'hidePasswordSvg': [ hidePasswordSvg, hidePasswordConfirmSvg],
    'setHidePasswordSvg': [ setHidePasswordSvg, setHidePasswordConfirmSvg],
  };

  const showPassword = (indice) => {
    if(passwordArrays.passwordType[indice] !== 'text') passwordArrays.setPasswordType[indice]('text')
    else passwordArrays.setPasswordType[indice]('password')

    if(passwordArrays.showPasswordSvg[indice] !== 'input_svg show') passwordArrays.setShowPasswordSvg[indice]('input_svg show')
    else passwordArrays.setShowPasswordSvg[indice]('input_svg')

    if(passwordArrays.hidePasswordSvg[indice] !== 'input_svg') passwordArrays.setHidePasswordSvg[indice]('input_svg')
    else passwordArrays.setHidePasswordSvg[indice]('input_svg show')
  }


  const [emailInformation, setEmailInformation] = useState('')
  const [passwordInformation, setPasswordInformation] = useState('')
  const [passConfirmInformation, setPassConfirmInformation] = useState('')
  const [termsInformation, setTermsInformation] = useState('')
  const [nameInformation, setNameInformation] = useState('')


  const [emailError, setEmailError] = useState('error')
  const [passwordError, setPasswordError] = useState('error')
  const [passCornfirmError, setPassConfirmError] = useState('error')
  const [termsError, setTermsError] = useState('error')
  const [nameError, setNameError] = useState('error')


  const nameValidation = (event) => {
    setNameInformation(event.target.value)

    let name = event.target.value

    const checkEmail = (name) => {
      let emailPattern =  /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
      return emailPattern.test(name); 
    }

    if(checkEmail(name) !== true) {
      setNameError('error show')
    } else {
      setNameError('error')
    }
    
  }

  const emailValidation = (event) => {
    setEmailInformation(event.target.value)

    let email = event.target.value

    const checkEmail = (email) => {
      let emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
      return emailPattern.test(email); 
    }

    if(checkEmail(email) !== true) {
      setEmailError('error show')
    } else {
      setEmailError('error')
    }
    
  }

  const passwordValidation = (event) => {
    setPasswordInformation(event.target.value)

    let password = event.target.value

    const checkPassword = (password) => {
      let PasswordPattern =  /^[0-9]+$/;
      return PasswordPattern.test(password); 
    }

    if(checkPassword(password) !== true) {
      setPasswordError('error show')
    } else {
      setPasswordError('error')
    }
  }

  const passConfirmValidation = (event) => {
    setPassConfirmInformation(event.target.value)

    let passwordConfim = event.target.value 

    if(passwordConfim !== passwordInformation) {
      setPassConfirmError('error show')
    } else {
      setPassConfirmError('error')
    }
  }

  const termsValidation = (event) => {
    setTermsInformation(event.target.checked)

    let terms = event.target.checked

    if(terms !== true) {
      setTermsError('error show')
    } else {
      setTermsError('error')
    }
  }
  
  return (
    <div className='form_container'>
      <fieldset className="inputs_container">
        <div className='input_text_container'>
          <label htmlFor='name_signup'>Nome</label>
          <input value={nameInformation} onChange={nameValidation} className="input_text" id="name_signup" required='required' type="text" placeholder="Insira seu nome"></input>
        </div>
        <span className={nameError}>Seu nome deve conter apenas letras</span>
        <div className='input_text_container'>
          <label htmlFor='email_signup'>E-mail</label>
          <input value={emailInformation} onChange={emailValidation} className="input_text" id="email_signup" required='required' type="text" placeholder="Insira seu e-mail"></input>
        </div>
        <span className={emailError}>Esse e-mail é inválido</span>
        <div className='input_text_container'>
          <label htmlFor='password_signup'>Senha</label>
          <button onClick={() => {showPassword(0)}}><FaRegEye className={showPasswordSvg} /><FaRegEyeSlash className={hidePasswordSvg} /></button>
          <input value={passwordInformation} onChange={passwordValidation} className="input_text" id="password_signup" required='required' type={showPasswordTypePass} placeholder="Insira sua senha utilizando apenas números"></input>
        </div>
        <span className={passwordError}>Apenas números são permitidos nesse campo</span>
        <div className='input_text_container'>
          <label htmlFor='password_confirm_signup'>Confirmar senha</label>
          <button onClick={() => {showPassword(1)}}><FaRegEye className={showPasswordConfirmSvg} /><FaRegEyeSlash className={hidePasswordConfirmSvg} /></button>
          <input value={passConfirmInformation} onChange={passConfirmValidation} className="input_text" id="password_confirm_signup" required='required' type={showPasswordTypeConfirm} placeholder="Repita a senha criada anteriormente"></input>
        </div>
        <span className={passCornfirmError}>As senhas não correspondem</span>
        <div className='input_radio_container'>
          <input value={termsInformation} onChange={termsValidation} id="radio_terms" type="checkbox"></input>
          <label htmlFor="radio_terms">Li e Concordo com os <a>Termos e Condições</a></label>
        </div>
        <span className={termsError}>Você deve concordar com os termos para continuar</span>
        <div className='input_radio_container'>
          <input id="radio_remember_information" type="checkbox"></input>
          <label htmlFor="radio_remember_information">Lembrar e-mail e senha</label>
        </div>
      </fieldset>
      <Button value="Cadastrar" id="signup_btn" />
    </div>
  )

}

export default FormSignUp