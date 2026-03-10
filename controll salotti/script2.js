const cadastro_aluno = document.getElementById("cadastroal");
const conteine_materia = document.querySelector(".materia"); 
const materias = [];

function aparece() {
  cadastro_aluno.classList.remove("desaparece"); 
  cadastro_aluno.innerHTML = `
        <div class="al">
          <img src="img/icons8-graduate-96.png" alt="icon">
          <h2>Cadastrar Novo Aluno</h2>
        </div>
        <div class="c1">
          <div>
            <label for="nome">NOME</label><br>
            <input type="text" class="nome" placeholder="Nome do Aluno">
          </div>
          <div>
            <label for="turma">TURMA</label><br>
            <input type="text" class="turma" placeholder="Ex:3DM">
          </div>
          <div>
            <label for="ra">RA</label><br>
            <input type="text" class="ra" placeholder="Ex:00011....">
          </div>
        </div>
        <div class="c1">
          <div>
            <label for="forte">🌟 PONTOS FORTES</label><br>
            <input type="text" class="forte" placeholder="Descreva os pontos forte do Aluno ">
          </div>
          <div>
            <label for="fraco">⚠️ PONTOS FRACO</label><br>
            <input type="text" class="fraco" placeholder="Descreva os pontos fraco do Aluno ">
          </div>
        </div>
        <button>Cadastrar Aluno</button>`;
}

function adicionarmateria() {
  const input = document.getElementById("inputmateria");
  const valor = input.value.trim();

  if (valor === "") {
    alert("Preencha o campo da matéria");
    return;
  }

  // Adiciona ao array e limpa o input
  materias.push(valor);
  input.value = "";


  renderizarMaterias();
}

function renderizarMaterias() {
  let lista = document.getElementById("lista-materias");
  
  if (!lista) {
    lista = document.createElement("div");
    lista.id = "lista-materias";
    conteine_materia.appendChild(lista);
  }
  lista.innerHTML = `<strong>Matérias:</strong> ${materias.join(", ")}`;
}
