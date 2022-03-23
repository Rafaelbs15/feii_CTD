var documento = document.body;
var telaInicial = document.getElementById('telaInicial');
var coordenadas = document.querySelectorAll('.coordenada');

documento.addEventListener('keydown', function (e){
    if(e.code==='Space'){
        telaInicial.style.display = 'none';
    }
    else if(e.code==='Escape'){
        telaInicial.style.display = 'flex';
        coordenadas.forEach((e) => {
            e.innerText = '';
        })
    }
})

coordenadas.forEach((e) => {
    e.addEventListener('click', ()=>{
        e.innerText = 'X';
    });

    e.addEventListener('dblclick', ()=>{
        e.innerText = 'O';
    });
})

  