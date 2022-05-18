
document.addEventListener('click', e =>{
    const el = e.target;

    const elText = el.innerText.toLowerCase();
    if(elText === 'moon' || elText === 'europa' || elText === 'mars' || elText === 'titan' || elText === 'lua' || elText === 'europa' || elText === 'marte' || elText === 'titã' ){
        e.preventDefault();
        carregaPagina(el)
    }
});

async function carregaPagina(el){
    try{
        
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if( response.status !== 200) throw new Error('ERRO 404')
        
        const html = await response.text();
        
        carregaResultado(html)


    } catch(e){
        console.log(e)
    }
    
}


function carregaResultado(response){
    const resultado = document.querySelector('.main');
    resultado.innerHTML = response;
}

