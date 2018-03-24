/*
    Copyright(c) 2014-2015 Weiming Wang
    This file is part of Plumber.
    You can copy and/or distribute this file freely provided mentioning the author's contribution in your distribution document.
*/
Crafty.c("Bullet", {
    init: function () {
        this.addComponent("2D", "DOM", "Collision")
        .bind("EnterFrame", function () {
            if (this.x > Crafty.viewport.width + this.w ||
                this.x < -this.w ||
                this.y < -this.h ||
                this.y > Crafty.viewport.height + this.h) {
                this.destroy();
            }
        });
    }
});
Crafty.c("FireBall", {
    xspeed: 0,
    yspeed: 1,
	damage: 1,
    init: function () {
        this.requires('2D, DOM, fireBallSprite, SpriteAnimation, Bullet')
        .origin("center")
        .bind("EnterFrame", function () {
            this.x += this.xspeed;
            this.y += this.yspeed;
        })
        .reel('fire', 500, [[0, 0], [1, 0], [2, 0], [3, 0]]);
        Crafty.audio.play("fireball", 1, 0.8);
    },
    towards: function (dir) {
        if (dir == direction.right) {
            this.xspeed = 5;
        } else {
            this.xspeed = -5;
        }
        this.animate('fire', -1);
    }
});