const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const ptero = document.getElementById('ptero');
const sunny = document.getElementById('sunny');
const game = document.querySelector('.game');
const lune = document.getElementById('lune');
const body = document.getElementById('body');
const reload = document.getElementById('reload');


dino.addEventListener('touchstart', function (event) {
    jump();
})
document.addEventListener('keydown', function (event) {
    jump();
})
document.addEventListener('click', function (params) {
    cactusMov();
    sunnyMov();
})

function cactusMov() {
    if (cactus.classList != ('cactusMov')) {
        cactus.classList.add('cactusMov')
    } else {
        cactus.classList.remove('cactusMov')
    }
}
function sunnyMov() {
    if (sunny.classList != ('sunnyMov')) {
        sunny.classList.add('sunnyMov')
     } 

     setTimeout(function () {
        sunny.classList.add('none');
        game.style.backgroundImage = "url('./img/bg.png'), url('./img/night.png')";
        lune.classList.remove('none');
    }, 12000) 
}

function jump () {
    if (dino.classList != ('jump')) {
        dino.classList.add('jump')
    }
    setTimeout(function () {
        dino.classList.remove('jump')
    }, 500)
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (cactusLeft < 70 && cactusLeft > 0 && dinoTop >= 270) {
        // alert('GAME OVER!')
        cactus.classList.remove('cactusMov');
        cactus.classList.add('cactusEnd');

        setTimeout(() => {
            game.style.backgroundImage = "url('./img/gameOver.png')";
            game.style.backgroundPosition = 'center';
            game.style.backgroundSize = '400px 400px';
            sunny.classList.add('none');
            lune.classList.add('none');
            ptero.classList.add('none');
            dino.classList.add('none');
            cactus.classList.add('none');
            reload.classList.remove('none');
        }, 500);
    }
}, 10);

setInterval(function pteroChange() {
    if (ptero.classList == ('ptero')) {
        ptero.classList.remove('ptero')
        ptero.classList.add('ptero1')
    } else {
        ptero.classList.remove('ptero1')
        ptero.classList.add('ptero')
    }
}, 150);
 

isAlive == true ? getReload() : false;

function getReload() {
        reload.addEventListener('click', () => location.reload())
}