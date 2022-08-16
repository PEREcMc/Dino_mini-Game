const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const ptero = document.getElementById('ptero');
const sunny = document.getElementById('sunny');
const game = document.querySelector('.game');
const lune = document.getElementById('lune');
const body = document.getElementById('body');
const reload = document.getElementById('reload');
const play = document.getElementById('play');

playGame();

dino.addEventListener('touchstart', function (event) {
    jump();
})
document.addEventListener('keydown', function (event) {
    jump();
})

function playGame() {
    play.addEventListener('click', function () {
        cactusMov();
        sunnyMov();
        play.classList.add('none');
        ptero.classList.remove('none');

        setInterval(function pteroChange() {
            if (ptero.classList == ('ptero')) {
                ptero.classList.remove('ptero')
                ptero.classList.add('ptero1')
            } else {
                ptero.classList.remove('ptero1')
                ptero.classList.add('ptero')
            }
        }, 150);
    });
}

function cactusMov() {
    if (cactus.classList != ('cactusMov')) {
        cactus.classList.add('cactusMov')
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

    if (cactusLeft < 70 && cactusLeft > 0 && dinoTop >= 268) {
        // alert('GAME OVER!')
        cactus.classList.remove('cactusMov');
        cactus.classList.add('cactusEnd');

        setTimeout(() => {
            game.style.backgroundImage = "url('./img/gameOver.png')";
            game.style.backgroundPosition = '145px 60px';
            game.style.backgroundSize = '315px 315px';
            sunny.classList.add('none');
            lune.classList.add('none');
            ptero.classList.add('none');
            dino.classList.add('none');
            cactus.classList.add('none');
            reload.classList.remove('none');
        }, 500);
    }
}, 10);

isAlive == true ? getReload() : false;

function getReload() {
        reload.addEventListener('click', () => location.reload())
}