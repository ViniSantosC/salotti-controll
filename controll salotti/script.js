
const inputnome = document.getElementById("nome");
const inputturma = document.getElementById("turma");
const inputra = document.getElementById("ra");
const btnadicionar = document.getElementById("btnadicionar");
const listaalunos = document.getElementById("listaalunos");
const alunos = [];



btnadicionar.addEventListener("click", function () {
  const nome = inputnome.value;
  const turma = inputturma.value;
  const ra = inputra.value;

  if (nome === "" || turma === "" || ra === "") {
    alert("prencha todos os campos");
    return;
  }

  const aluno = {
    nome: nome,
    turma: turma,
    ra: ra,
  };
  alunos.push(aluno);
  rederizaralunos();
  
  inputnome.value = "";
  inputturma.value = ""; 
  inputra.value = "";
});

function rederizaralunos() {
  listaalunos.innerHTML = "";

  for (let i = 0; i < alunos.length; i++) {
    listaalunos.innerHTML += `
        <div class="card-aluno">
        <p><strong>Nome:</strong>${alunos[i].nome}</p>
        <p><strong>Turma:</strong>${alunos[i].turma}</p>
        <p><strong>Ra:</strong>${alunos[i].ra}</p>
        </div>
        :`;
  }
}

