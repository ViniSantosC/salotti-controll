const form = document.getElementById("form");
const inputusuario = document.getElementById("usuario");
const inputsenha = document.getElementById("senha");
const btnlogin = document.getElementById("btnlogin");
const validade = document.getElementById('valido')



btnlogin.addEventListener("click", function (event) {
  event.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "admin" && senha === "1234") {
    window.location.href = "interface.html";
  } else {
    validade.innerHTML = ""
    validade.innerHTML =`<p> usuario invalido </p>
    <p> senha invalida </p>`
    
  }
});

function sair() {
  window.location.href = "login.html";
}
function renderLogin() {
  form.innerHTML = `
        <head>title
        </head>
        <img src="img/icons8-lock.svg" alt="logo" class="logo1">
            <h2 class="tilo">Salotti-Controll</h2>
            <h4 class="subtitulo">Controle de Alunos</h4>
            <input type="text" id="usuario" placeholder="Usuário" class="inp"><br>
            <input type="email" id="email" placeholder="Email" class="inpv"><br>
            <input type="password" id="senha" placeholder="Senha" class="inp1"><br>
            <button type="button" id="btncadastro" class="btn1">Cadastrar</button>
    `;

  const btncadastro = document.getElementById("btncadastro");
  btncadastro.addEventListener("click", function () {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const email = document.getElementById("email").value;

    if (usuario === "" || senha === "" || email === "") {
      alert("prencha os campos por favor");
      return;
    } else {
      window.location.href = "login.html";
    }
  });
}