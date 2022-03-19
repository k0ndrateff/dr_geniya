let x = 0;
let g = -1;
let a = 0;

function setup() {
    bg = loadImage('stroga.jpg');
    skin = loadImage('skin1.png')
    createCanvas(window.innerWidth, window.innerHeight); 
}

let player = {
    x: 0,
    y: 0, 
    score: 0,
};

function draw() {
    background(bg);
    image(skin, 0, height / 1.8 - player.y, skin.width / 8, skin.height / 8);

    if (mouseIsPressed && player.y == 0) {
        a = 25;
    }
    player.y += a;
    a += g;
    if (player.y <= 0) {
        player.y = 0;
    }
}