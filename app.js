function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campopesquisa = document.getElementById("campo-pesquisa").value;

  // se campopesquisa for uma string sem nada
  if (!campopesquisa) {
    section.innerHTML = "<p>Nenhum resultado foi encontrado</p>";
    return;
  }

  campopesquisa = campopesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // se titulo includes campopesquisa
    if (
      titulo.includes(campopesquisa) ||
      descricao.includes(campopesquisa) ||
      tags.includes(campopesquisa)
    ) {
      // cria um novo elemento
      resultados += `
          <div class="item-resultado">
              <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
      `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nenhum resultado foi encontrado</p>";
  }
  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}
