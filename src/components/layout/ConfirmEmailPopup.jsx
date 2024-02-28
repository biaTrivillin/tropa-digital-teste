import '../../styles/popups.css'
import Button from './Button'
import PropTypes from 'prop-types';


function ConfirmEmailPopup ({showConfirmEmailPopup}) {

    const handleSubmit = (e) => {
        e.preventDefault()

        showConfirmEmailPopup()

        window.location.href = '/'
    }
    

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='popup_container show'>
            <h1>Confirme seu E-mail</h1>
            <p>Para finalizar seu cadastro, enviamos um e-mail de confirmação para <a href="mailto:teste.tes@gmail.com">teste.tes@gmail.com</a>. Verifique sua caixa de entrada e clique no link “Confirmar E-mail”.</p> 
            <p>Caso não tenha recebido o e-mail clique em “Enviar e-mail novamente” que enviaremos um novo e-mail.</p>
            <Button value="Fechar" id="confirm_email_btn" />
            <div className='send_email_btn_container'>
                <button type='button'>Enviar e-mail novamente</button>
            </div>
        </form>
    )
}

export default ConfirmEmailPopup

ConfirmEmailPopup.propTypes = {
    showConfirmEmailPopup: PropTypes.any,
};