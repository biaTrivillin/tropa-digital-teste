import '../../styles/forms.css'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import Button from './Button';
import { useState } from 'react';


function FormLogin() {

  const [showPasswordType, setShowPasswordType] = useState('password')

  // const [showPasswordSvg, setShowPasswordSvg] = useState('input_svg')
  const [showPasswordSvg, setShowPasswordSvg] = useState(false)
  
  // const [hidePasswordSvg, setHidePasswordSvg] = useState('input_svg show')


  const showPassword = () => {
    if(showPasswordType !== 'text') setShowPasswordType('text')
    else setShowPasswordType('password')

    

    // if(showPasswordSvg !== 'input_svg show') setShowPasswordSvg('input_svg show')
    // else setShowPasswordSvg('input_svg')

    if(showPasswordSvg !== true) setShowPasswordSvg(true)
    else setShowPasswordSvg(false)

    // if(hidePasswordSvg !== 'input_svg') setHidePasswordSvg('input_svg')
    // else setHidePasswordSvg('input_svg show')
  }

  const [emailLoginInformation, setEmailLoginInformation] = useState('')
  // const [passwordLogin, setPasswordLogin] = useState('')
  const [emailLoginValid, setEmailLoginValid] = useState('')
  const [passwordLoginValid, setPasswordLoginValid] = useState('')
  const [errorMessageStyle, setErrorMessageStyle] = useState('error')
  const [errorMessage, setErrorMessage] = useState('Você deve preencher todos os campos para continuar')

  let userList = JSON.parse(localStorage.getItem('userList'))

  // let emailLogin

  const emailLoginValidation = (e) => {
    setEmailLoginInformation(e.target.value)

    let emailLogin = e.target.value

    // console.log(emailLogin)

    // userList = JSON.parse(localStorage.getItem('userList'));

    userList.forEach((item) => {
      if(emailLogin == item.email) {
        setEmailLoginValid(true);
      } else {
        setEmailLoginValid(false);
      }
    })
    
  }

  const passwordLoginValidation = (e) => {
    // setEmailLoginInformation(e.target.value)

    let passwordLogin = e.target.value

    let token = Math.random().toString(10);

    // let userValid = {
    //   nameValid: 'name',
    //   passwordValid: 'password',
    // } 

    userList.forEach((item) => {
      if((emailLoginInformation == item.email ) && (passwordLogin == item.password)) {
        setPasswordLoginValid(true)

        let user = JSON.parse(localStorage.getItem('user'))

        user = {
          email: item.email,
          name: item.name
        }

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        // setErrorMessage('Login ou senha incorretos')
      } else {
        setPasswordLoginValid(false)
        // setErrorMessage('Você deve preencher todos os campos para continuar')
      }
    })

    userList.forEach(() => {
      if((emailLoginInformation == '' ) || (passwordLogin == '')) {
        setErrorMessage('Você deve preencher todos os campos para continuar')
      } else {
        setErrorMessage('Email ou senha incorretos')
      }
    })

    // console.log(passwordLoginValid)
  
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if(emailLoginValid && passwordLoginValid){
      console.log('logouuu!')
      setErrorMessageStyle('error')
      window.location.href = '/dashboard'
    } else {
      setErrorMessageStyle('error show')
    }

    console.log(emailLoginValid)
    console.log(passwordLoginValid)
  }


    return (
      <form onSubmit={(e) => {handleSubmit(e)}} className='form_container'>
        <fieldset className="inputs_container">
          <div className='input_text_container'>
            <label htmlFor='email_login'>E-mail</label>
            <button><FaRegEnvelope className='input_svg' /></button>
            <input onBlur={(e) => {emailLoginValidation(e)}} className="input_text" id="email_login" type="text" placeholder="Insira seu e-mail"></input>
          </div>
          <div className='input_text_container'>
            <label htmlFor='password_login'>Senha</label>
            {/* <button onClick={showPassword} id='show_pass_btn'><FaRegEye className={showPasswordSvg} /><FaRegEyeSlash className={hidePasswordSvg} /></button> */}
            <button type='button' onClick={showPassword} id='show_pass_btn'>{showPasswordSvg ? <FaRegEye className='input_svg' /> : <FaRegEyeSlash className="input_svg" />}</button>
            <input onBlur={(e) => {passwordLoginValidation(e)}} className="input_text" id="password_login" type={showPasswordType} placeholder="Insira sua senha utilizando apenas números"></input>
          </div>
          <div className='input_radio_container'>
            <input id="radio_login" type="radio"></input>
            <label htmlFor="radio_login">Lembrar e-mail e senha</label>
          </div>
          <span className={errorMessageStyle}>{errorMessage}</span>
        </fieldset>
        <Button value="Entrar" id="login_btn" />
      </form>
    )
  
}
  
export default FormLogin