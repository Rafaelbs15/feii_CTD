const API_URL_FAKE = "https://jsonplaceholder.typicode.com";

// 1. Serviços = Comunicação com o servidor.

// Listar todos.
function pedirTodasAsPublicacoesService() {

    // 1. Pedir algo ao servidor e aguardar a conclusão da Promessa.
    fetch(API_URL_FAKE + '/posts')
        .then(function(respostaDoServidor) {

            // 2. Pedir a resposta do JSON ao servidor.
            let respostaDoServidorEmJSON = respostaDoServidor.json();

            // 3. Retornar a promessa do JSON. 
            return respostaDoServidorEmJSON;
        })
        .then(function(respostaDoServidorEmJSON) {

            // 4. Capturei a resposta do servidor do JSON.
            console.log(respostaDoServidorEmJSON);
            console.log('Servidor: Carregou todos os itens.');

            // 5. Criar os itens no documento HTML.
            criarItensNaDOM(respostaDoServidorEmJSON);
        });
    
}

// Remover um.
function pedirRemocaoDaPublicacaoService(idDaPublicacao) {

    const configuracoes = {
        method: 'DELETE',
    }

    fetch(API_URL_FAKE + '/posts/' + idDaPublicacao, configuracoes)
        .then(function(respostaDoServidor) {

            // 2. Pedir a resposta do JSON ao servidor.
            let respostaDoServidorEmJSON = respostaDoServidor.json();

            // 3. Retornar a promessa do JSON. 
            return respostaDoServidorEmJSON;
        })
        .then(function() {

            // 4. Capturei a resposta do servidor do JSON.
            console.log(`Servidor: Item ${idDaPublicacao} deletado.`);

            // 5. Criar os itens no documento HTML.
            removerItemNaDOM(idDaPublicacao);
        });
}


// 2. Efeitos colaterais = Modificação do documento HTML.

// Listar todos.
function criarItensNaDOM(respostaDoServidorEmJSON) {
    console.log('Cliente: Criou todos os itens no documento.');
    
    // Seleção do container Aplicativo.
    let elementoAplicativoHTML = document.querySelector('.aplicativo');

    // Apagar todos itens.
    elementoAplicativoHTML.innerHTML = '';

    respostaDoServidorEmJSON.map(function(publicacao) {
        // OK title: Titulo.
        let tituloDaPublicacao = publicacao.title;
        // OK body: Corpo do texto.
        let corpoDaPublicacao = publicacao.body;
        // X userId: Id do usuário.
        // OK id: Id da publicacao.
        let idDaPublicacao = publicacao.id;

        // Modelo Cartão do HTML.
        let elementoCartaoHTML = `
            <div class="cartao">
                <section class="cartao__corpo">
                    <h1 class="titulo">${tituloDaPublicacao}</h1>
                    <p class="descricao">${corpoDaPublicacao}</p>
                    <div class="my">
                        <button 
                            class="botao__excluir" 
                            onclick="pedirRemocaoDaPublicacaoService(${idDaPublicacao})"
                        >
                            Excluir
                        </button>
                    </div>
                </section>
            </div>
        `;

        // Adição do Cartão no container Aplicativo.
        elementoAplicativoHTML.innerHTML += elementoCartaoHTML;
    });
}

// Remover um.
function removerItemNaDOM(idDaPublicacao) {

    // Ele vai perdir ao servidor a lista atualizada
    // e recriar todos os itens novamente.
    pedirTodasAsPublicacoesService();

    console.log(`Cliente: Item ${idDaPublicacao} deletado no documento HTML.`)
}
