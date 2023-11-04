const barrasBotao = document.getElementById('logoHamburger');
const navList = document.getElementsByClassName('menu');

function ativarBotao() {
    logo = document.querySelector('#logoHamburger'); 

    if (logo.getAttribute('src') == './img/x.png')
    {
            logo.src = './img/hamburger.png';
            document.querySelector('.nav').classList.remove('expandir');
            document.querySelector('.list-items').style.flexDirection = 'row';
            document.querySelector('#logoHamburger').src = './img/hamburger.png';
            document.querySelector('.menu').style.display = 'none';
            //document.querySelector('.classHamburger').style.alignItems = 'flex-start';
            document.querySelector('.nav').style.justifyContent = 'flex-end';
    }
    else if (logo.getAttribute('src') == './img/hamburger.png')
    {
        document.querySelector('#logoHamburger').src = './img/x.png';
        document.querySelector('.menu').style.display = 'block';
        document.querySelector('.nav').classList.add('expandir');
        document.querySelector('.list-items').style.flexDirection = 'column';
        document.querySelector('.nav').style.flexDirection = 'row';
        document.querySelector('.nav').style.justifyContent = 'center';
        document.querySelector('.classHamburger').style.alignItems = 'flex-start';
    }
}

barrasBotao.addEventListener('click', ativarBotao);

//Ativação das Divs na parte Experiências

//Acadêmica
const viking = document.querySelector('#viking');
const coc = document.querySelector('#coc');
const fatec= document.querySelector('#fatec');
const facens = document.querySelector('#facens');
const ingles = document.querySelector('#ingles');
const itix = document.querySelector('#itix');
const mm = document.querySelector('#mm');

viking.addEventListener('onload',ativarViking());
viking.addEventListener('onload',ativarItix());


function ativarViking(){
    viking.style.display = 'block';
    coc.style.display = 'none';
    fatec.style.display = 'none';
    facens.style.display = 'none';
    ingles.style.display = 'none';
}

function ativarCoc(){
    viking.style.display = 'none';
    coc.style.display = 'block';
    fatec.style.display = 'none';
    facens.style.display = 'none';
    ingles.style.display = 'none';
}

function ativarFatec(){
    viking.style.display = 'none';
    coc.style.display = 'none';
    fatec.style.display = 'block';
    facens.style.display = 'none';
    ingles.style.display = 'none';
}

function ativarFacens(){
    viking.style.display = 'none';
    coc.style.display = 'none';
    fatec.style.display = 'none';
    facens.style.display = 'block';
    ingles.style.display = 'none';
}

function ativarIngles(){
    viking.style.display = 'none';
    coc.style.display = 'none';
    fatec.style.display = 'none';
    facens.style.display = 'none';
    ingles.style.display = 'block';
}

function ativarItix(){
    itix.style.display = 'block';
    mm.style.display = 'none';
}

function ativarmm(){
    itix.style.display = 'none';
    mm.style.display = 'block';
}



//Profissional