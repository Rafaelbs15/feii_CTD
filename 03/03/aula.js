
//Como selecionar os itens do DOM HTML

//document é o arquivo html



var primeiroItem = document.getElementById("primeiro"); 

console.log(primeiroItem);
// retorna elemento html


// id = #  ; class = . 

var segundoItem = document.querySelector("#segundo")

console.log(segundoItem);
// retorna elemento html



var todosElementosDaClasse = document.querySelectorAll(".item")

console.log(todosElementosDaClasse);



//--------

//Manipulando elementos selecionados


primeiroItem.innerText = "Primeiro item";
todosElementosDaClasse[2].innerText = "Teceiro item";

segundoItem.innerHTML = "<h1>Segundo item</h1>";



