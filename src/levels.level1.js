/*
    Copyright(c) 2014-2015 Weiming Wang
    This file is part of Plumber.
    You can copy and/or distribute this file freely provided mentioning the author's contribution in your distribution document.
*/
//Level 1 Scene
Crafty.scene("Level1", function () {
    $('#interface').show();
    Crafty.background("url(" + __gamePath + "assets/img/bg-cloud.png) white center center");
    $('.level').text('Levels: 10');
    createClouds();
    createFloors();
    createCoins();
    createPrincess();

    var player = createPlayer();

    Crafty.bind("EnterFrame", function (frame) {
        var x = Crafty('Player').x;
        var y = Crafty('Player').y;
        var debugWindow = $('.debug').text(x + ':' + y);
    });

    Crafty.bind("GameOver", function (score) {
        Crafty.scene("GameOver");
    });
    Crafty.bind('LevelWin', function () {
        Crafty.audio.play('win', 1);
    });
},
function () {
}
);
function createFloors() {
    var gap = 100;
    var width = (__stageWidth - 2 * gap) / 3 + 40;

    Crafty.e('Floor, Grass').attr({ x: 450, y: 200, w: width });
    Crafty.e('Floor, Grass').attr({ x: 250, y: 250, w: width });
    Crafty.e('Floor, Grass').attr({ x: 450, y: 300, w: width });
    Crafty.e('Floor, Grass').attr({ x: 250, y: 350, w: width });
    Crafty.e('Floor, Grass').attr({ x: 0, y: 400, w: width });
    Crafty.e('Floor, Grass').attr({ x: 250, y: 450, w: width });
    Crafty.e('Floor, Brick').attr({ x: 0, y: 480, w: 180 });
    Crafty.e('Floor, Stone').attr({ x: 185, y: 200 });
    Crafty.e('Treasure').attr({ x: 185, y: 150 });
    var koopa = Crafty.e('Koopa');
    koopa.showAt(0, 50, 25, 25, direction.right);

    Crafty.e('Controller');
}

function createCoins() {
    Crafty.e('Coin').attr({ x: 250, y: 400, width: 20, height: 20 });
    Crafty.e('Coin').attr({ x: 280, y: 400, width: 20, height: 20 });
    Crafty.e('Coin').attr({ x: 310, y: 400, width: 20, height: 20 });
    Crafty.e('Coin').attr({ x: 340, y: 400, width: 20, height: 20 });
    Crafty.e('Coin').attr({ x: 370, y: 400, width: 20, height: 20 });

    Crafty.e('Coin').attr({ x: 250, y: 280, width: 20, height: 20 });
    Crafty.e('Coin').attr({ x: 280, y: 280, width: 20, height: 20 });
    Crafty.e('Coin').attr({ x: 310, y: 280, width: 20, height: 20 });
    Crafty.e('Coin').attr({ x: 340, y: 280, width: 20, height: 20 });
    Crafty.e('Coin').attr({ x: 370, y: 280, width: 20, height: 20 });
}
function createClouds() {
    Crafty.e('Cloud').attr({ x: 350, y: 50, width: 28, height: 20 });
    Crafty.e('Cloud').attr({ x: 50, y: 150, width: 28, height: 20 });
    Crafty.e('Cloud').attr({ x: 220, y: 200, width: 28, height: 20 });
}
function createPlayer() {
    Crafty.e("Player").attr({x:0, y:453});
}

function createPrincess() {
    Crafty.e('Princess').attr({ x: 500, y: 173 });
}