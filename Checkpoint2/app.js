const API_URL_FAKE = "https://ctd-todo-api.herokuapp.com/v1";

//let documento = document.querySelector('body');
//documento.addEventListener('load', function() {
//    pedirTodosAsPublicaçõesService();
//};    - economizar linha de código balanceando com o HTML. Essas estão sendo substituidas pelo "onload"



//1. Serviços = Comunicação com o servidor. 

function fetchUserData(configuracaoFetch) {
    if(configuracaoFetch.body){
        delete configuracaoFetch.body
    }
    configuracaoFetch.method='GET';
    return fetch(`${BASE_URL_API}/users/getMe/`, configuracaoFetch)
}


//Listar todos 
 function pedirTodasAsPublicacoesService() {
     console.log('Carregou tudo!')

 }

}
// 2. Efeitos do servidor = Modificação do documento HTML.
function criarItensNaDOM() {

//Listar todos
function criarItensDOM() {
    console.log('Criar todos os itens')
}

}

// Remover um 
function removerItenDOM() {
}