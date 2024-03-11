// window.onload = init()

function init() {
        var nome = document.getElementsByClassName("nome")
        var email = document.getElementsByClassName("email")
        var comentario = document.getElementsByClassName("comentario")

        if (nome.length <= 5 || nome.indexOf(" ") < 0) {
            alert("preencha o seu nome completo!")
            return
        }
        if (email.length <= 10) {
            alert("preencha o seu e-mail completo!")
            return
        }
        if (comentario.length <= 50) {
            alert("o seu comentario deve ter pelo menos 50 caractéres!")
            return
        }

        alert("agradecemos o seu contato!")
}
