// 1
var documento = document.body
var app = document.querySelector(".l-app");
var sideBar = document.querySelector("#l-sidebar");
var botao = document.querySelector(".l-sidebar__btn");
var pagina = document.querySelector("#bg__profile");
var sobremim = document.querySelector("#sobre-mim");
var contato = document.querySelector("#contatos");
var controle = 0;


//1.1

botao.addEventListener("click", function(evento){
    if (evento) {
        if (controle == 0) {
            sideBar.classList.add("l-sidebar--open");
            // sideBar.classList.remove("l-sidebar--open");
            sideBar.classList.remove("l-sidebar--close");
            controle = 1;
        } else {
            sideBar.classList.remove("l-sidebar--open");
            sideBar.classList.add("l-sidebar--close");
            controle = 0;
        }}

});

var fechar = document.querySelector(".l-sidebar1");
fechar.addEventListener("click", (evento) => {
    if (evento) {
        if (controle == 0) {
            sideBar.classList.add("l-sidebar--open");
            // sideBar.classList.remove("l-sidebar--open");
            sideBar.classList.remove("l-sidebar--close");
            controle = 1;
        } else {
            sideBar.classList.remove("l-sidebar--open");
            sideBar.classList.add("l-sidebar--close");
            controle = 0;
        }}

});


// 2 parte - Vinicius ------------------------------------------------------------
// function sideB(){

// sideBar.classList.add('l-sidebar--close')

// }

// sideB()

// function AbrirFechar(){

// var auxiliar = sideBar.classList[1]

//     if (auxiliar == 'l-sidebar--close'){

// sideBar.classList.remove('l-sidebar--close')
// sideBar.classList.add('l-sidebar--open')
    
//     }else{

// sideBar.classList.remove('l-sidebar--open')
// sideBar.classList.add('l-sidebar--close')

// }

// };

documento.addEventListener("keydown", (key) => { 
    if (key.code == "Space") {
        if (controle == 0) {
            sideBar.classList.add("l-sidebar--open");
            // sideBar.classList.remove("l-sidebar--open");
            sideBar.classList.remove("l-sidebar--close");
            controle = 1;
        } else {
            sideBar.classList.remove("l-sidebar--open");
            sideBar.classList.add("l-sidebar--close");
            controle = 0;
        }
    }

    });


//!-------------------------------------------------------------------------------------

//3.

app.addEventListener("dblclick", function(evento){
    if (evento) {
        if (controle == 0) {
            sideBar.classList.add("l-sidebar--open");
            // sideBar.classList.remove("l-sidebar--open");
            sideBar.classList.remove("l-sidebar--close");
            controle = 1;
        } else {
            sideBar.classList.remove("l-sidebar--open");
            sideBar.classList.add("l-sidebar--close");
            controle = 0;
        }}
});

// 4 - Todos ---------------------------------------------------------------------------


var caixaTexto = document.querySelector('.cursor');

document.addEventListener('mousemove', function(m){

    var xPos = m.pageX + 15;
    var yPos = m.pageY + 15;

    caixaTexto.style.left = xPos + 'px';
    caixaTexto.style.top = yPos + 'px';

});


pagina.addEventListener('mouseover', function (e){ 
    caixaTexto.innerHTML = "Bem Vindo!";
    
});

sobremim.addEventListener('mouseover', function (e){ 
    caixaTexto.innerHTML = "Sobre Mim!";

});

contato.addEventListener('mouseover', function (e){ 
    caixaTexto.innerHTML = "Entre em Contato!";

});