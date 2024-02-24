import '../../styles/popups.css'
import Button from './Button'
import { FaRegEnvelope } from "react-icons/fa";
// import '../../styles/forms.css'

function ForgotPasswordPopup () {
    return (
        <div className='popup_container'>
            <h1>Esqueci minha senha</h1>
            <p>Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>
            <div className='input_text_container'>
                <label htmlFor='email_forgot_pass'>E-mail</label>
                <button><FaRegEnvelope className='input_svg' /></button>
                <input className="input_text" id="email_forgot_pass" required='required' type="text" placeholder="Insira seu e-mail"></input>
            </div>
            <Button value="Enviar" id="forgot_pass_btn" />
            <button>Cancelar</button>
        </div>
    )
}

export default ForgotPasswordPopup