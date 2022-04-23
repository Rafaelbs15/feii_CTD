fetch('https://jsonplaceholder.typicode.com/guide/')
    .then(respostaDoServidor) => respostaDoServidor.jason())
  
    // OU 

    //.then(function(respostaDoServidor) {
    //    return respostaDoServidor.jason(); 
    //}


// Pedir todos os postos 


fetch('https://jsonplaceholder.typicode.com/guide/')

//OU 


.then(function(respostaDoServidor) {
  return respostaDoServidor.jason(); 
})

.then(function(respostaDoServidorEmJSON) {

    criaItens(respostaDoServidorEmJSON)
});

function criarItens(respostaDoServidor) {

    //Varre o objeto e retorna item por item
    respostaDoServidor.map(function(corpoDaPublica) {
        console.log(`Tarefa: ${corpoDaPublica}`)
    }
}