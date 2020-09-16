const diasEL = document.getElementById('Dias');
const horasEL = document.getElementById('Horas');
const minutosEL = document.getElementById('Min');
const segundosEL = document.getElementById('Segundos');



const anoNovo = '01 de Janeiro de 2021';

function contador () {
    const anoNovoDate = new Date(anoNovo);
    const currentDate = new Date();

    const totalSegundos =(anoNovoDate - currentDate) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos/ 3600) % 24;
    const minutos = Math.floor(totalSegundos/60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    diasEL.innerHTML = dias;
    horasEL.innerHTML = horas;
    minutosEL.innerHTML = minutos;
    segundosEL.innerHTML = segundos;

}

contador();

setInterval(contador, 1000);