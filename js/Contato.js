window.onload = function () {
    var formulario = document.getElementById("formulario")
    if (formulario) {
        formulario.addEventListener("submit"), (e) => {
            e.preventDefault();
            var nome = document.getElementById("nome")
            var email = document.getElementById("email")
            var comentario = document.getElementById("comentario")

            if (nome == null) {
                alert("preencha o seu nome!")
                return
            } else if (nome.length <= 5 || nome.indexOf(" ") < 0) {
                alert("preencha o seu nome completo!")
                return
            }

            if (email == null) {
                alert("preencha o seu e-mail completo!")
                return
            } else if (email.length <= 10) {
                alert("preencha o seu e-mail completo!")
                return
            }

            if (comentario == null) {
                alert("preencha o seu comentário!")
                return
            } else if (comentario.length <= 50) {
                alert("o seu comentario deve ter pelo menos 50 caractéres!")
                return
            }

            alert("agradecemos o seu contato!")
        }
    }
}