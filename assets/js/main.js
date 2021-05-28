let segundos = 0;
let relogio;
const horaSegundos = (segundos)=> {
    const novaHora = new Date(segundos * 1000);
    return novaHora.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'});
}
const cronometro = document.getElementById('cronometro');
const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const zerar = document.getElementById('zerar');
iniciar.addEventListener('click', (e) => {
    cronometro.classList = 'iniciado';
    relogio = setInterval(() =>{
    segundos++;
    cronometro.innerHTML = horaSegundos(segundos);
}, 1000);
});
pausar.addEventListener('click', (e) => {
    cronometro.classList = 'pausado';
    clearInterval(relogio)
});
zerar.addEventListener('click', (e) => {
    cronometro.classList = 'zerado';
    clearInterval(relogio);
    segundos = 0;
    cronometro.innerHTML = '00:00:00'; 
});
