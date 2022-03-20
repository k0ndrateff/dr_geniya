let x = 0;
let g = -0.5;
let a = 0;
let font,
  fontsize = 56;
let song;

function preload() {
   song = loadSound('track.mp3'); 
   bg = loadImage('stroga.jpg');
   if (getParameterByName('skin') == 'alina') {
       skin = loadImage('skin1.png');
   }
    obstacle = loadImage('obst.jpg');
    font = loadFont('LetoTextSansDefect.otf');
}

function setup() {
    textFont(font);
    textSize(fontsize);
    textAlign(CENTER, CENTER);
    createCanvas(window.innerWidth, window.innerHeight); 
    song.loop();
}

let player = {
    x: 0,
    y: 0, 
    score: 0,
};

obstacleX = 0;

function draw() {
    background(bg);
    image(skin, 100, height - (skin.height / 8) - player.y, skin.width / 8, skin.height / 8);

    if (mouseIsPressed && player.y == 0) {
        a = 20;
    }
    player.y += a;
    a += g;
    if (player.y <= 0) {
        player.y = 0;
    }

    image(obstacle, width - obstacleX, height - (obstacle.height / 4), obstacle.width / 4, obstacle.height / 4);
    obstacleX += 10;

    if (obstacleX >= randomWidth() * width) {
        obstacleX = 0;
        player.score += 1;
    }
    if (player.score >= 20 && getParameterByName('first') === '') {
        endGame();
    }

    fill(0);
    text('счет  ' +player.score, width / 2 - 50, 30);

    if (width - obstacleX <= 300 && width - obstacleX >= 100 && player.y < obstacle.height / 4) {
        player.score = 0;
        obstacleX = 0;
    }
}

function randomWidth() {
    return (Math.random() * 7 + 1)
}

function endGame() {
    window.location.href = '/dr_geniya/endgame.html';
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}