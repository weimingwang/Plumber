/*
    Copyright(c) 2014-2015 Weiming Wang
    This file is part of Plumber.
    You can copy and/or distribute this file freely provided mentioning the author's contribution in your distribution document.
*/
Crafty.c('Treasure', {
    originaly: null,
    init: function () {
        this.requires('2D, DOM, Image, Collision, FreeFall')
            .attr({ w: 20, h: 20 })
            .image(__gamePath + 'assets/img/treasure.png')
            .onHit('Player', function () {
                Crafty.e('Coin').attr({ x: this.x, y: this.y - 5 });
            });
    }
});
Crafty.c('Stone', {
    init: function () {
        this.requires('2D, DOM, Image')
            .attr({ w: 20, h: 20 })
            .image(__gamePath + 'assets/img/stone.png');
    }
});
Crafty.c('Grass', {
    init: function () {
        this.requires('2D, DOM, Image')
            .attr({ h: 16 })
            .image(__gamePath + 'assets/img/grass.png', 'repeat-x');
    }
});
Crafty.c('Brick', {
    init: function () {
        this.requires('2D, DOM, Image')
            .attr({ h: 20 })
            .image(__gamePath + 'assets/img/brick.png', 'repeat-x');
    }
});
Crafty.c('FreeFall', {
    init: function () {
        this.requires('DOM, Collision')
            .onHit('Player', function () {
                if (this.originaly === null) {
                    this.originaly = this.y;
                }
                this.y -= 5;
            })
            .bind('EnterFrame', function () {
                if (this.originaly === null) return;

                if (this.y == this.originaly) {
                    this.originaly = null;
                    return;
                }
                this.y += 1;
            });
    }
});
Crafty.c('Coin', {
    value: 100,
    init: function () {
        this.requires('2D, DOM, SpriteAnimation, Collision, coinSprite')
            .reel('shine', 800, [[0, 0], [1, 0], [2, 0], [3, 0]])
            .attr({ z: -1 })
            .onHit('Player', function () {
                Crafty.audio.play('coin', 1);
                Crafty('Player').trigger('Earn', this.value);
                this.destroy();
            })
            .onHit('Treasure', function () {
                Crafty.audio.play('coin', 1);
                Crafty('Player').trigger('Earn', this.value);
                this.destroy();
            });
        this.animate('shine', -1);
    }
});
Crafty.c('Cloud', {
    init: function () {
        this.requires('2D, DOM, SpriteAnimation, cloudSprite')
        .reel('wink', 2200, [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0]]);
        this.animate('wink', -1);
    }
});
Crafty.c('Controller', {
    init: function () {
        this.requires('2D, DOM');
    },
});