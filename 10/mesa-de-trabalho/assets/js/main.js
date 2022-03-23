
// 1. Selecione o formulário
var pegandoFormulario = document.querySelector("#formularioDeCadastro");


// 2. Crie da rotina que será disparada a partir do evento de envio
var selectValue = "";
var selectValueSemEspaco =  "";
// var selectValueSemNum = "";
var selectLista = document.querySelector(".c-lista__item");


selectForm.addEventListener("submit", function(evento){
    selectValue = evento.target[0].value;

    // 2.2. Remova todos os espaços vazios
    selectValueSemEspaco =  selectValue.replace(/\s/g, "");

    // 2.1. Remova todos os números permitindo apenas texto
    var selectValueSemNum =  selectValueSemEspaco.replace(/\d/g, "");
    console.log(selectLista);
    selectLista.innerText = selectValueSemNum;
    evento.preventDefault();
})

// console.log(selectLista);
// 3. Capture o evento de envio do formulário e disparar a rotina