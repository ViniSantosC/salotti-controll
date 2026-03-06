function sair () {
    window.location.href='login.html';
}

const form = document.getElementById("form")

function renderLogin() {
    form.innerHTML = `
        <head>title
        </head>
        <img src="img/icons8-lock.svg" alt="logo" class="logo1">
            <h2 class="tilo">Salotti-Controll</h2>
            <h4 class="subtitulo">Controle de Alunos</h4>
            <input type="text" placeholder="Usuário" class="inp"><br>
            <input type="email" placeholder="Email" class="inp"><br>
            <input type="password" placeholder="Senha" class="inp1"><br>
            <button type="button" class="btn1" onclick="if(confirm('Agradecemos por confiar em nosso site! Seus dados serão guardados com total segurança e sigilo em nossa base')) sair()">Cadastrar</button>
    `
}