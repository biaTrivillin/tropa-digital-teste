function Dashboard() {

  if (localStorage.getItem('token') == null) {
    window.location.href = '/'
  }

  //criar botão de sair // apagar token

    return (
      <div>
        <h1>Cadastro</h1>
      </div>
    )
  
}
  
export default Dashboard