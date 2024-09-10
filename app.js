function pesquisar(){
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Se o campo pesquisa estiver vazio
    if (!campoPesquisa) {
        section.innerHTML = "Campo vazio - Nenhuma informação foi encontrada."
        return;
    }
    
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let genero = "";
    let ano = 0;
    let plataformas = "";
    let tags = "";

    // Itera sobre os dados e constrói o HTML para cada item
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        genero = dado.genero.toLowerCase();
        plataformas = dado.plataformas.toLowerCase();
        tags = dado.tags.toLowerCase();

        // se titulo include campoPesquisa, então faça...
        if(titulo.includes(campoPesquisa) || genero.includes(campoPesquisa) || dado.ano == campoPesquisa || plataformas.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.ano} - ${dado.classificacao}</p>
                <p class="descricao-meta">${dado.genero}</p>
                <p class="descricao-meta">${dado.sinopse}</p>
                <p class="descricao-meta">Disponível em: ${dado.plataformas}.</p>
            </div>`;
        }
    }

    //Se não houver resultados
    if (!resultados){
        resultados = "Nenhuma informação foi encontrada."
    }

    // Atribui o HTML gerado à seção
    section.innerHTML = resultados;
  }
