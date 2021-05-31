function cronometro() {
    let segundos = 0;
    let relogio;
    const horaSegundos = (segundos)=> {
        const novaHora = new Date(segundos * 1000);
        return novaHora.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'});
    }
    const cronometro = document.getElementById('cronometro');
    document.addEventListener('click', (e)=> {
        const el = e.target;
        if(el.id =='iniciar'){
            cronometro.classList = 'iniciado';
            relogio = setInterval(() =>{
                segundos++;
                cronometro.innerHTML = horaSegundos(segundos);
            }, 1000);
        };
        if(el.id =='pausar'){
            cronometro.classList = 'pausado';
            clearInterval(relogio)
        };
        if(el.id =='zerar'){
            cronometro.classList = 'zerado';
            clearInterval(relogio);
            segundos = 0;
            cronometro.innerHTML = '00:00:00'; 
        };
    });
};

cronometro();