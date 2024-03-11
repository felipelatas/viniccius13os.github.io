document.getElementById("Formulario").addEventListener('submit', (event) => {
    event.preventDefault()
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var comentario = document.getElementById("comentario").value

    if (nome.length <= 5 || nome.indexOf(" ") < 0) {
        alert("preencha o seu nome completo!")
        return
    }
    if (email.length <= 10) {
        alert("preencha o seu e-mail completo!")
        return
    }
    if (comentario.length <= 20) {
        alert("o seu comentario deve ter pelo menos 20 caractéres!")
        return
    }

    alert("agradecemos o seu contato!")
    document.getElementById("Formulario").reset()
})
