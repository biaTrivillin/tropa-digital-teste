import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Button from './Button';
import { useState } from 'react';
import '../../styles/forms.css'
import PropTypes from 'prop-types';


function FormSignUp({showConfirmEmailPopup}) {

  const [showPasswordTypePass, setShowPasswordTypePass] = useState('password')
  const [showPasswordTypeConfirm, setShowPasswordTypeConfirm] = useState('password')

  const [showPasswordSvg, setShowPasswordSvg] = useState(false)
  const [showPasswordConfirmSvg, setShowPasswordConfirmSvg] = useState(false)

  const passwordArrays = { 
    'passwordType': [ showPasswordTypePass, showPasswordTypeConfirm],
    'setPasswordType': [ setShowPasswordTypePass, setShowPasswordTypeConfirm],
    'showPasswordSvg': [ showPasswordSvg, showPasswordConfirmSvg],
    'setShowPasswordSvg': [ setShowPasswordSvg, setShowPasswordConfirmSvg],
  };

  const showPassword = (indice) => {
    if(passwordArrays.passwordType[indice] !== 'text') passwordArrays.setPasswordType[indice]('text')
    else passwordArrays.setPasswordType[indice]('password')

    if(passwordArrays.showPasswordSvg[indice] !== true) passwordArrays.setShowPasswordSvg[indice](true)
    else passwordArrays.setShowPasswordSvg[indice](false)
  }


  const [emailInformation, setEmailInformation] = useState('')
  const [passwordInformation, setPasswordInformation] = useState('')
  const [passConfirmInformation, setPassConfirmInformation] = useState('')
  // const [termsInformation, setTermsInformation] = useState('')
  const [nameInformation, setNameInformation] = useState('')


  const [emailError, setEmailError] = useState('error')
  const [passwordError, setPasswordError] = useState('error')
  const [passCornfirmError, setPassConfirmError] = useState('error')
  const [termsError, setTermsError] = useState('error')
  const [nameError, setNameError] = useState('error')
  const [emptyError, setEmptyError] = useState('error')

  const [nameValid, setNameValid] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const [passwordConfirmValid, setPasswordConfirmValid] = useState(false)
  const [termsValid, setTermsValid] = useState(false)


  const nameValidation = (event) => {
    setNameInformation(event.target.value)

    let name = event.target.value

    const checkEmail = (name) => {
      let emailPattern =  /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
      return emailPattern.test(name); 
    }

    if(checkEmail(name) !== true) {
      setNameError('error show')
      setNameValid(false)
    } else {
      setNameError('error')
      setNameValid(true)
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
      setEmailValid(false)
    } else {
      setEmailError('error')
      setEmailValid(true)
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
      setPasswordValid(false)
    } else {
      setPasswordError('error')
      setPasswordValid(true)
    }
  }

  const passConfirmValidation = (event) => {
    setPassConfirmInformation(event.target.value)

    let passwordConfim = event.target.value 

    if(passwordConfim !== passwordInformation) {
      setPassConfirmError('error show')
      setPasswordConfirmValid(false)
    } else {
      setPassConfirmError('error')
      setPasswordConfirmValid(true)
    }
  }

  

  const termsValidation = (event) => { //colocar dentro da handle submit 
    // setTermsInformation(event.target.checked)

    let terms = event.target.checked

    if(terms !== true) {
      setTermsValid(false)
    } else {
      setTermsValid(true)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(termsValid !== true) {
      setTermsError('error show')
    } else {
      setTermsError('error')
    }

    console.log(nameValid, emailValid, passwordValid, passwordConfirmValid, termsValid)

    if((nameInformation && emailInformation && passwordInformation && passConfirmInformation ) !== '')setEmptyError('error')
    else setEmptyError('error show')

    if((nameValid && emailValid && passwordValid && passwordConfirmValid && termsValid) !== false) {
      
      // window.location.reload();

      showConfirmEmailPopup()

      let userList = JSON.parse(localStorage.getItem('userList') || '[]')

        userList.push(
            {
                name: nameInformation,
                email: emailInformation,
                password: passwordInformation,
            }
        )

        localStorage.setItem('userList', JSON.stringify(userList))
    }

  }
  
  return (
    <form onSubmit={(e) => {handleSubmit(e)}} className='form_container'>
      <div className="inputs_container">
        <div className='input_text_container'>
          <label htmlFor='name_signup'>Nome</label>
          <input value={nameInformation} onChange={nameValidation} className="input_text" id="name_signup" type="text" placeholder="Insira seu nome"></input>
        </div>
        <span className={nameError}>Seu nome deve conter apenas letras</span>
        <div className='input_text_container'>
          <label htmlFor='email_signup'>E-mail</label>
          <input value={emailInformation} onChange={emailValidation} className="input_text" id="email_signup" type="text" placeholder="Insira seu e-mail"></input>
        </div>
        <span className={emailError}>Esse e-mail é inválido</span>
        <div className='input_text_container'>
          <label htmlFor='password_signup'>Senha</label>
          <button type="button" onClick={() => {showPassword(0)}}>{showPasswordSvg ? <FaRegEye className='input_svg' /> : <FaRegEyeSlash className="input_svg" />}</button>
          <input value={passwordInformation} onChange={passwordValidation} className="input_text" id="password_signup" type={showPasswordTypePass} placeholder="Insira sua senha utilizando apenas números"></input>
        </div>
        <span className={passwordError}>Apenas números são permitidos nesse campo</span>
        <div className='input_text_container'>
          <label htmlFor='password_confirm_signup'>Confirmar senha</label>
          <button type="button" onClick={() => {showPassword(1)}}>{showPasswordConfirmSvg ? <FaRegEye className='input_svg' /> : <FaRegEyeSlash className="input_svg" />}</button>
          <input value={passConfirmInformation} onChange={passConfirmValidation} className="input_text" id="password_confirm_signup" type={showPasswordTypeConfirm} placeholder="Repita a senha criada anteriormente"></input>
        </div>
        <span className={passCornfirmError}>As senhas não correspondem</span>
        <div className='input_radio_container'>
          <input onBlur={termsValidation} id="radio_terms" type="checkbox"></input>
          <label htmlFor="radio_terms">Li e Concordo com os <a>Termos e Condições</a></label>
        </div>
        <span className={termsError}>Você deve concordar com os termos para continuar</span>
        <div className='input_radio_container'>
          <input id="radio_remember_information" type="checkbox"></input>
          <label htmlFor="radio_remember_information">Lembrar e-mail e senha</label>
        </div>
        <span className={emptyError}>Você deve preencher todos os campos para continuar</span>
      </div>
      <Button value='Enviar' id="signup_btn" />
    </form>
  )

}

export default FormSignUp

FormSignUp.propTypes = {
  showConfirmEmailPopup: PropTypes.any,
};